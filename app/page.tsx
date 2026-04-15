import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "結婚相談所おすすめ6社を徹底比較【2026年最新】",
  description:
    "結婚相談所のおすすめ6社を徹底比較。ゼクシィ縁結びエージェント・ツヴァイ・サンマリエ・IBJメンバーズ・naco-do・パートナーエージェントの料金・口コミ・成婚率を正直にレビュー。理想のパートナーに出会いたい方必見。",
  alternates: {
    canonical: "https://kekkon-navi.pages.dev/",
  },
};

const companies = [
  {
    name: "ゼクシィ縁結びエージェント",
    tagline: "オリコン顧客満足度8年連続No.1",
    points: [
      "月会費17,600円でリーズナブル",
      "お見合い料・成婚料なし",
      "リクルート運営の安心感",
    ],
    accent: "#d4735e",
    badge: "満足度No.1",
  },
  {
    name: "ツヴァイ",
    tagline: "IBJ提携で会員数10万人超",
    points: [
      "全国50店舗以上の展開",
      "データマッチング+仲人型",
      "月会費15,400円〜",
    ],
    accent: "#c9a76c",
    badge: "会員数No.1",
  },
  {
    name: "サンマリエ",
    tagline: "創業40年以上の老舗相談所",
    points: [
      "専任担当のオーダーメイド紹介",
      "婚活セミナーが充実",
      "手厚いサポート体制",
    ],
    accent: "#9b8ec4",
    badge: "サポート充実",
  },
  {
    name: "IBJメンバーズ",
    tagline: "IBJ直営の最大級ネットワーク",
    points: [
      "会員数8.7万人超",
      "成婚率50.4%の実績",
      "質の高い会員層",
    ],
    accent: "#1e3a5f",
    badge: "成婚率高",
  },
  {
    name: "naco-do",
    tagline: "オンライン完結で月6,980円〜",
    points: [
      "業界最安クラスの料金",
      "3つの連盟で会員25.4万人",
      "スマホで完結できる手軽さ",
    ],
    accent: "#4c8a6b",
    badge: "コスパ最強",
  },
  {
    name: "パートナーエージェント",
    tagline: "成婚率No.1の実績",
    points: [
      "コンシェルジュによる徹底サポート",
      "PDCAサイクルで婚活を最適化",
      "成婚退会者の65.6%が1年以内",
    ],
    accent: "#b85a47",
    badge: "成婚率No.1",
  },
];

const reasons = [
  {
    title: "6社を徹底比較",
    description:
      "人気の結婚相談所6社を料金・会員数・成婚率・サポートなど複数の観点から徹底比較。わかりやすく整理しています。",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "正直レビュー",
    description:
      "メリットだけでなくデメリットも正直にお伝え。実際の口コミも含めて偏りのない情報を提供します。",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: "タイプ別おすすめ",
    description:
      "コスパ重視、サポート重視、会員数重視など、あなたの婚活スタイルに合った相談所をタイプ別にご提案します。",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

const faqs = [
  {
    question: "結婚相談所の費用はどのくらいかかりますか？",
    answer:
      "結婚相談所の費用は入会金・月会費・お見合い料・成婚料の4つに分かれます。月額だけなら6,980円〜18,700円程度。成婚料は無料の会社から22万円程度かかる会社まで様々です。トータルでは年間20万〜60万円が目安になります。",
  },
  {
    question: "結婚相談所を選ぶときのポイントは何ですか？",
    answer:
      "主なポイントは3つです。(1)仲人型・データマッチング型・ハイブリッド型のどのタイプが自分に合うか、(2)料金体系が予算に合っているか、(3)サポート内容（面談頻度・紹介人数・セミナー有無など）が充実しているか、を確認しましょう。",
  },
  {
    question: "オンライン型の結婚相談所でも成婚できますか？",
    answer:
      "はい、オンライン型でも十分に成婚できます。naco-doのようなオンライン型は、複数の連盟に加入しており、会員数は25万人以上と店舗型に引けを取りません。忙しい方やコスパ重視の方に特におすすめです。",
  },
  {
    question: "何歳くらいの人が結婚相談所を利用していますか？",
    answer:
      "結婚相談所のメインユーザーは男性30代後半〜40代前半、女性20代後半〜30代後半です。ただし、20代前半から50代以上まで幅広い年齢層の方が利用されており、年齢を気にせず始められます。",
  },
];

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-[#fef5f2] via-[#faf5ee] to-[#fffbf7]" />
        <div className="absolute top-10 right-10 w-32 h-32 bg-[#d4735e]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-[#c9a76c]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#9b8ec4]/5 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left">
            <p className="inline-block text-xs font-semibold text-[#c9a76c] bg-[#faf5ee] px-4 py-1.5 rounded-full mb-6 tracking-wider border border-[#edddd5]">
              MARRIAGE AGENCY COMPARISON 2026
            </p>
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
              理想のパートナーに出会える
              <br />
              <span className="text-gradient">結婚相談所を見つけよう</span>
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-lg mx-auto md:mx-0 mb-8 leading-relaxed">
              「そろそろ本気で結婚したい」「自分に合う相手と出会いたい」
              <br className="hidden md:block" />
              人気の結婚相談所6社を徹底比較して、
              <br className="hidden md:block" />
              あなたにぴったりの相談所選びをお手伝いします。
            </p>
            <Link href="/ranking/" className="btn-cta text-base md:text-lg">
              おすすめ6社を比較する
            </Link>
          </div>
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#d4735e]/20 via-[#c9a76c]/15 to-[#9b8ec4]/15 rounded-3xl blur-2xl" />
            <Image
              src="/images/hero-couple.png"
              alt="幸せなカップル"
              width={400}
              height={400}
              className="relative rounded-2xl shadow-lg"
              priority
            />
          </div>
        </div>
      </section>

      {/* Company highlights */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-center text-gray-900 mb-3">
            比較する6つの結婚相談所
          </h2>
          <p className="text-sm text-gray-500 text-center mb-10">
            それぞれの特徴をひと目で確認できます
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {companies.map((company) => (
              <div key={company.name} className="card flex flex-col relative">
                <span
                  className="absolute -top-3 left-4 text-[11px] font-bold text-white px-3 py-1 rounded-full"
                  style={{ backgroundColor: company.accent }}
                >
                  {company.badge}
                </span>
                <div
                  className="h-1 rounded-full mb-4 mt-2"
                  style={{
                    background: `linear-gradient(90deg, ${company.accent}, ${company.accent}80)`,
                  }}
                />
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {company.name}
                </h3>
                <p className="text-xs text-gray-500 mb-3">{company.tagline}</p>
                <ul className="space-y-2 mb-4 flex-1">
                  {company.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <span
                        className="mt-0.5 shrink-0"
                        style={{ color: company.accent }}
                      >
                        &#10003;
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reasons */}
      <section className="section-light py-16 md:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#d4735e]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-36 h-36 bg-[#c9a76c]/5 rounded-full blur-3xl" />
        <div className="relative max-w-5xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-center text-gray-900 mb-10">
            結婚相談所比較ナビが選ばれる理由
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reasons.map((reason) => (
              <div key={reason.title} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#fef5f2] to-[#faf5ee] text-[#d4735e] mb-4 shadow-sm">
                  {reason.icon}
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-center text-gray-900 mb-10">
            よくある質問
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group border border-[#edddd5] rounded-xl"
              >
                <summary className="flex items-center justify-between cursor-pointer px-5 py-4 text-sm font-semibold text-gray-900 hover:bg-[#fef5f2] rounded-xl transition-colors">
                  <span>{faq.question}</span>
                  <svg
                    className="w-5 h-5 text-[#d4735e] shrink-0 ml-4 group-open:rotate-180 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-primary-light py-16 md:py-20 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-[#c9a76c]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-[#d4735e]/10 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 mx-auto w-full max-w-xs">
            <Image
              src="/images/cta-couple.png"
              alt="幸せに歩くカップル"
              width={320}
              height={320}
              className="rounded-2xl shadow-md"
            />
          </div>
          <div className="order-1 md:order-2 text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              まずは無料カウンセリングで
              <br />
              あなたに合う相談所を見つけよう
            </h2>
            <p className="text-sm text-gray-600 mb-8 leading-relaxed">
              6つの結婚相談所を比較して、
              <br className="hidden md:block" />
              あなたにぴったりの相談所を見つけてください。
              <br className="hidden md:block" />
              まずは無料カウンセリングから始めましょう。
            </p>
            <Link href="/ranking/" className="btn-cta text-base md:text-lg">
              おすすめ6社の比較を見る
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
