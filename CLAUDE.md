# CLAUDE.md — goonresearch-web

このリポジトリで作業するときの前提・規約・タスク。Claude Code はまずこれを読むこと。

## プロジェクト概要

合同会社語音（Go-on LLC）の公式Webサイト。静的ページを主体とし、音声学のインタラクティブ部品だけを React の island として埋め込む。将来はバックエンド（`api.goonresearch.jp` の別サーバ）を `fetch()` で呼ぶ構成に拡張する。

## 技術スタック（バージョンは package-lock.json で固定）

- Astro 7（出力は static。MPA なので各ページが実HTML→SEO良好・ディープリンク404が起きない）
- React 19 + @astrojs/react 6（島のみ。サイト全体をSPA化しない）
- Tailwind CSS v4.3 ＋ `@tailwindcss/vite`
- Node.js 20.19+ / 22.12+

## 重要な決定（破らないこと）

- **Tailwind は `@tailwindcss/vite` プラグイン方式**。古い `@astrojs/tailwind` 統合や `tailwind.config.js` は使わない。設定は `src/styles/global.css` の `@theme` に CSS-first で書く。
- **インタラクティブ化は island に限定**。`.astro` から `.tsx` を読み、`client:visible`（基本）/ `client:load` / `client:idle` で水和。ページ全体を React 化しない。
- **デプロイは GitHub Actions 一本**（`.github/workflows/deploy.yml`：`withastro/action@v6` → `actions/deploy-pages@v4`）。ブランチ公開方式と混在させない（CNAME 消失事故の原因）。Pages の build_type は `workflow`。
- **配信先はDNSから自動判定する**。`deploy.yml` が `goonresearch.jp` の A レコードを見て、GitHub Pages を向いていれば独自ドメイン向け（CNAME 同梱）、向いていなければプロジェクトURL向け（CNAME 除去）でビルドする。名前解決しないまま CNAME を置くとサイトごと到達不能になるため、この判定を人手に委ねない。
- **独自ドメインは2か所で管理**：`public/CNAME` と `astro.config.mjs` の `site`。変更時は両方直す。現在は `goonresearch.jp`。
- **内部リンクは必ず `u()`（`src/lib/url.ts`）を通す**。素の `/about` はプロジェクトパス公開（`/go-on-llc/`）で404になる。`astro.config.mjs` は `SITE_URL` / `SITE_BASE` 環境変数で2通りのデプロイ先に対応する。
- **掲載プロダクト・公開データの真実源は `src/data/catalog.ts`**。index / products / tools / support はここを読む。状態変更は1か所だけ直す。`status` は `released`（今すぐ入手できる）と `development`（未公開）の2値で、開発中のものを「公開中」と書かない。
- **未完成・開発途中のものは公開しない**。まだ無い機能・ツール・刊行物の予告（「今後追加予定」「準備しています」）を書かないだけでなく、開発中の製品そのものをサイトに出さない。`catalog.ts` の `status: "development"` の項目はどのページからもレンダリングしていない（公開待ちの控え）。
- **ソフトウェアはサイトから配布しない**。`catalog.ts` の `tools` は内容の紹介にとどめ、入手先へのリンクを持たせない。利用希望は問い合わせで受ける。書籍も同様に分野別の紹介のみで、販売リンクは置かない。
- **手書きCSSは必ず `@layer base` / `@layer components` に入れる**。レイヤー外に書くと、レイヤー内の Tailwind ユーティリティを常に上書きしてしまい、`<a>` に `text-muted` や `text-paper` を当てても効かなくなる（実際にこれで問い合わせボタンの文字が消えた）。
- UIコピーは日本語。`<html lang="ja">`。アクセシビリティの床（キーボードフォーカス可視・`prefers-reduced-motion` 尊重・スキップリンク）を維持。

## デザイントークン（`src/styles/global.css` の `@theme`）

- 色：`ink #16181d` / `paper #fbfbf8` / `teal #0e7c6b` / `teal-700 #0a5d50` / `amber #d98a2b`（差し色は控えめに）/ `line #e6e5df` / `muted #6a6e76`
- フォント：display=Newsreader、body=Noto Sans JP、**ipa=Gentium Plus（音声表記の署名フォント。`.ipa` クラス）**、mono=system
- 署名要素：社名「語音」＝"speech sound" を音声表記 `/ɡo.oɴ/` で見せる。派手な装飾は増やさない。

## ディレクトリ

```
src/pages/      index / products / books / research / support / about / legal / 404
                contact/index.astro, contact/thanks.astro
                sitemap.xml.ts, robots.txt.ts（動的生成のエンドポイント）
src/layouts/    BaseLayout.astro（head・OGP・JSON-LD・フォント・Header/Footer）
src/components/ Header.astro, Footer.astro, PageHeader.astro（下層ページ共通の導入部）
src/components/islands/  SupportForm.tsx（問い合わせ）
                         VowelChart.tsx, Spectrogram.tsx（現在どこからも読んでいない）
src/data/       catalog.ts（tools / inDevelopment / datasets / bookAreas の真実源）
src/lib/        url.ts（base対応の内部リンク）
scripts/        build_og.py, check-links.mjs, health-check.mjs
public/         CNAME, favicon.svg, og.png
```

## タイポグラフィ

- 本文は 17px（`--text-base`）。和文は欧文より小さく見えるため Tailwind 既定より一段大きい。副次テキストも `text-sm`（15px）までにとどめ、説明文を 14px に落とさない。
- 見出しは `palt` で詰めたうえで `letter-spacing: 0.015em` を戻す。本文にも 0.012em の浅いトラッキング。
- 明朝は Newsreader（欧文）＋ Noto Serif JP（和文）。和文明朝をOSのフォールバック任せにしない。
- 主要ボタンは墨色（`bg-ink` / `text-paper`）。teal・amber は島の中と注記に限る。

## コマンド

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ に静的生成（変更後は必ず通す）
npm run preview

# GitHub Pages のプロジェクトパスで確認する場合（独自ドメイン未開通時）
SITE_URL=https://labphonlab.github.io SITE_BASE=/go-on-llc/ npm run build

python3 scripts/build_og.py   # OGP画像を作り直す（macOSのシステムフォントを使用）
```

## 既存の実コンテンツ（勝手に変えない）

- 会社概要：合同会社語音／〒170-0012 東京都豊島区上池袋4-10-8-709／電話 070-9481-0649／代表社員 石原 健
- お問い合わせ：`src/pages/contact.astro` は Formspree `https://formspree.io/f/mvgeylky` に POST
- 特商法（簡易）・プライバシー（要約）は `src/pages/legal.astro`

## 今後のタスク（着手順の目安）

1. **独自ドメインの開通**（未了・お名前.com へのログインが必要なため人手作業）。`goonresearch.jp` は登録済み・NSは `01〜04.dnsv.jp` だが、Aレコード未設定のため名前解決しない。現状の公開URLは `https://labphonlab.github.io/go-on-llc/`。お名前.com Navi の DNSレコード設定で A 4本（185.199.108〜111.153）と `www` の CNAME（`labphonlab.github.io.`）を追加すれば、あとは自動で切り替わる（deploy.yml が配信先をDNSから判定し、monitor.yml が開通を検出して deploy を起動する）。ワークフローを手で書き換える必要はない。
3. IPA子音チャート（pulmonic）を island 化。
4. フォルマント分析ツール。
5. プロダクトが App Store で公開されたら `src/data/catalog.ts` の `status` を `released` にし、ストアURLを `links` に追加する。
6. 決済・ログインが必要になった段階でバックエンド（`api.goonresearch.jp`）を分離。

## 自動化

- `.github/workflows/ci.yml` — main 以外への push と PR で、2通りの配信先どちらでもビルドが通り、リンクが切れていないことを確かめる。
- `.github/workflows/deploy.yml` — main への push で本番へ自動デプロイ。配信先はDNSから自動判定する。
- `.github/workflows/monitor.yml` — 毎日 07:00 JST に公開中のサイトを外から確認する。全ページの200確認・外部リンクの生存確認を行い、異常があれば `site-monitor` ラベルの Issue を立て、復旧したら自動でクローズする。あわせてDNSの開通を検出したら deploy を起動し、独自ドメインへ自動で切り替える。
- 問い合わせの受付そのものも自動化してある。`SupportForm.tsx` が用件に応じて項目を出し分け、動作環境を `navigator` から自動入力し、件名（`_subject`）を用件と製品から組み立てる。受信箱の時点で仕分けでき、再現手順が揃った状態で届く。サポートページのFAQは絞り込み付きで、`/support#purchase` のような直リンクでその項目が開く。
- 手元で同じ検査を回す:

```bash
npm run build && node scripts/check-links.mjs              # 内部リンク
node scripts/check-links.mjs --external                    # 外部リンクも
LIVE_URL=https://labphonlab.github.io/go-on-llc/ node scripts/health-check.mjs
```

## 作業規約

- 変更後は `npm run build` と `node scripts/check-links.mjs` を通してから完了とする。
- 依存を増やすときは island 内に閉じ込め、トップレベルJSを増やさない。
- 大きめの変更は小さいコミットに分け、コミットメッセージは日本語可。
