import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "結婚相談所の入会から成婚までの流れ｜完全ガイド",
  description:
    "結婚相談所の入会から成婚退会までの流れをステップ別に完全解説。資料請求・無料相談・入会・プロフィール作成・お見合い・仮交際・真剣交際・成婚退会の各ステップの期間目安も紹介。",
  keywords: "結婚相談所 流れ, 結婚相談所 入会, 結婚相談所 成婚まで, お見合い 流れ",
  alternates: { canonical: "https://kekkon-navi.pages.dev/articles/flow-guide/" },
  openGraph: {
    title: "結婚相談所の入会から成婚までの流れ｜完全ガイド",
    description: "結婚相談所の入会から成婚退会までの流れをステップ別に完全解説。",
    url: "https://kekkon-navi.pages.dev/articles/flow-guide/",
    type: "article",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "結婚相談所の入会から成婚までの流れ｜完全ガイド",
      datePublished: "2026-04-15", dateModified: "2026-04-15",
      author: { "@type": "Organization", name: "結婚相談所比較ナビ", url: "https://kekkon-navi.pages.dev" },
      publisher: { "@type": "Organization", name: "結婚相談所比較ナビ", url: "https://kekkon-navi.pages.dev" },
      description: "結婚相談所の入会から成婚退会までの流れをステップ別に完全解説。",
      mainEntityOfPage: "https://kekkon-navi.pages.dev/articles/flow-guide/",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "結婚相談所の入会に必要な書類は何ですか？", acceptedAnswer: { "@type": "Answer", text: "独身証明書（本籍地の市区町村で取得）、住民票、収入証明書（源泉徴収票など）、学歴証明書（卒業証明書）、本人確認書類（運転免許証・パスポートなど）、写真が必要です。相談所によって必要書類は異なるため、事前に確認しましょう。" } },
        { "@type": "Question", name: "入会から成婚までどのくらいの期間がかかりますか？", acceptedAnswer: { "@type": "Answer", text: "平均8〜12ヶ月です。20代は6〜8ヶ月、30代は8〜12ヶ月、40代は12〜18ヶ月が目安。積極的に活動すれば6ヶ月以内の成婚も十分可能です。" } },
        { "@type": "Question", name: "お見合いはどのように行われますか？", acceptedAnswer: { "@type": "Answer", text: "ホテルのラウンジやカフェで1時間程度の対面が一般的です。相談所が日程調整と場所のセッティングを行います。最近はオンラインお見合い（ビデオ通話）にも対応している相談所が増えています。" } },
        { "@type": "Question", name: "仮交際と真剣交際の違いは何ですか？", acceptedAnswer: { "@type": "Answer", text: "仮交際は複数人と同時にデートできるお試し期間で、真剣交際は1人に絞って結婚を前提に付き合う期間です。仮交際から真剣交際に進む際に他のお相手はお断りする必要があります。" } },
        { "@type": "Question", name: "途中で退会することはできますか？", acceptedAnswer: { "@type": "Answer", text: "はい、途中退会は可能です。ただし最低活動期間が設定されている場合は違約金がかかることがあります。入会前に中途解約の条件を必ず確認しましょう。クーリングオフ制度（8日以内）も利用できます。" } },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "ホーム", item: "https://kekkon-navi.pages.dev" },
        { "@type": "ListItem", position: 2, name: "コラム", item: "https://kekkon-navi.pages.dev/articles" },
        { "@type": "ListItem", position: 3, name: "入会から成婚までの流れ", item: "https://kekkon-navi.pages.dev/articles/flow-guide/" },
      ],
    },
  ],
};

const breadcrumbItems = [
  { label: "コラム", href: "/articles" },
  { label: "入会から成婚までの流れ" },
];

const steps = [
  {
    step: "STEP 1",
    title: "資料請求・情報収集",
    period: "1〜2週間",
    detail: "まずは気になる結婚相談所の資料を取り寄せましょう。公式サイトから簡単に請求できます。複数社（最低3社）の資料を比較して、料金・サポート内容・会員数などを確認します。",
    tips: [
      "最低3社以上の資料を取り寄せる",
      "料金だけでなくサポート内容も比較する",
      "口コミサイトや体験談も参考にする",
      "自分の希望条件（予算・エリア・サポート内容）を整理しておく",
    ],
    warning: null,
  },
  {
    step: "STEP 2",
    title: "無料カウンセリング・相談",
    period: "2〜3週間",
    detail: "資料で気になった相談所の無料カウンセリングに申し込みます。実際にカウンセラーと話すことで、相談所の雰囲気やサポートの質を体感できます。複数社を訪問して比較しましょう。",
    tips: [
      "必ず複数社のカウンセリングを受ける（最低2社）",
      "カウンセラーとの相性を確認する",
      "料金の詳細（隠れコストを含む）を質問する",
      "成婚率の計算方法を確認する",
      "退会・休会の条件も聞いておく",
    ],
    warning: "無料カウンセリングで即入会を迫られた場合は、その場で決めず持ち帰って検討しましょう。大手相談所で強引な勧誘は少ないですが、焦って契約すると後悔の原因になります。",
  },
  {
    step: "STEP 3",
    title: "入会手続き・書類提出",
    period: "1〜2週間",
    detail: "入会を決めたら、必要書類を揃えて提出します。独身証明書は本籍地の市区町村で取得する必要があるため、少し時間がかかります。入会金と初期費用の支払いもこの段階で行います。",
    tips: [
      "独身証明書は取得に数日〜1週間かかるため早めに手配",
      "収入証明書は源泉徴収票か確定申告書の写し",
      "写真は入会後にプロ撮影もOK（相談所によるサポートも）",
      "クーリングオフ制度（契約後8日以内）があることを確認",
    ],
    warning: null,
  },
  {
    step: "STEP 4",
    title: "プロフィール作成・写真撮影",
    period: "1〜2週間",
    detail: "カウンセラーと相談しながらプロフィールを作成します。自己PR文、希望条件の設定、プロフィール写真の撮影を行います。プロフィールはお見合い成立の第一関門なので、しっかり作り込みましょう。",
    tips: [
      "プロフィール写真はプロのカメラマンに依頼する",
      "自己PR文はカウンセラーのアドバイスを受けて作成",
      "希望条件は広めに設定する（後から絞れる）",
      "趣味や休日の過ごし方は具体的に書く",
      "結婚観や将来のビジョンも盛り込む",
    ],
    warning: null,
  },
  {
    step: "STEP 5",
    title: "お見合い",
    period: "2〜4ヶ月（集中期間）",
    detail: "プロフィールが完成したら、いよいよお見合いの開始です。自分からの申し込みと、相手からの申し受けの両方でお見合いが成立します。ホテルのラウンジやカフェで1時間程度の対面を行います。",
    tips: [
      "入会後3ヶ月はゴールデン期間。月4〜6回のお見合いを目標に",
      "条件に完全一致しなくても「会ってみる」姿勢が大切",
      "清潔感のある服装で臨む",
      "相手の話を聞くことを意識する",
      "お見合い後は当日中にカウンセラーに感想を伝える",
    ],
    warning: null,
  },
  {
    step: "STEP 6",
    title: "仮交際（プレ交際）",
    period: "1〜3ヶ月",
    detail: "お見合い後、お互いが「もう一度会いたい」と思えば仮交際に進みます。仮交際は複数人と同時に進められるお試し期間です。デートを重ねて相性を確認し、真剣交際に進む相手を見極めます。",
    tips: [
      "仮交際中は複数人と同時進行OK（通常2〜3人）",
      "週1回のデートペースが理想",
      "連絡頻度は相手に合わせる",
      "3〜5回のデートで真剣交際に進むか判断",
      "カウンセラーに定期的に相談する",
    ],
    warning: "仮交際中に体の関係を持つのは禁止されている相談所がほとんどです。ルールを守って活動しましょう。",
  },
  {
    step: "STEP 7",
    title: "真剣交際",
    period: "2〜3ヶ月",
    detail: "1人に絞って結婚を前提にお付き合いする期間です。他のお相手はお断りし、1対1で交際を深めます。結婚後の生活について具体的な話し合いを行い、お互いの価値観やライフプランを確認します。",
    tips: [
      "結婚後の住まい・仕事・家計・子どもについて話し合う",
      "お互いの家族のことも共有する",
      "両家の顔合わせの準備を始める",
      "不安や疑問はカウンセラーに相談",
      "プロポーズのタイミングもカウンセラーに相談",
    ],
    warning: null,
  },
  {
    step: "STEP 8",
    title: "プロポーズ・成婚退会",
    period: "〜1ヶ月",
    detail: "プロポーズが成功したら、成婚退会となります。カウンセラーがプロポーズのタイミングや方法もアドバイスしてくれます。成婚料がかかる相談所では、この段階で成婚料を支払います。成婚退会後は、結婚準備に進みましょう。",
    tips: [
      "プロポーズの場所・方法はカウンセラーに相談するのもアリ",
      "婚約指輪の準備",
      "両家顔合わせ・結納の準備",
      "結婚式場の検討開始",
      "入籍のタイミングを2人で決める",
    ],
    warning: null,
  },
];

export default function FlowGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Breadcrumb items={breadcrumbItems} />

      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="text-center py-10">
          <div className="inline-block px-4 py-1 rounded-full text-xs font-bold bg-[#fdf2f6] text-[#c45b84] mb-4">完全ガイド</div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
            結婚相談所の入会から成婚までの流れ
            <br />
            <span className="text-[#c45b84]">完全ガイド</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            結婚相談所を検討しているけど、具体的にどんな流れで進むのかわからない…。そんな方のために、資料請求から成婚退会まで、全8ステップを詳しく解説します。各ステップの期間目安やポイントもお伝えします。
          </p>
          <time dateTime="2026-04-15" className="text-xs text-gray-400 mt-4 block">2026年4月15日更新</time>
        </header>

        <nav className="bg-[#fdf8fa] border border-[#f0dde3] rounded-2xl p-6 mb-10">
          <h2 className="text-lg font-bold mb-3 text-[#c45b84]">この記事の目次</h2>
          <ol className="space-y-2 text-sm">
            {steps.map((s, i) => (
              <li key={i}><a href={`#step${i + 1}`} className="text-[#c45b84] hover:underline">{s.step}. {s.title}</a></li>
            ))}
            <li><a href="#timeline" className="text-[#c45b84] hover:underline">全体のタイムライン</a></li>
            <li><a href="#faq" className="text-[#c45b84] hover:underline">よくある質問</a></li>
          </ol>
        </nav>

        {/* Steps */}
        {steps.map((s, i) => (
          <section key={i} id={`step${i + 1}`} className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-16 h-10 bg-[#c45b84] rounded-lg flex items-center justify-center text-white font-bold text-xs">{s.step}</div>
              <div>
                <h2 className="text-lg md:text-xl font-bold">{s.title}</h2>
                <p className="text-xs text-[#c9a76c] font-bold">期間目安：{s.period}</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">{s.detail}</p>
            <div className="bg-[#fdf8fa] border border-[#f0dde3] rounded-xl p-4 mb-3">
              <p className="font-bold text-sm mb-2 text-[#c45b84]">ポイント</p>
              <ul className="text-sm text-gray-700 space-y-1">
                {s.tips.map((tip, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span className="text-[#c45b84] font-bold mt-0.5">●</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
            {s.warning && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-sm text-yellow-800">
                <strong>注意：</strong>{s.warning}
              </div>
            )}
          </section>
        ))}

        {/* Timeline */}
        <section id="timeline" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">全体のタイムライン</h2>
          <div className="bg-white border border-[#f0dde3] rounded-2xl p-6">
            <div className="space-y-3">
              {[
                { period: "〜1ヶ月", label: "情報収集・入会", color: "#c45b84" },
                { period: "1〜2ヶ月", label: "プロフィール作成・活動準備", color: "#c9a76c" },
                { period: "2〜6ヶ月", label: "お見合い（集中期間）", color: "#9b8ec4" },
                { period: "4〜8ヶ月", label: "仮交際", color: "#5b8a6b" },
                { period: "6〜10ヶ月", label: "真剣交際", color: "#4c6e8a" },
                { period: "8〜12ヶ月", label: "プロポーズ・成婚退会", color: "#c45b84" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-24 text-right text-xs text-gray-500 shrink-0">{item.period}</div>
                  <div className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                  <div className="flex-1 h-8 rounded-lg flex items-center px-3 text-white text-sm font-bold" style={{ backgroundColor: item.color }}>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600 mt-4">
              ※上記は目安です。積極的に活動すれば6ヶ月以内の成婚も十分可能です。逆に焦らずじっくり活動する方は1年〜1年半かかるケースもあります。
            </p>
          </div>
        </section>

        {/* Section: 各ステップでよくある悩み */}
        <section id="common-issues" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">
            各ステップでよくある悩みと解決法
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            婚活の各ステップで多くの方が直面する悩みと、その解決法をまとめました。事前に知っておくことで、スムーズに活動を進められます。
          </p>
          <div className="space-y-4">
            {[
              {
                step: "プロフィール作成時",
                issue: "何を書けばいいかわからない",
                solution:
                  "カウンセラーに相談すれば、テンプレートや過去の成功事例を教えてもらえます。趣味・仕事のやりがい・結婚観の3つを柱に、300〜500文字程度でまとめましょう。自分では気づかない魅力をカウンセラーが引き出してくれることも多いです。",
              },
              {
                step: "お見合い申し込み時",
                issue: "申し込んでも断られてばかり",
                solution:
                  "プロフィール写真を見直す、条件を広げる、自己PR文を改善するなどの対策が効果的です。カウンセラーに「なぜ断られるのか」を分析してもらい、改善ポイントを明確にしましょう。お見合い成立率は平均10〜20%なので、断られるのは普通のことです。",
              },
              {
                step: "お見合い時",
                issue: "会話が続かない・緊張してしまう",
                solution:
                  "事前に話す話題を5〜10個メモしておきましょう。相手のプロフィールを読み込み、質問を準備しておくと安心です。回数を重ねれば自然と慣れます。サンマリエなどではお見合い練習のサービスもあります。",
              },
              {
                step: "仮交際中",
                issue: "複数人との同時進行に罪悪感がある",
                solution:
                  "仮交際中の複数進行は結婚相談所のルールで認められた正当な活動です。比較することで本当に合う相手が見えてきます。罪悪感を持つ必要はありません。ただし、仮交際中は身体的な接触は控えましょう。",
              },
              {
                step: "真剣交際中",
                issue: "本当にこの人で良いのか不安になる",
                solution:
                  "「マリッジブルー」の一種です。100%完璧な相手はいません。「この人となら困難も乗り越えられる」と感じるかどうかが大切です。不安な気持ちはカウンセラーに相談しましょう。客観的な視点でアドバイスしてもらえます。",
              },
              {
                step: "プロポーズ前",
                issue: "プロポーズのタイミングがわからない",
                solution:
                  "カウンセラーに相談すれば、相手側の気持ちも確認した上で最適なタイミングをアドバイスしてくれます。真剣交際から2〜3ヶ月後、お互いの結婚後の生活について話し合いが済んだタイミングが一般的です。",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white border border-[#f0dde3] rounded-2xl p-6"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-[#fdf2f6] text-[#c45b84] text-xs font-bold rounded-full">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-bold text-[#c45b84] mb-2">
                  悩み：{item.issue}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  <strong className="text-[#5b8a6b]">解決法：</strong>
                  {item.solution}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section: 入会に必要な書類一覧 */}
        <section id="documents" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">
            入会に必要な書類一覧
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            結婚相談所への入会には、身元を証明するための各種書類が必要です。事前に準備しておくとスムーズに入会手続きが進みます。
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#c45b84] text-white">
                  <th className="p-3 text-left font-bold rounded-tl-lg">
                    書類名
                  </th>
                  <th className="p-3 text-left font-bold">取得場所</th>
                  <th className="p-3 text-left font-bold">取得期間</th>
                  <th className="p-3 text-left font-bold rounded-tr-lg">
                    費用
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "独身証明書",
                    "本籍地の市区町村役場",
                    "即日〜1週間（郵送の場合）",
                    "約300〜400円",
                  ],
                  [
                    "住民票",
                    "住所地の市区町村役場",
                    "即日",
                    "約300円",
                  ],
                  [
                    "収入証明書",
                    "会社（源泉徴収票）/ 税務署（確定申告書）",
                    "即日〜数日",
                    "無料〜約300円",
                  ],
                  [
                    "学歴証明書",
                    "卒業した学校",
                    "即日〜2週間",
                    "約200〜500円",
                  ],
                  [
                    "本人確認書類",
                    "運転免許証・パスポートなど",
                    "手持ちのもの",
                    "無料",
                  ],
                  [
                    "写真",
                    "フォトスタジオ / 相談所提携先",
                    "即日〜1週間",
                    "約10,000〜30,000円",
                  ],
                ].map((row, i) => (
                  <tr
                    key={i}
                    className={`border-b border-[#f0dde3] ${i % 2 === 0 ? "bg-white" : "bg-[#fdf8fa]"}`}
                  >
                    <td className="p-3 font-bold text-gray-900">{row[0]}</td>
                    <td className="p-3">{row[1]}</td>
                    <td className="p-3">{row[2]}</td>
                    <td className="p-3">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
            <p className="font-bold text-yellow-800 mb-1">
              独身証明書は早めに手配しましょう
            </p>
            <p className="text-sm text-yellow-800">
              独身証明書は本籍地の市区町村でしか取得できません。現住所と本籍地が異なる場合は郵送での取得が必要で、1週間程度かかります。入会を検討し始めたら早めに手配することをおすすめします。マイナンバーカードがあればコンビニで取得できる自治体もあります。
            </p>
          </div>
        </section>

        {/* Section: お見合いから交際への発展率 */}
        <section id="progression-rate" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">
            各ステップの発展率の目安
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            婚活の各ステップでどのくらいの確率で次に進めるのか、一般的な目安を紹介します。数値はあくまで目安ですが、活動の計画を立てる参考にしてください。
          </p>
          <div className="space-y-3">
            {[
              {
                from: "お見合い申し込み",
                to: "お見合い成立",
                rate: "約10〜20%",
                detail:
                  "10人に申し込んで1〜2人とお見合いが成立する計算です。写真とプロフィールの質で大きく変動します。",
              },
              {
                from: "お見合い",
                to: "仮交際",
                rate: "約30〜50%",
                detail:
                  "お見合い後にお互いが「もう一度会いたい」と思えば仮交際に進みます。半分は仮交際に発展すると考えてよいでしょう。",
              },
              {
                from: "仮交際",
                to: "真剣交際",
                rate: "約20〜30%",
                detail:
                  "仮交際で3〜5回デートした後、1人に絞って真剣交際に進みます。複数の仮交際のうち、1〜2人が真剣交際候補になる計算です。",
              },
              {
                from: "真剣交際",
                to: "成婚退会",
                rate: "約70〜80%",
                detail:
                  "真剣交際まで進めば、多くのカップルが成婚に至ります。この段階で破綻するケースは約2〜3割程度です。",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white border border-[#f0dde3] rounded-2xl p-5"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-sm font-bold text-gray-700">
                    {item.from}
                  </span>
                  <span className="text-[#c45b84] font-bold">→</span>
                  <span className="text-sm font-bold text-gray-700">
                    {item.to}
                  </span>
                  <span className="ml-auto text-lg font-bold text-[#c45b84]">
                    {item.rate}
                  </span>
                </div>
                <p className="text-xs text-gray-600">{item.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-[#fdf8fa] border border-[#f0dde3] rounded-2xl p-6">
            <h3 className="font-bold mb-2">
              逆算すると、成婚に必要なお見合い数は？
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              上記の発展率を逆算すると、1回の成婚に必要なお見合い数は約10〜20回、お見合い申し込み数は約50〜100回程度です。つまり、月4回のお見合いペースなら約3〜5ヶ月でお見合いフェーズを終え、仮交際→真剣交際→成婚と進むことができます。早い方なら入会6ヶ月以内の成婚も可能です。
            </p>
          </div>
        </section>

        {/* Section: 成婚退会後のフォロー */}
        <section id="after-graduation" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">
            成婚退会後はどうなる？
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            成婚退会後のフォロー体制は相談所によって異なります。入会前に確認しておきたいポイントです。
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "成婚退会後のフォローがある相談所",
                desc: "IBJメンバーズやサンマリエでは、成婚退会後も結婚準備に関する相談を受けてくれる場合があります。結婚式場の紹介や、新生活のアドバイスなど、退会後もサポートが続く安心感があります。",
                color: "#5b8a6b",
              },
              {
                title: "成婚退会後のフォローがない相談所",
                desc: "多くの相談所では、成婚退会と同時にサービスは終了します。退会前にカウンセラーに「退会後のサポート」について確認しておきましょう。",
                color: "#c9a76c",
              },
              {
                title: "成婚退会後にやるべきこと",
                desc: "婚約指輪の準備、両家顔合わせ、結婚式場の見学、入籍届の準備、新居の検討、引っ越しの準備など。成婚退会から入籍まで3〜6ヶ月のカップルが多いです。",
                color: "#c45b84",
              },
              {
                title: "万が一、成婚退会後に破談になった場合",
                desc: "残念ながら成婚退会後に破談になるケースもゼロではありません。その場合は再入会が可能な相談所もあります。再入会時に割引が適用される場合もあるので、確認しておきましょう。",
                color: "#9b8ec4",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white border border-[#f0dde3] rounded-2xl p-5"
              >
                <h3
                  className="font-bold mb-2"
                  style={{ color: item.color }}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">よくある質問</h2>
          <div className="space-y-3">
            {[
              { q: "結婚相談所の入会に必要な書類は何ですか？", a: "独身証明書（本籍地の市区町村で取得）、住民票、収入証明書（源泉徴収票など）、学歴証明書（卒業証明書）、本人確認書類（運転免許証・パスポートなど）、写真が必要です。相談所によって必要書類は異なるため、事前に確認しましょう。" },
              { q: "入会から成婚までどのくらいの期間がかかりますか？", a: "平均8〜12ヶ月です。20代は6〜8ヶ月、30代は8〜12ヶ月、40代は12〜18ヶ月が目安。積極的に活動すれば6ヶ月以内の成婚も十分可能です。" },
              { q: "お見合いはどのように行われますか？", a: "ホテルのラウンジやカフェで1時間程度の対面が一般的です。相談所が日程調整と場所のセッティングを行います。最近はオンラインお見合い（ビデオ通話）にも対応している相談所が増えています。" },
              { q: "仮交際と真剣交際の違いは何ですか？", a: "仮交際は複数人と同時にデートできるお試し期間で、真剣交際は1人に絞って結婚を前提に付き合う期間です。仮交際から真剣交際に進む際に他のお相手はお断りする必要があります。" },
              { q: "途中で退会することはできますか？", a: "はい、途中退会は可能です。ただし最低活動期間が設定されている場合は違約金がかかることがあります。入会前に中途解約の条件を必ず確認しましょう。クーリングオフ制度（8日以内）も利用できます。" },
            ].map((item, i) => (
              <details key={i} className="group bg-white border border-[#f0dde3] rounded-2xl overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-[#fdf8fa] transition-colors font-bold text-sm md:text-base">
                  <span className="flex items-center gap-3"><span className="text-[#c45b84] font-bold">Q.</span>{item.q}</span>
                  <span className="text-[#c45b84] group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-5 pb-5 text-sm text-gray-700 leading-relaxed border-t border-[#f0dde3] pt-4">
                  <span className="text-[#c9a76c] font-bold">A.</span> {item.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Section: 活動中のモチベーション維持 */}
        <section id="motivation" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">
            活動中のモチベーション維持のコツ
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            婚活は長期戦になることもあります。モチベーションを維持するためのコツを紹介します。
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "小さな目標を設定する",
                desc: "「今月はお見合いを4回組む」「プロフィール写真を撮り直す」など、達成可能な小さな目標を毎月設定しましょう。小さな成功体験の積み重ねがモチベーションを維持します。",
              },
              {
                title: "お見合いの結果に一喜一憂しない",
                desc: "断られるのは「相性が合わなかった」だけ。あなた自身が否定されたわけではありません。数をこなすことで理想の相手に近づいていると考えましょう。",
              },
              {
                title: "カウンセラーに定期的に相談する",
                desc: "悩みや不安を一人で抱え込まないこと。カウンセラーに相談すれば、客観的なアドバイスと励ましがもらえます。月1回は必ず面談の時間を取りましょう。",
              },
              {
                title: "自分磨きの時間も確保する",
                desc: "婚活だけに集中するとストレスが溜まります。趣味や運動、友人との交流など、自分を充実させる時間も大切にしましょう。充実した生活がお見合いでの魅力にもつながります。",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white border border-[#f0dde3] rounded-2xl p-5"
              >
                <h3 className="font-bold mb-2 text-[#c45b84]">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center bg-gradient-to-r from-[#fdf2f6] to-[#faf5ee] rounded-2xl p-8 md:p-12 mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-4">最初の一歩は「資料請求」から</h2>
          <p className="text-gray-600 mb-6 max-w-lg mx-auto text-sm">結婚相談所の流れを理解したら、次は実際に行動してみましょう。まずは気になる相談所の資料請求から。</p>
          <Link href="/ranking/" className="btn-cta">おすすめ結婚相談所ランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-4">関連記事</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/ranking/" className="block bg-white border border-[#f0dde3] rounded-2xl p-5 hover:bg-[#fdf8fa] transition-colors">
              <p className="font-bold text-sm mb-1">結婚相談所おすすめ6選</p>
              <p className="text-xs text-gray-500">料金・口コミ・成婚率で徹底比較</p>
            </Link>
            <Link href="/articles/omiai-manners/" className="block bg-white border border-[#f0dde3] rounded-2xl p-5 hover:bg-[#fdf8fa] transition-colors">
              <p className="font-bold text-sm mb-1">お見合いのマナー完全ガイド</p>
              <p className="text-xs text-gray-500">服装・会話・好印象のコツ</p>
            </Link>
            <Link href="/articles/should-i-join/" className="block bg-white border border-[#f0dde3] rounded-2xl p-5 hover:bg-[#fdf8fa] transition-colors">
              <p className="font-bold text-sm mb-1">結婚相談所はやめたほうがいい？</p>
              <p className="text-xs text-gray-500">後悔しないための判断基準</p>
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
