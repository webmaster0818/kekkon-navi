import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "IBJメンバーズの口コミ・評判｜業界最大IBJ直営の実力を検証",
  description:
    "IBJメンバーズの口コミ・評判を徹底調査。業界最大のIBJ直営で会員8.7万超、成婚率50.4%の実力、初期費用181,500円の料金体系、少人数担当制のサポート内容まで詳しく解説。実際の利用者の声も掲載。",
  keywords:
    "IBJメンバーズ 口コミ, IBJメンバーズ 評判, IBJメンバーズ 料金",
  alternates: {
    canonical: "https://kekkon-navi.pages.dev/reviews/ibj-members/",
  },
  openGraph: {
    title: "IBJメンバーズの口コミ・評判｜業界最大IBJ直営の実力を検証",
    description:
      "IBJメンバーズの口コミ・評判を徹底調査。IBJ直営で成婚率50.4%の実力を詳しく解説。",
    url: "https://kekkon-navi.pages.dev/reviews/ibj-members/",
    siteName: "結婚相談所比較ナビ",
    type: "article",
  },
};

const breadcrumbItems = [
  { label: "業者レビュー", href: "/reviews/" },
  { label: "IBJメンバーズ" },
];

const goodReviews = [
  {
    text: "IBJ直営だからこそのメリットを実感しました。会員数8.7万人超というのは伊達ではなく、毎月20名にお見合い申し込みができるため、短期間で多くの方とお会いできました。カウンセラーさんが少人数担当制なので、私のことをしっかり覚えてくれていて、毎回の面談で的確なアドバイスをもらえました。入会から8ヶ月、12回のお見合いを経て成婚退会。成婚率50.4%は本物だと思います。",
    age: "31歳・女性・コンサルタント",
    rating: 5,
    title: "成婚率50.4%は伊達じゃない。少人数担当制のサポートが光る",
  },
  {
    text: "会員の質が本当に高いです。年収600万円以上の男性が多く、大手企業勤務や士業の方も多い印象。IBJ直営ということもあり、入会審査もしっかりしているようで、お見合いで会う方は全員真剣に結婚を考えている方ばかりでした。遊び目的の人がいないので、安心して活動できます。マッチングアプリで疲れ果てた方には本当におすすめです。",
    age: "29歳・女性・金融機関勤務",
    rating: 5,
    title: "会員の質の高さはIBJ直営ならでは",
  },
  {
    text: "専任カウンセラーの面談がとても充実していました。活動計画の策定から始まり、お見合い後のフィードバック、交際中の悩み相談まで一貫してサポートしてくれます。特にお見合い後に「お相手はこういう印象を持たれていましたよ」と具体的なフィードバックがもらえるのは大きい。自分の良い点・改善点が明確になるので、回を重ねるごとに成長を感じられました。",
    age: "35歳・男性・医師",
    rating: 5,
    title: "活動計画からフィードバックまで一貫したサポート",
  },
  {
    text: "お見合い料が無料なのがありがたいです。月最大20名に申し込めるので、積極的に活動できました。IBJのアプリでお相手のプロフィールを見られるのも便利で、通勤中にチェックして気になる方に申し込む、という使い方ができます。カウンセラーさんのおすすめ紹介とアプリでの自由検索を組み合わせることで、効率的にお相手探しができました。",
    age: "33歳・男性・弁護士",
    rating: 4,
    title: "お見合い料無料で月20名申し込めるのが強み",
  },
  {
    text: "6ヶ月の短期集中プランで入会しました。カウンセラーさんが「半年で結果を出しましょう」と最初から具体的なスケジュールを組んでくれて、毎週のようにお見合いを入れていきました。忙しかったですが、目標が明確だったので頑張れました。結果的に5ヶ月目で素敵な方と出会い、そのまま成婚退会。短期間で結果を出したい人には最適な環境だと思います。",
    age: "32歳・女性・税理士",
    rating: 4,
    title: "短期集中で結果を出せる環境が整っている",
  },
];

const badReviews = [
  {
    text: "成婚料220,000円はやはり高いです。初期費用181,500円と合わせると入会時点で約40万円。月会費17,050円を12ヶ月払うと約20万円。成婚まで到達すると総額約82万円になります。結果的に素敵なパートナーに出会えたので満足していますが、途中退会する人にとってはかなりの出費になるリスクがあります。",
    age: "37歳・男性・管理職",
    rating: 3,
    title: "成婚料220,000円を含めるとトータル80万円超え",
  },
  {
    text: "店舗が東京・横浜・大阪・名古屋・福岡など主要12店舗に限られています。地方に住んでいる私は最寄りの店舗まで電車で2時間かかり、面談のたびに半日潰れてしまいました。オンライン面談もできますが、やはり対面の方がカウンセラーとの信頼関係を築きやすいです。地方在住者にとってはアクセスの悪さが大きなデメリットです。",
    age: "34歳・女性・公務員",
    rating: 2,
    title: "店舗が主要都市のみで地方カバーが弱い",
  },
  {
    text: "料金が高い分、短期間で結果を出さないと割高になります。私は1年以上活動しましたが、なかなか良い方と巡り合えず、焦りが生まれてしまいました。カウンセラーさんのサポートは丁寧でしたが、長期戦になると精神的にも経済的にもキツくなります。半年〜1年以内に成婚できる自信がない方は、もう少しコストの低い相談所から始めた方が良いかもしれません。",
    age: "40歳・男性・会社員",
    rating: 3,
    title: "長期戦になると経済的・精神的負担が大きい",
  },
];

const faqItems = [
  {
    question: "IBJメンバーズの成婚率50.4%はどのように算出されていますか？",
    answer:
      "IBJメンバーズの成婚率50.4%は「全退会者に対する成婚退会者の割合」で算出されています。つまり、IBJメンバーズを退会した人のうち約半数が成婚（結婚の意思を固めたカップル）として退会しているということです。なお、成婚率の算出方法は相談所によって異なるため、他社の成婚率と単純比較はできない点にご注意ください。",
  },
  {
    question: "IBJメンバーズの料金は他社と比べて高いですか？",
    answer:
      "IBJメンバーズの年間費用目安は約606,100円（成婚料含む）で、サンマリエと並んで高めの部類に入ります。ただし、お見合い料が無料で月最大20名に申し込めるため、積極的に活動する方にとってはコスパが良い面もあります。成婚率50.4%という実績を考えると、結果にコミットした投資と捉える利用者も多いです。",
  },
  {
    question: "IBJメンバーズとIBJ加盟の他社（ツヴァイ・サンマリエ）の違いは？",
    answer:
      "IBJメンバーズはIBJの「直営」店で、ツヴァイやサンマリエは「加盟店・提携店」です。直営のメリットは、IBJのシステムやノウハウを最も深く活用できること、会員データベースへのアクセスが最も充実していること、カウンセラーの研修制度が統一されていることなどがあります。一方、加盟店はそれぞれ独自のサービスや料金体系を持っているため、特徴が異なります。",
  },
  {
    question: "IBJメンバーズの少人数担当制とは何ですか？",
    answer:
      "IBJメンバーズでは一人のカウンセラーが担当する会員数を限定する「少人数担当制」を採用しています。これにより、一人ひとりに十分な時間と注意を向けることができ、きめ細やかなサポートが実現されています。具体的には、活動計画の策定、お見合いのフィードバック、交際中のアドバイスなど、一貫して同じカウンセラーが対応してくれます。",
  },
  {
    question: "IBJメンバーズは全国どこからでも利用できますか？",
    answer:
      "IBJメンバーズの店舗は東京・横浜・大阪・名古屋・福岡など主要12店舗に限られています。入会手続きは原則来店が必要ですが、面談やお見合いはオンラインでも対応可能です。地方在住の方は、全国50店舗以上あるツヴァイや、完全オンラインのnaco-doの方がアクセスしやすい場合があります。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "IBJメンバーズの口コミ・評判｜業界最大IBJ直営の実力を検証",
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
    "IBJメンバーズの口コミ・評判を徹底調査。IBJ直営で成婚率50.4%の実力を詳しく解説。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://kekkon-navi.pages.dev/reviews/ibj-members/",
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
      name: "IBJメンバーズ",
      item: "https://kekkon-navi.pages.dev/reviews/ibj-members/",
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

export default function IbjMembersReviewPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
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
            IBJメンバーズの
            <br className="hidden md:block" />
            <span className="text-gradient">口コミ・評判</span>を徹底検証
          </h1>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            業界最大のIBJ直営で成婚率50.4%の圧倒的実績。
            <br className="hidden md:block" />
            少人数担当制のカウンセリングと会員の質の高さを検証します。
          </p>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="card">
            <p className="text-sm font-bold text-gray-900 mb-3">この記事の目次</p>
            <ol className="space-y-2 text-sm">
              <li><a href="#overview" className="text-[#c45b84] hover:underline">1. IBJメンバーズの基本情報</a></li>
              <li><a href="#good-reviews" className="text-[#c45b84] hover:underline">2. 良い口コミ・評判</a></li>
              <li><a href="#bad-reviews" className="text-[#c45b84] hover:underline">3. 悪い口コミ・評判</a></li>
              <li><a href="#merits-demerits" className="text-[#c45b84] hover:underline">4. メリット・デメリットまとめ</a></li>
              <li><a href="#pricing" className="text-[#c45b84] hover:underline">5. 料金プラン詳細</a></li>
              <li><a href="#flow" className="text-[#c45b84] hover:underline">6. 入会から成婚までの流れ</a></li>
              <li><a href="#recommended" className="text-[#c45b84] hover:underline">7. こんな人におすすめ</a></li>
              <li><a href="#faq" className="text-[#c45b84] hover:underline">8. よくある質問</a></li>
            </ol>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section id="overview" className="py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#c45b84] rounded-full" />
            IBJメンバーズの基本情報
          </h2>
          <div className="card">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b border-[#f0dde3]">
                    <th className="py-3 px-4 text-left bg-[#fdf8fa] font-medium text-gray-700 w-1/3">運営会社</th>
                    <td className="py-3 px-4">株式会社IBJ</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <th className="py-3 px-4 text-left bg-[#fdf8fa] font-medium text-gray-700">サービス種別</th>
                    <td className="py-3 px-4">仲人型（専任カウンセラー・少人数担当制）</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <th className="py-3 px-4 text-left bg-[#fdf8fa] font-medium text-gray-700">会員数</th>
                    <td className="py-3 px-4">約8.7万人超（IBJ会員）</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <th className="py-3 px-4 text-left bg-[#fdf8fa] font-medium text-gray-700">成婚率</th>
                    <td className="py-3 px-4">50.4%（全退会者に対する成婚退会率）</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <th className="py-3 px-4 text-left bg-[#fdf8fa] font-medium text-gray-700">主な年齢層</th>
                    <td className="py-3 px-4">30代中心・高年収層</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <th className="py-3 px-4 text-left bg-[#fdf8fa] font-medium text-gray-700">店舗数</th>
                    <td className="py-3 px-4">主要12店舗（東京・横浜・大阪・名古屋・福岡など）</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <th className="py-3 px-4 text-left bg-[#fdf8fa] font-medium text-gray-700">特筆事項</th>
                    <td className="py-3 px-4">IBJ直営 / 成婚率50.4% / 少人数担当制</td>
                  </tr>
                  <tr>
                    <th className="py-3 px-4 text-left bg-[#fdf8fa] font-medium text-gray-700">オンライン対応</th>
                    <td className="py-3 px-4">オンラインお見合い可（入会は来店推奨）</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 p-4 bg-[#fdf8fa] rounded-xl border border-[#f0dde3]">
            <h3 className="font-bold text-gray-900 mb-2">IBJメンバーズとは？</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              IBJメンバーズは、日本最大級の結婚相談所ネットワーク「IBJ」の直営店です。約8.7万人超の会員基盤を持ち、成婚率50.4%という業界トップクラスの実績を誇ります。最大の特徴は、専任カウンセラーによる少人数担当制。一人のカウンセラーが担当する会員数を限定し、活動計画の策定からお見合いのフィードバック、交際中のアドバイスまで一貫してサポートします。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              IBJ直営ならではの会員の質の高さも魅力で、年収や学歴が高い会員が多いことで知られています。本気度の高い婚活を求める方に特に支持されている結婚相談所です。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              料金は初期費用181,500円（入会金33,000円＋活動サポート費148,500円）、月会費17,050円、お見合い料無料、成婚料220,000円。年間費用は約60万円と高めですが、お見合い料無料で月最大20名に申し込めるため、積極的に活動する方ほどコスパが良くなる設計です。IBJのアプリでスマホからいつでもプロフィール検索・申し込みができるのも利便性が高いポイントです。
            </p>
          </div>
        </div>
      </section>

      {/* Good Reviews */}
      <section id="good-reviews" className="py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#c45b84] rounded-full" />
            IBJメンバーズの良い口コミ・評判
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
            IBJメンバーズの悪い口コミ・評判
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
                  <span>成婚率50.4%で業界トップクラスの成果を誇る</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c45b84] mt-0.5 shrink-0">&#10003;</span>
                  <span>IBJ直営ならではの8.7万人超の質の高い会員基盤</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c45b84] mt-0.5 shrink-0">&#10003;</span>
                  <span>少人数担当制で一人ひとりに手厚いカウンセリング</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c45b84] mt-0.5 shrink-0">&#10003;</span>
                  <span>お見合い料が無料で月最大20名に申し込み可能</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c45b84] mt-0.5 shrink-0">&#10003;</span>
                  <span>会員の本気度が高く真剣な出会いが期待できる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c45b84] mt-0.5 shrink-0">&#10003;</span>
                  <span>IBJアプリで通勤中でもプロフィール検索・申し込みが可能</span>
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
                  <span>成婚料220,000円が高額でトータルコストが80万円超になることも</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9b8ec4] mt-0.5 shrink-0">&#9650;</span>
                  <span>店舗が主要12店舗のみで地方カバーが弱い</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9b8ec4] mt-0.5 shrink-0">&#9650;</span>
                  <span>料金全体が高めで長期戦になると負担が大きい</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9b8ec4] mt-0.5 shrink-0">&#9650;</span>
                  <span>入会手続きは来店が推奨されオンライン完結しにくい</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9b8ec4] mt-0.5 shrink-0">&#9650;</span>
                  <span>短期決戦向きのため、ゆっくり婚活したい方には不向き</span>
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
                    <th className="py-3 px-4 text-center font-bold text-gray-900">エントリーコース</th>
                    <th className="py-3 px-4 text-center font-bold text-[#c45b84]">アシストコース</th>
                    <th className="py-3 px-4 text-center font-bold text-gray-900">プライムコース</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#f0dde3]">
                    <td className="py-3 px-4 font-medium text-gray-700">入会金</td>
                    <td className="py-3 px-4 text-center">33,000円</td>
                    <td className="py-3 px-4 text-center bg-[#fdf8fa]">33,000円</td>
                    <td className="py-3 px-4 text-center">33,000円</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <td className="py-3 px-4 font-medium text-gray-700">活動サポート費</td>
                    <td className="py-3 px-4 text-center">115,500円</td>
                    <td className="py-3 px-4 text-center bg-[#fdf8fa]">148,500円</td>
                    <td className="py-3 px-4 text-center">181,500円</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <td className="py-3 px-4 font-medium text-gray-700">月会費</td>
                    <td className="py-3 px-4 text-center">17,050円</td>
                    <td className="py-3 px-4 text-center bg-[#fdf8fa] font-bold text-[#c45b84]">17,050円</td>
                    <td className="py-3 px-4 text-center">17,050円</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <td className="py-3 px-4 font-medium text-gray-700">お見合い料</td>
                    <td className="py-3 px-4 text-center">無料</td>
                    <td className="py-3 px-4 text-center bg-[#fdf8fa]">無料</td>
                    <td className="py-3 px-4 text-center">無料</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <td className="py-3 px-4 font-medium text-gray-700">成婚料</td>
                    <td className="py-3 px-4 text-center">220,000円</td>
                    <td className="py-3 px-4 text-center bg-[#fdf8fa]">220,000円</td>
                    <td className="py-3 px-4 text-center">220,000円</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <td className="py-3 px-4 font-medium text-gray-700">申し込み/月</td>
                    <td className="py-3 px-4 text-center">10名</td>
                    <td className="py-3 px-4 text-center bg-[#fdf8fa]">20名</td>
                    <td className="py-3 px-4 text-center">40名</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-gray-700">年間費用目安</td>
                    <td className="py-3 px-4 text-center">約573,100円</td>
                    <td className="py-3 px-4 text-center bg-[#fdf8fa] font-bold">約606,100円</td>
                    <td className="py-3 px-4 text-center">約639,100円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              ※ 年間費用は成婚料を含む目安です。料金はすべて税込表示です。
            </p>
          </div>

          <div className="mt-6 p-4 bg-[#fdf8fa] rounded-xl border border-[#f0dde3]">
            <h3 className="font-bold text-gray-900 mb-2">料金に関する編集部コメント</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              IBJメンバーズは成婚料220,000円を含めるとトータルコストが高めですが、お見合い料が無料で月最大20名（アシストコース）に申し込めるのは大きなメリットです。お見合いの回数を気にせず積極的に活動できるため、短期間で多くの方と会いたい方には結果的にコスパが良くなります。成婚率50.4%を考えると「投資に対するリターン」は高いと言えるでしょう。ただし、長期戦になると月会費が積み重なるため、半年〜1年以内に成婚する覚悟で入会するのがおすすめです。
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
                description: "主要12店舗で無料カウンセリングを受けられます。IBJの会員データベースの規模感やマッチングの仕組み、料金プランの説明を受けます。実際にシステム画面を見せてもらえるので、入会後のイメージが掴めます。強引な勧誘はなく、検討期間も十分に設けてもらえます。",
              },
              {
                step: 2,
                title: "入会・活動計画策定",
                description: "入会後、専任カウンセラーが今後の活動計画を一緒に策定します。目標成婚時期から逆算して、月ごとのお見合い目標数や理想のお相手像を具体的に設定。プロフィール作成では写真選定やPR文の作成をカウンセラーがサポートし、印象の良いプロフィールを完成させます。",
              },
              {
                step: 3,
                title: "お相手検索・カウンセラー紹介",
                description: "IBJアプリを使って自分でお相手を検索・申し込みできるほか、カウンセラーからの紹介も受けられます。月最大20名（アシストコース）に申し込み可能。8.7万人超の会員から条件に合うお相手を効率的に探せます。カウンセラーが「条件外だけど相性が良さそう」な方を紹介してくれることもあります。",
              },
              {
                step: 4,
                title: "お見合い・フィードバック",
                description: "お見合いはホテルラウンジやカフェ、オンラインで実施。お見合い料は何回でも無料です。お見合い後はカウンセラーがお相手の感想を確認し、詳細なフィードバックを共有。「お相手はこんな印象を持っていました」「次回はこう改善してみましょう」と具体的なアドバイスが受けられます。",
              },
              {
                step: 5,
                title: "仮交際・真剣交際",
                description: "お互いに好感を持てば仮交際へ。カウンセラーがデートの進め方や関係の深め方をアドバイス。一人に絞って真剣交際に進んだ後は、結婚に向けた具体的な話の進め方も相談できます。カウンセラーが二人の橋渡し役となり、交際を円滑に進めるサポートを行います。",
              },
              {
                step: 6,
                title: "プロポーズ・成婚退会",
                description: "結婚の意思が固まったら成婚退会。カウンセラーがプロポーズのタイミングやプランについてもアドバイスしてくれます。成婚料は220,000円。活動期間の目安は6〜12ヶ月。退会後は成婚パーティーへの招待など、IBJならではの特典もあります。",
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
            IBJメンバーズはこんな人におすすめ
          </h2>
          <div className="card">
            <ul className="space-y-4 text-sm text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#c9a76c] text-lg shrink-0">&#9733;</span>
                <div>
                  <span className="font-bold text-gray-900">1年以内に結婚相手を見つけたい本気度の高い方</span>
                  <p className="mt-1 text-gray-600">成婚率50.4%の実績と少人数担当制のカウンセリングで、短期間で結果を出すための環境が整っています。費用が高い分、本気で取り組むモチベーションにもなります。</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#c9a76c] text-lg shrink-0">&#9733;</span>
                <div>
                  <span className="font-bold text-gray-900">会員の質を重視する方</span>
                  <p className="mt-1 text-gray-600">IBJ直営ならではの厳格な審査基準により、年収・学歴・職業ともにハイスペックな会員が多数。真剣に結婚を考えている方だけが集まる環境です。</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#c9a76c] text-lg shrink-0">&#9733;</span>
                <div>
                  <span className="font-bold text-gray-900">成婚率の高さを重視する方</span>
                  <p className="mt-1 text-gray-600">退会者の半数以上が成婚している実績は業界トップクラス。「入会したら本当に結婚できるのか」という不安を最も払拭してくれるデータです。</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#c9a76c] text-lg shrink-0">&#9733;</span>
                <div>
                  <span className="font-bold text-gray-900">手厚いカウンセリングを求める方</span>
                  <p className="mt-1 text-gray-600">少人数担当制により、カウンセラーが自分のことをしっかり理解してくれます。活動計画の策定からお見合いフィードバックまで一貫したサポートが受けられます。</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#c9a76c] text-lg shrink-0">&#9733;</span>
                <div>
                  <span className="font-bold text-gray-900">積極的にお見合いを組みたい方</span>
                  <p className="mt-1 text-gray-600">お見合い料が無料で月最大20名に申し込めるため、たくさんの方と会って見極めたい方に最適。量をこなしながら質を高められる環境です。</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="mt-6 p-4 bg-white rounded-xl border border-[#f0dde3]">
            <h3 className="font-bold text-gray-900 mb-2">逆にこんな方には向いていないかも</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-[#9b8ec4] shrink-0">&#9654;</span>
                費用を抑えて婚活したい方（年間約11万円のnaco-doや約24万円のゼクシィが圧倒的にリーズナブルです）
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#9b8ec4] shrink-0">&#9654;</span>
                地方在住で店舗へのアクセスが難しい方（全国50店舗超のツヴァイやオンライン完結のnaco-doの方が便利です）
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#9b8ec4] shrink-0">&#9654;</span>
                マイペースにゆっくり婚活したい方（料金が高い分、短期決戦向きの設計です）
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
            IBJメンバーズと他社の比較
          </h2>
          <div className="card">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-[#f0dde3]">
                    <th className="py-3 px-4 text-left font-bold text-gray-900">比較項目</th>
                    <th className="py-3 px-4 text-center font-bold text-[#c45b84]">IBJメンバーズ</th>
                    <th className="py-3 px-4 text-center font-bold text-gray-900">サンマリエ</th>
                    <th className="py-3 px-4 text-center font-bold text-gray-900">パートナーエージェント</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#f0dde3]">
                    <td className="py-3 px-4 font-medium text-gray-700">タイプ</td>
                    <td className="py-3 px-4 text-center bg-[#fdf8fa]">仲人型</td>
                    <td className="py-3 px-4 text-center">仲人型</td>
                    <td className="py-3 px-4 text-center">仲人型</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <td className="py-3 px-4 font-medium text-gray-700">成婚率</td>
                    <td className="py-3 px-4 text-center bg-[#fdf8fa] font-bold text-[#c45b84]">50.4%</td>
                    <td className="py-3 px-4 text-center">非公開</td>
                    <td className="py-3 px-4 text-center">27.0%</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <td className="py-3 px-4 font-medium text-gray-700">初期費用</td>
                    <td className="py-3 px-4 text-center bg-[#fdf8fa]">181,500円</td>
                    <td className="py-3 px-4 text-center">187,000円</td>
                    <td className="py-3 px-4 text-center">137,500円</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <td className="py-3 px-4 font-medium text-gray-700">成婚料</td>
                    <td className="py-3 px-4 text-center bg-[#fdf8fa]">220,000円</td>
                    <td className="py-3 px-4 text-center">220,000円</td>
                    <td className="py-3 px-4 text-center">55,000円</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <td className="py-3 px-4 font-medium text-gray-700">お見合い料</td>
                    <td className="py-3 px-4 text-center bg-[#fdf8fa]">無料</td>
                    <td className="py-3 px-4 text-center">11,000円/回</td>
                    <td className="py-3 px-4 text-center">無料</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <td className="py-3 px-4 font-medium text-gray-700">会員数</td>
                    <td className="py-3 px-4 text-center bg-[#fdf8fa]">約8.7万人</td>
                    <td className="py-3 px-4 text-center">約8.7万人</td>
                    <td className="py-3 px-4 text-center">約3万人</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-gray-700">特徴</td>
                    <td className="py-3 px-4 text-center bg-[#fdf8fa]">少人数担当制</td>
                    <td className="py-3 px-4 text-center">セミナー充実</td>
                    <td className="py-3 px-4 text-center">PDCA婚活</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 p-4 bg-[#fdf8fa] rounded-xl border border-[#f0dde3]">
            <h3 className="font-bold text-gray-900 mb-2">編集部の比較コメント</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              仲人型3社を比較すると、IBJメンバーズは「成婚率」と「会員の質」で頭一つ抜けています。成婚率50.4%は退会者の半数以上が成婚している計算で、パートナーエージェントの27.0%（算出方法が異なるため単純比較は不可）を上回ります。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              コスト面では、パートナーエージェントの成婚料55,000円に対してIBJメンバーズは220,000円と4倍の差。ただし、IBJメンバーズはお見合い料無料・月20名申し込み可能という「攻めの婚活」ができる環境。積極的にお見合いを組みたい方にはIBJメンバーズ、PDCAでじっくり改善しながら進めたい方にはパートナーエージェントが向いています。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              サンマリエとの比較では、同じIBJネットワーク（会員数8.7万人）を共有していますが、サンマリエはお見合い料11,000円/回がかかる点で不利。ただし、婚活セミナーやレッスンで自分磨きができる点はサンマリエの独自の強みです。
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
              IBJメンバーズは「本気で1年以内に結婚したい方」にとってベストな選択肢です。成婚率50.4%という数字は業界でもトップクラスであり、少人数担当制のきめ細やかなカウンセリングが成果に直結しています。会員の質も高く、年収や学歴に一定の基準を設けているため、真剣度の高い方だけが集まる環境が整っています。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              最大のネックはやはりコスト。成婚料220,000円を含めると年間80万円を超える可能性があり、これは6社の中でもトップクラスの高額です。ただし、お見合い料が無料で月20名に申し込めるため、「数をこなして効率的にベストパートナーを見つける」戦略が取れます。短期間で成婚すれば、月会費の負担も最小限に抑えられます。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              地方在住の方にとっては店舗が12拠点に限られている点がデメリット。面談はオンラインでも対応可能ですが、入会時は来店が推奨されています。地方の方はまずオンラインで無料カウンセリングを受けてみて、通える範囲かどうかを確認するのがおすすめです。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              総合的に見て、費用面のハードルをクリアできるなら、IBJメンバーズは結婚相談所選びの最有力候補です。特に首都圏・関西圏在住で、半年〜1年以内の成婚を目指す方には自信を持っておすすめします。
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

      {/* Key Data */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#c45b84] rounded-full" />
            IBJメンバーズの注目データ
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="card text-center">
              <p className="text-3xl font-bold text-[#c45b84]">50.4%</p>
              <p className="text-sm text-gray-700 mt-1">成婚率</p>
              <p className="text-xs text-gray-500 mt-1">退会者の半数以上が成婚</p>
            </div>
            <div className="card text-center">
              <p className="text-3xl font-bold text-[#c9a76c]">8.7万人</p>
              <p className="text-sm text-gray-700 mt-1">会員数</p>
              <p className="text-xs text-gray-500 mt-1">IBJ直営ならではの規模</p>
            </div>
            <div className="card text-center">
              <p className="text-3xl font-bold text-[#9b8ec4]">20名/月</p>
              <p className="text-sm text-gray-700 mt-1">お見合い申し込み上限</p>
              <p className="text-xs text-gray-500 mt-1">アシストコースの場合</p>
            </div>
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
            <Link href="/reviews/sunmarie/" className="card hover:bg-[#fdf8fa] transition-colors group">
              <p className="text-xs text-[#c9a76c] font-semibold mb-1">レビュー</p>
              <p className="font-bold text-gray-900 text-sm group-hover:text-[#c45b84] transition-colors">サンマリエの口コミ・評判</p>
              <p className="text-xs text-gray-500 mt-1">同じIBJ系列の老舗サービスを徹底検証</p>
            </Link>
            <Link href="/reviews/zwei/" className="card hover:bg-[#fdf8fa] transition-colors group">
              <p className="text-xs text-[#c9a76c] font-semibold mb-1">レビュー</p>
              <p className="font-bold text-gray-900 text-sm group-hover:text-[#c45b84] transition-colors">ツヴァイの口コミ・評判</p>
              <p className="text-xs text-gray-500 mt-1">IBJ提携で会員10万人超の大規模サービスを検証</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
