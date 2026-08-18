/**
 * Single source of truth for what the company has actually shipped and what
 * it is building. Pages (products / research / support / tools / index) read
 * from here so a status change is edited once.
 *
 * `status` is deliberately conservative:
 *   "released"    … 誰でも今すぐ入手・利用できる
 *   "development" … 未公開。サポート窓口だけ先に用意しておくもの
 */
export type Status = "released" | "development";

export const STATUS_LABEL: Record<Status, string> = {
  released: "公開中",
  development: "開発中",
};

export type Product = {
  id: string;
  name: string;
  reading?: string;
  kind: string;
  status: Status;
  summary: string;
  detail: string;
  platforms: string;
  links?: { label: string; href: string }[];
  note?: string;
  /** サポートページに出す、この製品固有の案内（共通FAQに書けないもの）。 */
  support?: string[];
};

/** 公開済みソフトウェア・ツール */
export const released: Product[] = [
  {
    id: "praat-ja",
    name: "Praat JA",
    kind: "デスクトップアプリ",
    status: "released",
    summary: "音声分析ソフト Praat を日本語UIで操作するフロントエンド。",
    detail:
      "音声ファイルを読み込み、波形・スペクトログラム・ピッチ・フォルマント・TextGrid 作成といった頻用スクリプトを日本語メニューからワンクリックで実行できます。Praat 本体は同梱せず、初回起動時に公式配布元から取得します。",
    platforms: "macOS（DMG）／ Windows（インストーラー）",
    links: [
      { label: "配布ページ", href: "https://labphonlab.github.io/praat_ja/" },
      { label: "ソースコード", href: "https://github.com/labphonlab/praat_ja" },
    ],
    note: "本ソフトは非公式プロジェクトです。Praat の開発者（Paul Boersma・David Weenink／アムステルダム大学）および公式 Praat プロジェクトとは無関係で、公式の承認・推奨を受けたものではありません。",
    support: [
      "Praat 本体は同梱していません。初回起動時に公式配布元から自動で取得するため、初回のみインターネット接続が必要です。取得に失敗する場合は、通信環境とセキュリティソフトの設定をご確認ください。",
      "分析結果そのものに関する不具合は、まず公式版の Praat でも同じ結果になるかをご確認ください。公式版でも再現する場合、原因は Praat 本体側にあり、当社では対応できません。",
      "macOS で「開発元を検証できません」と表示される場合は、Finder でアプリを右クリックして「開く」を選んでください。",
    ],
  },
  {
    id: "vowel-chart",
    name: "母音フォルマントチャート",
    kind: "Webツール",
    status: "released",
    summary: "自分の母音フォルマントを、参照値と Bark スケール上で重ねて比較する。",
    detail:
      "F1・F2 を入力すると、IPA基本母音の台形を背景に、参照話者（灰）と自分の測定値（赤）を同一平面へ描画します。目盛りは Bark 尺度（Traunmüller 1990）で、PNG・CSV に書き出せます。4言語版は英語・韓国語・中国語（普通話）・日本語の参照値を切り替えられます。",
    platforms: "ブラウザ（インストール不要）",
    links: [
      { label: "4言語版を開く", href: "https://labphonlab.github.io/vowel-chart-4lang/" },
      { label: "英語版を開く", href: "https://labphonlab.github.io/vowel-chart/" },
    ],
    support: [
      "入力値と作図結果はブラウザ内だけで処理され、送信も保存もされません。ページを閉じると消えるため、必要な結果は PNG または CSV に書き出してください。",
      "二重母音（eɪ, aʊ, oʊ）は前半部分（onset）の F1・F2 を入力してください。",
      "参照値はいずれも文献由来の代表値です。話者個人の絶対値との一致ではなく、母音間の相対的な配置の比較にお使いください。",
    ],
  },
  {
    id: "identification-task",
    name: "音声知覚 識別課題アプリ",
    kind: "Webツール",
    status: "released",
    summary: "識別課題（identification task）の反応と反応時間をブラウザで収集する。",
    detail:
      "連続体上の刺激に対する二肢強制選択の反応と反応時間を記録し、ステップごとの反応率曲線・平均反応時間をその場で作図、CSV に書き出します。授業でのデモや小規模な実験に使えます。",
    platforms: "ブラウザ（インストール不要）",
    links: [
      { label: "アプリを開く", href: "https://labphonlab.github.io/go-on-lab/" },
      { label: "ソースコード", href: "https://github.com/labphonlab/go-on-lab" },
    ],
    support: [
      "音声の提示は行いません。実験者が別途提示した刺激に対する反応と反応時間だけを記録します。",
      "反応はブラウザ内に保持されます。終了後に必ず CSV を書き出してください。書き出す前にページを閉じるか再読み込みすると、その回のデータは失われます。",
      "刺激リストと選択肢は HTML 内の設定部分を書き換えて差し替えられます。改変して研究に用いていただいてかまいません。",
    ],
  },
];

/**
 * 開発中のプロダクト。
 *
 * **サイトには出さない。** 未完成・開発途中のものは積極的に公開しない方針のため、
 * どのページからもレンダリングしていない。ここは公開待ちの控えとして持っておき、
 * 実際に公開できるようになった時点で `released` へ移し、`links` に入手先を足す。
 */
export const inDevelopment: Product[] = [
  {
    id: "speechlab",
    name: "SpeechLab",
    kind: "iPad／iPhone アプリ",
    status: "development",
    summary: "学生・語学教師のための音声分析アプリ。",
    detail:
      "録音・再生、波形、広帯域／狭帯域スペクトログラム、区間ラベリングを iPad 上で完結させます。解析はすべて端末内で実行し、音声データを外部へ送信しません。有料機能として、単語・文レベルの自動セグメンテーションと自動ラベリングを予定しています。",
    platforms: "iPadOS / iOS",
    support: [
      "音声の解析は端末内で完結し、録音した音声を当社サーバーへ送信しません。",
    ],
  },
  {
    id: "gotan",
    name: "語単",
    reading: "ごたん",
    kind: "iPhone アプリ",
    status: "development",
    summary: "単語帳ではなく、語彙獲得の順序と復習間隔を最適化するエンジン。",
    detail:
      "収録語数ではなく「どの語を、どの側面から、いつ復習するか」を商品にします。提示順は目標コーパスへのカバレッジ限界利得で決め、意味想起・綴り産出・聴解・用法といった知識の側面ごとに習熟を追跡します。日本語話者向けに、カタカナ語の干渉や一対多訳を専用のカード型で扱います。韓国語版も同じエンジンで開発しています。",
    platforms: "iOS",
  },
  {
    id: "sakubun",
    name: "ハン文／一文ずつ英語",
    kind: "iPhone アプリ",
    status: "development",
    summary: "瞬間作文方式で、韓国語・英語の文を一文ずつ産出する練習アプリ。",
    detail:
      "文法項目を1つずつ積み上げる累積シラバスに沿って、日→韓（日→英）の作文練習と、韓→日（英→日）の聞き取り練習を切り替えられます。単語をタップすると見出し語・品詞・発音記号・訳・用例を引けます。例文はすべて自社で新規作成したものです。",
    platforms: "iOS",
  },
  {
    id: "korean-pronunciation",
    name: "韓国語発音診断",
    kind: "iPhone アプリ",
    status: "development",
    summary: "日本語話者がつまずく韓国語の音韻現象に的を絞った発音診断。",
    detail:
      "パッチムの脱落、平音・激音・濃音の混同、母音の弁別（ㅓ/ㅗ、ㅡ/ㅜ）、流音化などの連音現象を軸に、単語・短文レベルの発音を診断する設計で開発しています。",
    platforms: "iOS",
  },
];

/** 論文に伴って公開しているデータ・解析コード */
export type Dataset = {
  title: string;
  paper: string;
  venue: string;
  summary: string;
  href: string;
};

export const datasets: Dataset[] = [
  {
    title: "csj-pragmatic-intonation",
    paper:
      "Social stratification of pragmatic intonation in spontaneous Japanese: X-JToBI annotations as a sociophonetic resource",
    venue: "投稿中",
    summary:
      "『日本語話し言葉コーパス』の X-JToBI ラベルに付与されながら十分に活用されてこなかった語用論的イントネーション標識を、話者属性とレジスターから説明した研究。講演単位に集計したデータセットと解析コードを公開しています（コーパス本体は再配布不可のため含みません）。",
    href: "https://github.com/labphonlab/csj-pragmatic-intonation",
  },
  {
    title: "speaking-rate-f0-excursion",
    paper:
      "Speaking rate compresses F0 excursion, not F0 maximum, in spontaneous speech",
    venue: "投稿中",
    summary:
      "話速が速くなると F0 の変動幅は 1.4–1.5 半音縮まる一方、F0 最大値はほぼ動かないことを日本語・英語の自発音声で示した研究。再現可能な解析コードと原稿素材を公開しています。",
    href: "https://github.com/labphonlab/speaking-rate-f0-excursion",
  },
  {
    title: "lexical-boundary-phonology",
    paper:
      "Phonological Neighbourhood Metrics Are Boundary-Sensitive: A Controlled Comparison Framework with Korean as a Case Study",
    venue: "投稿中",
    summary:
      "近傍密度などの語彙統計量が、語の固有値ではなく「どの語彙範囲で計算したか」に依存することを、韓国語を事例に5条件で比較した方法論研究。比較フレームワークの実装と派生データを公開しています。",
    href: "https://github.com/labphonlab/lexical-boundary-phonology",
  },
  {
    title: "L2_Lexical_Importance",
    paper:
      "Lexical Importance in L2 Spoken English: Frequency, Phonological Vulnerability, and Spoken Word Recognition",
    venue: "投稿中",
    summary:
      "L2英語の音声語彙認識において、頻度・音素配列確率・語彙競合リスク・音声的不安定性から語の重要度を捉える研究。内容語 2,996 語の派生指標データセットを公開しています（原コーパスは再配布していません）。",
    href: "https://github.com/labphonlab/L2_Lexical_Importance",
  },
];
