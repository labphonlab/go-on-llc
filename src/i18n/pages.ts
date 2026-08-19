import type { L } from "./index";

/** ページ本文の対訳。.astro 側はここから引くだけにして、記事を書く場所を1つにする。 */

export const home = {
  eyebrow: "go-on llc",
  reading: { ja: "ごおん", en: "go-on" },
  gloss: { ja: "speech sound", en: "speech sound" },
  lead: {
    ja: "音声・言語・教育を、研究と実践でつなぐ。",
    en: "Connecting speech, language and education\nthrough research and practice.",
  },
  intro: {
    ja: "合同会社語音は、音声・言語・教育・情報技術を軸に、研究・教育・コンテンツ制作を行う法人です。研究で得た知見をソフトウェアと教材のかたちにし、その土台となったデータと解析コードを公開しています。",
    en: "Go-on LLC works across speech, language, education and technology, combining research, teaching and the making of content. What we learn in research takes shape as software and teaching materials, and the data and analysis code underneath it are published.",
  },
  ctaProducts: { ja: "プロダクトを見る", en: "See our software" },
  ctaServices: { ja: "事業内容", en: "What we do" },
  ctaContact: { ja: "お問い合わせ", en: "Contact" },
  productsHeading: { ja: "プロダクト", en: "Software" },
  productsAll: { ja: "すべて見る", en: "See all" },
  productsNote: {
    ja: "いずれもサイトからの一般配布は行っていません。ご利用のご希望はお問い合わせください。",
    en: "None of these are distributed publicly from this site. Please get in touch if you would like to use one.",
  },
  servicesHeading: { ja: "事業内容", en: "What we do" },
  services: [
    {
      t: {
        ja: "ソフトウェアの企画・制作・販売",
        en: "Software: planning, development and sale",
      },
      d: {
        ja: "音声・映像を扱うソフトウェアおよびWebアプリケーションの企画から制作、販売まで。",
        en: "Software and web applications that work with audio and video, from planning through development to sale.",
      },
      href: "/products",
      cta: { ja: "プロダクトを見る", en: "See our software" },
    },
    {
      t: { ja: "学術出版物の発行", en: "Academic publishing" },
      d: {
        ja: "音声学・言語学・言語教育を中心とした書籍・電子書籍の編集と発行。",
        en: "Editing and publishing books and ebooks, chiefly in phonetics, linguistics and language education.",
      },
      href: "/books",
      cta: { ja: "出版を見る", en: "See our publishing" },
    },
    {
      t: { ja: "オンライン教育・研修", en: "Online education and training" },
      d: {
        ja: "語学・発音・データ分析などのオンライン講座および研修の企画・運営。",
        en: "Planning and running online courses and training in languages, pronunciation and data analysis.",
      },
      href: "/contact",
      cta: { ja: "相談する", en: "Talk to us" },
    },
    {
      t: {
        ja: "研究・調査・コンサルティング",
        en: "Research, investigation and consulting",
      },
      d: {
        ja: "情報技術と音響分析を活用した研究・調査、および専門的コンサルティング。",
        en: "Research and investigation drawing on information technology and acoustic analysis, and specialist consulting.",
      },
      href: "/research",
      cta: { ja: "研究を見る", en: "See our research" },
    },
  ],
  researchHeading: { ja: "研究とデータ公開", en: "Research and open data" },
  researchBody: {
    ja: "自発音声コーパスを用いた韻律・語彙・第二言語音声の研究を行い、論文に伴う集計データと解析コードをリポジトリで公開しています。プロダクトの設計はここでの知見を土台にしています。",
    en: "We study prosody, the lexicon and second-language speech using spontaneous speech corpora, and publish the aggregate data and analysis code accompanying each paper. What we build rests on what these studies show.",
  },
  researchCta: { ja: "研究を見る", en: "See our research" },
  supportHeading: { ja: "サポート", en: "Support" },
  supportBody: {
    ja: "当社プロダクトについてのご質問、不具合のご報告、ご要望をお受けします。製品ごとの注意点、動作環境、データの取り扱いもサポートページにまとめています。",
    en: "We take questions, bug reports and requests about our software. The support page also covers product-specific notes, system requirements and how data is handled.",
  },
  supportCta: { ja: "サポートを見る", en: "Go to support" },
} as const;

export const products = {
  eyebrow: "products",
  title: { ja: "プロダクト", en: "Software" },
  lead: {
    ja: "音声を扱うソフトウェアを自社で開発しています。研究・教育の現場で必要になった道具を、そのつどつくってきたものです。いずれもサイトからの一般配布は行っていません。ご利用をご希望の場合はお問い合わせください。",
    en: "We develop our own software for working with speech — tools built as they became necessary in research and teaching. None of them are distributed publicly from this site; please get in touch if you would like to use one.",
  },
  requirements: { ja: "動作環境", en: "Requirements" },
  accessHeading: { ja: "ご利用について", en: "Access" },
  accessBody: {
    ja: "いずれのソフトウェアもサイトからの一般配布は行っていません。授業・研究でのご利用、機関での導入、仕様に合わせた調整のご相談は、対象のソフトウェア名を添えてお問い合わせください。動作環境や制約についてのご質問にもお答えします。",
    en: "None of this software is distributed publicly from this site. For classroom or research use, institutional deployment, or adjustments to fit your requirements, write to us naming the software you have in mind. We are also happy to answer questions about requirements and limitations.",
  },
} as const;

export const books = {
  eyebrow: "books",
  title: { ja: "出版", en: "Publishing" },
  lead: {
    ja: "音声学・言語学を中心に、書籍と電子書籍を編集・発行しています。研究の現場で使う手順書から、専門外の読者に向けた一般書までを扱います。",
    en: "We edit and publish books and ebooks, chiefly in phonetics and linguistics — from working manuals for the research bench to books written for readers outside the field.",
  },
  titlesLabel: { ja: "刊行書目", en: "Titles in print" },
  languageNote: {
    ja: "",
    en: "All titles are published in Japanese; English renderings are given for reference.",
  },
  ctaHeading: { ja: "お求め・ご相談", en: "Purchasing and enquiries" },
  ctaBody: {
    ja: "書籍の入手方法、授業での教科書採用、電子書籍版の提供形式、執筆・監修のご依頼については、書名を添えてお問い合わせください。刊行予定の書目についてのご質問にもお答えします。",
    en: "For how to obtain a book, adoption as a course text, ebook formats, or commissions to write or supervise, write to us naming the title. We are also happy to answer questions about forthcoming books.",
  },
} as const;

export const research = {
  eyebrow: "research",
  title: { ja: "研究", en: "Research" },
  lead: {
    ja: "音声学・音韻論を中心に、自発音声コーパスを用いた実証研究を行っています。プロダクトの設計はここでの知見を土台にしており、逆に研究の道具立てはプロダクトとして公開されます。",
    en: "We carry out empirical work in phonetics and phonology using spontaneous speech corpora. What we build rests on what these studies show, and the instruments the studies require become software in turn.",
  },
  areasHeading: { ja: "研究領域", en: "Areas of work" },
  areas: [
    {
      t: { ja: "自発音声の韻律", en: "Prosody in spontaneous speech" },
      d: {
        ja: "話速とF0の関係、F0ピークの時間配置、語用論的イントネーション標識の社会的分布を、大規模な自発音声コーパスで検証しています。",
        en: "The relation between speaking rate and F0, the temporal alignment of F0 peaks, and the social distribution of pragmatic intonation markers, tested on large spontaneous speech corpora.",
      },
    },
    {
      t: {
        ja: "語彙と音韻のインターフェース",
        en: "The lexicon–phonology interface",
      },
      d: {
        ja: "近傍密度・機能負担量・音素配列確率といった語彙統計量が、語の音声実現とどう結びつくかを扱います。指標そのものの妥当性検証も含みます。",
        en: "How lexical statistics — neighbourhood density, functional load, phonotactic probability — connect to the phonetic realisation of words, including validation of the measures themselves.",
      },
    },
    {
      t: { ja: "第二言語の音声", en: "Second-language speech" },
      d: {
        ja: "学習者コーパスを用いた時間的流暢性の分析、母語背景による音響特徴の弁別、日本語話者にとっての韓国語・英語の発音上の優先順位を扱います。",
        en: "Temporal fluency in learner corpora, discrimination of acoustic features by first-language background, and pronunciation priorities in Korean and English for Japanese speakers.",
      },
    },
    {
      t: { ja: "音声処理の方法論", en: "Methodology in speech processing" },
      d: {
        ja: "強制アライメントの精度検証、コーパス横断で再現可能な測定パイプライン、測定失敗を欠測として扱う設計など、分析基盤そのものを研究対象にしています。",
        en: "The analytical infrastructure itself as an object of study: validating forced-alignment accuracy, building measurement pipelines reproducible across corpora, and treating measurement failure as informative missingness.",
      },
    },
  ],
  dataHeading: {
    ja: "データ・解析コードの公開",
    en: "Open data and analysis code",
  },
  dataBody: {
    ja: "論文の再現性を担保するため、集計済みデータと解析コードを公開しています。元コーパス（『日本語話し言葉コーパス』『Buckeye Corpus』等）はライセンス上再配布できないため含まれません。各リポジトリの README に入手先を記載しています。",
    en: "To keep the papers reproducible we publish aggregate data and analysis code. Source corpora (the Corpus of Spontaneous Japanese, the Buckeye Corpus and others) cannot be redistributed under their licences and are not included; each repository's README states where to obtain them.",
  },
  repoCta: { ja: "リポジトリを見る", en: "View the repository" },
  moreRepos: {
    ja: "その他のリポジトリは GitHub にまとめています。",
    en: "Other repositories are collected on GitHub.",
  },
  collabHeading: { ja: "共同研究・受託", en: "Collaboration and commissioned work" },
  collabBody: {
    ja: "音響分析を伴う調査、コーパス構築・アノテーション設計、統計モデリングの設計と実装についてご相談を承ります。",
    en: "We take enquiries about studies involving acoustic analysis, corpus construction and annotation design, and the design and implementation of statistical models.",
  },
} as const;

export const support = {
  eyebrow: "support",
  title: { ja: "サポート", en: "Support" },
  lead: {
    ja: "当社の製品についてのご質問、不具合のご報告、ご要望をお受けします。個人・法人を問わずご利用いただけます。対応言語は日本語および英語です。",
    en: "We take questions, bug reports and requests about our products, from individuals and organisations alike. We reply in Japanese or English.",
  },
  deskHeading: { ja: "お問い合わせ窓口", en: "Where to write" },
  deskBody: {
    ja: "フォームはご用件に応じて必要な項目だけを表示し、動作環境は自動で取得します。不具合のご報告では次の4点をうかがいます。",
    en: "The form shows only the fields your enquiry needs, and fills in your system details automatically. For a bug report we ask for four things.",
  },
  reportItems: [
    { ja: "製品名とバージョン", en: "Product name and version" },
    {
      ja: "OSと機種（フォームでは自動取得します）",
      en: "Operating system and device (filled in automatically by the form)",
    },
    {
      ja: "どう操作すると起きるか（再現手順）",
      en: "What you did to make it happen (steps to reproduce)",
    },
    {
      ja: "期待した動作と、実際に起きたこと",
      en: "What you expected, and what actually happened",
    },
  ],
  productsHeading: { ja: "製品ごとの案内", en: "Notes by product" },
  productsBody: {
    ja: "共通のご質問は下の「よくあるご質問」に、各製品に固有の注意点はここにまとめています。",
    en: "General questions are answered below; notes specific to a single product are collected here.",
  },
  requirements: { ja: "動作環境", en: "Requirements" },
  faqHeading: { ja: "よくあるご質問", en: "Frequently asked questions" },
  faqFilter: {
    ja: "キーワードで絞り込む（例: 返金、データ、授業）",
    en: "Filter by keyword (e.g. refund, data, teaching)",
  },
  faqFilterLabel: { ja: "質問を絞り込む", en: "Filter the questions" },
  faqCount: { ja: "件の質問が該当しました。", en: " matching question(s)." },
  faqEmpty: {
    ja: "該当する質問がありませんでした。お問い合わせフォームからお送りください。",
    en: "No question matched. Please write to us using the contact form.",
  },
  faqFooter: {
    ja: "ここで解決しない場合はお問い合わせください。各製品の内容はプロダクトページにあります。",
    en: "If this does not resolve it, please write to us. Details of each product are on the software page.",
  },
  faq: [
    {
      id: "reply",
      q: { ja: "返信までどのくらいかかりますか。", en: "How long until you reply?" },
      a: {
        ja: "内容を確認のうえ、順次ご返信しています。再現手順が添えられているご報告から先に着手できるため、フォームの項目を埋めていただくほど早く進みます。数日経っても届かない場合は、迷惑メールフォルダをご確認のうえ、お手数ですがもう一度お送りください。",
        en: "We read everything and reply in turn. Reports that come with steps to reproduce are the ones we can start on immediately, so the more of the form you fill in, the faster it moves. If nothing has arrived after several days, check your spam folder and please send it again.",
      },
    },
    {
      id: "language",
      q: {
        ja: "日本語以外でも問い合わせできますか。",
        en: "Can I write in a language other than Japanese?",
      },
      a: {
        ja: "日本語と英語でお受けしています。どちらでも同じ窓口をご利用ください。",
        en: "We handle Japanese and English. Use the same form for either.",
      },
    },
    {
      id: "privacy",
      q: {
        ja: "録音した音声や入力したデータは外部に送信されますか。",
        en: "Is my recorded audio or entered data sent anywhere?",
      },
      a: {
        ja: "送信しません。音声分析アプリの解析は端末内で完結し、Webツールの入力値・読み込んだ音声ファイル・測定結果はブラウザ内だけで処理されます。当社は閲覧者を追跡するCookieやアクセス解析ツールも使用していません。",
        en: "No. Analysis in our speech applications completes on your device, and in the web tools the values you enter, the audio you load and the results are processed entirely in the browser. We also use no tracking cookies and no analytics.",
      },
      link: { label: { ja: "プライバシーポリシーを見る", en: "Read the privacy policy" }, href: "/privacy" },
    },
    {
      id: "data-loss",
      q: {
        ja: "作業中のデータが消えてしまいました。",
        en: "I lost the data I was working on.",
      },
      a: {
        ja: "Webツールは結果をブラウザ内にしか保持しません。ページを閉じる・再読み込みする・別のページへ移動すると、その回のデータは失われます。復元はできないため、測定や試行が終わった時点で PNG・CSV に書き出してください。当社側にはデータが残らないため、こちらから復元することもできません。",
        en: "The web tools hold results only in the browser. Closing the page, reloading it or navigating away loses that session. Nothing can be recovered, so export to PNG or CSV as soon as a set of measurements or trials is finished. No data reaches us either, so we cannot restore it for you.",
      },
    },
    {
      id: "purchase",
      q: {
        ja: "購入や返金の手続きはどこで行いますか。",
        en: "Where do I handle a purchase or refund?",
      },
      a: {
        ja: "App Store で販売する製品およびアプリ内課金の決済・返金は Apple が管理しています。返金のご依頼は Apple のサポート（reportaproblem.apple.com）へお申し出ください。購入内容についてのご質問は当社でもお答えします。",
        en: "Payment and refunds for anything sold through the App Store, including in-app purchases, are managed by Apple. Request refunds through Apple support at reportaproblem.apple.com. We are happy to answer questions about what a purchase includes.",
      },
    },
    {
      id: "education",
      q: {
        ja: "授業や研究で使ってもよいですか。",
        en: "May I use this in teaching or research?",
      },
      a: {
        ja: "授業・研究でのご利用を歓迎します。ソフトウェアはサイトからの一般配布を行っていないため、ご希望の対象と用途を添えてお問い合わせください。機関での導入、学内配布、仕様に合わせた調整もご相談いただけます。",
        en: "We welcome it. Since the software is not distributed publicly from this site, write to us naming what you want and how you intend to use it. Institutional deployment, distribution within a school, and adjustments to fit your requirements are all open to discussion.",
      },
    },
    {
      id: "customize",
      q: {
        ja: "研究用に仕様を変えて使いたいのですが。",
        en: "Can the software be adapted for my study?",
      },
      a: {
        ja: "刺激リストや選択肢の差し替えなど、研究目的での調整はご相談ください。用途をうかがったうえで、対応できる範囲をお伝えします。ご自身で改変されたものについては、当社のサポート対象外となる点をご了承ください。",
        en: "Adjustments for research — swapping the stimulus list or response options, for instance — are open to discussion. Tell us the intended use and we will say what we can do. Note that versions you modify yourself fall outside our support.",
      },
    },
    {
      id: "request",
      q: {
        ja: "要望や改善の提案を送ってもよいですか。",
        en: "May I send a request or a suggestion?",
      },
      a: {
        ja: "歓迎します。実際の使い方に沿ったご要望は、次に何をつくるかの判断に直接反映しています。フォームの「機能のご要望」からお送りください。",
        en: "Please do. Requests grounded in how you actually work feed directly into what we build next. Use the “Feature request” option on the form.",
      },
    },
  ],
} as const;

export const about = {
  eyebrow: "about",
  title: { ja: "会社概要", en: "About" },
  lead: {
    ja: "音声・言語・教育・情報技術を軸に、研究・教育・コンテンツ制作を行っています。",
    en: "We work across speech, language, education and technology, combining research, teaching and the making of content.",
  },
  rows: {
    company: { ja: "会社名", en: "Company" },
    address: { ja: "所在地", en: "Address" },
    phone: { ja: "電話番号", en: "Telephone" },
    representative: { ja: "代表社員", en: "Representative" },
    business: { ja: "事業内容", en: "Activities" },
    contact: { ja: "お問い合わせ", en: "Contact" },
    email: { ja: "メールアドレス", en: "Email" },
  },
  values: {
    company: { ja: "合同会社語音（Go-on LLC）", en: "Go-on LLC (合同会社語音)" },
    address: {
      ja: "〒170-0012 東京都豊島区上池袋4-10-8-709",
      en: "4-10-8-709 Kamiikebukuro, Toshima-ku, Tokyo 170-0012, Japan",
    },
    phone: { ja: "070-9481-0649", en: "+81 70-9481-0649" },
    representative: { ja: "石原 健", en: "Takeshi Ishihara" },
    business: {
      ja: "ソフトウェアの企画・制作・販売／学術出版物の発行／オンライン教育・研修／研究・調査・コンサルティング",
      en: "Software planning, development and sale / academic publishing / online education and training / research, investigation and consulting",
    },
    contact: { ja: "本サイトのフォーム", en: "The form on this site" },
    email: { ja: "info@goonresearch.jp", en: "info@goonresearch.jp" },
  },
  nameHeading: { ja: "社名について", en: "On the name" },
  nameBody: {
    ja: "「語音」は、言語を成り立たせている音そのもの——speech sound——を指します。読みは /ɡo.oɴ/。研究の対象と、つくるものの対象が同じ言葉で言い表せることを社名にしました。",
    en: "語音 (go-on, /ɡo.oɴ/) means speech sound: the sounds out of which language is made. We took it as our name because the same word names both what we study and what we build.",
  },
  workHeading: { ja: "何をしているか", en: "What we do" },
  workBody1: {
    ja: "自発音声コーパスを用いた音声学・音韻論の実証研究を行い、そこで必要になった道具——音声分析の操作環境、母音の可視化、知覚実験の実施環境——を、そのまま誰でも使えるかたちにしています。研究と製品が別の活動ではなく、同じ作業の表と裏になっているのが特徴です。",
    en: "We do empirical work in phonetics and phonology on spontaneous speech corpora, and the instruments that work requires — an environment for running speech analysis, a way to visualise vowels, a setting in which to run perception experiments — become usable software. Research and product are not separate activities here; they are two sides of the same work.",
  },
  workBody2: {
    ja: "語学学習のアプリケーションも同じ考え方でつくっています。収録語数や問題数ではなく、「どの語を、どの順で、どの側面から学ぶと効率がよいか」という語彙・音韻の研究知見そのものを機能にしています。",
    en: "Our language-learning applications follow the same principle. What they offer is not a count of words or exercises but the research itself — which words, in what order, approached from which facet, make learning efficient — turned into features.",
  },
  more: {
    ja: "詳しくはプロダクト・研究をご覧ください。",
    en: "See the software and research pages for more.",
  },
} as const;

export const contact = {
  eyebrow: "contact",
  title: { ja: "お問い合わせ", en: "Contact" },
  lead: {
    ja: "ご用件を選ぶと、必要な項目だけが表示されます。不具合のご報告では再現手順をうかがい、動作環境は自動で取得します。一度のやり取りで調査に着手できるようにするための構成です。",
    en: "Choose your subject and only the relevant fields appear. For bug reports we ask for steps to reproduce and fill in your system details automatically, so that a single exchange is enough for us to start looking.",
  },
  note: {
    ja: "本フォームは外部サービス Formspree を経由して送信されます。取得した個人情報の取り扱いについてはプライバシーポリシーをご確認ください。よくあるご質問はサポートにまとめています。送信前にご確認いただくと、解決が早い場合があります。",
    en: "The form is delivered through Formspree, an external service. See the privacy policy for how we handle the information you provide. Frequently asked questions are collected on the support page and are often quicker than waiting for a reply.",
  },
  thanksTitle: {
    ja: "お問い合わせを受け付けました",
    en: "Your message has been received",
  },
  thanksLead: {
    ja: "送信ありがとうございます。内容を確認のうえ、ご記入いただいたメールアドレス宛にご返信します。",
    en: "Thank you. We will read your message and reply to the address you gave.",
  },
  thanksHeading: { ja: "このあとの流れ", en: "What happens next" },
  thanksSteps: [
    {
      ja: "内容を確認します。再現手順をいただいたご報告は、こちらで同じ操作をたどって確かめます。",
      en: "We read your message. Where you have given steps to reproduce, we follow the same steps here.",
    },
    {
      ja: "不足している情報があれば、こちらからおうかがいします。そのままお返事いただければ結構です。",
      en: "If anything is missing we will ask. Simply replying to our message is enough.",
    },
    {
      ja: "修正が必要な不具合は、対応した版の公開時期とあわせてご連絡します。",
      en: "For bugs that need fixing, we will tell you when the corrected version is expected.",
    },
  ],
  thanksNote: {
    ja: "数日経っても返信が届かない場合は、迷惑メールフォルダをご確認のうえ、お手数ですがもう一度お送りください。",
    en: "If nothing has arrived after several days, check your spam folder and please send your message again.",
  },
} as const;

export const legal = {
  eyebrow: "legal",
  title: {
    ja: "特定商取引法に基づく表記・プライバシーポリシー",
    en: "Commercial Transactions Disclosure and Privacy Policy",
  },
  lead: {
    ja: "合同会社語音の特定商取引法に基づく表記、および個人情報の取り扱いについて。",
    en: "Disclosure under Japan's Act on Specified Commercial Transactions, and how we handle personal information.",
  },
  authoritative: {
    ja: "",
    en: "This is a reference translation. The Japanese version is authoritative for legal purposes.",
  },
  tokushohoHeading: {
    ja: "特定商取引法に基づく表記",
    en: "Disclosure under the Act on Specified Commercial Transactions",
  },
  tokushoho: [
    { k: { ja: "事業者名", en: "Business name" }, v: { ja: "合同会社語音", en: "Go-on LLC (合同会社語音)" } },
    { k: { ja: "代表社員", en: "Representative" }, v: { ja: "石原 健", en: "Takeshi Ishihara" } },
    {
      k: { ja: "所在地", en: "Address" },
      v: {
        ja: "〒170-0012 東京都豊島区上池袋4-10-8-709",
        en: "4-10-8-709 Kamiikebukuro, Toshima-ku, Tokyo 170-0012, Japan",
      },
    },
    { k: { ja: "電話番号", en: "Telephone" }, v: { ja: "070-9481-0649", en: "+81 70-9481-0649" } },
    {
      k: { ja: "メールアドレス", en: "Email" },
      v: { ja: "info@goonresearch.jp", en: "info@goonresearch.jp" },
      mailto: true,
    },
    {
      k: { ja: "お問い合わせ", en: "Contact" },
      v: { ja: "本サイトの問い合わせフォーム", en: "The contact form on this site" },
      href: "/contact",
      hint: {
        ja: "内容の記録が残り、必要な項目がそろうため、お問い合わせはフォームからが確実です。",
        en: "The form keeps a record and collects what we need, so it is the surer route.",
      },
    },
    {
      k: { ja: "販売価格", en: "Price" },
      v: {
        ja: "各プロダクトの販売ページ（App Store 等）に表示します。",
        en: "Shown on each product's sales page (the App Store and similar).",
      },
    },
    {
      k: { ja: "代金の支払時期・方法", en: "Payment" },
      v: {
        ja: "各配信プラットフォームの定めによります。App Store 経由のアプリおよびアプリ内課金は Apple が決済を行います。",
        en: "As set by each distribution platform. Apple handles payment for apps and in-app purchases sold through the App Store.",
      },
    },
    {
      k: { ja: "商品の引渡時期", en: "Delivery" },
      v: {
        ja: "決済完了後、ただちにダウンロードまたは機能の利用が可能になります。",
        en: "Download or access to the feature becomes available immediately after payment completes.",
      },
    },
    {
      k: { ja: "返品・キャンセル", en: "Returns and cancellation" },
      v: {
        ja: "デジタル商品の性質上、当社からの直接の返金は承っておりません。App Store 経由でご購入の場合、返金は Apple のポリシーに従い、Apple のサポート（reportaproblem.apple.com）へお申し出ください。",
        en: "Being digital goods, these are not refunded directly by us. For App Store purchases, refunds follow Apple's policy — request them through Apple support at reportaproblem.apple.com.",
      },
    },
    {
      k: { ja: "商品代金以外の必要料金", en: "Charges besides the price" },
      v: {
        ja: "ダウンロードおよびご利用に必要な通信料は、お客様のご負担となります。当社が別途手数料を請求することはありません。",
        en: "You bear the cost of the data connection needed to download and use the product. We charge no additional fees.",
      },
    },
    {
      k: { ja: "申込みの有効期限", en: "Validity of an order" },
      v: {
        ja: "該当ありません。各配信プラットフォーム上で決済が完了した時点で成立します。",
        en: "Not applicable. An order completes when payment is taken on the distribution platform.",
      },
    },
    {
      k: { ja: "動作環境", en: "Requirements" },
      v: {
        ja: "各プロダクトの説明ページに記載します。",
        en: "Stated on each product's page.",
      },
      href: "/products",
    },
  ],
  privacyHeading: { ja: "プライバシーポリシー", en: "Privacy Policy" },
  termsHeading: { ja: "免責事項・準拠法", en: "Disclaimers and governing law" },
  terms: [
    {
      h: { ja: "ソフトウェアの提供について", en: "About the software we provide" },
      p: {
        ja: "当社のソフトウェアは、音響測定と教育のための道具です。測定値の解釈および研究上・教育上の判断は、利用者の責任において行われるものとします。医療・臨床・診断の用途を想定しておらず、それらの目的に適することを表明するものではありません。当社は、ソフトウェアが利用者の特定の目的に適合することを保証しません。",
        en: "Our software is a tool for acoustic measurement and teaching. Interpreting the measurements, and any research or teaching decision that follows, rests with the user. It is not intended for medical, clinical or diagnostic use, and we make no representation that it is fit for such purposes. We do not warrant that the software suits any particular purpose you may have.",
      },
    },
    {
      h: { ja: "責任の範囲", en: "Extent of our liability" },
      p: {
        ja: "当社は、ソフトウェアおよび本サイトの利用によって生じた損害について、当社に故意または過失がある場合を除き、責任を負いません。当社に責任がある場合であっても、消費者契約に該当するときは、法令の定めに従って責任を負います（本項は、消費者契約法その他の法令により当社が負うべき責任を制限するものではありません）。",
        en: "We are not liable for loss arising from use of our software or this site, except where we have acted intentionally or negligently. Where we are liable and the arrangement is a consumer contract, our liability follows what the law provides. Nothing in this section limits liability that the Consumer Contract Act or other legislation places on us.",
      },
    },
    {
      h: { ja: "外部サイトへのリンク", en: "Links to other sites" },
      p: {
        ja: "本サイトから外部のサイトへのリンクについて、当社はその内容および運営に責任を負いません。",
        en: "We are not responsible for the content or operation of sites this site links to.",
      },
    },
    {
      h: { ja: "知的財産", en: "Intellectual property" },
      p: {
        ja: "本サイトの文章・図版の著作権は当社に帰属します。研究目的での引用は出典を示してご自由にどうぞ。「Praat」は本来の開発者（アムステルダム大学 Paul Boersma・David Weenink）による同名ソフトウェアを指し、当社の Praat JA は同ソフトウェアの非公式な日本語フロントエンドです。公式プロジェクトとの関係はありません。",
        en: "Text and figures on this site are our copyright. Quotation for research purposes is welcome with attribution. “Praat” refers to the software of that name by its original authors (Paul Boersma and David Weenink, University of Amsterdam); our Praat JA is an unofficial Japanese front end and has no affiliation with the official project.",
      },
    },
    {
      h: { ja: "準拠法・裁判管轄", en: "Governing law and jurisdiction" },
      p: {
        ja: "本サイトの利用および当社との取引に関しては日本法を準拠法とします。紛争が生じた場合の第一審の専属的合意管轄裁判所は、東京地方裁判所とします。ただし、消費者契約に該当する場合の管轄は、法令の定めるところによります。",
        en: "Japanese law governs use of this site and dealings with us. The Tokyo District Court has exclusive jurisdiction at first instance over any dispute. Where the arrangement is a consumer contract, jurisdiction follows what the law provides.",
      },
    },
  ],
  privacy: [
    {
      h: { ja: "個人情報取扱事業者", en: "The business handling your information" },
      p: {
        ja: "合同会社語音（代表社員 石原 健、〒170-0012 東京都豊島区上池袋4-10-8-709）が、本サイトおよび当社アプリケーションで取得する個人情報を取り扱います。",
        en: "Go-on LLC (representative: Takeshi Ishihara; 4-10-8-709 Kamiikebukuro, Toshima-ku, Tokyo 170-0012, Japan) is responsible for the personal information collected through this site and our applications.",
      },
    },
    {
      h: { ja: "取得する情報と利用目的", en: "What we collect and why" },
      p: {
        ja: "当社は、お問い合わせフォームからご入力いただいたお名前・メールアドレス・お問い合わせ内容を取得します。これらは、お問い合わせへの回答および必要な連絡の目的にのみ利用します。",
        en: "We collect the name, email address and message you enter in the contact form. We use them only to answer your enquiry and for any correspondence it requires.",
      },
    },
    {
      h: { ja: "アプリケーションで扱う情報", en: "Information handled by our software" },
      p: {
        ja: "当社の音声分析アプリケーションは、録音した音声およびその解析結果を端末内で処理し、当社サーバーへ送信しません。本サイト上のツールについても、入力値・読み込んだ音声ファイル・測定結果はブラウザ内で処理され、送信されません。各アプリが取り扱う情報の詳細は、配信プラットフォーム上のプライバシー表示およびサポートページをご確認ください。",
        en: "Our speech analysis applications process recorded audio and its analysis on the device; nothing is sent to our servers. In the tools on this site, the values you enter, the audio you load and the results are processed in the browser and are not transmitted. For details per application, see the privacy disclosure on the distribution platform and our support page.",
      },
    },
    {
      h: { ja: "第三者への提供", en: "Provision to third parties" },
      p: {
        ja: "取得した個人情報を、法令に基づく場合を除き、あらかじめご本人の同意を得ることなく第三者に提供することはありません。個人情報を販売することはありません。",
        en: "We do not provide personal information to third parties without your prior consent, except where required by law. We never sell personal information.",
      },
    },
    {
      h: { ja: "業務の委託と外国への移転", en: "Processors and transfers outside Japan" },
      p: {
        ja: "お問い合わせフォームの送信・保管は、アメリカ合衆国の事業者 Formspree, Inc. に委託しています。そのため、フォームにご入力いただいた情報は同国のサーバーで取り扱われます。同国の個人情報保護制度は日本と異なり、当社は委託先との契約および同社の公表する安全管理措置により保護を図っています。これ以外に、本サイトの閲覧によって外部の事業者へ情報が送信されることはありません。Webフォントを含め、表示に必要なファイルはすべて当社のサイトから配信しています。フォームの利用を望まれない場合は、お電話でご連絡いただけます（この場合、入力内容が委託先を経由することはありません）。",
        en: "Delivery and storage of the contact form is entrusted to Formspree, Inc. in the United States, so what you enter in the form is handled on servers in that country, whose data protection regime differs from Japan's; we rely on our agreement with the processor and on the safeguards that company publishes. Apart from this, browsing the site sends nothing to any external party: everything needed to render a page, web fonts included, is served from our own site. If you would rather not use the form, you are welcome to telephone us instead; nothing you write then passes through the processor.",
      },
    },
    {
      h: { ja: "安全管理措置", en: "Security measures" },
      p: {
        ja: "取り扱う個人情報の量と範囲を、お問い合わせ対応に必要な限度にとどめています。取得した情報にアクセスできるのは代表社員のみで、通信は暗号化された経路（HTTPS）で行います。委託先を利用する場合は、その所在国の制度を把握したうえで、必要かつ適切な監督を行います。",
        en: "We keep the volume and range of personal information to what answering your enquiry requires. Only the representative has access to it, and communication uses encrypted channels (HTTPS). Where a processor is used, we take account of the legal regime of the country it operates in and supervise it accordingly.",
      },
    },
    {
      h: { ja: "アクセス解析・Cookie", en: "Analytics and cookies" },
      p: {
        ja: "本サイトは、閲覧者を追跡するためのCookieおよびアクセス解析ツールを使用していません。外部のCDNや広告配信も利用していません。",
        en: "This site uses no tracking cookies and no analytics tools. It also uses no external CDN and carries no advertising.",
      },
    },
    {
      h: {
        ja: "保管と、開示・訂正・利用停止のご請求",
        en: "Retention, and requests for disclosure, correction or suspension",
      },
      p: {
        ja: "取得した個人情報は、利用目的の達成に必要な期間に限り保管し、不要となった時点で削除します。保有個人データについて、利用目的の通知、開示、訂正・追加・削除、利用停止・消去、第三者提供の停止をご請求いただけます。お問い合わせフォーム、メール（info@goonresearch.jp）、またはお電話でお申し出ください。ご本人であることを確認のうえ、法令に従って遅滞なく対応します。手数料はいただきません。",
        en: "We keep personal information only as long as the stated purpose requires and delete it once it is no longer needed. You may request notification of the purpose of use, disclosure, correction, addition or deletion, suspension of use or erasure, and suspension of provision to third parties. Ask through the contact form, by email (info@goonresearch.jp), or by telephone. Once we have confirmed your identity we respond without undue delay, in accordance with the law. We charge no fee.",
      },
    },
    {
      h: { ja: "苦情の申出先", en: "Complaints" },
      p: {
        ja: "個人情報の取り扱いに関する苦情・ご相談は、本サイトのお問い合わせフォーム、メール（info@goonresearch.jp）、またはお電話でお受けします。当社の対応にご納得いただけない場合は、個人情報保護委員会（www.ppc.go.jp）へ申し出ることができます。",
        en: "Complaints and questions about how we handle personal information are received through the contact form, by email (info@goonresearch.jp), or by telephone. If you are not satisfied with our response, you may raise the matter with Japan's Personal Information Protection Commission (www.ppc.go.jp).",
      },
    },
    {
      h: { ja: "改定", en: "Revision" },
      p: {
        ja: "本ポリシーの内容は、法令の変更やサービス内容の変更に応じて改定することがあります。改定後の内容は本ページに掲載した時点から適用されます。",
        en: "This policy may be revised as the law or our services change. Revisions take effect when posted on this page.",
      },
    },
  ],
} as const;

export const notFound = {
  title: { ja: "ページが見つかりません", en: "Page not found" },
  body: {
    ja: "お探しのページは移動または削除された可能性があります。",
    en: "The page you are looking for may have moved or been removed.",
  },
  home: { ja: "ホームへ戻る", en: "Back to home" },
} as const;

/** 問い合わせフォーム（島）の文言。 */
export const form = {
  name: { ja: "お名前", en: "Name" },
  email: { ja: "メールアドレス", en: "Email address" },
  topic: { ja: "ご用件", en: "Subject" },
  product: { ja: "対象の製品", en: "Product concerned" },
  productOther: { ja: "その他・不明", en: "Other / not sure" },
  version: { ja: "バージョン", en: "Version" },
  optional: { ja: "（任意）", en: "(optional)" },
  steps: {
    ja: "どう操作すると起きますか（再現手順）",
    en: "What do you do to make it happen? (steps to reproduce)",
  },
  stepsPlaceholder: {
    ja: "1. 音声ファイルを開く\n2. スペクトログラムを表示する\n3. …",
    en: "1. Open a sound file\n2. Show the spectrogram\n3. …",
  },
  expected: { ja: "期待した動作", en: "What you expected" },
  actual: { ja: "実際に起きたこと", en: "What actually happened" },
  messageBug: {
    ja: "補足（エラー表示の文言など）",
    en: "Anything else (error messages and so on)",
  },
  message: { ja: "お問い合わせ内容", en: "Your message" },
  environment: { ja: "動作環境", en: "System details" },
  environmentAuto: {
    ja: "（自動入力・編集できます）",
    en: "(filled in automatically; you can edit it)",
  },
  environmentHint: {
    ja: "ご覧のブラウザから取得した情報です。不具合が別の端末で起きている場合は、その端末の情報に書き換えてください。",
    en: "Taken from the browser you are using now. If the problem occurs on a different device, replace this with that device's details.",
  },
  submit: { ja: "送信", en: "Send" },
  submitNote: {
    ja: "送信すると受付完了のページに移動します。",
    en: "You will be taken to a confirmation page after sending.",
  },
  topics: [
    { ja: "不具合の報告", en: "Bug report", needsProduct: true, needsRepro: true },
    { ja: "使い方の質問", en: "Question about use", needsProduct: true, needsRepro: false },
    { ja: "機能のご要望", en: "Feature request", needsProduct: true, needsRepro: false },
    {
      ja: "教育機関での利用について",
      en: "Use at an educational institution",
      needsProduct: false,
      needsRepro: false,
    },
    {
      ja: "共同研究・受託のご相談",
      en: "Research collaboration or commissioned work",
      needsProduct: false,
      needsRepro: false,
    },
    {
      ja: "取材・講演のご依頼",
      en: "Press or speaking request",
      needsProduct: false,
      needsRepro: false,
    },
    { ja: "その他", en: "Other", needsProduct: false, needsRepro: false },
  ],
} as const;

/**
 * SpeechLab のサポートページ。
 *
 * アプリ内の設定画面と App Store 掲載のサポートURLが
 * `https://goonresearch.jp/speechlab/` を指しているため、そのパスで応じる。
 * 未公開の製品を宣伝しない方針は保つので、ナビにもサイトマップにも載せず、
 * noindex にしている（直リンクからのみ到達する）。
 */
export const speechlab = {
  eyebrow: "speechlab",
  title: { ja: "SpeechLab サポート", en: "SpeechLab Support" },
  lead: {
    ja: "iPad 向けの音声分析アプリ SpeechLab のサポートページです。使い方、動作環境、データの取り扱い、不具合のご報告について記載しています。",
    en: "Support for SpeechLab, a speech analysis app for iPad. How it works, what it runs on, how data is handled, and how to report a problem.",
  },
  specsHeading: { ja: "動作環境", en: "Requirements" },
  specs: [
    { k: { ja: "対応機種", en: "Device" }, v: { ja: "iPad", en: "iPad" } },
    { k: { ja: "対応OS", en: "Operating system" }, v: { ja: "iPadOS 17.0 以降", en: "iPadOS 17.0 or later" } },
    { k: { ja: "バージョン", en: "Version" }, v: { ja: "1.0", en: "1.0" } },
    {
      k: { ja: "対応言語", en: "Languages" },
      v: {
        ja: "日本語・英語・韓国語・中国語（簡体／繁体）・ドイツ語・スペイン語・フランス語・イタリア語・ポルトガル語・アラビア語・ヒンディー語",
        en: "Japanese, English, Korean, Chinese (Simplified and Traditional), German, Spanish, French, Italian, Portuguese, Arabic, Hindi",
      },
    },
  ],
  featuresHeading: { ja: "機能", en: "Features" },
  freeHeading: { ja: "無料で使えます", en: "Included" },
  free: [
    { ja: "録音と再生（範囲選択・ループ・再生速度の変更）", en: "Recording and playback, with range selection, looping and playback speed" },
    { ja: "音声ファイルの読み込みと WAV 書き出し", en: "Importing audio files and exporting WAV" },
    { ja: "波形（オシログラム）表示", en: "Waveform (oscillogram) display" },
    { ja: "スペクトログラム（広帯域・狭帯域）", en: "Spectrogram, wide band and narrow band" },
    { ja: "F0（ピッチ）トラック", en: "F0 (pitch) track" },
    { ja: "フォルマントトラック", en: "Formant track" },
    { ja: "母音図（F1×F2 プロット、IPA台形の重ね描き）", en: "Vowel chart (F1×F2 plot with the IPA quadrilateral overlaid)" },
    { ja: "区間ラベリング（複数ティア・点ラベル、IPAキーボード付き）", en: "Interval labelling with multiple tiers and point labels, with an IPA keyboard" },
    { ja: "TextGrid の読み書き", en: "Reading and writing TextGrid files" },
    { ja: "図の書き出しと共有", en: "Exporting and sharing figures" },
  ],
  proHeading: { ja: "Pro（買い切りのアプリ内課金）", en: "Pro (a one-time in-app purchase)" },
  pro: [
    { ja: "自動セグメンテーションと自動ラベリング", en: "Automatic segmentation and labelling" },
    { ja: "ピッチシフト（TD-PSOLA によるF0の書き換え）", en: "Pitch shift, rewriting F0 with TD-PSOLA" },
  ],
  proNote: {
    ja: "Pro は買い切りです。サブスクリプションではありません。購入すると同じ Apple Account の端末で利用でき、「購入を復元」から復元できます。",
    en: "Pro is a one-time purchase, not a subscription. It applies to devices signed in to the same Apple Account and can be restored with “Restore Purchases”.",
  },
  dataHeading: { ja: "データの取り扱い", en: "How your data is handled" },
  data: [
    {
      ja: "録音した音声とその解析結果は、すべて iPad の中で処理されます。当社のサーバーへ送信することはありません。アカウント登録もありません。",
      en: "Recorded audio and its analysis are processed entirely on your iPad. Nothing is sent to our servers, and there is no account to create.",
    },
    {
      ja: "マイクは録音時にのみ使用します。許可は iPad の「設定」からいつでも変更できます。",
      en: "The microphone is used only while recording. You can change the permission at any time in the iPad Settings app.",
    },
    {
      ja: "Pro の自動ラベリングを初めて実行するときに限り、音声認識モデル（約150MB）をインターネットから取得します。取得するのはモデルだけで、あなたの音声は送信されません。取得後は端末内に保存され、以降の処理はオフラインで完結します。",
      en: "The first time you run Pro automatic labelling, the app downloads a speech recognition model (about 150 MB) over the internet. Only the model is downloaded — your audio is never uploaded. Once stored on the device, all later processing runs offline.",
    },
  ],
  faqHeading: { ja: "よくあるご質問", en: "Frequently asked questions" },
  faq: [
    {
      q: { ja: "iPhone でも使えますか。", en: "Does it run on iPhone?" },
      a: {
        ja: "現在は iPad 専用です。波形・スペクトログラム・ラベリングを同時に扱うには画面の広さが要るためです。",
        en: "It is currently for iPad only. Showing the waveform, spectrogram and labelling together needs the screen area.",
      },
    },
    {
      q: { ja: "自動ラベリングが始まらない・途中で止まります。", en: "Automatic labelling won't start, or stops partway." },
      a: {
        ja: "初回はモデルの取得（約150MB）が必要です。Wi-Fi 接続と空き容量をご確認ください。進捗は画面上部に表示されます。取得が完了すれば、次回以降はオフラインで動作します。",
        en: "The first run downloads a model of about 150 MB. Check your Wi-Fi connection and free storage; progress appears at the top of the screen. Once the download finishes, later runs work offline.",
      },
    },
    {
      q: { ja: "購入したのに Pro 機能が使えません。", en: "I purchased Pro but the features are locked." },
      a: {
        ja: "設定の「購入を復元」をお試しください。購入時と同じ Apple Account でサインインしている必要があります。それでも解決しない場合は、購入日時を添えてお問い合わせください。",
        en: "Try “Restore Purchases” in the settings. You need to be signed in with the same Apple Account used for the purchase. If that does not help, write to us with the date and time of purchase.",
      },
    },
    {
      q: { ja: "返金してほしいのですが。", en: "How do I request a refund?" },
      a: {
        ja: "アプリ内課金の決済と返金は Apple が管理しています。reportaproblem.apple.com からお申し出ください。",
        en: "Payment and refunds for in-app purchases are handled by Apple. Please request them at reportaproblem.apple.com.",
      },
    },
    {
      q: { ja: "書き出したファイルはどこに保存されますか。", en: "Where do exported files go?" },
      a: {
        ja: "共有シートから「ファイル」アプリや他のアプリへ保存できます。保存先はその場で選べます。",
        en: "You choose the destination from the share sheet — the Files app or another app.",
      },
    },
  ],
  contactHeading: { ja: "不具合の報告・お問い合わせ", en: "Reporting a problem" },
  contactBody: {
    ja: "不具合のご報告には、アプリのバージョン、iPad の機種と iPadOS のバージョン、再現手順、期待した動作と実際に起きたことを添えてください。フォームではこれらの項目を順に表示します。",
    en: "When reporting a problem, please include the app version, your iPad model and iPadOS version, the steps to reproduce, and what you expected versus what happened. The form asks for these in turn.",
  },
} as const;
