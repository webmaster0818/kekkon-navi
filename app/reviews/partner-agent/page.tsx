import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "パートナーエージェントの口コミ・評判｜成婚率No.1の実力を検証",
  description:
    "パートナーエージェントの口コミ・評判を徹底調査。成婚率No.1（27.0%）の実力、初期費用137,500円の料金体系、専任コンシェルジュ+AIマッチングのPDCA婚活の実態まで詳しく解説。実際の利用者の声も掲載。",
  keywords:
    "パートナーエージェント 口コミ, パートナーエージェント 評判, パートナーエージェント 料金",
  alternates: {
    canonical: "https://kekkon-navi.pages.dev/reviews/partner-agent/",
  },
  openGraph: {
    title:
      "パートナーエージェントの口コミ・評判｜成婚率No.1の実力を検証",
    description:
      "パートナーエージェントの口コミ・評判を徹底調査。成婚率No.1のPDCA婚活を詳しく解説。",
    url: "https://kekkon-navi.pages.dev/reviews/partner-agent/",
    siteName: "結婚相談所比較ナビ",
    type: "article",
  },
};

const breadcrumbItems = [
  { label: "業者レビュー", href: "/reviews/" },
  { label: "パートナーエージェント" },
];

const goodReviews = [
  {
    text: "成婚率No.1という看板に偽りなしです。入会後すぐにコンシェルジュが活動計画を策定してくれて、PDCAサイクルに基づいて毎月の活動を振り返り、改善点を明確にしてくれました。「今月はお見合いの会話が一方的になりがちでした。次回は相手に質問する時間を増やしましょう」など、具体的なフィードバックがもらえるので、回を重ねるごとに成長を実感。10ヶ月で成婚退会でき、最高の結果になりました。",
    age: "34歳・女性・マーケティング職",
    rating: 5,
    title: "PDCAサイクルで婚活の質が劇的に向上した",
  },
  {
    text: "コンシェルジュだけでなく、チーム体制でサポートしてくれるのが心強かったです。メインのコンシェルジュに加え、コーディネーターやアナリストなど複数のスタッフが関わってくれるため、多角的な視点からアドバイスがもらえます。お見合い後のフィードバックも「コンシェルジュの視点」と「データ分析の視点」の両方から行われるので、改善の方向性が明確でした。",
    age: "37歳・男性・経営企画",
    rating: 5,
    title: "チーム体制による多角的なサポートが秀逸",
  },
  {
    text: "成婚退会者の65.6%が1年以内に成婚しているというデータ通り、スピード感のある婚活ができました。コンシェルジュが「3ヶ月目までにお見合い10回、6ヶ月目までに仮交際3人」など具体的な目標を設定してくれるので、ダラダラと活動期間が延びることがありませんでした。私は8ヶ月で成婚退会。短期集中で結果を出したい方にぴったりです。",
    age: "32歳・女性・薬剤師",
    rating: 5,
    title: "65.6%が1年以内に成婚、短期集中に最適",
  },
  {
    text: "AIマッチングとコンシェルジュの人の目を組み合わせたマッチングが効率的でした。AIが条件やデータから相性の良い方を抽出し、コンシェルジュが性格や価値観を考慮して最終的な紹介リストを作ってくれます。条件だけでは出会えなかったであろう方と出会えて、それが今の妻です。テクノロジーと人の力の融合が生み出す価値を実感しました。",
    age: "36歳・男性・エンジニア",
    rating: 4,
    title: "AI+コンシェルジュのハイブリッドが効率的",
  },
  {
    text: "お見合い料が無料なのは大きなメリットです。成婚料も55,000円と、他の仲人型相談所（サンマリエ220,000円、IBJメンバーズ220,000円）と比べるとかなり良心的。コンシェルジュの質やサポートの手厚さを考えると、トータルのコスパは良いと思います。全国24店舗あるので、地方でも比較的通いやすかったです。",
    age: "30歳・女性・会社員",
    rating: 4,
    title: "成婚料55,000円は仲人型としては良心的",
  },
];

const badReviews = [
  {
    text: "会員数が約3万人（コネクトシップ加盟）で、IBJ系列の8.7万人やnaco-doの25.4万人と比較すると少なめです。希望条件をある程度絞ると「紹介できる方がいません」と言われることもありました。コンシェルジュの質は良いのですが、そもそもの母数が少ないと出会いの選択肢が限られます。会員数の多さを重視する方には物足りないかもしれません。",
    age: "35歳・男性・金融機関勤務",
    rating: 3,
    title: "会員数約3万人はIBJ系列と比べると少ない",
  },
  {
    text: "月会費18,700円は6社の中で最も高いです。初期費用137,500円も安くはなく、年間でのトータルコストは約42万円。成婚料55,000円を加えると約47万円になります。成婚率No.1を謳っているだけあってサポートの質は高いですが、「結果が出なかった場合のリスク」を考えると、この月会費は負担に感じます。",
    age: "29歳・女性・広告代理店勤務",
    rating: 3,
    title: "月会費18,700円は6社中最も高い",
  },
  {
    text: "コンシェルジュとの相性が合わないと感じる場面がありました。私は感覚的に婚活を進めたいタイプでしたが、担当コンシェルジュは論理的・データ重視のアプローチを好む方で、「もっとこうすべきです」というアドバイスがプレッシャーに感じることも。変更を申し出て解決しましたが、最初のマッチングがうまくいかないとストレスになる可能性があります。",
    age: "31歳・女性・デザイナー",
    rating: 2,
    title: "コンシェルジュとの相性が合わないケースも",
  },
];

const faqItems = [
  {
    question: "パートナーエージェントの成婚率No.1はどういう意味ですか？",
    answer:
      "パートナーエージェントの成婚率27.0%は「在籍会員の年間成婚率」で算出されています。これは業界平均の約4.5倍と公表されています。なお、成婚率の算出方法は相談所によって異なるため、IBJメンバーズの50.4%（退会者に対する割合）とは単純比較できません。パートナーエージェントでは成婚退会者の65.6%が1年以内に成婚しているというデータも公表しています。",
  },
  {
    question: "パートナーエージェントのPDCA婚活とは何ですか？",
    answer:
      "PDCA婚活とは、Plan（計画）→ Do（実行）→ Check（振り返り）→ Act（改善）のサイクルで婚活を科学的にアプローチする手法です。入会時に活動計画を策定し、お見合いや交際の結果を定期的に振り返り、改善点を次の活動に活かします。コンシェルジュが毎月のデータを分析し、「どのタイプの方とのお見合いが成功しやすいか」「プロフィールのどこを改善すべきか」などを具体的にフィードバックしてくれます。",
  },
  {
    question: "パートナーエージェントの料金体系を教えてください",
    answer:
      "パートナーエージェントの主要プランは初期費用137,500円（入会金33,000円＋初期費用104,500円）、月会費18,700円、お見合い料無料、成婚料55,000円です。年間費用の目安は約416,900円（成婚料含まず）。成婚料55,000円は仲人型の中では良心的な設定です。コースによって料金が異なるため、詳細は無料カウンセリングで確認することをおすすめします。",
  },
  {
    question: "パートナーエージェントのコンシェルジュ変更はできますか？",
    answer:
      "はい、コンシェルジュとの相性が合わないと感じた場合、変更を申し出ることが可能です。パートナーエージェントではチーム体制を採用しているため、メインのコンシェルジュが変更になっても引き継ぎがスムーズに行われます。遠慮せずに相談することで、より快適な婚活環境を整えることができます。",
  },
  {
    question: "パートナーエージェントの会員数は少なくないですか？",
    answer:
      "パートナーエージェントの会員数は約3万人（コネクトシップ加盟）で、IBJ系列の8.7万人と比較するとやや少なめです。ただし、コネクトシップにはゼクシィ縁結びエージェントやエン婚活エージェントなど複数の相談所が加盟しており、他社の会員とも出会えます。パートナーエージェントは「量より質」のマッチングに重点を置いており、コンシェルジュが厳選して紹介するスタイルのため、少ない母数でも成婚率No.1を実現しています。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "パートナーエージェントの口コミ・評判｜成婚率No.1の実力を検証",
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
    "パートナーエージェントの口コミ・評判を徹底調査。成婚率No.1のPDCA婚活を詳しく解説。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://kekkon-navi.pages.dev/reviews/partner-agent/",
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
      name: "パートナーエージェント",
      item: "https://kekkon-navi.pages.dev/reviews/partner-agent/",
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

export default function PartnerAgentReviewPage() {
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
            パートナーエージェントの
            <br className="hidden md:block" />
            <span className="text-gradient">口コミ・評判</span>を徹底検証
          </h1>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            成婚率No.1（27.0%）を誇るコンシェルジュ型結婚相談所。
            <br className="hidden md:block" />
            PDCAサイクルに基づく科学的な婚活の実力と評判を調査しました。
          </p>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="card">
            <p className="text-sm font-bold text-gray-900 mb-3">この記事の目次</p>
            <ol className="space-y-2 text-sm">
              <li><a href="#overview" className="text-[#c45b84] hover:underline">1. パートナーエージェントの基本情報</a></li>
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
            パートナーエージェントの基本情報
          </h2>
          <div className="card">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b border-[#f0dde3]">
                    <th className="py-3 px-4 text-left bg-[#fdf8fa] font-medium text-gray-700 w-1/3">運営会社</th>
                    <td className="py-3 px-4">タメニー株式会社</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <th className="py-3 px-4 text-left bg-[#fdf8fa] font-medium text-gray-700">サービス種別</th>
                    <td className="py-3 px-4">仲人型（コンシェルジュ＋AIマッチング）</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <th className="py-3 px-4 text-left bg-[#fdf8fa] font-medium text-gray-700">会員数</th>
                    <td className="py-3 px-4">約3万人（コネクトシップ加盟）</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <th className="py-3 px-4 text-left bg-[#fdf8fa] font-medium text-gray-700">成婚率</th>
                    <td className="py-3 px-4">27.0%（在籍会員の年間成婚率・業界平均の約4.5倍）</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <th className="py-3 px-4 text-left bg-[#fdf8fa] font-medium text-gray-700">主な年齢層</th>
                    <td className="py-3 px-4">30代〜40代前半</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <th className="py-3 px-4 text-left bg-[#fdf8fa] font-medium text-gray-700">店舗数</th>
                    <td className="py-3 px-4">全国24店舗 + オンライン対応</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <th className="py-3 px-4 text-left bg-[#fdf8fa] font-medium text-gray-700">特筆事項</th>
                    <td className="py-3 px-4">成婚率No.1 / PDCA婚活 / チーム体制サポート</td>
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
            <h3 className="font-bold text-gray-900 mb-2">パートナーエージェントとは？</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              パートナーエージェントは「成婚率No.1」を掲げる結婚相談所です。在籍会員の年間成婚率27.0%は業界平均の約4.5倍で、成婚退会者の65.6%が1年以内に成婚しています。最大の特徴は、PDCAサイクルに基づく科学的な婚活アプローチ。専任コンシェルジュがチーム体制でサポートし、AIマッチングも活用して効率的にお相手を見つけます。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              コネクトシップに加盟しており約3万人の会員とマッチング可能。お見合い料無料、成婚料55,000円と仲人型としてはリーズナブルな料金設計も魅力です。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              全国24店舗を展開しており、オンラインでのお見合い・面談にも対応。コンシェルジュだけでなくコーディネーターやアナリストなど複数の専門スタッフがチームで婚活を支援するため、多角的な視点からのアドバイスが受けられます。感覚的ではなくデータに基づいた改善提案が特徴で、論理的に婚活を進めたい方から高い支持を得ています。
            </p>
          </div>
        </div>
      </section>

      {/* Good Reviews */}
      <section id="good-reviews" className="py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#c45b84] rounded-full" />
            パートナーエージェントの良い口コミ・評判
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
            パートナーエージェントの悪い口コミ・評判
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
                  <span>成婚率No.1（27.0%・業界平均の約4.5倍）の圧倒的な実績</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c45b84] mt-0.5 shrink-0">&#10003;</span>
                  <span>PDCAサイクルで婚活を科学的にアプローチし改善し続けられる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c45b84] mt-0.5 shrink-0">&#10003;</span>
                  <span>コンシェルジュ+チーム体制で多角的なサポートが受けられる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c45b84] mt-0.5 shrink-0">&#10003;</span>
                  <span>65.6%が1年以内に成婚しており短期決戦に強い</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c45b84] mt-0.5 shrink-0">&#10003;</span>
                  <span>お見合い料無料で積極的にお見合いを組める</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c45b84] mt-0.5 shrink-0">&#10003;</span>
                  <span>成婚料55,000円は仲人型としては良心的な設定</span>
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
                  <span>会員数約3万人はIBJ系列やnaco-doと比べると少なめ</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9b8ec4] mt-0.5 shrink-0">&#9650;</span>
                  <span>月会費18,700円は6社中最も高い設定</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9b8ec4] mt-0.5 shrink-0">&#9650;</span>
                  <span>コンシェルジュとの相性が合わないとストレスになる可能性</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9b8ec4] mt-0.5 shrink-0">&#9650;</span>
                  <span>PDCA重視のため自由に婚活したい方にはやや窮屈に感じることも</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#9b8ec4] mt-0.5 shrink-0">&#9650;</span>
                  <span>希望条件が厳しいと紹介人数が限られる可能性がある</span>
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
                    <th className="py-3 px-4 text-center font-bold text-gray-900">コンシェルジュライト</th>
                    <th className="py-3 px-4 text-center font-bold text-[#c45b84]">コンシェルジュコース</th>
                    <th className="py-3 px-4 text-center font-bold text-gray-900">エグゼクティブコース</th>
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
                    <td className="py-3 px-4 font-medium text-gray-700">初期費用</td>
                    <td className="py-3 px-4 text-center">33,000円</td>
                    <td className="py-3 px-4 text-center bg-[#fdf8fa]">104,500円</td>
                    <td className="py-3 px-4 text-center">242,000円</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <td className="py-3 px-4 font-medium text-gray-700">月会費</td>
                    <td className="py-3 px-4 text-center">14,300円</td>
                    <td className="py-3 px-4 text-center bg-[#fdf8fa] font-bold text-[#c45b84]">18,700円</td>
                    <td className="py-3 px-4 text-center">26,400円</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <td className="py-3 px-4 font-medium text-gray-700">お見合い料</td>
                    <td className="py-3 px-4 text-center">無料</td>
                    <td className="py-3 px-4 text-center bg-[#fdf8fa]">無料</td>
                    <td className="py-3 px-4 text-center">無料</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <td className="py-3 px-4 font-medium text-gray-700">成婚料</td>
                    <td className="py-3 px-4 text-center">55,000円</td>
                    <td className="py-3 px-4 text-center bg-[#fdf8fa]">55,000円</td>
                    <td className="py-3 px-4 text-center">55,000円</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <td className="py-3 px-4 font-medium text-gray-700">紹介人数/月</td>
                    <td className="py-3 px-4 text-center">4名</td>
                    <td className="py-3 px-4 text-center bg-[#fdf8fa]">6名</td>
                    <td className="py-3 px-4 text-center">8名</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-gray-700">年間費用目安</td>
                    <td className="py-3 px-4 text-center">約292,600円</td>
                    <td className="py-3 px-4 text-center bg-[#fdf8fa] font-bold">約416,900円</td>
                    <td className="py-3 px-4 text-center">約646,800円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              ※ 年間費用は成婚料を含まない目安です。料金はすべて税込表示です。
            </p>
          </div>

          <div className="mt-6 p-4 bg-[#fdf8fa] rounded-xl border border-[#f0dde3]">
            <h3 className="font-bold text-gray-900 mb-2">料金に関する編集部コメント</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              パートナーエージェントの成婚料55,000円は、サンマリエやIBJメンバーズの220,000円と比べると約1/4。仲人型の手厚いサポートを受けながら成婚料を抑えたい方にはベストな選択肢です。一方、月会費18,700円は6社中最も高いため、年間のランニングコストは意識しておく必要があります。コンシェルジュコースが最も人気で、紹介人数・サポート内容のバランスが良いです。短期間で成婚すれば、トータルコストは約47万円と仲人型としてはリーズナブルな部類に収まります。
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
                description: "全国24店舗またはオンラインで無料カウンセリングを受けます。あなたの婚活に対する考えや希望を丁寧にヒアリングした上で、サービス内容と料金プランの説明を行います。実際の成婚事例も紹介してもらえるので、入会後のイメージが掴めます。",
              },
              {
                step: 2,
                title: "入会・PDCA計画策定",
                description: "入会後、コンシェルジュがあなたの目標成婚時期から逆算して活動計画（Plan）を策定します。「3ヶ月目までにお見合い何回」「半年後には仮交際」など具体的なマイルストーンを設定。プロフィール作成では写真選定やPR文のアドバイスもしっかりサポートしてくれます。",
              },
              {
                step: 3,
                title: "AIマッチング+コンシェルジュ紹介",
                description: "AIが条件やデータから相性の良い方を抽出し、コンシェルジュが人の目で精査して紹介リストを作成。コネクトシップ加盟の他社会員とも出会えます。月6名の紹介を受けながら、自分でも検索・申し込みが可能です。",
              },
              {
                step: 4,
                title: "お見合い・フィードバック（Do & Check）",
                description: "お見合い料は無料。お見合い後はコンシェルジュがお相手の感想を確認し、詳細なフィードバックを行います。「お相手の反応が良かった点」「改善するともっと良くなる点」を具体的に伝えてくれるので、次のお見合いに活かせます。これがPDCAの「Check」にあたります。",
              },
              {
                step: 5,
                title: "改善・仮交際・真剣交際（Act & 次のPlan）",
                description: "フィードバックを基に改善策を実行（Act）し、次の活動計画を更新（Plan）。仮交際中も「デートではこうしてみましょう」「この話題を振ってみてください」など具体的なアドバイスが続きます。真剣交際に進んだ後は、結婚に向けたサポートも行います。",
              },
              {
                step: 6,
                title: "プロポーズ・成婚退会",
                description: "結婚の意思が固まったら成婚退会。成婚料は55,000円。成婚退会者の65.6%が1年以内に成婚しています。プロポーズのタイミングや方法もコンシェルジュが相談に乗ってくれます。退会後もアフターフォローとして各種サービスの紹介を受けられます。",
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
            パートナーエージェントはこんな人におすすめ
          </h2>
          <div className="card">
            <ul className="space-y-4 text-sm text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#c9a76c] text-lg shrink-0">&#9733;</span>
                <div>
                  <span className="font-bold text-gray-900">成婚率を最重視する方</span>
                  <p className="mt-1 text-gray-600">成婚率27.0%は業界平均の約4.5倍。「入会したら本当に結婚できるのか」という不安に、数字で答えてくれるのがパートナーエージェントです。</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#c9a76c] text-lg shrink-0">&#9733;</span>
                <div>
                  <span className="font-bold text-gray-900">1年以内に結婚したい方</span>
                  <p className="mt-1 text-gray-600">成婚退会者の65.6%が1年以内に成婚。PDCAサイクルで短期間に集中的に活動し、効率的に結果を出したい方に最適です。</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#c9a76c] text-lg shrink-0">&#9733;</span>
                <div>
                  <span className="font-bold text-gray-900">論理的・データドリブンな婚活がしたい方</span>
                  <p className="mt-1 text-gray-600">PDCAに基づく科学的なアプローチで、何がうまくいっていて何を改善すべきかが明確になります。感覚頼みの婚活から脱却したい方にぴったりです。</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#c9a76c] text-lg shrink-0">&#9733;</span>
                <div>
                  <span className="font-bold text-gray-900">仲人型でも成婚料を抑えたい方</span>
                  <p className="mt-1 text-gray-600">成婚料55,000円はサンマリエ・IBJメンバーズの220,000円の約1/4。仲人型の手厚いサポートを受けながら成婚料を抑えたい方のベストチョイスです。</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#c9a76c] text-lg shrink-0">&#9733;</span>
                <div>
                  <span className="font-bold text-gray-900">チーム体制のサポートを受けたい方</span>
                  <p className="mt-1 text-gray-600">コンシェルジュだけでなく、コーディネーターやアナリストなど複数のスタッフが関わるチーム体制。多角的な視点からのアドバイスが受けられます。</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="mt-6 p-4 bg-white rounded-xl border border-[#f0dde3]">
            <h3 className="font-bold text-gray-900 mb-2">逆にこんな方には向いていないかも</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-[#9b8ec4] shrink-0">&#9654;</span>
                出会いの母数を重視する方（会員25.4万人のnaco-doや10万人超のツヴァイの方が選択肢が広がります）
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#9b8ec4] shrink-0">&#9654;</span>
                月会費を抑えたい方（月6,980円のnaco-doや月17,600円のゼクシィの方が安価です）
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#9b8ec4] shrink-0">&#9654;</span>
                自由に自分のペースで婚活したい方（PDCAサイクルは計画的に進めるスタイルのため窮屈に感じる可能性があります）
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
            パートナーエージェントと他社の比較
          </h2>
          <div className="card">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-[#f0dde3]">
                    <th className="py-3 px-4 text-left font-bold text-gray-900">比較項目</th>
                    <th className="py-3 px-4 text-center font-bold text-[#c45b84]">パートナーエージェント</th>
                    <th className="py-3 px-4 text-center font-bold text-gray-900">IBJメンバーズ</th>
                    <th className="py-3 px-4 text-center font-bold text-gray-900">ゼクシィ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#f0dde3]">
                    <td className="py-3 px-4 font-medium text-gray-700">成婚率</td>
                    <td className="py-3 px-4 text-center bg-[#fdf8fa] font-bold text-[#c45b84]">27.0%</td>
                    <td className="py-3 px-4 text-center">50.4%</td>
                    <td className="py-3 px-4 text-center">26.2%</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <td className="py-3 px-4 font-medium text-gray-700">初期費用</td>
                    <td className="py-3 px-4 text-center bg-[#fdf8fa]">137,500円</td>
                    <td className="py-3 px-4 text-center">181,500円</td>
                    <td className="py-3 px-4 text-center">33,000円</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <td className="py-3 px-4 font-medium text-gray-700">月会費</td>
                    <td className="py-3 px-4 text-center bg-[#fdf8fa]">18,700円</td>
                    <td className="py-3 px-4 text-center">17,050円</td>
                    <td className="py-3 px-4 text-center">17,600円</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <td className="py-3 px-4 font-medium text-gray-700">成婚料</td>
                    <td className="py-3 px-4 text-center bg-[#fdf8fa]">55,000円</td>
                    <td className="py-3 px-4 text-center">220,000円</td>
                    <td className="py-3 px-4 text-center">無料</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <td className="py-3 px-4 font-medium text-gray-700">年間費用</td>
                    <td className="py-3 px-4 text-center bg-[#fdf8fa]">約416,900円</td>
                    <td className="py-3 px-4 text-center">約606,100円</td>
                    <td className="py-3 px-4 text-center">約244,200円</td>
                  </tr>
                  <tr className="border-b border-[#f0dde3]">
                    <td className="py-3 px-4 font-medium text-gray-700">会員数</td>
                    <td className="py-3 px-4 text-center bg-[#fdf8fa]">約3万人</td>
                    <td className="py-3 px-4 text-center">約8.7万人</td>
                    <td className="py-3 px-4 text-center">約3.2万人</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-gray-700">特徴</td>
                    <td className="py-3 px-4 text-center bg-[#fdf8fa]">PDCA婚活</td>
                    <td className="py-3 px-4 text-center">少人数担当制</td>
                    <td className="py-3 px-4 text-center">オリコン1位</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 p-4 bg-[#fdf8fa] rounded-xl border border-[#f0dde3]">
            <h3 className="font-bold text-gray-900 mb-2">編集部の比較コメント</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              パートナーエージェントは「成婚率の高さ」と「仲人型としての成婚料の安さ」を両立している点がユニーク。成婚料55,000円はIBJメンバーズ・サンマリエの220,000円の約1/4であり、仲人型のサポートを受けたいがコストも気になるという方にとってベストバランスの選択肢です。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              ゼクシィ縁結びエージェントとは成婚率が近い水準（パートナーエージェント27.0% vs ゼクシィ26.2%）ですが、サポートの方向性が大きく異なります。ゼクシィはシンプル料金・コスパ重視のハイブリッド型、パートナーエージェントはPDCA・チーム体制の仲人型。コストを抑えたいならゼクシィ、手厚いサポートと科学的アプローチが欲しいならパートナーエージェントです。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              会員数では約3万人とIBJメンバーズ（8.7万人）の約1/3。出会いの母数を重視する方にはやや物足りないですが、コンシェルジュが厳選して紹介するスタイルのため、「量より質」のマッチングで成婚率No.1を維持しています。
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
              パートナーエージェントは「結果にコミットした婚活」を求める方にとって最適な結婚相談所です。PDCAサイクルに基づく科学的なアプローチは、感覚頼みの婚活に限界を感じている方にこそ効果を発揮します。毎月の活動を振り返り、具体的な改善点を見つけ、次に活かすという循環が、着実に成婚への道を開いてくれます。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              チーム体制のサポートも大きな強みです。コンシェルジュ一人に頼るのではなく、コーディネーターやアナリストなど複数の専門家が関わることで、多角的な視点からのアドバイスが受けられます。「コンシェルジュとの相性が合わない」という口コミもありますが、変更を申し出ることができ、チーム体制なので引き継ぎもスムーズです。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              コスト面では、月会費18,700円は6社中最も高い一方で、成婚料55,000円は仲人型の中で最も安い。年間トータルで見ると約47万円（成婚時）で、IBJメンバーズの約82万円と比べると大幅にお得です。仲人型のクオリティを維持しつつトータルコストを抑えたい方にはベストな選択です。
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              成婚退会者の65.6%が1年以内に成婚しているというデータは心強い。短期集中で結果を出したい方、論理的に婚活を進めたい方、チーム体制のサポートを受けたい方に、自信を持っておすすめできる結婚相談所です。
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
            パートナーエージェントの注目データ
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="card text-center">
              <p className="text-3xl font-bold text-[#c45b84]">27.0%</p>
              <p className="text-sm text-gray-700 mt-1">成婚率</p>
              <p className="text-xs text-gray-500 mt-1">業界平均の約4.5倍</p>
            </div>
            <div className="card text-center">
              <p className="text-3xl font-bold text-[#c9a76c]">65.6%</p>
              <p className="text-sm text-gray-700 mt-1">1年以内成婚率</p>
              <p className="text-xs text-gray-500 mt-1">成婚退会者のうちの割合</p>
            </div>
            <div className="card text-center">
              <p className="text-3xl font-bold text-[#9b8ec4]">55,000円</p>
              <p className="text-sm text-gray-700 mt-1">成婚料</p>
              <p className="text-xs text-gray-500 mt-1">仲人型で最もリーズナブル</p>
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
              <p className="text-xs text-gray-500 mt-1">成婚率50.4%のIBJ直営サービスを検証</p>
            </Link>
            <Link href="/reviews/sunmarie/" className="card hover:bg-[#fdf8fa] transition-colors group">
              <p className="text-xs text-[#c9a76c] font-semibold mb-1">レビュー</p>
              <p className="font-bold text-gray-900 text-sm group-hover:text-[#c45b84] transition-colors">サンマリエの口コミ・評判</p>
              <p className="text-xs text-gray-500 mt-1">創業40年の老舗仲人型サービスを徹底検証</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
