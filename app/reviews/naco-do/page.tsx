import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "naco-doの口コミ・評判｜月6,980円のオンライン結婚相談所を検証",
  description:
    "naco-doの口コミ・評判を徹底調査。月6,980円〜の業界最安クラス料金、3連盟加入で会員25.4万人、オンライン完結型のサービス内容、専任コンシェルジュのサポートまで詳しく解説。実際の利用者の声も掲載。",
  keywords: "naco-do 口コミ, naco-do 評判, naco-do 料金",
  alternates: {
    canonical: "https://kekkon-navi.pages.dev/reviews/naco-do/",
  },
  openGraph: {
    title: "naco-doの口コミ・評判｜月6,980円のオンライン結婚相談所を検証",
    description:
      "naco-doの口コミ・評判を徹底調査。月6,980円〜で会員25.4万人のオンライン結婚相談所を解説。",
    url: "https://kekkon-navi.pages.dev/reviews/naco-do/",
    siteName: "結婚相談所比較ナビ",
    type: "article",
  },
};

const breadcrumbItems = [
  { label: "業者レビュー", href: "/reviews/" },
  { label: "naco-do" },
];

const goodReviews = [
  {
    text: "月6,980円で結婚相談所のサービスが受けられるのは本当に驚きです。しかも3つの連盟に加入しているので会員数は25.4万人と業界最多クラス。入会金29,800円も他社の初期費用と比べたら破格です。私は6ヶ月プランで入会して、4ヶ月目に素敵な方と出会えました。トータル費用は約7万円。他社なら初期費用だけで10万円以上するところが多いので、コスパは最強だと思います。",
    age: "28歳・女性・Webデザイナー",
    rating: 5,
    title: "月6,980円で25.4万人と出会えるコスパの良さ",
  },
  {
    text: "仕事が忙しくて店舗に通う時間がなかったので、オンライン完結型のnaco-doはぴったりでした。スマホだけで入会手続きからプロフィール作成、お相手検索、お見合い申し込みまですべて完結。通勤電車の中でプロフィールを見て、気になる方に申し込めるのは本当に便利です。お見合いもオンラインでできるので、場所を選ばず活動できました。",
    age: "34歳・男性・IT企業勤務",
    rating: 5,
    title: "スマホ一つで完結する手軽さが魅力",
  },
  {
    text: "JBA、コネクトシップ、Rnetの3つの連盟に加入しているため、他社ではアクセスできない会員層とも出会えます。特にRnetは地方の会員が多い印象で、地方在住の私にとってはありがたかったです。オンラインだからこそ全国どこからでも同じ条件で活動できるのは、地方在住者にとって大きなメリット。月200名まで申し込みできるのもすごいです。",
    age: "31歳・女性・看護師",
    rating: 5,
    title: "3連盟加入で地方在住でも出会いが豊富",
  },
  {
    text: "専属サポーターとの月1回のビデオ面談があるので、オンラインでも孤独感なく活動できました。チャットでの相談もいつでもできて、返信も早かったです。最初は「オンラインだけで大丈夫かな」と不安でしたが、サポーターの方が親身に相談に乗ってくれて、プロフィールの改善やお見合いのコツなど具体的なアドバイスをもらえました。",
    age: "30歳・男性・営業職",
    rating: 4,
    title: "専属サポーターのビデオ面談で安心感あり",
  },
  {
    text: "まずは気軽に婚活を始めたいと思って入会しました。成婚料が基本無料なのも嬉しいポイント。マッチングアプリとの大きな違いは、独身証明書の提出が必須なので、会う方全員が真剣に結婚を考えている方だということ。アプリでの出会いに不安を感じていた方にもおすすめです。料金はアプリに近い手軽さで、サービスの質は結婚相談所レベルです。",
    age: "27歳・女性・事務職",
    rating: 4,
    title: "アプリ感覚で始められる本格的な結婚相談所",
  },
];

const badReviews = [
  {
    text: "オンライン完結は便利ですが、対面でのサポートがないのはやはり心もとないです。悩んでいる時に直接会って相談できないもどかしさがありました。ビデオ面談は月1回で、それ以外はチャット中心。込み入った相談をしたい時にチャットだと伝えにくいこともありました。手厚い対面サポートを求める方は、店舗型の相談所の方が満足度が高いと思います。",
    age: "35歳・女性・教師",
    rating: 3,
    title: "対面サポートがないのは不安を感じる",
  },
  {
    text: "自分から積極的に動かないと結果が出にくい仕組みです。店舗型なら担当者が「次はこの方とお見合いしましょう」とリードしてくれますが、naco-doは基本的に自分で検索・申し込みを行います。月200名まで申し込めるとはいえ、自分で動ける人でないと「入会したけど何もしていない」状態になりがち。受け身の方には向いていないと感じました。",
    age: "33歳・男性・公務員",
    rating: 2,
    title: "受け身タイプには向かない自主行動型",
  },
  {
    text: "1ヶ月プランだと16,800円で、6ヶ月プランの月6,980円と大きな差があります。お試しで1ヶ月だけ入ってみようと思うと割高に感じます。また、6ヶ月プランで契約して途中退会する場合の返金ルールもやや複雑なので、入会前にしっかり確認することをおすすめします。安さに惹かれて入会しましたが、プラン選びは慎重にした方がいいです。",
    age: "29歳・男性・フリーランス",
    rating: 3,
    title: "1ヶ月プランは割高、プラン選びに注意",
  },
];

const faqItems = [
  {
    question: "naco-doの料金プランを教えてください",
    answer:
      "naco-doの料金は入会金29,800円と月会費のみのシンプル構成です。月会費は1ヶ月プラン16,800円、3ヶ月プラン9,800円/月、6ヶ月プラン6,980円/月の3種類。お見合い料は無料、成婚料も基本無料です。6ヶ月プランなら年間費用約113,560円と業界最安クラス。ただし、長期プランほど月額は安いですが一括払いが必要な点にご注意ください。",
  },
  {
    question: "naco-doの会員数25.4万人はどうやって実現しているのですか？",
    answer:
      "naco-doは「JBA（日本結婚相談協会）」「コネクトシップ」「Rnet」の3つの結婚相談所連盟に加入しています。各連盟の会員を合算すると25.4万人超となり、これは業界最多クラスです。複数の連盟に加盟していることで、他社では出会えないお相手との出会いも期待でき、出会いの選択肢が非常に広いのが特徴です。",
  },
  {
    question: "naco-doはスマホだけで完結しますか？",
    answer:
      "はい、naco-doはスマホだけで入会手続きからプロフィール作成、お相手検索、お見合い申し込み、お見合い（ビデオ通話）まですべて完結します。パソコンでも利用可能です。書類提出もスマホのカメラで撮影してアップロードするだけ。来店不要なので、全国どこからでも同じサービスが受けられます。",
  },
  {
    question: "naco-doとマッチングアプリの違いは何ですか？",
    answer:
      "最大の違いは「身元の確認」と「サポート体制」です。naco-doでは独身証明書・本人確認書類の提出が必須のため、全員が独身で真剣に結婚を考えている方です。また、専属サポーターによるビデオ面談やチャットサポートがあり、プロの婚活アドバイスを受けられます。マッチングアプリと近い手軽さ・価格帯でありながら、結婚相談所としての信頼性を兼ね備えています。",
  },
  {
    question: "naco-doのサポート体制はどうなっていますか？",
    answer:
      "naco-doでは専属サポーターが付き、月1回のビデオ面談で活動状況の振り返りやアドバイスを行います。それ以外にもチャットでいつでも相談可能で、プロフィールの改善提案、お見合いのコツ、交際中の悩み相談などに対応。オンラインながらも結婚相談所としてのサポート機能はしっかり備わっています。ただし、対面でのサポートはありません。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "naco-doの口コミ・評判｜月6,980円のオンライン結婚相談所を検証",
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
    "naco-doの口コミ・評判を徹底調査。月6,980円〜で会員25.4万人のオンライン結婚相談所を解説。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://kekkon-navi.pages.dev/reviews/naco-do/",
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
      name: "naco-do",
      item: "https://kekkon-navi.pages.dev/reviews/naco-do/",
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

export default function NacoDoReviewPage() {
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
            naco-doの
            <br className="hidden md:block" />
            <span className="text-gradient">口コミ・評判</span>を徹底検証
          </h1>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            月6,980円からの業界最安クラスのオンライン結婚相談所。
            <br className="hidden md:block" />
            3連盟加入で会員25.4万人のサービスの実力を検証します。
          </p>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="card">
            <p className="text-sm font-bold text-gray-900 mb-3">この記事の目次</p>
            <ol className="space-y-2 text-sm">
              <li><a href="#overview" className="text-[#c45b84] hover:underline">1. naco-doの基本情報</a></li>
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
            naco-doの基本情報
          </h2>
          <div className="card">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b border-[#f0dde3]">
                    <th className="py-3 px-4 text-left bg-[#fdf8fa] font-medium text-gray-700 w-1/3">運営会社</th>
                    <td className="py-3 px-4">株式会社いろもの</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <th className="py-3 px-4 text-left bg-[#fdf8fa] font-medium text-gray-700">サービス種別</th>
                    <td className="py-3 px-4">オンライン型（スマホ完結）</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <th className="py-3 px-4 text-left bg-[#fdf8fa] font-medium text-gray-700">会員数</th>
                    <td className="py-3 px-4">約25.4万人（JBA+コネクトシップ+Rnet）</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <th className="py-3 px-4 text-left bg-[#fdf8fa] font-medium text-gray-700">成婚率</th>
                    <td className="py-3 px-4">41.2%（交際成立から6ヶ月以内）</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <th className="py-3 px-4 text-left bg-[#fdf8fa] font-medium text-gray-700">主な年齢層</th>
                    <td className="py-3 px-4">20代後半〜30代</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <th className="py-3 px-4 text-left bg-[#fdf8fa] font-medium text-gray-700">店舗数</th>
                    <td className="py-3 px-4">なし（完全オンライン）</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <th className="py-3 px-4 text-left bg-[#fdf8fa] font-medium text-gray-700">特筆事項</th>
                    <td className="py-3 px-4">月6,980円〜 / 最大200名/月申込 / 成婚料無料</td>
                  </tr>
                  <tr>
                    <th className="py-3 px-4 text-left bg-[#fdf8fa] font-medium text-gray-700">オンライン対応</th>
                    <td className="py-3 px-4">完全オンライン（入会〜成婚まですべて）</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 p-4 bg-[#fdf8fa] rounded-xl border border-[#f0dde3]">
            <h3 className="font-bold text-gray-900 mb-2">naco-doとは？</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              naco-doは、スマホ一つで完結するオンライン結婚相談所です。月額6,980円〜という業界最安クラスの料金ながら、JBA・コネクトシップ・Rnetの3つの連盟に加盟しており、会員数は25.4万人と業界トップレベル。毎月最大200名にお見合い申し込みが可能で、出会いの量を最大化できます。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              専属サポーターによるビデオ面談やチャットサポートも備えており、オンラインながらプロのサポートを受けながら婚活を進められます。店舗を持たないことでコストを抑え、その分を会員に還元するビジネスモデルです。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              独身証明書の提出が必須のため、マッチングアプリより信頼性が高いのも大きな特徴。「マッチングアプリの手軽さ」と「結婚相談所の信頼性」を両立させたサービスとして、特に20代後半〜30代の忙しいビジネスパーソンから支持を集めています。成婚料が基本無料のため、成婚時に追加費用がかからないのも安心です。
            </p>
          </div>
        </div>
      </section>

      {/* Good Reviews */}
      <section id="good-reviews" className="py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#c45b84] rounded-full" />
            naco-doの良い口コミ・評判
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
            naco-doの悪い口コミ・評判
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
                  <span>月6,980円〜の業界最安クラスで年間約11万円に収まる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c45b84] mt-0.5 shrink-0">&#10003;</span>
                  <span>3連盟加入で会員25.4万人と業界最多クラスの出会いの母数</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c45b84] mt-0.5 shrink-0">&#10003;</span>
                  <span>スマホだけで完結し来店不要、全国どこでも活動可能</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c45b84] mt-0.5 shrink-0">&#10003;</span>
                  <span>お見合い料・成婚料が基本無料でトータルコストを大幅に削減</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c45b84] mt-0.5 shrink-0">&#10003;</span>
                  <span>月最大200名に申し込み可能で出会いの量を最大化できる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c45b84] mt-0.5 shrink-0">&#10003;</span>
                  <span>独身証明書必須でマッチングアプリより信頼性が高い</span>
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
                  <span>対面でのサポートがなくオンラインのみで不安を感じる方も</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9b8ec4] mt-0.5 shrink-0">&#9650;</span>
                  <span>自分から積極的に動けない受け身タイプには向かない</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9b8ec4] mt-0.5 shrink-0">&#9650;</span>
                  <span>店舗型と比べてサポートの手厚さでは劣る面がある</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9b8ec4] mt-0.5 shrink-0">&#9650;</span>
                  <span>1ヶ月プラン（16,800円）は割高で長期プランとの差が大きい</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9b8ec4] mt-0.5 shrink-0">&#9650;</span>
                  <span>オンラインお見合いに慣れていないと最初は戸惑う可能性</span>
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
                    <th className="py-3 px-4 text-center font-bold text-gray-900">1ヶ月プラン</th>
                    <th className="py-3 px-4 text-center font-bold text-gray-900">3ヶ月プラン</th>
                    <th className="py-3 px-4 text-center font-bold text-[#c45b84]">6ヶ月プラン</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#f0dde3]">
                    <td className="py-3 px-4 font-medium text-gray-700">入会金</td>
                    <td className="py-3 px-4 text-center">29,800円</td>
                    <td className="py-3 px-4 text-center">29,800円</td>
                    <td className="py-3 px-4 text-center bg-[#fdf8fa]">29,800円</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <td className="py-3 px-4 font-medium text-gray-700">月会費</td>
                    <td className="py-3 px-4 text-center">16,800円</td>
                    <td className="py-3 px-4 text-center">9,800円</td>
                    <td className="py-3 px-4 text-center bg-[#fdf8fa] font-bold text-[#c45b84]">6,980円</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <td className="py-3 px-4 font-medium text-gray-700">お見合い料</td>
                    <td className="py-3 px-4 text-center">無料</td>
                    <td className="py-3 px-4 text-center">無料</td>
                    <td className="py-3 px-4 text-center bg-[#fdf8fa]">無料</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <td className="py-3 px-4 font-medium text-gray-700">成婚料</td>
                    <td className="py-3 px-4 text-center">無料</td>
                    <td className="py-3 px-4 text-center">無料</td>
                    <td className="py-3 px-4 text-center bg-[#fdf8fa]">無料</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <td className="py-3 px-4 font-medium text-gray-700">申し込み/月</td>
                    <td className="py-3 px-4 text-center">最大200名</td>
                    <td className="py-3 px-4 text-center">最大200名</td>
                    <td className="py-3 px-4 text-center bg-[#fdf8fa]">最大200名</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-gray-700">年間費用目安</td>
                    <td className="py-3 px-4 text-center">約231,400円</td>
                    <td className="py-3 px-4 text-center">約147,400円</td>
                    <td className="py-3 px-4 text-center bg-[#fdf8fa] font-bold">約113,560円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              ※ 料金はすべて税込表示です。長期プランは一括払いが必要な場合があります。
            </p>
          </div>

          <div className="mt-6 p-4 bg-[#fdf8fa] rounded-xl border border-[#f0dde3]">
            <h3 className="font-bold text-gray-900 mb-2">料金に関する編集部コメント</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              naco-doの6ヶ月プランなら年間約11万円。これは他の大手結婚相談所の1/2〜1/5の費用です。しかも会員数25.4万人は業界最多クラスで、成婚料も無料。コストパフォーマンスでは6社中ぶっちぎりの1位です。ただし、1ヶ月プラン（月16,800円）だと割高になるため、最低3ヶ月は活動する覚悟で入会するのがおすすめ。6ヶ月プランが最もお得ですが、一括払いが必要な点は注意が必要です。
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
                title: "オンラインで無料相談",
                description: "まずはnaco-doの公式サイトから無料相談を予約。ビデオ通話でサービスの説明を受けられます。料金プランやマッチングの仕組み、活動の流れを丁寧に教えてもらえます。入会を強制されることはないので、まずは気軽に相談してみましょう。",
              },
              {
                step: 2,
                title: "スマホで入会・プロフィール作成",
                description: "入会手続きはすべてスマホで完結。必要書類（本人確認書類・独身証明書・収入証明書など）をカメラで撮影してアップロード。専属サポーターがプロフィールの作成をサポートし、写真の選び方や自己PR文の書き方もアドバイスしてくれます。",
              },
              {
                step: 3,
                title: "お相手検索・申し込み",
                description: "3つの連盟（JBA・コネクトシップ・Rnet）の25.4万人の中からお相手を検索。月最大200名に申し込みが可能です。条件検索だけでなく、サポーターからの紹介もあります。スマホでいつでもどこでも検索・申し込みできるのがオンライン型の強みです。",
              },
              {
                step: 4,
                title: "オンラインお見合い",
                description: "マッチングが成立したら、ビデオ通話でオンラインお見合いを行います。自宅からリラックスした状態で臨めるのがメリット。お見合い料は無料なので、費用を気にせず積極的にお見合いを組みましょう。対面でのお見合いを希望する場合は、お相手と相談の上で設定も可能です。",
              },
              {
                step: 5,
                title: "仮交際・真剣交際",
                description: "お互いに好感を持てば仮交際に進みます。交際中もサポーターにチャットで相談可能。月1回のビデオ面談で活動の振り返りやアドバイスを受けられます。真剣交際に進んだ後は、結婚に向けた具体的な話の進め方もサポートしてもらえます。",
              },
              {
                step: 6,
                title: "成婚退会",
                description: "結婚の意思が固まったら成婚退会。成婚料は無料なので追加費用はかかりません。平均活動期間は約6ヶ月。naco-doの利用者の41.2%が交際成立から6ヶ月以内に成婚しているというデータもあります。",
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
            naco-doはこんな人におすすめ
          </h2>
          <div className="card">
            <ul className="space-y-4 text-sm text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#c9a76c] text-lg shrink-0">&#9733;</span>
                <div>
                  <span className="font-bold text-gray-900">費用を抑えて婚活を始めたい方</span>
                  <p className="mt-1 text-gray-600">年間約11万円は大手結婚相談所の1/2〜1/5の費用。成婚料も無料なので、予算に限りがある方でも安心して始められます。</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#c9a76c] text-lg shrink-0">&#9733;</span>
                <div>
                  <span className="font-bold text-gray-900">忙しくて店舗に通えない方</span>
                  <p className="mt-1 text-gray-600">スマホ完結型なので通勤中やスキマ時間で活動可能。来店不要で、仕事や家事で忙しい方でも無理なく婚活を続けられます。</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#c9a76c] text-lg shrink-0">&#9733;</span>
                <div>
                  <span className="font-bold text-gray-900">地方在住で出会いの選択肢を広げたい方</span>
                  <p className="mt-1 text-gray-600">3連盟25.4万人の会員に全国どこからでもアクセス可能。地方でも都市部と変わらない出会いのチャンスがあります。</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#c9a76c] text-lg shrink-0">&#9733;</span>
                <div>
                  <span className="font-bold text-gray-900">まずは気軽に婚活をスタートしたい方</span>
                  <p className="mt-1 text-gray-600">マッチングアプリのような手軽さで、結婚相談所の信頼性を兼ね備えたサービス。初めての婚活でも気負わず始められます。</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#c9a76c] text-lg shrink-0">&#9733;</span>
                <div>
                  <span className="font-bold text-gray-900">自分から積極的に動ける方</span>
                  <p className="mt-1 text-gray-600">月最大200名に申し込めるのはnaco-doならでは。自分で検索・申し込みを積極的に行える方ほど、このサービスの恩恵を受けられます。</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="mt-6 p-4 bg-white rounded-xl border border-[#f0dde3]">
            <h3 className="font-bold text-gray-900 mb-2">逆にこんな方には向いていないかも</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-[#9b8ec4] shrink-0">&#9654;</span>
                対面での手厚いサポートを求める方（サンマリエやIBJメンバーズの仲人型がおすすめです）
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#9b8ec4] shrink-0">&#9654;</span>
                受け身で自分から動くのが苦手な方（仲人がリードしてくれる店舗型の方が合います）
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#9b8ec4] shrink-0">&#9654;</span>
                オンラインに不慣れな方（対面でのお見合いやサポートを重視するならゼクシィやツヴァイへ）
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
            naco-doと他社の比較
          </h2>
          <div className="card">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-[#f0dde3]">
                    <th className="py-3 px-4 text-left font-bold text-gray-900">比較項目</th>
                    <th className="py-3 px-4 text-center font-bold text-[#c45b84]">naco-do</th>
                    <th className="py-3 px-4 text-center font-bold text-gray-900">ゼクシィ</th>
                    <th className="py-3 px-4 text-center font-bold text-gray-900">ツヴァイ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#f0dde3]">
                    <td className="py-3 px-4 font-medium text-gray-700">タイプ</td>
                    <td className="py-3 px-4 text-center bg-[#fdf8fa]">オンライン型</td>
                    <td className="py-3 px-4 text-center">ハイブリッド型</td>
                    <td className="py-3 px-4 text-center">ハイブリッド型</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <td className="py-3 px-4 font-medium text-gray-700">初期費用</td>
                    <td className="py-3 px-4 text-center bg-[#fdf8fa] font-bold text-[#c45b84]">29,800円</td>
                    <td className="py-3 px-4 text-center">33,000円</td>
                    <td className="py-3 px-4 text-center">115,500円</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <td className="py-3 px-4 font-medium text-gray-700">月会費</td>
                    <td className="py-3 px-4 text-center bg-[#fdf8fa] font-bold text-[#c45b84]">6,980円〜</td>
                    <td className="py-3 px-4 text-center">17,600円</td>
                    <td className="py-3 px-4 text-center">15,400円</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <td className="py-3 px-4 font-medium text-gray-700">成婚料</td>
                    <td className="py-3 px-4 text-center bg-[#fdf8fa]">無料</td>
                    <td className="py-3 px-4 text-center">無料</td>
                    <td className="py-3 px-4 text-center">無料</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <td className="py-3 px-4 font-medium text-gray-700">年間費用</td>
                    <td className="py-3 px-4 text-center bg-[#fdf8fa] font-bold text-[#c45b84]">約113,560円</td>
                    <td className="py-3 px-4 text-center">約244,200円</td>
                    <td className="py-3 px-4 text-center">約300,300円</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <td className="py-3 px-4 font-medium text-gray-700">会員数</td>
                    <td className="py-3 px-4 text-center bg-[#fdf8fa] font-bold text-[#c45b84]">約25.4万人</td>
                    <td className="py-3 px-4 text-center">約3.2万人</td>
                    <td className="py-3 px-4 text-center">約10.2万人</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-gray-700">店舗</td>
                    <td className="py-3 px-4 text-center bg-[#fdf8fa]">なし（オンライン）</td>
                    <td className="py-3 px-4 text-center">27店舗</td>
                    <td className="py-3 px-4 text-center">50店舗超</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 p-4 bg-[#fdf8fa] rounded-xl border border-[#f0dde3]">
            <h3 className="font-bold text-gray-900 mb-2">編集部の比較コメント</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              naco-doのコストパフォーマンスは6社中ぶっちぎりの1位。年間費用約11万円は、2位のゼクシィ（約24万円）の半分以下です。しかも会員数25.4万人は全社中最多。「安かろう悪かろう」ではなく、店舗を持たないことでコストを削減し、会員に還元するビジネスモデルが功を奏しています。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              ただし、サポートの手厚さでは店舗型のゼクシィやツヴァイに劣ります。専任コーディネーターと対面で相談できる安心感は、オンラインのビデオ面談だけでは完全には代替できません。「サポートの質」と「コスト」のどちらを優先するかが判断のポイントです。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              迷っている方は、まずnaco-doで気軽にスタートしてみて、もっと手厚いサポートが必要だと感じたら店舗型に乗り換える、という段階的なアプローチもおすすめです。naco-doの低コストなら、「お試し」感覚で始めるリスクが小さいのが魅力です。
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
              naco-doは「結婚相談所に興味はあるけど、高い費用がネックで踏み出せない」という方にとって最適な選択肢です。月6,980円という手軽さでありながら、独身証明書の提出が必須のため、マッチングアプリより信頼性が高い。3連盟加入で25.4万人の会員にアクセスでき、出会いの量も十分です。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              ただし、naco-doが向いているのは「自分から積極的に動ける方」です。店舗型の相談所のように仲人が手取り足取りリードしてくれるわけではないため、自分で検索し、自分で申し込み、自分でスケジュールを管理する必要があります。月1回のビデオ面談とチャットサポートはありますが、受け身の方には物足りなく感じるかもしれません。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              成婚率41.2%（交際成立から6ヶ月以内）というデータも公表されており、オンライン型でありながら結果を出していることが分かります。月最大200名に申し込めるのは他社にない大きなアドバンテージで、数をこなして相性の良い方を見つけたい方には理想的な環境です。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              まとめると、naco-doは「コスト」「会員数」「手軽さ」の3拍子が揃ったサービス。結婚相談所デビューの最初の一歩として、最もハードルが低い選択肢です。
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
            naco-doの注目データ
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="card text-center">
              <p className="text-3xl font-bold text-[#c45b84]">25.4万人</p>
              <p className="text-sm text-gray-700 mt-1">会員数</p>
              <p className="text-xs text-gray-500 mt-1">3連盟加入で業界最多クラス</p>
            </div>
            <div className="card text-center">
              <p className="text-3xl font-bold text-[#c9a76c]">6,980円〜</p>
              <p className="text-sm text-gray-700 mt-1">月会費</p>
              <p className="text-xs text-gray-500 mt-1">6ヶ月プランの場合</p>
            </div>
            <div className="card text-center">
              <p className="text-3xl font-bold text-[#9b8ec4]">200名/月</p>
              <p className="text-sm text-gray-700 mt-1">お見合い申し込み上限</p>
              <p className="text-xs text-gray-500 mt-1">
                業界トップクラスの申込数で
                <br />
                出会いの量を最大化
              </p>
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
            <Link href="/reviews/zexy/" className="card hover:bg-[#fdf8fa] transition-colors group">
              <p className="text-xs text-[#c9a76c] font-semibold mb-1">レビュー</p>
              <p className="font-bold text-gray-900 text-sm group-hover:text-[#c45b84] transition-colors">ゼクシィ縁結びエージェントの口コミ・評判</p>
              <p className="text-xs text-gray-500 mt-1">オリコン8年連続1位のコスパ良好サービスと比較</p>
            </Link>
            <Link href="/reviews/partner-agent/" className="card hover:bg-[#fdf8fa] transition-colors group">
              <p className="text-xs text-[#c9a76c] font-semibold mb-1">レビュー</p>
              <p className="font-bold text-gray-900 text-sm group-hover:text-[#c45b84] transition-colors">パートナーエージェントの口コミ・評判</p>
              <p className="text-xs text-gray-500 mt-1">成婚率No.1のコンシェルジュ型サービスを検証</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
