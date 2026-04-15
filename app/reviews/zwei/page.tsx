import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "ツヴァイの口コミ・評判｜IBJ提携で会員10万人超の実力を検証",
  description:
    "ツヴァイの口コミ・評判を徹底調査。IBJ提携で業界最大級の会員10万2千人、全国50店超の展開力、月15,400円〜のデータマッチング+仲人型ハイブリッドサービスの実態を詳しく解説。利用者の良い口コミ・悪い口コミも掲載。",
  keywords: "ツヴァイ 口コミ, ツヴァイ 評判, ツヴァイ 料金",
  alternates: {
    canonical: "https://kekkon-navi.pages.dev/reviews/zwei/",
  },
  openGraph: {
    title: "ツヴァイの口コミ・評判｜IBJ提携で会員10万人超の実力を検証",
    description:
      "ツヴァイの口コミ・評判を徹底調査。IBJ提携で業界最大級の会員ネットワーク、全国50店超の店舗展開を詳しく解説。",
    url: "https://kekkon-navi.pages.dev/reviews/zwei/",
    siteName: "結婚相談所比較ナビ",
    type: "article",
  },
};

const breadcrumbItems = [
  { label: "業者レビュー", href: "/reviews/" },
  { label: "ツヴァイ" },
];

const goodReviews = [
  {
    text: "IBJとの提携により、ツヴァイ自体の会員に加えてIBJの会員も検索できるのが最大のメリットです。合計10万人を超える会員の中からお相手を探せるので、「いい人がいない」という悩みはほぼありませんでした。私の場合、ツヴァイ会員のデータマッチングで出会った方と3ヶ月目でカップリングし、半年後に成婚退会できました。会員数の多さは本当に正義です。",
    age: "33歳・女性・IT企業勤務",
    rating: 5,
    title: "IBJ提携で会員数10万人超は圧倒的なアドバンテージ",
  },
  {
    text: "全国に50店舗以上あるのが入会の決め手でした。転勤族で地方都市に住んでいますが、近くに店舗があるのでコーディネーターと直接面談できます。他の大手相談所だと店舗が都市部にしかなく、オンライン対応のみだったので。店舗スタッフの方も温かく迎えてくれて、地方でも都市部と変わらないサービスが受けられています。",
    age: "36歳・男性・メーカー勤務",
    rating: 5,
    title: "全国50店舗以上は地方在住者には心強い",
  },
  {
    text: "20代割引プランを利用して入会しました。通常の初期費用より大幅に安くなったので、20代のうちに始めて本当に良かったです。データマッチングで価値観や性格の合う方を紹介してもらえるだけでなく、コンサルタントの方が「この方はどうですか？」と追加で紹介してくれることもあり、効率よくお相手探しができました。5ヶ月で素敵な方と出会えて大満足です。",
    age: "27歳・女性・保育士",
    rating: 5,
    title: "20代割引プランでお得に婚活スタートできた",
  },
  {
    text: "条件マッチング、価値観マッチング、AIマッチングの3種類のマッチング方法があるのがツヴァイの特徴。最初は条件マッチングで年収や年齢を絞っていましたが、コンサルタントの勧めで価値観マッチングも試したところ、条件だけでは出会えなかったタイプの方と出会えました。結局その方と成婚したので、多角的なマッチングは効果ありです。",
    age: "35歳・男性・銀行員",
    rating: 4,
    title: "3種類のマッチング方法で出会いの幅が広がる",
  },
  {
    text: "イオングループの運営ということで安心感がありました。結婚相談所はたくさんありますが、やはり大手グループ企業の運営だと個人情報の管理やコンプライアンスの面でしっかりしている印象です。実際、勧誘も押し付けがましいところはなく、入会前の説明も丁寧でした。料金も月15,400円とリーズナブルで、成婚料もかからないのでトータルコストを抑えられました。",
    age: "31歳・女性・薬剤師",
    rating: 4,
    title: "イオングループ運営の安心感と手頃な料金",
  },
];

const badReviews = [
  {
    text: "初期費用が115,500円と少し高めに感じました。ゼクシィ縁結びエージェントの入会金33,000円と比較するとかなり差があります。月会費は15,400円とリーズナブルですが、初期費用のハードルが高いのはマイナスポイント。分割払いに対応してほしいです。IBJ会員とお見合いが成立した場合、別途費用がかかることがあるのも事前に確認しておくべきです。",
    age: "29歳・男性・営業職",
    rating: 3,
    title: "初期費用115,500円はやや高いと感じた",
  },
  {
    text: "店舗数が多い分、店舗によってコンサルタントの質にばらつきがある印象です。最初に担当してくれた方はとても丁寧でしたが、異動で担当が変わった後の方はあまり積極的に提案してくれず、月に一度の面談も形式的に感じました。担当者との相性は運次第なところがあるので、合わないと感じたら遠慮なく変更を申し出ることをおすすめします。",
    age: "34歳・女性・事務職",
    rating: 2,
    title: "担当コンサルタントの質にばらつきがある",
  },
  {
    text: "成婚率が非公開なのが少し不安材料でした。IBJメンバーズやパートナーエージェントは成婚率を公表しているのに、ツヴァイは非公開。会員数は多いのですが、実際にどのくらいの確率で成婚できるのかが分からないまま入会することになります。結果的に私は9ヶ月で成婚できましたが、データを公表してくれた方が安心できると思います。",
    age: "38歳・男性・管理職",
    rating: 3,
    title: "成婚率を公開していないのが気になる",
  },
];

const faqItems = [
  {
    question: "ツヴァイの料金体系はどうなっていますか？",
    answer:
      "ツヴァイの料金は初期費用115,500円（入会金＋活動初期費用）、月会費15,400円で、お見合い料・成婚料は基本無料です。ただし、IBJ会員とのお見合い成立時には別途費用がかかる場合があります。20代向けの割引プランも用意されており、若い世代でも始めやすい料金設定となっています。年間の費用目安は約300,300円です。",
  },
  {
    question: "ツヴァイの会員数はどのくらいですか？",
    answer:
      "ツヴァイはIBJと業務提携しており、ツヴァイ自体の会員とIBJ会員を合わせると10万2千人以上の会員ネットワークを持っています。これは業界最大級の規模です。会員の年齢層は20代〜40代前半が中心で、男女比もバランスが取れています。",
  },
  {
    question: "ツヴァイのマッチング方法にはどんな種類がありますか？",
    answer:
      "ツヴァイでは3種類のマッチング方法を用意しています。（1）条件マッチング：年齢・年収・居住地などの条件でお相手を検索。（2）価値観マッチング：性格や価値観の相性をAIが分析してお相手を提案。（3）インプレッションマッチング：お相手のプロフィール写真と基本情報からフィーリングで選ぶ方式。複数の方法を組み合わせることで、条件だけでは見つからない相性の良い方との出会いが期待できます。",
  },
  {
    question: "ツヴァイの20代割引とは何ですか？",
    answer:
      "ツヴァイでは20代の方を対象とした特別割引プランを用意しています。通常の初期費用から大幅な割引が適用され、若い世代でも気軽に始められる料金設定になっています。具体的な割引額は時期や店舗によって異なるため、無料カウンセリング時にご確認ください。20代は出会いの選択肢が広いため、早めに始めることで有利に婚活を進められます。",
  },
  {
    question: "ツヴァイとIBJメンバーズの違いは何ですか？",
    answer:
      "ツヴァイはIBJと「提携」関係にあり、データマッチングを軸にしたハイブリッド型サービスです。一方、IBJメンバーズはIBJ「直営」の仲人型サービスです。ツヴァイは初期費用115,500円・成婚料無料と料金が抑えめで、自分でも積極的に検索できる方向き。IBJメンバーズは初期費用181,500円・成婚料220,000円と高めですが、専任カウンセラーによる手厚いサポートが受けられます。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "ツヴァイの口コミ・評判｜IBJ提携で会員10万人超の実力を検証",
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
    "ツヴァイの口コミ・評判を徹底調査。IBJ提携で会員10万人超、全国50店舗以上の展開力を詳しく解説。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://kekkon-navi.pages.dev/reviews/zwei/",
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
      name: "ツヴァイ",
      item: "https://kekkon-navi.pages.dev/reviews/zwei/",
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

export default function ZweiReviewPage() {
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
            ツヴァイの
            <br className="hidden md:block" />
            <span className="text-gradient">口コミ・評判</span>を徹底検証
          </h1>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            IBJ提携で業界最大級の会員10万人超のネットワーク。
            <br className="hidden md:block" />
            全国50店舗以上を展開するツヴァイの実力と評判を徹底調査しました。
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
                <a href="#overview" className="text-[#c45b84] hover:underline">
                  1. ツヴァイの基本情報
                </a>
              </li>
              <li>
                <a href="#good-reviews" className="text-[#c45b84] hover:underline">
                  2. 良い口コミ・評判
                </a>
              </li>
              <li>
                <a href="#bad-reviews" className="text-[#c45b84] hover:underline">
                  3. 悪い口コミ・評判
                </a>
              </li>
              <li>
                <a href="#merits-demerits" className="text-[#c45b84] hover:underline">
                  4. メリット・デメリットまとめ
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-[#c45b84] hover:underline">
                  5. 料金プラン詳細
                </a>
              </li>
              <li>
                <a href="#flow" className="text-[#c45b84] hover:underline">
                  6. 入会から成婚までの流れ
                </a>
              </li>
              <li>
                <a href="#recommended" className="text-[#c45b84] hover:underline">
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
            ツヴァイの基本情報
          </h2>
          <div className="card">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b border-[#f0dde3]">
                    <th className="py-3 px-4 text-left bg-[#fdf8fa] font-medium text-gray-700 w-1/3">運営会社</th>
                    <td className="py-3 px-4">株式会社ZWEI（イオングループ）</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <th className="py-3 px-4 text-left bg-[#fdf8fa] font-medium text-gray-700">サービス種別</th>
                    <td className="py-3 px-4">ハイブリッド型（データマッチング＋仲人型）</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <th className="py-3 px-4 text-left bg-[#fdf8fa] font-medium text-gray-700">会員数</th>
                    <td className="py-3 px-4">約10万2千人（IBJ提携含む）</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <th className="py-3 px-4 text-left bg-[#fdf8fa] font-medium text-gray-700">成婚率</th>
                    <td className="py-3 px-4">非公開</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <th className="py-3 px-4 text-left bg-[#fdf8fa] font-medium text-gray-700">主な年齢層</th>
                    <td className="py-3 px-4">20代〜40代前半</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <th className="py-3 px-4 text-left bg-[#fdf8fa] font-medium text-gray-700">店舗数</th>
                    <td className="py-3 px-4">全国50店舗以上</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <th className="py-3 px-4 text-left bg-[#fdf8fa] font-medium text-gray-700">特筆事項</th>
                    <td className="py-3 px-4">IBJ提携で業界最大級の会員ネットワーク</td>
                  </tr>
                  <tr>
                    <th className="py-3 px-4 text-left bg-[#fdf8fa] font-medium text-gray-700">オンライン対応</th>
                    <td className="py-3 px-4">オンラインお見合い可</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 p-4 bg-[#fdf8fa] rounded-xl border border-[#f0dde3]">
            <h3 className="font-bold text-gray-900 mb-2">ツヴァイとは？</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              ツヴァイはイオングループが運営する結婚相談所で、IBJと業務提携することで合計10万2千人以上の業界最大級の会員ネットワークを誇ります。全国50店舗以上を展開しており、地方在住の方でも近くの店舗で対面サポートを受けられるのが大きな特徴です。データマッチングと仲人型を融合したハイブリッド型サービスで、条件マッチング・価値観マッチング・AIマッチングの3つのアプローチでお相手を探せます。20代向けの割引プランも用意されており、若い世代から40代まで幅広い年齢層に対応。お見合い料・成婚料が基本無料で、コストパフォーマンスにも優れています。
            </p>
          </div>
        </div>
      </section>

      {/* Good Reviews */}
      <section id="good-reviews" className="py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#c45b84] rounded-full" />
            ツヴァイの良い口コミ・評判
          </h2>
          <div className="space-y-4">
            {goodReviews.map((review, i) => (
              <div key={i} className="card hover:bg-[#fdf8fa] transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-gray-900 text-sm">{review.title}</h3>
                  <StarRating rating={review.rating} />
                </div>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">{review.text}</p>
                <p className="text-xs text-gray-500 text-right">{review.age}</p>
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
            ツヴァイの悪い口コミ・評判
          </h2>
          <div className="space-y-4">
            {badReviews.map((review, i) => (
              <div key={i} className="card hover:bg-[#fdf8fa] transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-gray-900 text-sm">{review.title}</h3>
                  <StarRating rating={review.rating} />
                </div>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">{review.text}</p>
                <p className="text-xs text-gray-500 text-right">{review.age}</p>
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
                  <span>IBJ提携により会員数10万2千人超で業界最大級の出会いの母数</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c45b84] mt-0.5 shrink-0">&#10003;</span>
                  <span>全国50店舗以上の展開で地方在住者でも通える店舗がある</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c45b84] mt-0.5 shrink-0">&#10003;</span>
                  <span>条件・価値観・AIの3種類のマッチングで多角的にお相手探しが可能</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c45b84] mt-0.5 shrink-0">&#10003;</span>
                  <span>お見合い料・成婚料が基本無料でトータルコストを抑えやすい</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c45b84] mt-0.5 shrink-0">&#10003;</span>
                  <span>20代割引プランがあり若い世代でも始めやすい</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c45b84] mt-0.5 shrink-0">&#10003;</span>
                  <span>イオングループ運営の安心感と信頼性</span>
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
                  <span>初期費用115,500円がやや高めで入会のハードルになる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9b8ec4] mt-0.5 shrink-0">&#9650;</span>
                  <span>IBJ会員とのお見合い成立時に別途費用がかかる場合がある</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9b8ec4] mt-0.5 shrink-0">&#9650;</span>
                  <span>店舗によってコンサルタントの質にばらつきがある</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9b8ec4] mt-0.5 shrink-0">&#9650;</span>
                  <span>成婚率が非公開で実績が見えにくい</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9b8ec4] mt-0.5 shrink-0">&#9650;</span>
                  <span>仲人型ほどの密着サポートは期待しにくい</span>
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
                    <th className="py-3 px-4 text-left font-bold text-gray-900">項目</th>
                    <th className="py-3 px-4 text-center font-bold text-gray-900">ご紹介プラン</th>
                    <th className="py-3 px-4 text-center font-bold text-[#c45b84]">ご紹介+IBJプラン</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#f0dde3]">
                    <td className="py-3 px-4 font-medium text-gray-700">初期費用</td>
                    <td className="py-3 px-4 text-center">115,500円</td>
                    <td className="py-3 px-4 text-center bg-[#fdf8fa]">126,500円</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <td className="py-3 px-4 font-medium text-gray-700">月会費</td>
                    <td className="py-3 px-4 text-center">15,400円</td>
                    <td className="py-3 px-4 text-center bg-[#fdf8fa] font-bold text-[#c45b84]">17,600円</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <td className="py-3 px-4 font-medium text-gray-700">お見合い料</td>
                    <td className="py-3 px-4 text-center">無料</td>
                    <td className="py-3 px-4 text-center bg-[#fdf8fa]">無料</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <td className="py-3 px-4 font-medium text-gray-700">成婚料</td>
                    <td className="py-3 px-4 text-center">無料</td>
                    <td className="py-3 px-4 text-center bg-[#fdf8fa]">220,000円</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <td className="py-3 px-4 font-medium text-gray-700">紹介人数/月</td>
                    <td className="py-3 px-4 text-center">6名</td>
                    <td className="py-3 px-4 text-center bg-[#fdf8fa]">6名+IBJ検索</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-gray-700">年間費用目安</td>
                    <td className="py-3 px-4 text-center">約300,300円</td>
                    <td className="py-3 px-4 text-center bg-[#fdf8fa] font-bold">約557,700円（成婚時）</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              ※ 料金はすべて税込表示です。20代割引プランなど各種割引については無料カウンセリングでご確認ください。
            </p>
          </div>

          <div className="mt-6 p-4 bg-[#fdf8fa] rounded-xl border border-[#f0dde3]">
            <h3 className="font-bold text-gray-900 mb-2">料金に関する編集部コメント</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              ツヴァイの「ご紹介プラン」は成婚料無料で年間約30万円と、会員数10万人超のサービスとしてはリーズナブルな部類に入ります。一方、IBJ会員とも出会いたい場合は「ご紹介+IBJプラン」になり、成婚料220,000円が加算されるため、トータルコストは約55万円に。IBJの会員と出会えるメリットは大きいですが、コストとのバランスを考えて選択しましょう。20代の方は割引プランが利用できるので、早めのスタートがお得です。
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
                  "全国50店舗以上で無料カウンセリングを受けられます。サービス内容や料金の説明に加え、簡易的なマッチングシミュレーションで、どんなお相手と出会える可能性があるかを確認できます。オンラインでの相談にも対応しています。",
              },
              {
                step: 2,
                title: "入会・プロフィール作成",
                description:
                  "必要書類を提出して入会手続きを行います。マリッジコンサルタントと一緒にプロフィールを作成し、写真撮影のアドバイスも受けられます。希望条件やお相手に求める価値観なども丁寧にヒアリングしてもらえます。",
              },
              {
                step: 3,
                title: "3種類のマッチングでお相手探し",
                description:
                  "条件マッチング・価値観マッチング・AIマッチングの3つの方法でお相手を探します。ツヴァイの会員に加えてIBJプランならIBJ会員も検索可能。月最大6名の紹介を受けつつ、自分でもプロフィール検索ができます。",
              },
              {
                step: 4,
                title: "お見合い",
                description:
                  "マッチングが成立したら、ホテルラウンジやカフェでお見合いを行います。オンラインお見合いにも対応。お見合い料は無料なので、費用を気にせず積極的にお見合いを組めます。お見合い後はコンサルタントに感想を共有し、次のステップを相談します。",
              },
              {
                step: 5,
                title: "仮交際・真剣交際",
                description:
                  "お互いに好感を持てば仮交際へ。仮交際中は複数の方と同時に会うことが可能です。お一人に絞って真剣交際に進んだ後は、コンサルタントが二人の関係構築をサポートします。デートプランの提案や悩み相談にも対応してくれます。",
              },
              {
                step: 6,
                title: "成婚退会",
                description:
                  "結婚の意思が固まったら成婚退会。ご紹介プランなら成婚料は無料です。平均活動期間は約6〜12ヶ月。退会後もアフターフォローとして結婚に関する各種サービスの紹介を受けられます。",
              },
            ].map((item) => (
              <div key={item.step} className="card flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-[#c45b84] text-white flex items-center justify-center font-bold text-sm">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{item.description}</p>
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
            ツヴァイはこんな人におすすめ
          </h2>
          <div className="card">
            <ul className="space-y-4 text-sm text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#c9a76c] text-lg shrink-0">&#9733;</span>
                <div>
                  <span className="font-bold text-gray-900">出会いの母数を最大化したい方</span>
                  <p className="mt-1 text-gray-600">
                    IBJ提携で10万人超の会員にアクセスできるため、条件に合うお相手が見つかる可能性が高まります。「いい人がいない」という悩みを抱えにくいのが最大のメリットです。
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#c9a76c] text-lg shrink-0">&#9733;</span>
                <div>
                  <span className="font-bold text-gray-900">地方在住で近くに店舗がほしい方</span>
                  <p className="mt-1 text-gray-600">
                    全国50店舗以上は業界最多クラス。地方都市にも店舗があるため、対面でのサポートを受けやすいです。転勤が多い方でも各地の店舗でサポートを継続できます。
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#c9a76c] text-lg shrink-0">&#9733;</span>
                <div>
                  <span className="font-bold text-gray-900">20代で婚活をスタートしたい方</span>
                  <p className="mt-1 text-gray-600">
                    20代割引プランで初期費用を大幅に抑えられます。早めにスタートすることで出会いの幅も広がり、有利に婚活を進められます。
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#c9a76c] text-lg shrink-0">&#9733;</span>
                <div>
                  <span className="font-bold text-gray-900">データマッチングと仲人の両方を試したい方</span>
                  <p className="mt-1 text-gray-600">
                    条件検索だけでなく、価値観やAIによるマッチングも活用可能。コンサルタントの紹介も受けられるので、自分に合ったアプローチを見つけられます。
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#c9a76c] text-lg shrink-0">&#9733;</span>
                <div>
                  <span className="font-bold text-gray-900">大手企業の安心感を重視する方</span>
                  <p className="mt-1 text-gray-600">
                    イオングループ運営で個人情報管理やコンプライアンスの面で安心感があります。結婚相談所選びで企業の信頼性を重視する方に最適です。
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="mt-6 p-4 bg-white rounded-xl border border-[#f0dde3]">
            <h3 className="font-bold text-gray-900 mb-2">逆にこんな方には向いていないかも</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-[#9b8ec4] shrink-0">&#9654;</span>
                初期費用を極力抑えたい方（入会金33,000円のゼクシィや入会金29,800円のnaco-doの方が安価です）
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#9b8ec4] shrink-0">&#9654;</span>
                仲人型の手厚いサポートを求める方（サンマリエやIBJメンバーズの方が密着サポートが充実しています）
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#9b8ec4] shrink-0">&#9654;</span>
                成婚率のデータを重視して選びたい方（パートナーエージェントやIBJメンバーズは成婚率を公開しています）
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#c45b84] rounded-full" />
            ツヴァイと他社の比較
          </h2>
          <div className="card">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-[#f0dde3]">
                    <th className="py-3 px-4 text-left font-bold text-gray-900">比較項目</th>
                    <th className="py-3 px-4 text-center font-bold text-[#c45b84]">ツヴァイ</th>
                    <th className="py-3 px-4 text-center font-bold text-gray-900">ゼクシィ</th>
                    <th className="py-3 px-4 text-center font-bold text-gray-900">naco-do</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#f0dde3]">
                    <td className="py-3 px-4 font-medium text-gray-700">タイプ</td>
                    <td className="py-3 px-4 text-center bg-[#fdf8fa]">ハイブリッド型</td>
                    <td className="py-3 px-4 text-center">ハイブリッド型</td>
                    <td className="py-3 px-4 text-center">オンライン型</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <td className="py-3 px-4 font-medium text-gray-700">会員数</td>
                    <td className="py-3 px-4 text-center bg-[#fdf8fa] font-bold text-[#c45b84]">約10.2万人</td>
                    <td className="py-3 px-4 text-center">約3.2万人</td>
                    <td className="py-3 px-4 text-center">約25.4万人</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <td className="py-3 px-4 font-medium text-gray-700">初期費用</td>
                    <td className="py-3 px-4 text-center bg-[#fdf8fa]">115,500円</td>
                    <td className="py-3 px-4 text-center">33,000円</td>
                    <td className="py-3 px-4 text-center">29,800円</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <td className="py-3 px-4 font-medium text-gray-700">月会費</td>
                    <td className="py-3 px-4 text-center bg-[#fdf8fa]">15,400円</td>
                    <td className="py-3 px-4 text-center">17,600円</td>
                    <td className="py-3 px-4 text-center">6,980円〜</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <td className="py-3 px-4 font-medium text-gray-700">店舗数</td>
                    <td className="py-3 px-4 text-center bg-[#fdf8fa] font-bold text-[#c45b84]">50店舗超</td>
                    <td className="py-3 px-4 text-center">27店舗</td>
                    <td className="py-3 px-4 text-center">なし</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <td className="py-3 px-4 font-medium text-gray-700">年間費用</td>
                    <td className="py-3 px-4 text-center bg-[#fdf8fa]">約300,300円</td>
                    <td className="py-3 px-4 text-center">約244,200円</td>
                    <td className="py-3 px-4 text-center">約113,560円</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-gray-700">特徴</td>
                    <td className="py-3 px-4 text-center bg-[#fdf8fa]">3種マッチング</td>
                    <td className="py-3 px-4 text-center">オリコン1位</td>
                    <td className="py-3 px-4 text-center">コスパ最強</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 p-4 bg-[#fdf8fa] rounded-xl border border-[#f0dde3]">
            <h3 className="font-bold text-gray-900 mb-2">編集部の比較コメント</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              ツヴァイの最大の差別化ポイントは「店舗型で最も会員数が多い」こと。naco-doは会員数25.4万人と多いですが完全オンライン型のため対面サポートなし。店舗に通って対面でサポートを受けたい方の中で、会員数を最大化したいならツヴァイ一択です。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              コスト面ではゼクシィの方が初期費用33,000円と圧倒的に安価ですが、会員数は約3.2万人とツヴァイの約1/3。「初期費用を払ってでも出会いの母数を増やしたい」か、「初期費用を抑えて気軽にスタートしたい」かで選択が分かれます。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              地方在住者にとってツヴァイの全国50店舗超は非常に心強いです。ゼクシィは27店舗、IBJメンバーズは12店舗のため、地方での対面サポートを重視するならツヴァイに大きなアドバンテージがあります。
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Analysis */}
      <section className="py-8 bg-gray-50/50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#c9a76c] rounded-full" />
            編集部の総合評価
          </h2>
          <div className="card">
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              ツヴァイは「会員数」「店舗数」「マッチング方法の多彩さ」の3つの強みを持つバランスの良い結婚相談所です。IBJ提携で10万人超の会員にアクセスでき、全国50店舗以上で地方でも対面サポートが受けられ、条件・価値観・AIの3種類のマッチングで多角的にお相手を探せます。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              初期費用115,500円はゼクシィやnaco-doと比べると高めですが、成婚料無料（ご紹介プラン）で年間約30万円に収まるため、大手結婚相談所としてはリーズナブルな部類です。20代割引プランを利用すればさらにお得に始められます。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              注意点は、コンサルタントの質にばらつきがあるという口コミが散見されること。50店舗以上を展開している分、店舗ごとのサービス品質の統一が難しいのかもしれません。担当者との相性が合わない場合は早めに変更を申し出ることをおすすめします。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              総合的に見て、ツヴァイは「出会いの母数を最大化しつつ、対面サポートも受けたい」という方にベストな選択肢です。特に地方在住者や20代の方には自信を持っておすすめできます。
            </p>
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
              <details key={i} className="card group cursor-pointer">
                <summary className="font-bold text-sm text-gray-900 flex items-center justify-between list-none">
                  <span className="flex items-center gap-2">
                    <span className="text-[#c45b84] font-bold">Q.</span>
                    {faq.question}
                  </span>
                  <span className="text-[#c45b84] transition-transform group-open:rotate-180">&#9660;</span>
                </summary>
                <p className="mt-3 text-sm text-gray-700 leading-relaxed pl-6">{faq.answer}</p>
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
            <Link href="/ranking/" className="card hover:bg-[#fdf8fa] transition-colors group">
              <p className="text-xs text-[#c45b84] font-semibold mb-1">ランキング</p>
              <p className="font-bold text-gray-900 text-sm group-hover:text-[#c45b84] transition-colors">結婚相談所おすすめ6選を徹底比較</p>
              <p className="text-xs text-gray-500 mt-1">6社の料金・会員数・成婚率を一覧で比較できます</p>
            </Link>
            <Link href="/reviews/zexy/" className="card hover:bg-[#fdf8fa] transition-colors group">
              <p className="text-xs text-[#c9a76c] font-semibold mb-1">レビュー</p>
              <p className="font-bold text-gray-900 text-sm group-hover:text-[#c45b84] transition-colors">ゼクシィ縁結びエージェントの口コミ・評判</p>
              <p className="text-xs text-gray-500 mt-1">オリコン8年連続1位のサービスを徹底検証</p>
            </Link>
            <Link href="/reviews/ibj-members/" className="card hover:bg-[#fdf8fa] transition-colors group">
              <p className="text-xs text-[#c9a76c] font-semibold mb-1">レビュー</p>
              <p className="font-bold text-gray-900 text-sm group-hover:text-[#c45b84] transition-colors">IBJメンバーズの口コミ・評判</p>
              <p className="text-xs text-gray-500 mt-1">IBJ直営で成婚率50.4%の実力を検証</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
