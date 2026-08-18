import { useEffect, useMemo, useState } from "react";
import { tools } from "../../data/catalog";

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
};

const TOPICS = [
  { value: "不具合の報告", needsProduct: true, needsRepro: true },
  { value: "使い方の質問", needsProduct: true, needsRepro: false },
  { value: "機能のご要望", needsProduct: true, needsRepro: false },
  { value: "教育機関での利用について", needsProduct: false, needsRepro: false },
  { value: "共同研究・受託のご相談", needsProduct: false, needsRepro: false },
  { value: "取材・講演のご依頼", needsProduct: false, needsRepro: false },
  { value: "その他", needsProduct: false, needsRepro: false },
] as const;

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

export default function SupportForm({ action, next }: Props) {
  const [topic, setTopic] = useState<string>(TOPICS[0].value);
  const [product, setProduct] = useState<string>(tools[0]?.name ?? "");
  const [environment, setEnvironment] = useState("");

  // 自動取得はブラウザ上でしか意味がないので、水和後に一度だけ埋める。
  useEffect(() => setEnvironment(describeEnvironment()), []);

  const spec = useMemo(
    () => TOPICS.find((t) => t.value === topic) ?? TOPICS[0],
    [topic]
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
          <span className={label}>お名前</span>
          <input type="text" name="name" required autoComplete="name" className={field} />
        </label>
        <label className="grid gap-1.5">
          <span className={label}>メールアドレス</span>
          <input type="email" name="email" required autoComplete="email" className={field} />
        </label>
      </div>

      <label className="grid gap-1.5">
        <span className={label}>ご用件</span>
        <select
          name="topic"
          value={topic}
          onChange={(e) => setTopic(e.currentTarget.value)}
          className={field}
        >
          {TOPICS.map((t) => (
            <option key={t.value}>{t.value}</option>
          ))}
        </select>
      </label>

      {spec.needsProduct && (
        <div className="grid gap-5 sm:grid-cols-[2fr_1fr]">
          <label className="grid gap-1.5">
            <span className={label}>対象の製品</span>
            <select
              name="product"
              value={product}
              onChange={(e) => setProduct(e.currentTarget.value)}
              className={field}
            >
              {tools.map((p) => (
                <option key={p.id}>{p.name}</option>
              ))}
              <option>その他・不明</option>
            </select>
          </label>
          <label className="grid gap-1.5">
            <span className={label}>
              バージョン <span className="text-muted">（任意）</span>
            </span>
            <input type="text" name="version" placeholder="例: 1.0.0" className={field} />
          </label>
        </div>
      )}

      {spec.needsRepro && (
        <>
          <label className="grid gap-1.5">
            <span className={label}>どう操作すると起きますか（再現手順）</span>
            <textarea
              name="steps"
              rows={4}
              required
              placeholder={"1. 音声ファイルを開く\n2. スペクトログラムを表示する\n3. …"}
              className={field}
            />
          </label>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-1.5">
              <span className={label}>期待した動作</span>
              <textarea name="expected" rows={3} required className={field} />
            </label>
            <label className="grid gap-1.5">
              <span className={label}>実際に起きたこと</span>
              <textarea name="actual" rows={3} required className={field} />
            </label>
          </div>
        </>
      )}

      <label className="grid gap-1.5">
        <span className={label}>
          {spec.needsRepro ? "補足（エラー表示の文言など）" : "お問い合わせ内容"}
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
            動作環境 <span className="text-muted">（自動入力・編集できます）</span>
          </span>
          <textarea
            name="environment"
            rows={3}
            value={environment}
            onChange={(e) => setEnvironment(e.currentTarget.value)}
            className={`${field} text-xs`}
          />
          <span className={hint}>
            ご覧のブラウザから取得した情報です。不具合が別の端末で起きている場合は、その端末の情報に書き換えてください。
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
          送信
        </button>
        <p className={hint}>送信すると受付完了のページに移動します。</p>
      </div>
    </form>
  );
}
