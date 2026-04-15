import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "結婚相談所の料金比較｜大手6社の費用を徹底比較【2026年最新】",
  description:
    "結婚相談所の料金を大手6社で徹底比較。入会金・月会費・お見合い料・成婚料・年間総額の一覧表付き。料金体系の違いやコスパランキング、隠れコストまで詳しく解説します。",
  keywords:
    "結婚相談所 料金 比較, 結婚相談所 相場, 結婚相談所 安い, 結婚相談所 費用",
  alternates: {
    canonical: "https://kekkon-navi.pages.dev/articles/price-comparison/",
  },
  openGraph: {
    title: "結婚相談所の料金比較｜大手6社の費用を徹底比較【2026年最新】",
    description:
      "結婚相談所の料金を大手6社で徹底比較。入会金・月会費・お見合い料・成婚料・年間総額の一覧表付き。",
    url: "https://kekkon-navi.pages.dev/articles/price-comparison/",
    type: "article",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline:
        "結婚相談所の料金比較｜大手6社の費用を徹底比較【2026年最新】",
      datePublished: "2026-04-15",
      dateModified: "2026-04-15",
      author: {
        "@type": "Organization",
        name: "結婚相談所比較ナビ",
        url: "https://kekkon-navi.pages.dev",
      },
      publisher: {
        "@type": "Organization",
        name: "結婚相談所比較ナビ",
        url: "https://kekkon-navi.pages.dev",
      },
      description:
        "結婚相談所の料金を大手6社で徹底比較。入会金・月会費・お見合い料・成婚料・年間総額の一覧表付き。",
      mainEntityOfPage:
        "https://kekkon-navi.pages.dev/articles/price-comparison/",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "結婚相談所の料金相場はどのくらいですか？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "結婚相談所の年間総額の相場は約10万〜60万円です。オンライン型のnaco-doなら年間約11万円、仲人型のサンマリエやIBJメンバーズなら年間約60万円が目安です。成婚料の有無で大きく変わります。",
          },
        },
        {
          "@type": "Question",
          name: "一番安い結婚相談所はどこですか？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "大手6社の中ではnaco-doが最安で、年間総額は約11万円です。オンライン完結型のため店舗運営費がかからず、月額6,980円〜と業界最安クラスです。",
          },
        },
        {
          "@type": "Question",
          name: "成婚料がかかる結婚相談所とかからない結婚相談所の違いは？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "成婚料がかかる相談所（IBJメンバーズ・サンマリエなど）は仲人型で手厚いサポートが特徴です。成婚料がない相談所（ゼクシィ・ツヴァイ・naco-doなど）は月会費制で気軽に始められますが、サポートはやや軽めの傾向があります。",
          },
        },
        {
          "@type": "Question",
          name: "結婚相談所の隠れコストにはどんなものがありますか？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "お見合い時のカフェ代（男性負担が一般的で1回1,000〜2,000円）、写真撮影代（1〜3万円）、交通費、デート代、オプションサービス費用などがあります。特にお見合い回数が多い場合はカフェ代が積み重なるので注意が必要です。",
          },
        },
        {
          "@type": "Question",
          name: "結婚相談所の費用を抑えるコツはありますか？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "キャンペーン時期（1月・7月など）に入会する、短期集中で活動する、オンライン型を選ぶ、20代割引や乗り換え割を活用する、などの方法があります。ただし安さだけで選ぶとサポート不足で成婚に至らないケースもあるため、コスパで考えることが大切です。",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "ホーム",
          item: "https://kekkon-navi.pages.dev",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "コラム",
          item: "https://kekkon-navi.pages.dev/articles",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "結婚相談所の料金比較",
          item: "https://kekkon-navi.pages.dev/articles/price-comparison/",
        },
      ],
    },
  ],
};

const breadcrumbItems = [
  { label: "コラム", href: "/articles" },
  { label: "結婚相談所の料金比較" },
];

const companies = [
  {
    name: "ゼクシィ縁結びエージェント",
    initial: "33,000円",
    monthly: "17,600円",
    omiai: "無料",
    seikon: "無料",
    yearly: "約244,200円",
    type: "ハイブリッド型",
  },
  {
    name: "ツヴァイ",
    initial: "115,500円",
    monthly: "15,400円",
    omiai: "無料",
    seikon: "無料",
    yearly: "約300,300円",
    type: "ハイブリッド型",
  },
  {
    name: "サンマリエ",
    initial: "187,000円",
    monthly: "17,600円",
    omiai: "11,000円/回",
    seikon: "220,000円",
    yearly: "約618,200円",
    type: "仲人型",
  },
  {
    name: "IBJメンバーズ",
    initial: "181,500円",
    monthly: "17,050円",
    omiai: "無料",
    seikon: "220,000円",
    yearly: "約606,100円",
    type: "仲人型",
  },
  {
    name: "naco-do",
    initial: "29,800円",
    monthly: "6,980円〜",
    omiai: "無料",
    seikon: "無料",
    yearly: "約113,560円",
    type: "オンライン型",
  },
  {
    name: "パートナーエージェント",
    initial: "137,500円",
    monthly: "18,700円",
    omiai: "無料",
    seikon: "55,000円",
    yearly: "約416,900円",
    type: "仲人型",
  },
];

export default function PriceComparisonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Breadcrumb items={breadcrumbItems} />

      <article className="max-w-4xl mx-auto px-4 pb-16">
        {/* Hero */}
        <header className="text-center py-10">
          <div className="inline-block px-4 py-1 rounded-full text-xs font-bold bg-[#fdf2f6] text-[#c45b84] mb-4">
            料金比較ガイド
          </div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
            結婚相談所の料金比較
            <br />
            <span className="text-[#c45b84]">大手6社の費用を徹底比較</span>
            <span className="text-base md:text-lg text-gray-500 block mt-2">
              【2026年最新】
            </span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            結婚相談所の料金は各社で大きく異なります。入会金・月会費・お見合い料・成婚料、そして見落としがちな隠れコストまで、大手6社を徹底比較。あなたの予算に合った結婚相談所を見つけましょう。
          </p>
          <time
            dateTime="2026-04-15"
            className="text-xs text-gray-400 mt-4 block"
          >
            2026年4月15日更新
          </time>
        </header>

        {/* Table of Contents */}
        <nav className="bg-[#fdf8fa] border border-[#f0dde3] rounded-2xl p-6 mb-10">
          <h2 className="text-lg font-bold mb-3 text-[#c45b84]">この記事の目次</h2>
          <ol className="space-y-2 text-sm">
            <li>
              <a href="#price-table" className="text-[#c45b84] hover:underline">
                1. 大手6社の料金比較表
              </a>
            </li>
            <li>
              <a href="#price-structure" className="text-[#c45b84] hover:underline">
                2. 結婚相談所の料金体系の違い
              </a>
            </li>
            <li>
              <a href="#cost-breakdown" className="text-[#c45b84] hover:underline">
                3. 料金の内訳を詳しく解説
              </a>
            </li>
            <li>
              <a href="#cospa-ranking" className="text-[#c45b84] hover:underline">
                4. コスパランキング
              </a>
            </li>
            <li>
              <a href="#hidden-costs" className="text-[#c45b84] hover:underline">
                5. 隠れコストに注意
              </a>
            </li>
            <li>
              <a href="#budget-guide" className="text-[#c45b84] hover:underline">
                6. 予算別おすすめの選び方
              </a>
            </li>
            <li>
              <a href="#save-tips" className="text-[#c45b84] hover:underline">
                7. 費用を抑えるコツ
              </a>
            </li>
            <li>
              <a href="#faq" className="text-[#c45b84] hover:underline">
                8. よくある質問
              </a>
            </li>
          </ol>
        </nav>

        {/* Section 1: Price Table */}
        <section id="price-table" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">
            大手6社の料金比較表
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            まずは大手6社の料金を一覧で見てみましょう。各社の代表的なプランの料金を比較しています。なお、各社には複数のプランがあるため、ここでは最もスタンダードなプランの料金を掲載しています。
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#c45b84] text-white">
                  <th className="p-3 text-left font-bold rounded-tl-lg">結婚相談所</th>
                  <th className="p-3 text-right font-bold">入会金/初期費用</th>
                  <th className="p-3 text-right font-bold">月会費</th>
                  <th className="p-3 text-right font-bold">お見合い料</th>
                  <th className="p-3 text-right font-bold">成婚料</th>
                  <th className="p-3 text-right font-bold rounded-tr-lg">年間総額目安</th>
                </tr>
              </thead>
              <tbody>
                {companies.map((c, i) => (
                  <tr
                    key={i}
                    className={`border-b border-[#f0dde3] ${i % 2 === 0 ? "bg-white" : "bg-[#fdf8fa]"}`}
                  >
                    <td className="p-3 font-bold text-gray-900">
                      {c.name}
                      <span className="block text-xs text-gray-500 font-normal">
                        {c.type}
                      </span>
                    </td>
                    <td className="p-3 text-right">{c.initial}</td>
                    <td className="p-3 text-right">{c.monthly}</td>
                    <td className="p-3 text-right">{c.omiai}</td>
                    <td className="p-3 text-right">{c.seikon}</td>
                    <td className="p-3 text-right font-bold text-[#c45b84]">
                      {c.yearly}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-sm text-yellow-800">
            <strong>※注意：</strong>
            上記は各社のスタンダードプランの料金です。プランによって異なる場合があります。また、キャンペーンにより変動する可能性があります。最新の料金は各社の公式サイトでご確認ください。年間総額は「入会金＋月会費12ヶ月分＋お見合い料月1回想定＋成婚料」で算出しています。
          </div>
        </section>

        {/* Section 2: Price Structure */}
        <section id="price-structure" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">
            結婚相談所の料金体系の違い
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            結婚相談所の料金体系は大きく分けて3つのタイプがあります。それぞれの特徴を理解することで、自分に合った料金体系を選べるようになります。
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white border border-[#f0dde3] rounded-2xl p-6">
              <div className="w-12 h-12 bg-[#fdf2f6] rounded-xl flex items-center justify-center mb-3">
                <span className="text-[#c45b84] font-bold text-lg">1</span>
              </div>
              <h3 className="font-bold text-lg mb-2">月会費型（低コスト型）</h3>
              <p className="text-sm text-gray-600 mb-3">
                初期費用が安く、月額制で利用するタイプ。成婚料もかからないケースが多い。
              </p>
              <p className="text-xs text-gray-500">
                <strong>代表例：</strong>ゼクシィ縁結びエージェント、naco-do
              </p>
              <div className="mt-3 p-3 bg-green-50 rounded-lg text-xs text-green-700">
                <strong>メリット：</strong>トータルコストが安い、途中退会しやすい
              </div>
              <div className="mt-2 p-3 bg-red-50 rounded-lg text-xs text-red-700">
                <strong>デメリット：</strong>サポートがやや手薄な傾向
              </div>
            </div>
            <div className="bg-white border border-[#f0dde3] rounded-2xl p-6">
              <div className="w-12 h-12 bg-[#fdf2f6] rounded-xl flex items-center justify-center mb-3">
                <span className="text-[#c45b84] font-bold text-lg">2</span>
              </div>
              <h3 className="font-bold text-lg mb-2">成婚料型（成功報酬型）</h3>
              <p className="text-sm text-gray-600 mb-3">
                成婚退会時に成婚料（20〜30万円）がかかるタイプ。仲人がインセンティブを持つため手厚いサポートが期待できる。
              </p>
              <p className="text-xs text-gray-500">
                <strong>代表例：</strong>IBJメンバーズ、サンマリエ
              </p>
              <div className="mt-3 p-3 bg-green-50 rounded-lg text-xs text-green-700">
                <strong>メリット：</strong>仲人のサポートが手厚い
              </div>
              <div className="mt-2 p-3 bg-red-50 rounded-lg text-xs text-red-700">
                <strong>デメリット：</strong>成婚時のトータルコストが高い
              </div>
            </div>
            <div className="bg-white border border-[#f0dde3] rounded-2xl p-6">
              <div className="w-12 h-12 bg-[#fdf2f6] rounded-xl flex items-center justify-center mb-3">
                <span className="text-[#c45b84] font-bold text-lg">3</span>
              </div>
              <h3 className="font-bold text-lg mb-2">ハイブリッド型</h3>
              <p className="text-sm text-gray-600 mb-3">
                初期費用と月会費がある程度かかるが、成婚料は無料または低額。バランス型の料金体系。
              </p>
              <p className="text-xs text-gray-500">
                <strong>代表例：</strong>ツヴァイ、パートナーエージェント
              </p>
              <div className="mt-3 p-3 bg-green-50 rounded-lg text-xs text-green-700">
                <strong>メリット：</strong>コストとサポートのバランスが良い
              </div>
              <div className="mt-2 p-3 bg-red-50 rounded-lg text-xs text-red-700">
                <strong>デメリット：</strong>初期費用がやや高め
              </div>
            </div>
          </div>

          <div className="bg-[#fdf8fa] border border-[#f0dde3] rounded-2xl p-6">
            <h3 className="font-bold text-lg mb-3">どの料金体系を選ぶべき？</h3>
            <p className="text-gray-700 text-sm leading-relaxed mb-3">
              料金体系の選び方は、あなたの婚活スタイルによって異なります。自分で積極的に動ける方は月会費型で十分ですが、プロのサポートが欲しい方は成婚料型の方が結果的にコスパが良い場合もあります。
            </p>
            <ul className="text-sm text-gray-700 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-[#c45b84] font-bold mt-0.5">●</span>
                <span><strong>とにかく費用を抑えたい方</strong>→ 月会費型（naco-do、ゼクシィ）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c45b84] font-bold mt-0.5">●</span>
                <span><strong>手厚いサポートで確実に成婚したい方</strong>→ 成婚料型（IBJ、サンマリエ）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c45b84] font-bold mt-0.5">●</span>
                <span><strong>バランスよく婚活したい方</strong>→ ハイブリッド型（ツヴァイ、パートナーエージェント）</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 3: Cost Breakdown */}
        <section id="cost-breakdown" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">
            料金の内訳を詳しく解説
          </h2>

          <div className="space-y-6">
            <div className="bg-white border border-[#f0dde3] rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-3 text-[#c45b84]">入会金・初期費用</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                入会時に支払う費用です。登録料や活動サポート費などが含まれます。プロフィール写真撮影費が含まれる場合もあります。
              </p>
              <div className="bg-gray-50 rounded-xl p-4 text-sm">
                <p className="font-bold mb-2">各社の入会金・初期費用</p>
                <ul className="space-y-1 text-gray-700">
                  <li>naco-do：29,800円（最安）</li>
                  <li>ゼクシィ縁結びエージェント：33,000円</li>
                  <li>ツヴァイ：115,500円</li>
                  <li>パートナーエージェント：137,500円</li>
                  <li>IBJメンバーズ：181,500円</li>
                  <li>サンマリエ：187,000円（最高）</li>
                </ul>
              </div>
              <p className="text-gray-600 text-sm mt-3">
                オンライン型のnaco-doが圧倒的に安く、仲人型のサンマリエやIBJは初期費用が高い傾向にあります。ただし、初期費用が高い相談所はプロフィール作成サポートや写真撮影が含まれている場合が多いです。
              </p>
            </div>

            <div className="bg-white border border-[#f0dde3] rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-3 text-[#c45b84]">月会費</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                毎月の活動費用です。会員データベースの利用やお相手紹介、コーディネーターのサポートなどが含まれます。
              </p>
              <div className="bg-gray-50 rounded-xl p-4 text-sm">
                <p className="font-bold mb-2">各社の月会費</p>
                <ul className="space-y-1 text-gray-700">
                  <li>naco-do：6,980円〜（最安）</li>
                  <li>ツヴァイ：15,400円</li>
                  <li>IBJメンバーズ：17,050円</li>
                  <li>ゼクシィ縁結びエージェント：17,600円</li>
                  <li>サンマリエ：17,600円</li>
                  <li>パートナーエージェント：18,700円（最高）</li>
                </ul>
              </div>
              <p className="text-gray-600 text-sm mt-3">
                naco-doを除くと、月会費は15,000〜19,000円程度に収まります。月会費はnaco-do以外はそこまで大差がないため、総額を比較する際は入会金と成婚料の差に注目しましょう。
              </p>
            </div>

            <div className="bg-white border border-[#f0dde3] rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-3 text-[#c45b84]">お見合い料</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                お見合いが成立するたびにかかる費用です。多くの相談所では無料ですが、一部の仲人型では1回ごとに費用がかかります。
              </p>
              <div className="bg-gray-50 rounded-xl p-4 text-sm">
                <p className="font-bold mb-2">各社のお見合い料</p>
                <ul className="space-y-1 text-gray-700">
                  <li>ゼクシィ・ツヴァイ・IBJ・naco-do・パートナーエージェント：<strong className="text-green-600">無料</strong></li>
                  <li>サンマリエ：<strong className="text-red-600">11,000円/回</strong></li>
                </ul>
              </div>
              <p className="text-gray-600 text-sm mt-3">
                サンマリエのみお見合い料がかかります。月に2〜3回お見合いをすると年間で26〜40万円の追加費用になるため、積極的にお見合いをしたい方は要注意です。ただし、お見合い料があることで1回1回のお見合いを大切にするという声もあります。
              </p>
            </div>

            <div className="bg-white border border-[#f0dde3] rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-3 text-[#c45b84]">成婚料</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                成婚退会時にかかる費用です。成功報酬型の料金体系で、仲人が成婚に導くインセンティブとなります。
              </p>
              <div className="bg-gray-50 rounded-xl p-4 text-sm">
                <p className="font-bold mb-2">各社の成婚料</p>
                <ul className="space-y-1 text-gray-700">
                  <li>ゼクシィ・ツヴァイ・naco-do：<strong className="text-green-600">無料</strong></li>
                  <li>パートナーエージェント：55,000円</li>
                  <li>IBJメンバーズ・サンマリエ：<strong className="text-red-600">220,000円</strong></li>
                </ul>
              </div>
              <p className="text-gray-600 text-sm mt-3">
                成婚料はトータルコストに大きく影響します。IBJとサンマリエは22万円と高額ですが、その分カウンセラーが本気で成婚に導いてくれるという見方もできます。成婚料は「結婚できた時にだけ払う」ものなので、結果にコミットする覚悟がある方には実は合理的な料金体系です。
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Cospa Ranking */}
        <section id="cospa-ranking" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">
            コスパランキング
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            年間総額だけでなく、会員数やサポート内容も考慮した総合的なコスパランキングです。料金の安さだけでなく「費用に対して得られる価値」を重視して評価しています。
          </p>

          <div className="space-y-4">
            {[
              {
                rank: 1,
                name: "naco-do",
                yearly: "約113,560円",
                point: "圧倒的な安さと25.4万人の会員数。コスパだけで選ぶならダントツの1位。オンライン完結で手軽に始められる。",
                color: "#c9a76c",
              },
              {
                rank: 2,
                name: "ゼクシィ縁結びエージェント",
                yearly: "約244,200円",
                point: "成婚料なしで年間25万円以下。顧客満足度8年連続1位の実績があり、コスパと品質のバランスが優秀。",
                color: "#c45b84",
              },
              {
                rank: 3,
                name: "ツヴァイ",
                yearly: "約300,300円",
                point: "IBJ提携で10万人以上の会員にアクセスでき、成婚料も基本無料。初期費用は高めだが長期利用するならコスパ良好。",
                color: "#9b8ec4",
              },
              {
                rank: 4,
                name: "パートナーエージェント",
                yearly: "約416,900円",
                point: "コンシェルジュの質が高く、成婚料55,000円は仲人型としては安め。PDCAサイクルでの活動サポートが特徴。",
                color: "#5b8a6b",
              },
              {
                rank: 5,
                name: "IBJメンバーズ",
                yearly: "約606,100円",
                point: "成婚率50.4%と高いため、費用対効果は実は良い。1年以内に確実に結婚したい方にはコスパが良いとも言える。",
                color: "#4c6e8a",
              },
              {
                rank: 6,
                name: "サンマリエ",
                yearly: "約618,200円",
                point: "サポートの手厚さは随一だが、お見合い料が別途かかるため最もコストが膨らみやすい。サポート重視の方向け。",
                color: "#8a4c6e",
              },
            ].map((item) => (
              <div
                key={item.rank}
                className="flex items-start gap-4 bg-white border border-[#f0dde3] rounded-2xl p-5"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0"
                  style={{ backgroundColor: item.color }}
                >
                  {item.rank}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-bold text-lg">{item.name}</h3>
                    <span className="text-sm text-[#c45b84] font-bold">
                      {item.yearly}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{item.point}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-[#fdf8fa] border border-[#f0dde3] rounded-2xl p-6">
            <h3 className="font-bold mb-2">コスパランキングの見方</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              安さだけで選ぶならnaco-doが圧倒的ですが、「結婚」という目的を達成するためのコスパで考えると、成婚率が高いIBJメンバーズも実は効率的です。年間60万円で確実に結婚できるなら安いとも言えます。
              逆に年間10万円でも結婚できなければ高い買い物です。自分に必要なサポートレベルを見極めた上で判断しましょう。
            </p>
          </div>
        </section>

        {/* Section 5: Hidden Costs */}
        <section id="hidden-costs" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">
            見落としがちな隠れコスト
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            結婚相談所の公式サイトに掲載されている料金以外にも、実際の活動では様々な費用がかかります。入会前に知っておくことで、予算オーバーを防げます。
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "プロフィール写真撮影代",
                cost: "10,000〜30,000円",
                detail:
                  "お見合い写真はプロに撮影してもらうのが一般的。一部の相談所では初期費用に含まれますが、別途かかる場合も。ヘアメイク付きプランは3万円前後。",
              },
              {
                title: "お見合い時のカフェ代",
                cost: "1回1,000〜2,000円",
                detail:
                  "お見合いはホテルのラウンジで行うことが多く、男性が支払うのがマナー。月3回のお見合いで年間36,000〜72,000円。",
              },
              {
                title: "交通費",
                cost: "月数千〜1万円",
                detail:
                  "店舗への訪問、お見合い場所への移動、デートの交通費など。地方在住で遠方の店舗に通う場合は大きな出費に。",
              },
              {
                title: "デート費用",
                cost: "月10,000〜30,000円",
                detail:
                  "仮交際・真剣交際中のデート費用。食事代やレジャー費用など。複数人と仮交際する場合は費用が膨らむ。",
              },
              {
                title: "オプションサービス",
                cost: "数千〜数万円",
                detail:
                  "追加の紹介や面談、婚活セミナー参加費、プロフィール見直しなど。相談所によっては月の紹介人数を増やすオプションも。",
              },
              {
                title: "途中退会時の違約金",
                cost: "0〜数万円",
                detail:
                  "最低活動期間内の退会時に違約金がかかる場合がある。入会前に中途解約の条件を必ず確認しましょう。",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white border border-[#f0dde3] rounded-2xl p-5"
              >
                <h3 className="font-bold mb-1">{item.title}</h3>
                <p className="text-[#c45b84] font-bold text-sm mb-2">
                  {item.cost}
                </p>
                <p className="text-sm text-gray-600">{item.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-red-50 border border-red-200 rounded-xl p-5">
            <h3 className="font-bold text-red-700 mb-2">
              隠れコストの年間合計は10〜30万円にも
            </h3>
            <p className="text-sm text-red-700">
              上記の隠れコストを合計すると、年間で10万〜30万円の追加費用がかかる可能性があります。例えば、写真撮影2万円＋カフェ代5万円＋交通費6万円＋デート費用15万円＝約28万円。公式料金だけでなく、これらの実費も含めた予算計画を立てましょう。
            </p>
          </div>
        </section>

        {/* Section 6: Budget Guide */}
        <section id="budget-guide" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">
            予算別おすすめの選び方
          </h2>

          <div className="space-y-6">
            <div className="bg-white border-l-4 border-green-500 rounded-r-2xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-2">予算15万円以下</h3>
              <p className="text-sm text-gray-700 mb-2">
                <strong>おすすめ：naco-do</strong>
              </p>
              <p className="text-sm text-gray-600">
                年間総額約11万円で、3つの連盟に加盟した25.4万人の会員から探せます。店舗に通う必要がないため交通費も節約できます。とにかくコストを抑えたい方、まずは婚活を始めてみたい方に最適です。
              </p>
            </div>

            <div className="bg-white border-l-4 border-blue-500 rounded-r-2xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-2">予算15〜30万円</h3>
              <p className="text-sm text-gray-700 mb-2">
                <strong>おすすめ：ゼクシィ縁結びエージェント</strong>
              </p>
              <p className="text-sm text-gray-600">
                年間約24万円で顧客満足度No.1のサービスを利用できます。成婚料なし・お見合い料なしのシンプルな料金体系で、予算の見通しが立てやすいのも安心ポイントです。
              </p>
            </div>

            <div className="bg-white border-l-4 border-[#c9a76c] rounded-r-2xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-2">予算30〜45万円</h3>
              <p className="text-sm text-gray-700 mb-2">
                <strong>おすすめ：ツヴァイ / パートナーエージェント</strong>
              </p>
              <p className="text-sm text-gray-600">
                ツヴァイはIBJ提携で会員数が最大級、パートナーエージェントはコンシェルジュの質が高い。両社とも成婚料が低めで、しっかりしたサポートを受けながらもトータルコストを抑えられます。
              </p>
            </div>

            <div className="bg-white border-l-4 border-[#c45b84] rounded-r-2xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-2">予算45万円以上</h3>
              <p className="text-sm text-gray-700 mb-2">
                <strong>おすすめ：IBJメンバーズ / サンマリエ</strong>
              </p>
              <p className="text-sm text-gray-600">
                費用は高いですが、その分プロによる手厚いサポートと高い成婚率が期待できます。「お金がかかっても確実に結婚したい」「1年以内に成果を出したい」という方には最も効率的な選択肢です。
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: Save Tips */}
        <section id="save-tips" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">
            結婚相談所の費用を抑える7つのコツ
          </h2>

          <div className="space-y-4">
            {[
              {
                num: 1,
                title: "キャンペーン時期を狙って入会する",
                detail:
                  "1月（新年の決意）、7月（夏のボーナス時期）、9月（秋の婚活シーズン前）にはキャンペーンを実施する相談所が多いです。入会金が半額になったり、月会費が数ヶ月無料になることもあります。",
              },
              {
                num: 2,
                title: "短期集中で活動する",
                detail:
                  "活動期間が長くなるほど月会費がかさみます。入会後は積極的にお見合いを組み、3〜6ヶ月の短期決戦を心がけましょう。特に成婚料がかかる相談所では、活動期間を短くすることがコスト削減の最大のポイントです。",
              },
              {
                num: 3,
                title: "年齢別割引・乗り換え割を活用する",
                detail:
                  "ツヴァイの20代割引、他社からの乗り換え割引など、各社が様々な割引を用意しています。入会前に利用可能な割引がないか必ず確認しましょう。",
              },
              {
                num: 4,
                title: "オンライン型を選ぶ",
                detail:
                  "naco-doなどのオンライン型は店舗運営費がかからないため、大幅にコストを抑えられます。特に自分で積極的に活動できる方にはおすすめです。",
              },
              {
                num: 5,
                title: "無料カウンセリングを複数社受ける",
                detail:
                  "入会前に3社以上の無料カウンセリングを受けましょう。比較検討することで値引き交渉もしやすくなりますし、自分に合った相談所を見極められます。",
              },
              {
                num: 6,
                title: "お見合い場所を工夫する",
                detail:
                  "ホテルのラウンジよりもカフェチェーンの方がドリンク代を抑えられます。ただし、お見合いの雰囲気としてはホテルラウンジの方が好印象な場合も多いので、バランスを考えましょう。",
              },
              {
                num: 7,
                title: "プロフィール写真は自分で手配する",
                detail:
                  "相談所経由で写真撮影を依頼するより、直接フォトスタジオに申し込む方が安い場合があります。ただし、婚活写真の実績があるスタジオを選ぶことが大切です。",
              },
            ].map((tip) => (
              <div
                key={tip.num}
                className="flex items-start gap-4 bg-white border border-[#f0dde3] rounded-2xl p-5"
              >
                <div className="w-8 h-8 bg-[#c45b84] rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {tip.num}
                </div>
                <div>
                  <h3 className="font-bold mb-1">{tip.title}</h3>
                  <p className="text-sm text-gray-600">{tip.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">
            結婚相談所の料金に関するよくある質問
          </h2>
          <div className="space-y-3">
            {[
              {
                q: "結婚相談所の料金相場はどのくらいですか？",
                a: "結婚相談所の年間総額の相場は約10万〜60万円です。オンライン型のnaco-doなら年間約11万円、仲人型のサンマリエやIBJメンバーズなら年間約60万円が目安です。成婚料の有無で大きく変わります。一般的な婚活予算としては30万〜40万円程度を見込んでおくと良いでしょう。",
              },
              {
                q: "一番安い結婚相談所はどこですか？",
                a: "大手6社の中ではnaco-doが最安で、年間総額は約11万円です。オンライン完結型のため店舗運営費がかからず、月額6,980円〜と業界最安クラスです。ただし、対面でのサポートを重視する方には向かない場合もあります。",
              },
              {
                q: "成婚料がかかる結婚相談所とかからない結婚相談所、どちらが良いですか？",
                a: "一概には言えませんが、手厚いサポートが欲しい方は成婚料ありの相談所がおすすめです。成婚料があることで仲人が成婚に導くモチベーションを持ちます。自分で積極的に動ける方は、成婚料なしの相談所でコストを抑える方が合理的です。",
              },
              {
                q: "結婚相談所の隠れコストにはどんなものがありますか？",
                a: "お見合い時のカフェ代（男性負担で1回1,000〜2,000円）、写真撮影代（1〜3万円）、交通費、デート代、オプションサービス費用などがあります。これらを合計すると年間10〜30万円の追加費用になることがあるため、事前に予算に組み込んでおきましょう。",
              },
              {
                q: "結婚相談所の費用を抑えるコツはありますか？",
                a: "キャンペーン時期（1月・7月など）に入会する、短期集中で活動する、オンライン型を選ぶ、20代割引や乗り換え割を活用する、などの方法があります。ただし安さだけで選ぶとサポート不足で成婚に至らないケースもあるため、コスパ（費用対効果）で考えることが大切です。",
              },
            ].map((item, i) => (
              <details
                key={i}
                className="group bg-white border border-[#f0dde3] rounded-2xl overflow-hidden"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-[#fdf8fa] transition-colors font-bold text-sm md:text-base">
                  <span className="flex items-center gap-3">
                    <span className="text-[#c45b84] font-bold">Q.</span>
                    {item.q}
                  </span>
                  <span className="text-[#c45b84] group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <div className="px-5 pb-5 text-sm text-gray-700 leading-relaxed border-t border-[#f0dde3] pt-4">
                  <span className="text-[#c9a76c] font-bold">A.</span> {item.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-gradient-to-r from-[#fdf2f6] to-[#faf5ee] rounded-2xl p-8 md:p-12 mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            あなたに合った結婚相談所を見つけよう
          </h2>
          <p className="text-gray-600 mb-6 max-w-lg mx-auto text-sm">
            料金だけでなく、サービス内容や会員数、サポート体制まで総合的に比較して、あなたにぴったりの結婚相談所を選びましょう。
          </p>
          <Link href="/ranking/" className="btn-cta">
            おすすめ結婚相談所ランキングを見る
          </Link>
        </section>

        {/* Related */}
        <section>
          <h2 className="text-lg font-bold mb-4">関連記事</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              href="/ranking/"
              className="block bg-white border border-[#f0dde3] rounded-2xl p-5 hover:bg-[#fdf8fa] transition-colors"
            >
              <p className="font-bold text-sm mb-1">
                結婚相談所おすすめ6選
              </p>
              <p className="text-xs text-gray-500">
                料金・口コミ・成婚率で徹底比較
              </p>
            </Link>
            <Link
              href="/articles/success-rate/"
              className="block bg-white border border-[#f0dde3] rounded-2xl p-5 hover:bg-[#fdf8fa] transition-colors"
            >
              <p className="font-bold text-sm mb-1">
                成婚率を徹底比較
              </p>
              <p className="text-xs text-gray-500">
                本当に結婚できるの？各社の実績を検証
              </p>
            </Link>
            <Link
              href="/articles/online-vs-offline/"
              className="block bg-white border border-[#f0dde3] rounded-2xl p-5 hover:bg-[#fdf8fa] transition-colors"
            >
              <p className="font-bold text-sm mb-1">
                オンライン vs 店舗型
              </p>
              <p className="text-xs text-gray-500">
                メリット・デメリットを比較
              </p>
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
