import type { L } from "../i18n";

/**
 * サイトに載せる内容の真実源。ページ（index / products / books / research /
 * support）はここを読むので、状態が変わったときはこのファイルだけを直す。
 *
 * 利用者に見える文字列はすべて `L`（日英2言語）で持つ。
 */

export type Status = "released" | "development";

export const STATUS_LABEL: Record<Status, L> = {
  released: { ja: "公開中", en: "Available" },
  development: { ja: "開発中", en: "In development" },
};

export type Product = {
  id: string;
  name: L;
  reading?: L;
  kind: L;
  status: Status;
  summary: L;
  detail: L;
  platforms: L;
  note?: L;
  /** サポートページに出す、この製品固有の案内（共通FAQに書けないもの）。 */
  support?: L[];
  /** 専用サポートページがある場合のパス（App Store のサポートURLに使うもの）。 */
  supportPath?: string;
};

/**
 * 自社で開発したソフトウェア・ツール。
 *
 * **サイトからは配布しない。** 内容の紹介にとどめ、利用のご希望は問い合わせで
 * 受ける方針のため、入手先へのリンクは持たせていない。
 */
export const tools: Product[] = [
  {
    id: "praat-ja",
    name: { ja: "Praat JA", en: "Praat JA" },
    kind: { ja: "デスクトップアプリ", en: "Desktop application" },
    status: "released",
    summary: {
      ja: "音声分析ソフト Praat を日本語UIで操作するフロントエンド。",
      en: "A Japanese-language front end for the speech analysis program Praat.",
    },
    detail: {
      ja: "音声ファイルを読み込み、波形・スペクトログラム・ピッチ・フォルマント・TextGrid 作成といった頻用スクリプトを日本語メニューからワンクリックで実行できます。Praat 本体は同梱せず、初回起動時に公式配布元から取得します。",
      en: "Load a sound file and run the scripts you reach for most — waveform, spectrogram, pitch, formants, TextGrid creation — from a Japanese menu in one click. Praat itself is not bundled; the application fetches it from the official distribution on first launch.",
    },
    platforms: {
      ja: "macOS（DMG）／ Windows（インストーラー）",
      en: "macOS (DMG) / Windows (installer)",
    },
    note: {
      ja: "本ソフトは非公式プロジェクトです。Praat の開発者（Paul Boersma・David Weenink／アムステルダム大学）および公式 Praat プロジェクトとは無関係で、公式の承認・推奨を受けたものではありません。",
      en: "This is an unofficial project. It is not affiliated with, endorsed by, or sponsored by the developers of Praat (Paul Boersma and David Weenink, University of Amsterdam) or the official Praat project.",
    },
    support: [
      {
        ja: "Praat 本体は同梱していません。初回起動時に公式配布元から自動で取得するため、初回のみインターネット接続が必要です。取得に失敗する場合は、通信環境とセキュリティソフトの設定をご確認ください。",
        en: "Praat itself is not bundled. It is fetched automatically from the official distribution on first launch, so an internet connection is required that one time. If the download fails, check your network and any security software.",
      },
      {
        ja: "分析結果そのものに関する不具合は、まず公式版の Praat でも同じ結果になるかをご確認ください。公式版でも再現する場合、原因は Praat 本体側にあり、当社では対応できません。",
        en: "If the analysis results themselves look wrong, first check whether official Praat produces the same output. If it does, the cause lies in Praat itself and is outside what we can address.",
      },
      {
        ja: "macOS で「開発元を検証できません」と表示される場合は、Finder でアプリを右クリックして「開く」を選んでください。",
        en: "On macOS, if you see “cannot verify the developer”, right-click the app in Finder and choose Open.",
      },
    ],
  },
  {
    id: "vowel-chart",
    name: { ja: "母音フォルマントチャート", en: "Vowel Formant Chart" },
    kind: { ja: "Webツール", en: "Web tool" },
    status: "released",
    summary: {
      ja: "自分の母音フォルマントを、参照値と Bark スケール上で重ねて比較する。",
      en: "Plot your own vowel formants against reference values on a Bark scale.",
    },
    detail: {
      ja: "F1・F2 を入力すると、IPA基本母音の台形を背景に、参照話者（灰）と自分の測定値（赤）を同一平面へ描画します。目盛りは Bark 尺度（Traunmüller 1990）で、PNG・CSV に書き出せます。4言語版は英語・韓国語・中国語（普通話）・日本語の参照値を切り替えられます。",
      en: "Enter F1 and F2 and the tool draws reference values (grey) and your own measurements (red) on a single plane, over the IPA cardinal vowel quadrilateral. The axes use the Bark scale (Traunmüller 1990), and results export to PNG or CSV. A four-language edition switches between English, Korean, Mandarin Chinese and Japanese reference values.",
    },
    platforms: { ja: "ブラウザ（インストール不要）", en: "Browser (no installation)" },
    support: [
      {
        ja: "入力値と作図結果はブラウザ内だけで処理され、送信も保存もされません。ページを閉じると消えるため、必要な結果は PNG または CSV に書き出してください。",
        en: "Input values and plots are processed entirely in the browser; nothing is transmitted or stored. They are lost when the page closes, so export anything you need as PNG or CSV.",
      },
      {
        ja: "二重母音（eɪ, aʊ, oʊ）は前半部分（onset）の F1・F2 を入力してください。",
        en: "For diphthongs (eɪ, aʊ, oʊ), enter the F1 and F2 of the onset portion.",
      },
      {
        ja: "参照値はいずれも文献由来の代表値です。話者個人の絶対値との一致ではなく、母音間の相対的な配置の比較にお使いください。",
        en: "Reference values are representative figures taken from the literature. Use them to compare the relative arrangement of vowels, not to match an individual speaker's absolute values.",
      },
    ],
  },
  {
    id: "identification-task",
    name: {
      ja: "音声知覚 識別課題アプリ",
      en: "Speech Identification Task",
    },
    kind: { ja: "Webツール", en: "Web tool" },
    status: "released",
    summary: {
      ja: "識別課題（identification task）の反応と反応時間をブラウザで収集する。",
      en: "Collect responses and reaction times for identification tasks in the browser.",
    },
    detail: {
      ja: "連続体上の刺激に対する二肢強制選択の反応と反応時間を記録し、ステップごとの反応率曲線・平均反応時間をその場で作図、CSV に書き出します。授業でのデモや小規模な実験に使えます。",
      en: "Records two-alternative forced-choice responses and reaction times for stimuli along a continuum, plots response-rate curves and mean reaction times per step on the spot, and exports to CSV. Suitable for classroom demonstrations and small-scale experiments.",
    },
    platforms: { ja: "ブラウザ（インストール不要）", en: "Browser (no installation)" },
    support: [
      {
        ja: "音声の提示は行いません。実験者が別途提示した刺激に対する反応と反応時間だけを記録します。",
        en: "The app does not present audio. It records only responses and reaction times to stimuli that the experimenter presents separately.",
      },
      {
        ja: "反応はブラウザ内に保持されます。終了後に必ず CSV を書き出してください。書き出す前にページを閉じるか再読み込みすると、その回のデータは失われます。",
        en: "Responses are held in the browser. Always export the CSV when a session ends — closing or reloading the page beforehand loses that session's data.",
      },
      {
        ja: "刺激リストと選択肢は設定部分を書き換えて差し替えられます。研究目的での調整はご相談ください。",
        en: "The stimulus list and response options can be swapped out by editing the configuration. Please get in touch about adjustments for research use.",
      },
    ],
  },
];

/**
 * 開発中のプロダクト。
 *
 * サイトには**「開発中で、まだ配布していない」と明記したうえで**出す。伏せるのではなく、
 * 状態を書く。App Store や TestFlight から来た人が、サイトに何も無いと戸惑うため。
 * 実際に配布できるようになった時点で `tools` へ移す。
 */
export const inDevelopment: Product[] = [
  {
    id: "speechlab",
    supportPath: "/speechlab",
    name: { ja: "SpeechLab", en: "SpeechLab" },
    kind: { ja: "iPad アプリ", en: "iPad app" },
    status: "development",
    summary: {
      ja: "学生・語学教師のための音声分析アプリ。",
      en: "A speech analysis app for students and language teachers.",
    },
    detail: {
      ja: "録音・再生、波形、広帯域／狭帯域スペクトログラム、区間ラベリングを iPad 上で完結させます。解析はすべて端末内で実行し、音声データを外部へ送信しません。",
      en: "Recording and playback, waveform, wide- and narrow-band spectrograms, and interval labelling, all on the iPad. Analysis runs entirely on device; no audio leaves it.",
    },
    platforms: { ja: "iPadOS 17.0 以降", en: "iPadOS 17.0 or later" },
    support: [
      {
        ja: "音声の解析は端末内で完結し、録音した音声を当社サーバーへ送信しません。",
        en: "Analysis is completed on device; recorded audio is never sent to our servers.",
      },
    ],
  },
  {
    id: "gotan",
    name: { ja: "語単（英語版）", en: "Gotan (English)" },
    reading: { ja: "ごたん", en: "go-tan" },
    kind: { ja: "iPhone アプリ", en: "iPhone app" },
    status: "development",
    summary: {
      ja: "単語帳ではなく、語彙獲得の順序と復習間隔を最適化するエンジン（英語版）。",
      en: "Not a word list — an engine that optimises the order of vocabulary acquisition and review intervals (English edition).",
    },
    detail: {
      ja: "提示順を目標コーパスへのカバレッジ限界利得で決め、意味想起・綴り産出・聴解・用法といった知識の側面ごとに習熟を追跡します。",
      en: "Presentation order is set by marginal coverage gain over a target corpus, and mastery is tracked separately for each facet of knowledge: meaning recall, spelling production, listening, and usage.",
    },
    platforms: { ja: "iOS", en: "iOS" },
  },
  {
    id: "gotan-ko",
    supportPath: "/gotan-ko",
    name: { ja: "語単 韓国語", en: "Gotan Korean" },
    kind: { ja: "iPhone アプリ", en: "iPhone app" },
    status: "development",
    summary: {
      ja: "漢字語を足場にして韓国語の語彙を積む学習アプリ。",
      en: "A Korean vocabulary app that builds on Sino-Korean words as a foothold.",
    },
    detail: {
      ja: "韓国語の語彙は6〜7割が漢字語で、日本語の音読みと規則的に対応します。この対応を学習コストの見積もりに組み込み、足場になる語・意味がずれる語・日本語にしかない語を区別して提示順を決めます。習熟は意味想起・綴り産出・聴解といった側面ごとに追跡します。",
      en: "Sixty to seventy percent of Korean vocabulary is Sino-Korean and maps regularly onto Japanese readings. The app builds that correspondence into its estimate of learning cost, distinguishing words that give a foothold, words whose meaning has drifted, and words with no Japanese counterpart. Mastery is tracked separately for meaning recall, spelling and listening.",
    },
    platforms: { ja: "iOS 18.0 以降", en: "iOS 18.0 or later" },
  },
  {
    id: "hanbun",
    supportPath: "/hanbun",
    name: { ja: "ハン文", en: "Han-bun" },
    kind: { ja: "iPhone アプリ", en: "iPhone app" },
    status: "development",
    summary: {
      ja: "瞬間作文方式で、韓国語の文を一文ずつ産出する練習アプリ。",
      en: "Sentence-production practice in Korean, one sentence at a time.",
    },
    detail: {
      ja: "TOPIK 1〜4級相当の849文を、文法項目を1つずつ積み上げる順に並べています。日本語文を見て韓国語を作る練習と、韓国語の音声を聞いて意味をとる練習を切り替えられます。",
      en: "849 sentences at TOPIK levels 1–4, ordered so that one grammar point is added at a time. Switch between producing Korean from a Japanese prompt and listening to Korean for meaning.",
    },
    platforms: { ja: "iOS 18.0 以降", en: "iOS 18.0 or later" },
  },
  {
    id: "osaat-en",
    supportPath: "/osaat-en",
    name: { ja: "一文ずつ英語", en: "One Sentence at a Time" },
    kind: { ja: "iPhone アプリ", en: "iPhone app" },
    status: "development",
    summary: {
      ja: "瞬間作文方式で、英語の文を一文ずつ産出する練習アプリ。",
      en: "Sentence-production practice in English, one sentence at a time.",
    },
    detail: {
      ja: "CEFR A1〜B1相当の929文を、文法項目を1つずつ積み上げる順に並べています。単語をタップすると見出し語・品詞・発音記号・訳・用例を引けます。",
      en: "929 sentences at CEFR A1–B1, ordered so that one grammar point is added at a time. Tap a word for its headword, part of speech, phonetic transcription, translation and an example.",
    },
    platforms: { ja: "iOS 18.0 以降", en: "iOS 18.0 or later" },
  },
  {
    id: "korean-pronunciation",
    name: { ja: "韓国語発音診断", en: "Korean Pronunciation Diagnostics" },
    kind: { ja: "iPhone アプリ", en: "iPhone app" },
    status: "development",
    summary: {
      ja: "日本語話者がつまずく韓国語の音韻現象に的を絞った発音診断。",
      en: "Pronunciation diagnostics targeted at the Korean phonological processes Japanese speakers stumble over.",
    },
    detail: {
      ja: "パッチムの脱落、平音・激音・濃音の混同、母音の弁別（ㅓ/ㅗ、ㅡ/ㅜ）、流音化などの連音現象を軸に診断します。",
      en: "Built around coda deletion, confusion among lax, aspirated and tense stops, vowel contrasts (ㅓ/ㅗ, ㅡ/ㅜ), and connected-speech processes such as lateralisation.",
    },
    platforms: { ja: "iOS", en: "iOS" },
  },
];

/** 論文に伴って公開しているデータ・解析コード。 */
export type Dataset = {
  /** リポジトリ名。翻訳しない。 */
  title: string;
  /** 論文題目。原語（英語）のまま出す。 */
  paper: string;
  venue: L;
  summary: L;
  href: string;
};

export const datasets: Dataset[] = [
  {
    title: "csj-pragmatic-intonation",
    paper:
      "Social stratification of pragmatic intonation in spontaneous Japanese: X-JToBI annotations as a sociophonetic resource",
    venue: { ja: "投稿中", en: "Under review" },
    summary: {
      ja: "『日本語話し言葉コーパス』の X-JToBI ラベルに付与されながら十分に活用されてこなかった語用論的イントネーション標識を、話者属性とレジスターから説明した研究。講演単位に集計したデータセットと解析コードを公開しています（コーパス本体は再配布不可のため含みません）。",
      en: "Accounts for pragmatic intonation markers — annotated in the X-JToBI labels of the Corpus of Spontaneous Japanese but largely unexploited — in terms of speaker attributes and register. The talk-level aggregate dataset and analysis code are public; the corpus itself cannot be redistributed and is not included.",
    },
    href: "https://github.com/labphonlab/csj-pragmatic-intonation",
  },
  {
    title: "speaking-rate-f0-excursion",
    paper:
      "Speaking rate compresses F0 excursion, not F0 maximum, in spontaneous speech",
    venue: { ja: "投稿中", en: "Under review" },
    summary: {
      ja: "話速が速くなると F0 の変動幅は 1.4–1.5 半音縮まる一方、F0 最大値はほぼ動かないことを日本語・英語の自発音声で示した研究。再現可能な解析コードと原稿素材を公開しています。",
      en: "Shows in Japanese and English spontaneous speech that faster speech compresses F0 excursion by 1.4–1.5 semitones while the F0 maximum stays essentially flat. Reproducible analysis code and manuscript materials are public.",
    },
    href: "https://github.com/labphonlab/speaking-rate-f0-excursion",
  },
  {
    title: "lexical-boundary-phonology",
    paper:
      "Phonological Neighbourhood Metrics Are Boundary-Sensitive: A Controlled Comparison Framework with Korean as a Case Study",
    venue: { ja: "投稿中", en: "Under review" },
    summary: {
      ja: "近傍密度などの語彙統計量が、語の固有値ではなく「どの語彙範囲で計算したか」に依存することを、韓国語を事例に5条件で比較した方法論研究。比較フレームワークの実装と派生データを公開しています。",
      en: "A methodological study comparing five conditions in Korean to show that neighbourhood density and related lexical statistics are not fixed properties of a word but depend on the lexical boundary over which they are computed. The comparison framework and derived data are public.",
    },
    href: "https://github.com/labphonlab/lexical-boundary-phonology",
  },
  {
    title: "L2_Lexical_Importance",
    paper:
      "Lexical Importance in L2 Spoken English: Frequency, Phonological Vulnerability, and Spoken Word Recognition",
    venue: { ja: "投稿中", en: "Under review" },
    summary: {
      ja: "L2英語の音声語彙認識において、頻度・音素配列確率・語彙競合リスク・音声的不安定性から語の重要度を捉える研究。内容語 2,996 語の派生指標データセットを公開しています（原コーパスは再配布していません）。",
      en: "Characterises lexical importance in L2 spoken word recognition through frequency, phonotactic probability, lexical competition risk and phonetic instability. The derived-measure dataset for 2,996 content words is public; the source corpora are not redistributed.",
    },
    href: "https://github.com/labphonlab/L2_Lexical_Importance",
  },
];

/**
 * 出版している書籍・電子書籍。
 *
 * **KDPの出版通知で刊行を確認したものだけを載せる**（2026-08-18 時点で7点）。
 * 原稿があるだけのもの、刊行準備中のものは載せない——未刊行のものを
 * 「出版しています」と並べると景品表示法の優良誤認にあたりうる。
 * 追加するときは、KDPの「出版されました」通知かストアの掲載を確認してから。
 *
 * 個別の販売リンクは置かない（ソフトウェアと同じ方針）。
 * 書籍はいずれも日本語で刊行しているため、英語版では英訳題を添える。
 */
export type BookFormat = "print" | "ebook";

export const BOOK_FORMAT_LABEL: Record<BookFormat, { ja: string; en: string }> = {
  print: { ja: "紙書籍", en: "Paperback" },
  ebook: { ja: "電子書籍", en: "Ebook" },
};

export type BookArea = {
  id: string;
  area: L;
  summary: L;
  titles: { name: L; format: BookFormat }[];
};

export const bookAreas: BookArea[] = [
  {
    id: "phonetics",
    area: { ja: "音声学・言語学", en: "Phonetics and linguistics" },
    summary: {
      ja: "音声学の体系をたどる概説書と、音響分析の道具を実際に動かせるようになることを目的とした実践書。日本語・英語それぞれの音声体系と、測定を自動化する手順を扱います。",
      en: "Surveys that work through the system of phonetics, and hands-on guides aimed at getting readers actually running the tools of acoustic analysis — the sound systems of Japanese and English, and how to automate measurement.",
    },
    titles: [
      {
        name: { ja: "音声学概説", en: "Introduction to Phonetics" },
        format: "print",
      },
      {
        name: { ja: "英語音声学", en: "English Phonetics" },
        format: "print",
      },
      {
        name: { ja: "英語音声学・音韻論", en: "English Phonetics and Phonology" },
        format: "print",
      },
      {
        name: {
          ja: "音声分析自動化マニュアル",
          en: "A Manual for Automating Speech Analysis",
        },
        format: "ebook",
      },
    ],
  },
  {
    id: "english",
    area: {
      ja: "英語教育・語学教材",
      en: "English language teaching",
    },
    summary: {
      ja: "文法を項目の羅列ではなく構造として説明する概説書と、教壇に立つ人のための教育法。",
      en: "A survey that explains grammar as a structure rather than a list of items, and a methodology for those who teach it.",
    },
    titles: [
      {
        name: { ja: "英文法概論", en: "English Grammar: Structure and System" },
        format: "print",
      },
      {
        name: {
          ja: "英語科教育法",
          en: "Teaching Methodology for English Education",
        },
        format: "print",
      },
    ],
  },
  {
    id: "general",
    area: { ja: "一般書", en: "General readership" },
    summary: {
      ja: "専門外の読者に向けて、脳と心のはたらきを実験の形で読ませる一冊。",
      en: "For readers outside the field: the workings of brain and mind, presented as a series of experiments.",
    },
    titles: [{ name: { ja: "Brain Lab", en: "Brain Lab" }, format: "ebook" }],
  },
];
