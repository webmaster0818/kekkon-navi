import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "ゼクシィ縁結びエージェントの口コミ・評判｜オリコン8年連続1位の実力を検証",
  description:
    "ゼクシィ縁結びエージェントの口コミ・評判を徹底調査。オリコン顧客満足度8年連続1位の実力、月17,600円のシンプル料金、専任コーディネーターのサポート内容まで詳しく解説。実際の利用者の良い口コミ・悪い口コミも掲載。",
  keywords:
    "ゼクシィ縁結びエージェント 口コミ, ゼクシィ縁結びエージェント 評判, ゼクシィ縁結びエージェント 料金",
  alternates: {
    canonical: "https://kekkon-navi.pages.dev/reviews/zexy/",
  },
  openGraph: {
    title:
      "ゼクシィ縁結びエージェントの口コミ・評判｜オリコン8年連続1位の実力を検証",
    description:
      "ゼクシィ縁結びエージェントの口コミ・評判を徹底調査。オリコン顧客満足度8年連続1位の実力、月17,600円のシンプル料金を詳しく解説。",
    url: "https://kekkon-navi.pages.dev/reviews/zexy/",
    siteName: "結婚相談所比較ナビ",
    type: "article",
  },
};

const breadcrumbItems = [
  { label: "業者レビュー", href: "/reviews/" },
  { label: "ゼクシィ縁結びエージェント" },
];

const goodReviews = [
  {
    text: "入会金33,000円と月会費だけで、お見合い料も成婚料も一切かからないのが最大の魅力でした。他社では1回のお見合いに1万円以上かかるところもありますが、ゼクシィではどれだけお見合いしても追加費用ゼロ。結果的に8回お見合いして、4人目の方と真剣交際に進み、7ヶ月で成婚退会できました。トータル費用は20万円台で済んだので、コスパは最高だと思います。",
    age: "31歳・女性・事務職",
    rating: 5,
    title: "お見合い料・成婚料ゼロは本当にありがたい",
  },
  {
    text: "オリコン8年連続1位という実績が入会の決め手でした。実際に利用してみて納得の品質です。専任コーディネーターの方がとても丁寧で、プロフィールの書き方から写真選び、お見合い当日の振る舞いまで細かくアドバイスしてくれました。最初はうまくいかなかった時期もありましたが、コーディネーターさんが改善点を的確に教えてくれたおかげで、5ヶ月目から急にお見合いが組めるようになり、9ヶ月で成婚できました。",
    age: "34歳・男性・エンジニア",
    rating: 5,
    title: "さすがオリコン1位、コーディネーターの質が高い",
  },
  {
    text: "リクルートグループ運営ということで安心感がありました。料金体系がとにかくシンプルで、月会費17,600円以外に何もかからないのは他社と比べて圧倒的にわかりやすいです。入会前の無料カウンセリングも押し売り感がなく、自分のペースで検討できました。コーディネーターとの面談はオンラインでも対応してくれるので、仕事が忙しい時期も活動を続けられました。",
    age: "29歳・女性・看護師",
    rating: 5,
    title: "リクルートブランドの安心感と料金の明瞭さ",
  },
  {
    text: "30代後半になって焦って入会しましたが、コーディネーターさんが「焦らずに」と言ってくれて精神的に楽になりました。紹介される方の質も良く、年収やお仕事もしっかりしている方が多い印象。AIマッチングと人の目による紹介の両方があるので、自分では選ばないようなタイプの方とも出会えました。結局、コーディネーターさんの紹介で出会った方と成婚しました。人の力ってすごいなと思いました。",
    age: "37歳・女性・営業職",
    rating: 4,
    title: "AIと人のハイブリッドマッチングが絶妙",
  },
  {
    text: "以前マッチングアプリで失敗した経験があり、結婚相談所に切り替えました。ゼクシィは入会時の書類審査がしっかりしているので、会う方全員が独身で真剣に結婚を考えている方ばかり。アプリとは全然質が違いました。コネクトシップにも加盟しているので、他社の会員さんとも出会えます。11ヶ月の活動で素敵なパートナーと出会い、今では結婚式の準備中です。",
    age: "33歳・男性・公務員",
    rating: 4,
    title: "マッチングアプリからの乗り換えで大正解",
  },
];

const badReviews = [
  {
    text: "月6名の紹介があるとのことでしたが、自分の希望条件が厳しかったのか、毎月3〜4名しか紹介されない月もありました。コーディネーターさんに相談したら「条件を少し広げましょう」とアドバイスされましたが、妥協するために高い会費を払っているわけではないので少しモヤモヤしました。会員数が約3.2万人と大手の中ではやや少なめなので、希望条件が細かい方は物足りなさを感じるかもしれません。",
    age: "35歳・男性・会社員",
    rating: 3,
    title: "希望条件が厳しいと紹介人数が少なくなる",
  },
  {
    text: "成婚料がないのは嬉しい反面、コーディネーターさんのモチベーションが成婚に直結していないのでは？と感じる場面がありました。お見合いのフィードバックも「良かったと思います」程度で、もう少し踏み込んだアドバイスが欲しかったです。仲人型の相談所と比べると、サポートの手厚さでは一歩劣る印象。自分から積極的に動ける人には良いですが、受け身の方は物足りないかも。",
    age: "32歳・女性・教師",
    rating: 3,
    title: "サポートの手厚さは仲人型には及ばない",
  },
  {
    text: "店舗は27店舗あると書いてありますが、地方在住の私の近くにはなく、オンライン対応でした。オンラインでの面談はできましたが、やはり対面と比べると相談しにくいですし、お見合いの場所の選定なども自分でやる必要がありました。都市部の方にはいいサービスだと思いますが、地方在住者にはやや不便な点もあります。",
    age: "28歳・女性・介護職",
    rating: 2,
    title: "地方在住だとオンライン対応の限界を感じる",
  },
];

const faqItems = [
  {
    question: "ゼクシィ縁結びエージェントの料金体系を教えてください",
    answer:
      "入会金33,000円と月会費のみのシンプルな料金体系です。月会費はシンプルプラン9,900円、スタンダードプラン17,600円、プレミアプラン25,300円の3プランがあります。お見合い料・成婚料は全プラン無料です。スタンダードプランが最も人気で、月6名の紹介と自由検索が利用できます。",
  },
  {
    question: "オリコン顧客満足度8年連続1位は本当ですか？",
    answer:
      "はい、ゼクシィ縁結びエージェントはオリコン顧客満足度調査の結婚相談所ランキングにおいて、2017年から2024年まで8年連続で総合1位を獲得しています。特に「コストパフォーマンス」「スタッフの対応」「紹介・マッチング」の項目で高い評価を受けています。",
  },
  {
    question: "ゼクシィ縁結びエージェントの会員数はどのくらいですか？",
    answer:
      "ゼクシィ縁結びエージェント自体の会員に加え、コネクトシップに加盟しているため、約3.2万人の会員とマッチングが可能です。コネクトシップにはパートナーエージェントやエン婚活エージェントなど複数の結婚相談所が加盟しており、他社の会員とも出会えます。",
  },
  {
    question: "ゼクシィ縁結びエージェントとゼクシィ縁結びの違いは何ですか？",
    answer:
      "ゼクシィ縁結びエージェントは専任コーディネーターがつく結婚相談所サービスで、ゼクシィ縁結びはマッチングアプリです。アプリ版は月額4,378円〜で手軽ですが自力での活動が中心。エージェント版はコーディネーターによる紹介やサポートがあり、より本格的な婚活が可能です。料金は高いですが、成婚までのスピードや成功率はエージェント版の方が高い傾向にあります。",
  },
  {
    question: "ゼクシィ縁結びエージェントの退会方法と注意点は？",
    answer:
      "退会はコーディネーターに申し出るか、各店舗に連絡することで手続きできます。月会費は退会申請月の翌月末まで発生します。入会から8日以内であればクーリングオフが適用されます。なお、休会制度もあり、月額費用を抑えて一時的に活動を停止することも可能です。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "ゼクシィ縁結びエージェントの口コミ・評判｜オリコン8年連続1位の実力を検証",
  author: {
    "@type": "Organization",
    name: "結婚相談所比較ナビ",
    url: "https://kekkon-navi.pages.dev",
  },
  publisher: {
    "@type": "Organization",
    name: "結婚相談所比較ナビ",
    url: "https://kekkon-navi.pages.dev",
    logo: {
      "@type": "ImageObject",
      url: "https://kekkon-navi.pages.dev/logo.png",
    },
  },
  datePublished: "2026-04-15",
  dateModified: "2026-04-15",
  description:
    "ゼクシィ縁結びエージェントの口コミ・評判を徹底調査。オリコン顧客満足度8年連続1位の実力、料金体系、サポート内容を詳しく解説。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://kekkon-navi.pages.dev/reviews/zexy/",
  },
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "ホーム",
      item: "https://kekkon-navi.pages.dev/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "業者レビュー",
      item: "https://kekkon-navi.pages.dev/reviews/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "ゼクシィ縁結びエージェント",
      item: "https://kekkon-navi.pages.dev/reviews/zexy/",
    },
  ],
};

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="text-[#c9a76c]" aria-label={`${rating}点`}>
      {"★".repeat(rating)}
      {"☆".repeat(5 - rating)}
    </span>
  );
}

export default function ZexyReviewPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />

      <Breadcrumb items={breadcrumbItems} />

      {/* Hero */}
      <section className="relative overflow-hidden py-12 md:py-16">
        <div className="absolute inset-0 bg-gradient-to-br from-[#fdf2f6] via-[#faf5ee] to-[#f3eef7]" />
        <div className="absolute top-10 right-10 w-32 h-32 bg-[#c45b84]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-[#9b8ec4]/10 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="inline-block text-xs font-semibold text-[#c9a76c] bg-[#faf5ee] px-4 py-1.5 rounded-full mb-4 tracking-wider border border-[#f0dde3]">
            業者レビュー
          </p>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            ゼクシィ縁結びエージェントの
            <br className="hidden md:block" />
            <span className="text-gradient">口コミ・評判</span>を徹底検証
          </h1>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            オリコン顧客満足度調査で8年連続1位を獲得した実力派。
            <br className="hidden md:block" />
            月17,600円のシンプル料金と専任コーディネーターの実態に迫ります。
          </p>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="card">
            <p className="text-sm font-bold text-gray-900 mb-3">
              この記事の目次
            </p>
            <ol className="space-y-2 text-sm">
              <li>
                <a
                  href="#overview"
                  className="text-[#c45b84] hover:underline"
                >
                  1. ゼクシィ縁結びエージェントの基本情報
                </a>
              </li>
              <li>
                <a
                  href="#good-reviews"
                  className="text-[#c45b84] hover:underline"
                >
                  2. 良い口コミ・評判
                </a>
              </li>
              <li>
                <a
                  href="#bad-reviews"
                  className="text-[#c45b84] hover:underline"
                >
                  3. 悪い口コミ・評判
                </a>
              </li>
              <li>
                <a
                  href="#merits-demerits"
                  className="text-[#c45b84] hover:underline"
                >
                  4. メリット・デメリットまとめ
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-[#c45b84] hover:underline"
                >
                  5. 料金プラン詳細
                </a>
              </li>
              <li>
                <a href="#flow" className="text-[#c45b84] hover:underline">
                  6. 入会から成婚までの流れ
                </a>
              </li>
              <li>
                <a
                  href="#recommended"
                  className="text-[#c45b84] hover:underline"
                >
                  7. こんな人におすすめ
                </a>
              </li>
              <li>
                <a href="#faq" className="text-[#c45b84] hover:underline">
                  8. よくある質問
                </a>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section id="overview" className="py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#c45b84] rounded-full" />
            ゼクシィ縁結びエージェントの基本情報
          </h2>
          <div className="card">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b border-[#f0dde3]">
                    <th className="py-3 px-4 text-left bg-[#fdf8fa] font-medium text-gray-700 w-1/3">
                      運営会社
                    </th>
                    <td className="py-3 px-4">
                      株式会社リクルート
                    </td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <th className="py-3 px-4 text-left bg-[#fdf8fa] font-medium text-gray-700">
                      サービス種別
                    </th>
                    <td className="py-3 px-4">
                      ハイブリッド型（データマッチング＋専任コーディネーター）
                    </td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <th className="py-3 px-4 text-left bg-[#fdf8fa] font-medium text-gray-700">
                      会員数
                    </th>
                    <td className="py-3 px-4">
                      約3.2万人（コネクトシップ加盟）
                    </td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <th className="py-3 px-4 text-left bg-[#fdf8fa] font-medium text-gray-700">
                      成婚率
                    </th>
                    <td className="py-3 px-4">26.2%（会員同士）</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <th className="py-3 px-4 text-left bg-[#fdf8fa] font-medium text-gray-700">
                      主な年齢層
                    </th>
                    <td className="py-3 px-4">20代後半〜30代</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <th className="py-3 px-4 text-left bg-[#fdf8fa] font-medium text-gray-700">
                      店舗数
                    </th>
                    <td className="py-3 px-4">
                      全国27店舗 + オンライン対応
                    </td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <th className="py-3 px-4 text-left bg-[#fdf8fa] font-medium text-gray-700">
                      特筆事項
                    </th>
                    <td className="py-3 px-4">
                      オリコン顧客満足度調査 8年連続1位
                    </td>
                  </tr>
                  <tr>
                    <th className="py-3 px-4 text-left bg-[#fdf8fa] font-medium text-gray-700">
                      オンライン対応
                    </th>
                    <td className="py-3 px-4">
                      入会〜お見合いまでオンライン可
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 p-4 bg-[#fdf8fa] rounded-xl border border-[#f0dde3]">
            <h3 className="font-bold text-gray-900 mb-2">
              ゼクシィ縁結びエージェントとは？
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              ゼクシィ縁結びエージェントは、ウェディング情報誌「ゼクシィ」でおなじみのリクルートグループが運営する結婚相談所です。最大の特徴は、オリコン顧客満足度調査で8年連続1位を獲得している圧倒的な顧客満足度。入会金33,000円と月会費のみで、お見合い料・成婚料が一切かからないシンプルな料金体系も人気の理由です。専任のマッチングコーディネーターがプロフィール作成から交際中のアドバイスまでサポートし、AIを活用したデータマッチングとの「ハイブリッド型」で効率的に理想のパートナーを見つけることができます。コネクトシップに加盟しており、他社の会員とも出会える点も強みです。
            </p>
          </div>
        </div>
      </section>

      {/* Good Reviews */}
      <section id="good-reviews" className="py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#c45b84] rounded-full" />
            ゼクシィ縁結びエージェントの良い口コミ・評判
          </h2>
          <div className="space-y-4">
            {goodReviews.map((review, i) => (
              <div
                key={i}
                className="card hover:bg-[#fdf8fa] transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-gray-900 text-sm">
                    {review.title}
                  </h3>
                  <StarRating rating={review.rating} />
                </div>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                  {review.text}
                </p>
                <p className="text-xs text-gray-500 text-right">
                  {review.age}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bad Reviews */}
      <section id="bad-reviews" className="py-8 bg-gray-50/50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#9b8ec4] rounded-full" />
            ゼクシィ縁結びエージェントの悪い口コミ・評判
          </h2>
          <div className="space-y-4">
            {badReviews.map((review, i) => (
              <div
                key={i}
                className="card hover:bg-[#fdf8fa] transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-gray-900 text-sm">
                    {review.title}
                  </h3>
                  <StarRating rating={review.rating} />
                </div>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                  {review.text}
                </p>
                <p className="text-xs text-gray-500 text-right">
                  {review.age}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Merits & Demerits */}
      <section id="merits-demerits" className="py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#c45b84] rounded-full" />
            メリット・デメリットまとめ
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="font-bold text-[#c45b84] mb-4 flex items-center gap-2">
                <span className="text-lg">&#9675;</span> メリット
              </h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#c45b84] mt-0.5 shrink-0">&#10003;</span>
                  <span>
                    オリコン顧客満足度8年連続1位の実績で安心感が高い
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c45b84] mt-0.5 shrink-0">&#10003;</span>
                  <span>
                    お見合い料・成婚料が完全無料でトータルコストを大幅に抑えられる
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c45b84] mt-0.5 shrink-0">&#10003;</span>
                  <span>
                    リクルートグループ運営で企業としての信頼性が高い
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c45b84] mt-0.5 shrink-0">&#10003;</span>
                  <span>
                    入会金33,000円＋月会費のみのシンプルな料金体系で追加費用の心配がない
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c45b84] mt-0.5 shrink-0">&#10003;</span>
                  <span>
                    AIマッチングと専任コーディネーターのハイブリッドで効率的な婚活ができる
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c45b84] mt-0.5 shrink-0">&#10003;</span>
                  <span>
                    オンラインでの入会・面談・お見合いに対応しており忙しい方も活動しやすい
                  </span>
                </li>
              </ul>
            </div>
            <div className="card">
              <h3 className="font-bold text-[#9b8ec4] mb-4 flex items-center gap-2">
                <span className="text-lg">&#9651;</span> デメリット
              </h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#9b8ec4] mt-0.5 shrink-0">&#9650;</span>
                  <span>
                    会員数は約3.2万人で、IBJ系列と比べるとやや少ない
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9b8ec4] mt-0.5 shrink-0">&#9650;</span>
                  <span>
                    仲人型の相談所と比べるとサポートの手厚さでは劣る面がある
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9b8ec4] mt-0.5 shrink-0">&#9650;</span>
                  <span>
                    成婚料がない分、コーディネーターの成婚へのインセンティブが弱い可能性
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9b8ec4] mt-0.5 shrink-0">&#9650;</span>
                  <span>
                    地方在住者はオンライン対応のみとなり、対面サポートに制限がある
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9b8ec4] mt-0.5 shrink-0">&#9650;</span>
                  <span>
                    希望条件が厳しい場合、月の紹介人数が規定より少なくなることがある
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-8 bg-gray-50/50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#c9a76c] rounded-full" />
            料金プラン詳細
          </h2>
          <div className="card">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-[#f0dde3]">
                    <th className="py-3 px-4 text-left font-bold text-gray-900">
                      項目
                    </th>
                    <th className="py-3 px-4 text-center font-bold text-gray-900">
                      シンプルプラン
                    </th>
                    <th className="py-3 px-4 text-center font-bold text-[#c45b84]">
                      スタンダードプラン
                    </th>
                    <th className="py-3 px-4 text-center font-bold text-gray-900">
                      プレミアプラン
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#f0dde3]">
                    <td className="py-3 px-4 font-medium text-gray-700">
                      入会金
                    </td>
                    <td className="py-3 px-4 text-center">33,000円</td>
                    <td className="py-3 px-4 text-center bg-[#fdf8fa]">
                      33,000円
                    </td>
                    <td className="py-3 px-4 text-center">33,000円</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <td className="py-3 px-4 font-medium text-gray-700">
                      月会費
                    </td>
                    <td className="py-3 px-4 text-center">9,900円</td>
                    <td className="py-3 px-4 text-center bg-[#fdf8fa] font-bold text-[#c45b84]">
                      17,600円
                    </td>
                    <td className="py-3 px-4 text-center">25,300円</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <td className="py-3 px-4 font-medium text-gray-700">
                      お見合い料
                    </td>
                    <td className="py-3 px-4 text-center">無料</td>
                    <td className="py-3 px-4 text-center bg-[#fdf8fa]">
                      無料
                    </td>
                    <td className="py-3 px-4 text-center">無料</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <td className="py-3 px-4 font-medium text-gray-700">
                      成婚料
                    </td>
                    <td className="py-3 px-4 text-center">無料</td>
                    <td className="py-3 px-4 text-center bg-[#fdf8fa]">
                      無料
                    </td>
                    <td className="py-3 px-4 text-center">無料</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <td className="py-3 px-4 font-medium text-gray-700">
                      紹介人数/月
                    </td>
                    <td className="py-3 px-4 text-center">なし</td>
                    <td className="py-3 px-4 text-center bg-[#fdf8fa]">
                      6名
                    </td>
                    <td className="py-3 px-4 text-center">6名</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <td className="py-3 px-4 font-medium text-gray-700">
                      コーディネーター面談
                    </td>
                    <td className="py-3 px-4 text-center">なし</td>
                    <td className="py-3 px-4 text-center bg-[#fdf8fa]">
                      あり
                    </td>
                    <td className="py-3 px-4 text-center">
                      あり（フォロー充実）
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-gray-700">
                      年間費用目安
                    </td>
                    <td className="py-3 px-4 text-center">約151,800円</td>
                    <td className="py-3 px-4 text-center bg-[#fdf8fa] font-bold">
                      約244,200円
                    </td>
                    <td className="py-3 px-4 text-center">約336,600円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              ※ 料金はすべて税込表示です。最新の料金は公式サイトでご確認ください。
            </p>
          </div>

          <div className="mt-6 p-4 bg-[#fdf8fa] rounded-xl border border-[#f0dde3]">
            <h3 className="font-bold text-gray-900 mb-2">
              料金に関する編集部コメント
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              ゼクシィ縁結びエージェント最大の魅力は、お見合い料・成婚料が完全無料という点です。仲人型の相談所では成婚料だけで20万円以上かかるケースが多い中、どれだけお見合いしても追加費用がゼロなのは大きなアドバンテージ。スタンダードプランなら年間約24万円と、大手結婚相談所の中でもトップクラスのコストパフォーマンスを実現しています。ただし、シンプルプランはコーディネーターの紹介がないため、本格的に婚活するならスタンダードプラン以上がおすすめです。
            </p>
          </div>
        </div>
      </section>

      {/* Flow */}
      <section id="flow" className="py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#c45b84] rounded-full" />
            入会から成婚までの流れ
          </h2>
          <div className="space-y-4">
            {[
              {
                step: 1,
                title: "無料カウンセリング",
                description:
                  "まずはオンラインまたは店舗で無料カウンセリングを受けます。サービス内容、料金プラン、活動の流れを丁寧に説明してもらえます。無理な勧誘はなく、自分のペースで検討できます。複数の結婚相談所と比較検討するために、まずは気軽に予約してみましょう。",
              },
              {
                step: 2,
                title: "入会手続き・プロフィール作成",
                description:
                  "入会を決めたら、必要書類（本人確認書類、独身証明書、収入証明書など）を提出して手続きを行います。コーディネーターと一緒にプロフィールを作成し、写真選定や自己PR文の作成をサポートしてもらえます。このプロフィールが第一印象を左右するため、しっかり作り込むことが大切です。",
              },
              {
                step: 3,
                title: "お相手探し・マッチング",
                description:
                  "AIによるデータマッチングと、専任コーディネーターからの紹介の両方でお相手を探します。スタンダードプラン以上なら月6名のコーディネーター紹介に加え、自分でも自由にプロフィール検索が可能。コネクトシップ加盟の他社会員とも出会えるので、出会いの幅が広がります。",
              },
              {
                step: 4,
                title: "お見合い",
                description:
                  "マッチングが成立したら、ホテルラウンジやカフェでお見合いを行います。オンラインお見合いにも対応。お見合い料は何回でも無料なので、積極的にお見合いを組みましょう。お見合い後は双方の感想をコーディネーターが確認し、次のステップへのアドバイスをもらえます。",
              },
              {
                step: 5,
                title: "仮交際・真剣交際",
                description:
                  "お互いに好感を持てば仮交際に進みます。仮交際中は複数のお相手と同時にお会いすることも可能。その中からお一人に絞って真剣交際に進みます。コーディネーターが交際中の悩みや進展についてもサポートしてくれます。",
              },
              {
                step: 6,
                title: "成婚退会",
                description:
                  "お互いに結婚の意思が固まったら、成婚退会となります。成婚料は無料なので、追加費用の心配はありません。平均活動期間は約6〜12ヶ月。退会後もゼクシィならではのウェディング関連サービスの紹介を受けられます。",
              },
            ].map((item) => (
              <div key={item.step} className="card flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-[#c45b84] text-white flex items-center justify-center font-bold text-sm">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended */}
      <section id="recommended" className="py-8 bg-gray-50/50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#c9a76c] rounded-full" />
            ゼクシィ縁結びエージェントはこんな人におすすめ
          </h2>
          <div className="card">
            <ul className="space-y-4 text-sm text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#c9a76c] text-lg shrink-0">&#9733;</span>
                <div>
                  <span className="font-bold text-gray-900">
                    コストを抑えて婚活したい方
                  </span>
                  <p className="mt-1 text-gray-600">
                    お見合い料・成婚料が完全無料で、月会費17,600円のみ。年間約24万円で大手結婚相談所のサービスを受けられるコスパの良さは業界トップクラスです。
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#c9a76c] text-lg shrink-0">&#9733;</span>
                <div>
                  <span className="font-bold text-gray-900">
                    実績と信頼性を重視する方
                  </span>
                  <p className="mt-1 text-gray-600">
                    オリコン8年連続1位＋リクルートグループ運営という安心感。初めての結婚相談所で「間違いない選択」をしたい方に最適です。
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#c9a76c] text-lg shrink-0">&#9733;</span>
                <div>
                  <span className="font-bold text-gray-900">
                    忙しくてなかなか時間が取れない方
                  </span>
                  <p className="mt-1 text-gray-600">
                    入会からお見合いまでオンライン対応が可能。面談もオンラインでできるため、仕事や私生活が忙しい方でもスキマ時間で婚活を進められます。
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#c9a76c] text-lg shrink-0">&#9733;</span>
                <div>
                  <span className="font-bold text-gray-900">
                    シンプルでわかりやすい料金体系を求める方
                  </span>
                  <p className="mt-1 text-gray-600">
                    追加費用が一切ないため、「いくらかかるか分からない」という不安がありません。予算計画が立てやすいのも大きなメリットです。
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#c9a76c] text-lg shrink-0">&#9733;</span>
                <div>
                  <span className="font-bold text-gray-900">
                    積極的にお見合いをたくさん組みたい方
                  </span>
                  <p className="mt-1 text-gray-600">
                    お見合い料が無料なので、何回お見合いしても費用が変わりません。たくさんの方と会って比較検討したい方にぴったりです。
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="mt-6 p-4 bg-white rounded-xl border border-[#f0dde3]">
            <h3 className="font-bold text-gray-900 mb-2">
              逆にこんな方には向いていないかも
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-[#9b8ec4] shrink-0">&#9654;</span>
                手取り足取りの手厚いサポートを求める方（仲人型のサンマリエやIBJメンバーズの方が向いています）
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#9b8ec4] shrink-0">&#9654;</span>
                地方在住で対面でのサポートを重視する方（全国展開のツヴァイの方が店舗数が多いです）
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#9b8ec4] shrink-0">&#9654;</span>
                できるだけ多くの会員と出会いたい方（会員数25.4万人のnaco-doや10万人超のツヴァイの方が選択肢が広がります）
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#c45b84] rounded-full" />
            よくある質問
          </h2>
          <div className="space-y-3">
            {faqItems.map((faq, i) => (
              <details
                key={i}
                className="card group cursor-pointer"
              >
                <summary className="font-bold text-sm text-gray-900 flex items-center justify-between list-none">
                  <span className="flex items-center gap-2">
                    <span className="text-[#c45b84] font-bold">Q.</span>
                    {faq.question}
                  </span>
                  <span className="text-[#c45b84] transition-transform group-open:rotate-180">
                    &#9660;
                  </span>
                </summary>
                <p className="mt-3 text-sm text-gray-700 leading-relaxed pl-6">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-8 bg-gray-50/50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#c9a76c] rounded-full" />
            関連ページ
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href="/ranking/"
              className="card hover:bg-[#fdf8fa] transition-colors group"
            >
              <p className="text-xs text-[#c45b84] font-semibold mb-1">
                ランキング
              </p>
              <p className="font-bold text-gray-900 text-sm group-hover:text-[#c45b84] transition-colors">
                結婚相談所おすすめ6選を徹底比較
              </p>
              <p className="text-xs text-gray-500 mt-1">
                6社の料金・会員数・成婚率を一覧で比較できます
              </p>
            </Link>
            <Link
              href="/reviews/zwei/"
              className="card hover:bg-[#fdf8fa] transition-colors group"
            >
              <p className="text-xs text-[#c9a76c] font-semibold mb-1">
                レビュー
              </p>
              <p className="font-bold text-gray-900 text-sm group-hover:text-[#c45b84] transition-colors">
                ツヴァイの口コミ・評判
              </p>
              <p className="text-xs text-gray-500 mt-1">
                IBJ提携で会員10万人超のツヴァイを詳しくレビュー
              </p>
            </Link>
            <Link
              href="/reviews/naco-do/"
              className="card hover:bg-[#fdf8fa] transition-colors group"
            >
              <p className="text-xs text-[#c9a76c] font-semibold mb-1">
                レビュー
              </p>
              <p className="font-bold text-gray-900 text-sm group-hover:text-[#c45b84] transition-colors">
                naco-doの口コミ・評判
              </p>
              <p className="text-xs text-gray-500 mt-1">
                月6,980円のオンライン結婚相談所を徹底検証
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
