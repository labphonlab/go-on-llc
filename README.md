# goonresearch-web

合同会社語音（Go-on LLC）のWebサイト。**Astro + React islands + Tailwind CSS v4** で構築し、**GitHub Pages**（GitHub Actions 自動デプロイ）で公開します。

**日本語（`/`）と英語（`/en/`）の2言語**で配信します。ページは `src/pages/[...lang]/` の1ファイルが
両言語を生成するため、テンプレートは複製しません。文言は `src/i18n/` と `src/data/catalog.ts` に
`{ ja, en }` の形で置き、`.astro` には生の文言を書きません。

静的ページを主体とし、インタラクティブな部品だけを React の「island」として埋め込む構成です。各ページは実体のあるHTMLとして配信されるため、SEO・初期表示に有利で、ディープリンクで404になる問題も発生しません。

## 開発

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ に静的サイトを生成
npm run preview  # 本番ビルドをローカル確認
```

必要環境：Node.js 20.19+ または 22.12+。

### 2つのデプロイ先

独自ドメイン（`https://goonresearch.jp/`、`base = "/"`）と、GitHub Pages のプロジェクトパス
（`https://labphonlab.github.io/go-on-llc/`、`base = "/go-on-llc/"`）の両方でそのまま動くようにしてあります。
どちらへ出すかは `deploy.yml` が実際のDNSを見て自動で決めるため、手で切り替える必要はありません。

```bash
npm run build                                                          # 独自ドメイン向け（既定）
SITE_URL=https://labphonlab.github.io SITE_BASE=/go-on-llc/ npm run build   # プロジェクトパス向け
```

内部リンクは必ず `src/lib/url.ts` の `u()` を通してください。素の `/about` はプロジェクトパス配信で404になります。

## ディレクトリ構成

```
goonresearch-web/
├── .github/workflows/deploy.yml   # GitHub Pages 自動デプロイ
├── public/
│   ├── CNAME                      # 独自ドメイン（goonresearch.jp）
│   ├── favicon.svg
│   └── og.png                     # OGP画像（scripts/build_og.py で生成）
├── scripts/
│   └── build_og.py                # OGP画像の生成スクリプト
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── islands/
│   │       ├── VowelChart.tsx     # React island（母音四角形）
│   │       └── Spectrogram.tsx    # React island（波形＋スペクトログラム）
│   ├── data/
│   │   └── catalog.ts             # プロダクト・公開データの真実源
│   ├── layouts/
│   │   └── BaseLayout.astro       # head・OGP・JSON-LD・Header/Footer
│   ├── lib/
│   │   └── url.ts                 # base対応の内部リンク u()
│   ├── i18n/
│   │   ├── index.ts               # Lang・t()・localePaths()・UI語彙
│   │   └── pages.ts               # ページ本文の対訳
│   ├── pages/
│   │   ├── [...lang]/             # 1ファイルで日英2言語を生成
│   │   │   ├── index.astro        # ホーム
│   │   │   ├── products.astro     # プロダクト（紹介のみ・配布はしない）
│   │   │   ├── books.astro        # 出版（分野別紹介）
│   │   │   ├── research.astro     # 研究・データ公開
│   │   │   ├── support.astro      # サポート窓口・絞り込み付きFAQ
│   │   │   ├── about.astro        # 会社概要
│   │   │   ├── legal.astro        # 特商法・プライバシー
│   │   │   └── contact/           # お問い合わせ（Formspree）と送信完了
│   │   ├── sitemap.xml.ts         # サイトマップ（動的生成・hreflang付き）
│   │   ├── robots.txt.ts          # robots.txt（動的生成）
│   │   └── 404.astro              # 1枚だけなので日英併記
│   └── styles/
│       └── global.css             # Tailwind + デザイントークン
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

## 自動化

| ワークフロー | 起動 | 内容 |
|---|---|---|
| `ci.yml` | main 以外への push・PR | 2通りの配信先でビルド＋リンク切れ検査 |
| `deploy.yml` | main への push | GitHub Pages へ自動デプロイ。配信先はDNSから自動判定 |
| `monitor.yml` | 毎日 07:00 JST | 公開中サイトの全ページ200確認・外部リンク確認。異常時は Issue を作成し、復旧で自動クローズ。DNS開通を検出したら deploy を起動して独自ドメインへ切り替え |

手元でも同じ検査を回せます。

```bash
npm run build && node scripts/check-links.mjs   # 内部リンク
node scripts/check-links.mjs --external         # 外部リンクの生存確認も
LIVE_URL=https://labphonlab.github.io/go-on-llc/ node scripts/health-check.mjs
```

## 掲載内容の更新

プロダクト一覧・公開データの一覧は `src/data/catalog.ts` に集約しています。ホーム・プロダクト・ツール・サポートの
各ページはこのファイルを読むので、状態が変わったときはここだけを直します。`status` は `released`（今すぐ入手できる）
と `development`（未公開）の2値です。App Store で公開されたら `status` を `released` にし、ストアURLを `links` に足します。

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

現在 `goonresearch.jp` はお名前.comに登録済み（ネームサーバーは `01〜04.dnsv.jp`）ですが、
**Aレコードが未設定のため名前解決しません**。下記のレコードをお名前.com Navi の「DNSレコード設定」で追加してください。
追加後は `deploy.yml` / `monitor.yml` が開通を検出して自動で独自ドメインへ切り替えるため、リポジトリ側の作業は不要です。

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
