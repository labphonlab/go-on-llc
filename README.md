# goonresearch-web

合同会社語音（Go-on LLC）のWebサイト。**Astro + React islands + Tailwind CSS v4** で構築し、**GitHub Pages**（GitHub Actions 自動デプロイ）で公開します。

静的ページを主体とし、インタラクティブな音声学ツールだけを React の「island」として埋め込む構成です。各ページは実体のあるHTMLとして配信されるため、SEO・初期表示に有利で、ディープリンクで404になる問題も発生しません。

## 開発

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ に静的サイトを生成
npm run preview  # 本番ビルドをローカル確認
```

必要環境：Node.js 20.19+ または 22.12+。

## ディレクトリ構成

```
goonresearch-web/
├── .github/workflows/deploy.yml   # GitHub Pages 自動デプロイ
├── public/
│   ├── CNAME                      # 独自ドメイン（goonresearch.jp）
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── islands/
│   │       └── VowelChart.tsx     # React island（母音四角形デモ）
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro            # ホーム
│   │   ├── about.astro            # 会社概要
│   │   ├── tools.astro            # ツール（islandを表示）
│   │   ├── contact.astro          # お問い合わせ（Formspree）
│   │   ├── legal.astro            # 特商法・プライバシー
│   │   └── 404.astro
│   └── styles/
│       └── global.css             # Tailwind + デザイントークン
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

## React island の使い方

`.tsx` コンポーネントを `.astro` から読み込み、`client:*` ディレクティブで水和（hydrate）します。

```astro
---
import VowelChart from "../components/islands/VowelChart.tsx";
---
<VowelChart client:visible />   <!-- 画面に入ったら水和 -->
```

主なディレクティブ：`client:load`（即時）／`client:visible`（表示時）／`client:idle`（待機後）。

## デプロイ手順（初回）

1. GitHub に新規リポジトリ `goonresearch-web` を作成し、このプロジェクトを push。
2. リポジトリの **Settings → Pages → Build and deployment → Source** を **GitHub Actions** に設定。
3. `main` に push すると `.github/workflows/deploy.yml` が自動でビルド・公開します。

## 独自ドメイン設定（goonresearch.jp）

ドメインを変更する場合は **(a) `public/CNAME`** と **(b) `astro.config.mjs` の `site`** の両方を更新してください。

**DNS（ドメイン事業者側）**

```
# apex（goonresearch.jp）→ A レコード4本
A  @  185.199.108.153
A  @  185.199.109.153
A  @  185.199.110.153
A  @  185.199.111.153

# www サブドメイン → CNAME
CNAME  www  <ユーザー名 or 組織名>.github.io.
```

IPv6 も使う場合は AAAA レコード（`2606:50c0:8000::153`〜`8003::153`）を追加。

**GitHub 側**

- Settings → Pages → **Custom domain** に `goonresearch.jp` を入力して Save。
- **乗っ取り対策**：Settings → Pages の **Verify domain**（TXTレコード）を済ませておくこと。
- apex と www の両方の DNS を通してから、**Enforce HTTPS** にチェック（証明書が両ドメインをカバーするように）。
- DNS の反映には最大24時間かかることがあります。

> 注意：このリポジトリは Actions デプロイ方式に統一しています。ブランチ公開方式と混在させると CNAME が消える事故が起きるため、片方に統一してください。

## お問い合わせフォーム

`src/pages/contact.astro` は Formspree（`https://formspree.io/f/mvgeylky`）に POST します。エンドポイントを変える場合は `action` 属性を編集してください。

## 今後の拡張

- IPA子音チャート、スペクトログラム表示、WaveSurfer.js 波形ビューア、フォルマント分析を `src/components/islands/` に追加。
- バックエンドが必要になったら `api.goonresearch.jp`（別サーバ）を立て、フロントから `fetch()` で呼び出す構成に拡張できます。
