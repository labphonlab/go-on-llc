import { useEffect, useMemo, useState } from "react";
import { tools } from "../../data/catalog";
import { t, type Lang } from "../../i18n";
import { form as copy } from "../../i18n/pages";

/**
 * 問い合わせフォーム。
 *
 * 目的は「一度のやり取りで着手できる状態にする」こと。
 *  - 用件を選ぶと、その用件に必要な項目だけが出る（不具合報告のときだけ再現手順を訊く）
 *  - 動作環境は navigator から自動で埋める。利用者にOS名を思い出させない
 *  - 件名（_subject）を用件と製品から組み立て、受信箱の時点で仕分けできる状態にする
 *
 * 送信先は Formspree。_next で送信後の遷移先を指定する。
 */

type Props = {
  /** Formspree のエンドポイント。 */
  action: string;
  /** 送信後に遷移する完了ページの絶対URL。 */
  next: string;
  lang: Lang;
};

const field =
  "w-full rounded-md border border-line bg-white px-3 py-2 text-ink transition-colors focus:border-ink focus:outline-none";
const label = "text-sm text-ink";
const hint = "text-xs leading-relaxed text-muted";

/** 端末とブラウザの情報を、利用者が見て意味の分かる1行にまとめる。 */
function describeEnvironment(): string {
  if (typeof navigator === "undefined") return "";
  const parts = [navigator.userAgent];
  if (typeof screen !== "undefined") {
    parts.push(`画面 ${screen.width}×${screen.height}`);
  }
  if (navigator.language) parts.push(`言語 ${navigator.language}`);
  return parts.join(" / ");
}

export default function SupportForm({ action, next, lang }: Props) {
  const topics = copy.topics.map((entry) => ({ ...entry, value: t(entry, lang) }));
  const [topic, setTopic] = useState<string>(topics[0].value);
  const [product, setProduct] = useState<string>(
    tools[0] ? t(tools[0].name, lang) : ""
  );
  const [environment, setEnvironment] = useState("");

  // 自動取得はブラウザ上でしか意味がないので、水和後に一度だけ埋める。
  useEffect(() => setEnvironment(describeEnvironment()), []);

  const spec = useMemo(
    () => topics.find((entry) => entry.value === topic) ?? topics[0],
    [topic, lang]
  );

  // 受信側で仕分けできるよう、件名を用件と製品から組み立てる。
  const subject = spec.needsProduct
    ? `[${topic}] ${product}`
    : `[${topic}]`;

  return (
    <form action={action} method="POST" className="grid gap-6">
      <input type="hidden" name="_subject" value={subject} />
      <input type="hidden" name="_next" value={next} />

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-1.5">
          <span className={label}>{t(copy.name, lang)}</span>
          <input type="text" name="name" required autoComplete="name" className={field} />
        </label>
        <label className="grid gap-1.5">
          <span className={label}>{t(copy.email, lang)}</span>
          <input type="email" name="email" required autoComplete="email" className={field} />
        </label>
      </div>

      <label className="grid gap-1.5">
        <span className={label}>{t(copy.topic, lang)}</span>
        <select
          name="topic"
          value={topic}
          onChange={(e) => setTopic(e.currentTarget.value)}
          className={field}
        >
          {topics.map((entry) => (
            <option key={entry.value}>{entry.value}</option>
          ))}
        </select>
      </label>

      {spec.needsProduct && (
        <div className="grid gap-5 sm:grid-cols-[2fr_1fr]">
          <label className="grid gap-1.5">
            <span className={label}>{t(copy.product, lang)}</span>
            <select
              name="product"
              value={product}
              onChange={(e) => setProduct(e.currentTarget.value)}
              className={field}
            >
              {tools.map((p) => (
                <option key={p.id}>{t(p.name, lang)}</option>
              ))}
              <option>{t(copy.productOther, lang)}</option>
            </select>
          </label>
          <label className="grid gap-1.5">
            <span className={label}>
              {t(copy.version, lang)}{" "}
              <span className="text-muted">{t(copy.optional, lang)}</span>
            </span>
            <input type="text" name="version" placeholder="例: 1.0.0" className={field} />
          </label>
        </div>
      )}

      {spec.needsRepro && (
        <>
          <label className="grid gap-1.5">
            <span className={label}>{t(copy.steps, lang)}</span>
            <textarea
              name="steps"
              rows={4}
              required
              placeholder={t(copy.stepsPlaceholder, lang)}
              className={field}
            />
          </label>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-1.5">
              <span className={label}>{t(copy.expected, lang)}</span>
              <textarea name="expected" rows={3} required className={field} />
            </label>
            <label className="grid gap-1.5">
              <span className={label}>{t(copy.actual, lang)}</span>
              <textarea name="actual" rows={3} required className={field} />
            </label>
          </div>
        </>
      )}

      <label className="grid gap-1.5">
        <span className={label}>
          {spec.needsRepro ? t(copy.messageBug, lang) : t(copy.message, lang)}
        </span>
        <textarea
          name="message"
          rows={spec.needsRepro ? 4 : 8}
          required={!spec.needsRepro}
          className={field}
        />
      </label>

      {spec.needsProduct && (
        <label className="grid gap-1.5">
          <span className={label}>
            {t(copy.environment, lang)}{" "}
            <span className="text-muted">{t(copy.environmentAuto, lang)}</span>
          </span>
          <textarea
            name="environment"
            rows={3}
            value={environment}
            onChange={(e) => setEnvironment(e.currentTarget.value)}
            className={`${field} text-xs`}
          />
          <span className={hint}>
            {t(copy.environmentHint, lang)}
          </span>
        </label>
      )}

      {/* Formspree のハニーポット。人には見えず、ボットだけが埋める。 */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
        <button
          type="submit"
          className="rounded-md bg-ink px-7 py-3 text-sm font-medium text-paper transition-opacity hover:opacity-85"
        >
          {t(copy.submit, lang)}
        </button>
        <p className={hint}>{t(copy.submitNote, lang)}</p>
      </div>
    </form>
  );
}
