import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "サンマリエの口コミ・評判｜創業40年の老舗結婚相談所を検証",
  description:
    "サンマリエの口コミ・評判を徹底調査。創業40年超の実績、専任仲人のオーダーメイド婚活、初期費用187,000円の料金体系、婚活セミナーやレッスンの内容まで詳しく解説。実際の利用者の声も掲載。",
  keywords: "サンマリエ 口コミ, サンマリエ 評判, サンマリエ 料金",
  alternates: {
    canonical: "https://kekkon-navi.pages.dev/reviews/sunmarie/",
  },
  openGraph: {
    title: "サンマリエの口コミ・評判｜創業40年の老舗結婚相談所を検証",
    description:
      "サンマリエの口コミ・評判を徹底調査。創業40年超の実績、専任仲人のオーダーメイドサポートの実態を解説。",
    url: "https://kekkon-navi.pages.dev/reviews/sunmarie/",
    siteName: "結婚相談所比較ナビ",
    type: "article",
  },
};

const breadcrumbItems = [
  { label: "業者レビュー", href: "/reviews/" },
  { label: "サンマリエ" },
];

const goodReviews = [
  {
    text: "サンマリエの最大の魅力は、専任仲人さんの手厚さです。入会時に2時間以上かけてカウンセリングをしてくれて、私の性格や価値観、過去の恋愛経験まで丁寧にヒアリング。その上で「この方はあなたに合うと思います」と紹介してくれるお相手は、条件だけのマッチングでは出会えないような相性の良い方ばかりでした。仲人さんのおかげで4ヶ月目に運命の人と出会え、8ヶ月で成婚退会できました。",
    age: "34歳・女性・会社員",
    rating: 5,
    title: "専任仲人の手厚さは他社の比ではない",
  },
  {
    text: "婚活セミナーとファッション診断が本当に役立ちました。それまで自分では気づかなかった服装の改善点やコミュニケーションの癖を指摘してもらい、お見合いでの印象が劇的に変わりました。メイクレッスンも受けた結果、お見合い成功率が入会当初の2倍以上に。成婚料220,000円は高いですが、自分磨きの投資だと思えば十分元が取れました。",
    age: "31歳・女性・看護師",
    rating: 5,
    title: "婚活セミナーやレッスンで自分が変わった",
  },
  {
    text: "40年以上の歴史がある老舗ならではの安定感を感じます。仲人さんの経験値が高く、「こういうタイプの方はこのようにアプローチすると良い」という具体的なアドバイスをもらえました。プロフィール写真の撮影サポートも含め、婚活に必要なことをトータルでサポートしてくれるのがありがたかったです。10ヶ月の活動で幸せな結婚を実現できました。",
    age: "38歳・男性・教師",
    rating: 5,
    title: "40年の実績に裏打ちされた安定感あるサポート",
  },
  {
    text: "IBJネットワークに加盟しているので、会員数は8.7万人超。サンマリエのオーダーメイド紹介に加えて、自分でもIBJシステムからお相手を検索できるので出会いの幅は十分です。仲人さんが「条件だけではなく相性が良さそうな方」を厳選して紹介してくれるので、お見合いの質が高いと感じました。量より質を重視する方にはぴったりだと思います。",
    age: "36歳・女性・薬剤師",
    rating: 4,
    title: "IBJネットワークで量も質も確保できる",
  },
  {
    text: "恋愛経験が少なく、婚活のやり方が全くわからなかった私にとって、サンマリエの手取り足取りのサポートは救いでした。お見合いの練習、会話のポイント、デートの誘い方まで具体的に教えてもらえます。仲人さんが交際中も「最近どうですか？」と頻繁に連絡をくれて、困ったことがあればすぐ相談できる環境が整っていました。",
    age: "33歳・男性・エンジニア",
    rating: 4,
    title: "恋愛経験が少ない人にこそおすすめしたい",
  },
];

const badReviews = [
  {
    text: "成婚料220,000円はやはり大きな出費です。初期費用187,000円と合わせると、入会時点で約40万円。さらに月会費17,600円とお見合い料11,000円/回がかかるので、1年間活動すると60万円を超えます。サポートの質は確かに高いですが、費用対効果という点では人によって感じ方が分かれるでしょう。予算に余裕がない方には正直おすすめしにくいです。",
    age: "30歳・男性・SE",
    rating: 3,
    title: "トータルコスト60万円超は大きな負担",
  },
  {
    text: "お見合い料が1回11,000円かかるのが地味に痛いです。月に3回お見合いすると33,000円、月会費と合わせて5万円以上の出費。ゼクシィ縁結びエージェントやIBJメンバーズではお見合い料が無料なので、たくさんお見合いしたい方にはコスト面でかなり不利です。お見合い料が無料ならもっと気軽にお見合いを組めたのにと思いました。",
    age: "29歳・女性・OL",
    rating: 2,
    title: "お見合い1回11,000円は気軽に組めない",
  },
  {
    text: "店舗が東京・横浜・大阪・名古屋など主要都市に限られているため、地方在住の私はオンライン対応でした。オンラインでもサポートは受けられますが、やはり対面と比べると信頼関係の構築が難しく、仲人型の魅力を十分に活かしきれなかったと感じています。地方在住者にとっては、全国50店舗以上あるツヴァイの方が利用しやすいかもしれません。",
    age: "35歳・女性・自営業",
    rating: 3,
    title: "店舗が都市部に限られ地方は不利",
  },
];

const faqItems = [
  {
    question: "サンマリエの料金は他社と比べて高いですか？",
    answer:
      "サンマリエの年間費用目安は約618,200円（お見合い月1回想定）で、6社の中では最も高い部類に入ります。ただし、専任仲人のオーダーメイドサポート、婚活セミナー、ファッション診断、メイクレッスンなど、他社にはない充実したサービスが含まれています。トータルサポートの質を考えると、価格に見合った価値があるという利用者の声も多いです。",
  },
  {
    question: "サンマリエのオーダーメイド婚活とは何ですか？",
    answer:
      "サンマリエのオーダーメイド婚活とは、専任仲人が会員一人ひとりの性格・価値観・ライフスタイルを深く理解した上で、条件だけでは見つけられない「相性の良いお相手」を紹介するサービスです。初回カウンセリングで徹底的なヒアリングを行い、その人に最適な婚活プランを設計。お見合いの服装アドバイスやデートプランの提案まで、一貫してサポートします。",
  },
  {
    question: "サンマリエにはどんなセミナーがありますか？",
    answer:
      "サンマリエでは「婚活カレッジ」と呼ばれる各種セミナーを開催しています。コミュニケーション講座、ファッション診断、メイクレッスン、お料理合コン、テーブルマナー講座など多岐にわたります。これらのセミナーを通じて自分磨きをしながら、同じ目標を持つ仲間と交流できるのも魅力です。セミナーは会員限定で、追加費用なしで参加できるものも多くあります。",
  },
  {
    question: "サンマリエの成婚率はどのくらいですか？",
    answer:
      "サンマリエは具体的な成婚率を公表していませんが、「業界平均以上」と公表しています。仲人型の手厚いサポートにより、入会から成婚までの期間は約7〜12ヶ月が目安です。成婚料が220,000円と設定されていることで、仲人側にも成婚に導くモチベーションが働き、結果にコミットしたサポートが期待できます。",
  },
  {
    question: "サンマリエは途中退会できますか？",
    answer:
      "はい、途中退会は可能です。ただし、契約内容によっては違約金が発生する場合があります。入会から8日以内であればクーリングオフが適用されます。退会を検討する場合は、まず担当仲人に相談してみましょう。活動の方法を見直すことで改善するケースもあります。また、一時的に活動を休止できる休会制度もありますので、状況に応じて活用できます。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "サンマリエの口コミ・評判｜創業40年の老舗結婚相談所を検証",
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
    "サンマリエの口コミ・評判を徹底調査。創業40年超の実績、専任仲人のオーダーメイドサポートを詳しく解説。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://kekkon-navi.pages.dev/reviews/sunmarie/",
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
      name: "サンマリエ",
      item: "https://kekkon-navi.pages.dev/reviews/sunmarie/",
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

export default function SunmarieReviewPage() {
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
            サンマリエの
            <br className="hidden md:block" />
            <span className="text-gradient">口コミ・評判</span>を徹底検証
          </h1>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            創業40年超の老舗が誇るオーダーメイド婚活の実態。
            <br className="hidden md:block" />
            専任仲人の手厚いサポートと婚活セミナーの評判を調査しました。
          </p>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="card">
            <p className="text-sm font-bold text-gray-900 mb-3">この記事の目次</p>
            <ol className="space-y-2 text-sm">
              <li><a href="#overview" className="text-[#c45b84] hover:underline">1. サンマリエの基本情報</a></li>
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
            サンマリエの基本情報
          </h2>
          <div className="card">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b border-[#f0dde3]">
                    <th className="py-3 px-4 text-left bg-[#fdf8fa] font-medium text-gray-700 w-1/3">運営会社</th>
                    <td className="py-3 px-4">株式会社サンマリエ</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <th className="py-3 px-4 text-left bg-[#fdf8fa] font-medium text-gray-700">サービス種別</th>
                    <td className="py-3 px-4">仲人型（専任仲人によるオーダーメイド紹介）</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <th className="py-3 px-4 text-left bg-[#fdf8fa] font-medium text-gray-700">会員数</th>
                    <td className="py-3 px-4">約8.7万人（IBJネットワーク）</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <th className="py-3 px-4 text-left bg-[#fdf8fa] font-medium text-gray-700">成婚率</th>
                    <td className="py-3 px-4">非公開（業界平均以上と公表）</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <th className="py-3 px-4 text-left bg-[#fdf8fa] font-medium text-gray-700">主な年齢層</th>
                    <td className="py-3 px-4">30代〜40代</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <th className="py-3 px-4 text-left bg-[#fdf8fa] font-medium text-gray-700">店舗数</th>
                    <td className="py-3 px-4">約20店舗（主要都市）+ オンライン対応</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <th className="py-3 px-4 text-left bg-[#fdf8fa] font-medium text-gray-700">特筆事項</th>
                    <td className="py-3 px-4">創業40年超 / 婚活セミナー・レッスン充実</td>
                  </tr>
                  <tr>
                    <th className="py-3 px-4 text-left bg-[#fdf8fa] font-medium text-gray-700">オンライン対応</th>
                    <td className="py-3 px-4">オンラインお見合い・面談可</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 p-4 bg-[#fdf8fa] rounded-xl border border-[#f0dde3]">
            <h3 className="font-bold text-gray-900 mb-2">サンマリエとは？</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              サンマリエは1981年創業の老舗結婚相談所で、40年以上の実績を持つ業界の老舗です。最大の特徴は、専任仲人による「オーダーメイド婚活」。会員一人ひとりの性格・価値観・ライフスタイルを深く理解した上で、条件だけではわからない「相性の良いお相手」を紹介します。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              また、婚活セミナーやファッション診断、メイクレッスンなど自分磨きのプログラムも充実しており、婚活そのものを通じて成長できる環境が整っています。IBJネットワークにも加盟しているため、8.7万人超の会員とマッチング可能。手厚いサポートを求める方に特に人気のある結婚相談所です。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              料金は初期費用187,000円（入会金33,000円＋初期活動費154,000円）、月会費17,600円、お見合い料11,000円/回、成婚料220,000円と、6社の中では最も高い部類ですが、その分サポートの質は群を抜いています。「量より質」のマッチングで、お見合いの成功率が高いのが特徴です。成婚料があることで仲人側にも成婚へのモチベーションが働き、結果にコミットした丁寧なサポートが期待できます。
            </p>
          </div>
        </div>
      </section>

      {/* Good Reviews */}
      <section id="good-reviews" className="py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#c45b84] rounded-full" />
            サンマリエの良い口コミ・評判
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
            サンマリエの悪い口コミ・評判
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
                  <span>専任仲人による一人ひとりに合わせたオーダーメイド紹介</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c45b84] mt-0.5 shrink-0">&#10003;</span>
                  <span>婚活セミナー・ファッション診断・メイクレッスンで自分磨きができる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c45b84] mt-0.5 shrink-0">&#10003;</span>
                  <span>創業40年超の実績に基づく豊富なノウハウ</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c45b84] mt-0.5 shrink-0">&#10003;</span>
                  <span>IBJネットワーク加盟で8.7万人超の会員基盤</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c45b84] mt-0.5 shrink-0">&#10003;</span>
                  <span>成婚料がある分、仲人の成婚へのコミットメントが高い</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c45b84] mt-0.5 shrink-0">&#10003;</span>
                  <span>プロフィール作成から写真撮影までトータルサポート</span>
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
                  <span>成婚料220,000円が高額でトータルコストが6社中最も高い</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9b8ec4] mt-0.5 shrink-0">&#9650;</span>
                  <span>お見合い料が1回11,000円かかり、積極的にお見合いしにくい</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9b8ec4] mt-0.5 shrink-0">&#9650;</span>
                  <span>店舗が主要都市に限られ、地方在住者はアクセスしにくい</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9b8ec4] mt-0.5 shrink-0">&#9650;</span>
                  <span>成婚率が非公開で具体的な実績が見えにくい</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9b8ec4] mt-0.5 shrink-0">&#9650;</span>
                  <span>予算に余裕がない方には厳しい料金設定</span>
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
                    <th className="py-3 px-4 text-center font-bold text-gray-900">カジュアルコース</th>
                    <th className="py-3 px-4 text-center font-bold text-[#c45b84]">スタンダードコース</th>
                    <th className="py-3 px-4 text-center font-bold text-gray-900">プレミアムコース</th>
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
                    <td className="py-3 px-4 font-medium text-gray-700">初期活動費</td>
                    <td className="py-3 px-4 text-center">103,400円</td>
                    <td className="py-3 px-4 text-center bg-[#fdf8fa]">154,000円</td>
                    <td className="py-3 px-4 text-center">187,000円</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <td className="py-3 px-4 font-medium text-gray-700">月会費</td>
                    <td className="py-3 px-4 text-center">16,500円</td>
                    <td className="py-3 px-4 text-center bg-[#fdf8fa] font-bold text-[#c45b84]">17,600円</td>
                    <td className="py-3 px-4 text-center">17,600円</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <td className="py-3 px-4 font-medium text-gray-700">お見合い料</td>
                    <td className="py-3 px-4 text-center">11,000円/回</td>
                    <td className="py-3 px-4 text-center bg-[#fdf8fa]">11,000円/回</td>
                    <td className="py-3 px-4 text-center">11,000円/回</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <td className="py-3 px-4 font-medium text-gray-700">成婚料</td>
                    <td className="py-3 px-4 text-center">220,000円</td>
                    <td className="py-3 px-4 text-center bg-[#fdf8fa]">220,000円</td>
                    <td className="py-3 px-4 text-center">220,000円</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-gray-700">年間費用目安</td>
                    <td className="py-3 px-4 text-center">約566,200円</td>
                    <td className="py-3 px-4 text-center bg-[#fdf8fa] font-bold">約618,200円</td>
                    <td className="py-3 px-4 text-center">約651,200円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              ※ 年間費用はお見合い月1回（12回/年）を想定した目安です。料金はすべて税込表示です。
            </p>
          </div>

          <div className="mt-6 p-4 bg-[#fdf8fa] rounded-xl border border-[#f0dde3]">
            <h3 className="font-bold text-gray-900 mb-2">料金に関する編集部コメント</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              サンマリエの料金は6社の中で最も高い部類ですが、その分サポートの質は群を抜いています。特にお見合い料11,000円/回と成婚料220,000円がコストを押し上げる要因です。ただし、成婚料があることで仲人が「何としてでも成婚に導こう」というモチベーションを持つため、受け身の方でもサポートに引っ張ってもらえるメリットがあります。婚活セミナーやレッスンの費用が含まれていると考えれば、自分磨きへの投資として捉えることもできます。
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
                title: "無料カウンセリング・来店相談",
                description: "店舗またはオンラインで無料カウンセリングを受けます。婚活に対する不安や希望を相談し、サンマリエのサービス内容や料金の説明を受けます。簡易的なマッチングシミュレーションで、出会える可能性のあるお相手の雰囲気も確認できます。",
              },
              {
                step: 2,
                title: "入会・詳細ヒアリング",
                description: "入会後、専任仲人が2時間以上かけて徹底的なカウンセリングを行います。性格、価値観、ライフスタイル、理想のパートナー像、過去の恋愛経験まで深くヒアリングし、オーダーメイドの婚活プランを設計します。プロフィール写真の撮影サポートも実施。",
              },
              {
                step: 3,
                title: "お相手紹介・婚活セミナー参加",
                description: "専任仲人が厳選したお相手の紹介に加え、IBJシステムを使った自由検索も可能。並行して婚活セミナーやファッション診断、メイクレッスンに参加して自分磨きを進めます。仲人が「この方との相性が良い」と太鼓判を押す紹介は的中率が高いと評判です。",
              },
              {
                step: 4,
                title: "お見合い",
                description: "お見合いが決まったら、仲人が服装やヘアスタイル、会話のポイントまでアドバイス。お見合い当日も安心して臨めます。お見合い後は仲人がお相手の感想を確認し、フィードバックを共有。改善点があれば次に活かせるよう丁寧にサポートしてくれます。",
              },
              {
                step: 5,
                title: "仮交際・真剣交際",
                description: "仮交際では仲人がデートプランの提案や、交際中の悩み相談に乗ってくれます。「次のデートではこうしてみましょう」と具体的なアドバイスをもらえるのがサンマリエの強み。真剣交際に進んだ後も、二人の関係を深めるためのサポートが続きます。",
              },
              {
                step: 6,
                title: "プロポーズ・成婚退会",
                description: "結婚の意思が固まったら成婚退会。プロポーズのタイミングや方法についても仲人がアドバイスしてくれます。成婚料は220,000円。平均活動期間は約7〜12ヶ月です。退会後もウェディングに関する各種サービスの紹介を受けられます。",
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
            サンマリエはこんな人におすすめ
          </h2>
          <div className="card">
            <ul className="space-y-4 text-sm text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#c9a76c] text-lg shrink-0">&#9733;</span>
                <div>
                  <span className="font-bold text-gray-900">手厚いサポートを受けて婚活したい方</span>
                  <p className="mt-1 text-gray-600">専任仲人のオーダーメイド紹介は6社中随一の手厚さ。お見合いの服装指導からデートプランの提案まで、至れり尽くせりのサポートが受けられます。</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#c9a76c] text-lg shrink-0">&#9733;</span>
                <div>
                  <span className="font-bold text-gray-900">自分磨きをしながら婚活したい方</span>
                  <p className="mt-1 text-gray-600">婚活セミナー、ファッション診断、メイクレッスンなど充実のプログラム。婚活を通じて人として成長できる環境が整っています。</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#c9a76c] text-lg shrink-0">&#9733;</span>
                <div>
                  <span className="font-bold text-gray-900">恋愛経験が少なく不安がある方</span>
                  <p className="mt-1 text-gray-600">お見合いの練習やコミュニケーション指導まで対応。仲人が親身にリードしてくれるので、恋愛に自信がない方でも安心して婚活を進められます。</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#c9a76c] text-lg shrink-0">&#9733;</span>
                <div>
                  <span className="font-bold text-gray-900">老舗の信頼感を重視する方</span>
                  <p className="mt-1 text-gray-600">創業40年超の実績は業界随一。長年にわたって蓄積されたノウハウと経験が、確かなマッチングに活かされています。</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#c9a76c] text-lg shrink-0">&#9733;</span>
                <div>
                  <span className="font-bold text-gray-900">質の高いお見合いを重視する方</span>
                  <p className="mt-1 text-gray-600">仲人が相性を見極めて厳選紹介するため、お見合いの「打率」が高い傾向。量より質を重視したい方に最適です。</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="mt-6 p-4 bg-white rounded-xl border border-[#f0dde3]">
            <h3 className="font-bold text-gray-900 mb-2">逆にこんな方には向いていないかも</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-[#9b8ec4] shrink-0">&#9654;</span>
                費用を抑えて婚活したい方（年間約11万円のnaco-doや約24万円のゼクシィの方が圧倒的に安価です）
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#9b8ec4] shrink-0">&#9654;</span>
                積極的にたくさんお見合いしたい方（お見合い料1回11,000円がネックになります）
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#9b8ec4] shrink-0">&#9654;</span>
                自分のペースで自由に婚活したい方（仲人型は良くも悪くもサポートが密接です）
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
            サンマリエと他社の比較
          </h2>
          <div className="card">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-[#f0dde3]">
                    <th className="py-3 px-4 text-left font-bold text-gray-900">比較項目</th>
                    <th className="py-3 px-4 text-center font-bold text-[#c45b84]">サンマリエ</th>
                    <th className="py-3 px-4 text-center font-bold text-gray-900">IBJメンバーズ</th>
                    <th className="py-3 px-4 text-center font-bold text-gray-900">ゼクシィ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#f0dde3]">
                    <td className="py-3 px-4 font-medium text-gray-700">タイプ</td>
                    <td className="py-3 px-4 text-center bg-[#fdf8fa]">仲人型</td>
                    <td className="py-3 px-4 text-center">仲人型</td>
                    <td className="py-3 px-4 text-center">ハイブリッド型</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <td className="py-3 px-4 font-medium text-gray-700">初期費用</td>
                    <td className="py-3 px-4 text-center bg-[#fdf8fa]">187,000円</td>
                    <td className="py-3 px-4 text-center">181,500円</td>
                    <td className="py-3 px-4 text-center">33,000円</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <td className="py-3 px-4 font-medium text-gray-700">月会費</td>
                    <td className="py-3 px-4 text-center bg-[#fdf8fa]">17,600円</td>
                    <td className="py-3 px-4 text-center">17,050円</td>
                    <td className="py-3 px-4 text-center">17,600円</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <td className="py-3 px-4 font-medium text-gray-700">お見合い料</td>
                    <td className="py-3 px-4 text-center bg-[#fdf8fa]">11,000円/回</td>
                    <td className="py-3 px-4 text-center">無料</td>
                    <td className="py-3 px-4 text-center">無料</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <td className="py-3 px-4 font-medium text-gray-700">成婚料</td>
                    <td className="py-3 px-4 text-center bg-[#fdf8fa]">220,000円</td>
                    <td className="py-3 px-4 text-center">220,000円</td>
                    <td className="py-3 px-4 text-center">無料</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <td className="py-3 px-4 font-medium text-gray-700">会員数</td>
                    <td className="py-3 px-4 text-center bg-[#fdf8fa]">約8.7万人</td>
                    <td className="py-3 px-4 text-center">約8.7万人</td>
                    <td className="py-3 px-4 text-center">約3.2万人</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-gray-700">特徴</td>
                    <td className="py-3 px-4 text-center bg-[#fdf8fa]">セミナー・レッスン充実</td>
                    <td className="py-3 px-4 text-center">成婚率50.4%</td>
                    <td className="py-3 px-4 text-center">オリコン8年連続1位</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 p-4 bg-[#fdf8fa] rounded-xl border border-[#f0dde3]">
            <h3 className="font-bold text-gray-900 mb-2">編集部の比較コメント</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              サンマリエはIBJメンバーズと同じIBJネットワーク加盟で会員数は同等ですが、サポートの方向性が異なります。サンマリエは「自分磨き」にフォーカスした婚活セミナーやレッスンが充実しており、婚活を通じて人として成長したい方向け。一方、IBJメンバーズは「成婚率50.4%」という実績とデータドリブンなアプローチが強みです。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              コスト面では、サンマリエはお見合い料11,000円/回が加算されるため、お見合い回数が多いほどIBJメンバーズ（お見合い料無料）との差が広がります。月1回のお見合いなら年間で約1.2万円の差ですが、月3回なら約40万円の差に。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              コストを最優先するならゼクシィ縁結びエージェントが圧倒的に有利ですが、会員数は約3.2万人とサンマリエの半分以下。手厚いサポートと会員数を両立したいなら、サンマリエかIBJメンバーズの二択になるでしょう。
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
              サンマリエは「とにかく手厚いサポートで婚活を進めたい方」にとって最良の選択肢です。専任仲人のオーダーメイド紹介は、条件だけでは測れない「人と人の相性」を見極めてくれるため、お見合いの質が高いのが特徴。婚活セミナーやファッション診断、メイクレッスンといった自分磨きプログラムは、他社にはない独自の強みです。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              一方で、年間費用60万円超というコストは無視できません。特にお見合い料11,000円/回は、積極的にお見合いを組みたい方にとってはブレーキになりかねます。IBJメンバーズやゼクシィ縁結びエージェントではお見合い料が無料のため、「たくさんの方と会って見極めたい」というスタイルの方には向いていません。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              サンマリエが最もフィットするのは、恋愛経験が少なく一からサポートしてほしい方、自分磨きも含めて総合的に婚活力を高めたい方、そして「量より質」のお見合いを求める方です。40年以上の実績に裏打ちされたノウハウは確かで、仲人さんの経験値の高さは口コミからも十分に伝わってきます。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              予算に余裕があり、プロのサポートを受けながら「婚活そのもの」を楽しみたい方には、自信を持っておすすめできる結婚相談所です。
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

      {/* Seminars */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#c45b84] rounded-full" />
            サンマリエの婚活セミナー・レッスン
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="card">
              <h3 className="font-bold text-gray-900 text-sm mb-2">コミュニケーション講座</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                お見合いやデートで役立つ会話術を学べます。自分の魅力の伝え方、相手への質問の仕方、好印象を与えるリアクションなど実践的な内容です。
              </p>
            </div>
            <div className="card">
              <h3 className="font-bold text-gray-900 text-sm mb-2">ファッション診断</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                パーソナルカラーや骨格タイプを診断し、お見合いやデートに最適な服装をアドバイス。第一印象を大きく改善できると好評のプログラムです。
              </p>
            </div>
            <div className="card">
              <h3 className="font-bold text-gray-900 text-sm mb-2">メイクレッスン</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                プロのメイクアップアーティストによるレッスン。お見合い写真やお見合い当日の印象アップに直結するメイクテクニックを学べます。
              </p>
            </div>
            <div className="card">
              <h3 className="font-bold text-gray-900 text-sm mb-2">お見合いシミュレーション</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                実際のお見合いを想定した模擬練習。仲人がお相手役となり、入退室のマナーから会話の進め方まで本番さながらの練習ができます。
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
            <Link href="/reviews/ibj-members/" className="card hover:bg-[#fdf8fa] transition-colors group">
              <p className="text-xs text-[#c9a76c] font-semibold mb-1">レビュー</p>
              <p className="font-bold text-gray-900 text-sm group-hover:text-[#c45b84] transition-colors">IBJメンバーズの口コミ・評判</p>
              <p className="text-xs text-gray-500 mt-1">同じIBJ系列の直営サービスとの違いを確認</p>
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
