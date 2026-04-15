import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "結婚相談所の成婚率を徹底比較｜本当に結婚できるの？",
  description:
    "結婚相談所の成婚率を各社で比較。成婚率の定義の違い（退会者ベース vs 会員ベース）、成婚率を上げるコツ、活動期間の目安まで徹底解説。本当に結婚できるのかの疑問にお答えします。",
  keywords: "結婚相談所 成婚率, 結婚相談所 本当に結婚できる, 結婚相談所 成功率",
  alternates: { canonical: "https://kekkon-navi.pages.dev/articles/success-rate/" },
  openGraph: {
    title: "結婚相談所の成婚率を徹底比較｜本当に結婚できるの？",
    description: "結婚相談所の成婚率を各社で比較。成婚率の定義の違いや成婚率を上げるコツも解説。",
    url: "https://kekkon-navi.pages.dev/articles/success-rate/",
    type: "article",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline:
        "結婚相談所の成婚率を徹底比較｜本当に結婚できるの？",
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
        "結婚相談所の成婚率を各社で比較。成婚率の定義の違いや成婚率を上げるコツまで徹底解説。",
      mainEntityOfPage:
        "https://kekkon-navi.pages.dev/articles/success-rate/",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "結婚相談所の成婚率はどのくらいですか？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "各社の公表する成婚率は10〜50%と幅がありますが、これは成婚率の計算方法が各社で異なるためです。IBJメンバーズの50.4%は「一定期間内の退会者のうち成婚退会者の割合」、ゼクシィの26.2%は「会員同士の成婚率」です。",
          },
        },
        {
          "@type": "Question",
          name: "成婚率の計算方法は各社で違うのですか？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "はい、大きく分けて「退会者ベース」と「会員ベース」の2つがあります。退会者ベースは退会した人のうち成婚退会した人の割合で、数字が大きくなりやすいです。会員ベースは全会員に対する成婚者の割合で、数字は小さくなります。",
          },
        },
        {
          "@type": "Question",
          name: "成婚率が高い結婚相談所はどこですか？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "公表値ではIBJメンバーズの50.4%が最高です。ただし計算方法が異なるため単純比較はできません。成婚率だけでなく、サポート内容や会員数も含めた総合力で判断することが大切です。",
          },
        },
        {
          "@type": "Question",
          name: "成婚率を上げるにはどうすれば良いですか？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "入会後3ヶ月のゴールデン期間に集中的に活動する、カウンセラーのアドバイスに素直に従う、条件にこだわりすぎない、月に4回以上のお見合いを組む、プロフィール写真にこだわるなどが効果的です。",
          },
        },
        {
          "@type": "Question",
          name: "成婚までの平均活動期間はどのくらいですか？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "年代によりますが、全体の平均は約8〜12ヶ月です。20代は6〜8ヶ月、30代は8〜12ヶ月、40代は12〜18ヶ月が目安です。積極的に活動すれば6ヶ月以内の成婚も可能です。",
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
          name: "結婚相談所の成婚率比較",
          item: "https://kekkon-navi.pages.dev/articles/success-rate/",
        },
      ],
    },
  ],
};

const breadcrumbItems = [
  { label: "コラム", href: "/articles" },
  { label: "結婚相談所の成婚率比較" },
];

export default function SuccessRatePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Breadcrumb items={breadcrumbItems} />

      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="text-center py-10">
          <div className="inline-block px-4 py-1 rounded-full text-xs font-bold bg-[#fdf2f6] text-[#c45b84] mb-4">成婚率ガイド</div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
            結婚相談所の成婚率を徹底比較
            <br />
            <span className="text-[#c45b84]">本当に結婚できるの？</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            結婚相談所の成婚率は各社バラバラ。「成婚率50%」と聞くと高く感じますが、その計算方法を知らないと正しく比較できません。成婚率の定義の違い、各社の実績、そして成婚率を上げるコツまで徹底解説します。
          </p>
          <time dateTime="2026-04-15" className="text-xs text-gray-400 mt-4 block">2026年4月15日更新</time>
        </header>

        <nav className="bg-[#fdf8fa] border border-[#f0dde3] rounded-2xl p-6 mb-10">
          <h2 className="text-lg font-bold mb-3 text-[#c45b84]">この記事の目次</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#definition" className="text-[#c45b84] hover:underline">1. 成婚率の定義の違い</a></li>
            <li><a href="#comparison" className="text-[#c45b84] hover:underline">2. 各社の成婚率比較</a></li>
            <li><a href="#how-to-read" className="text-[#c45b84] hover:underline">3. 成婚率の正しい読み方</a></li>
            <li><a href="#improve" className="text-[#c45b84] hover:underline">4. 成婚率を上げる7つのコツ</a></li>
            <li><a href="#period" className="text-[#c45b84] hover:underline">5. 活動期間の目安</a></li>
            <li><a href="#factors" className="text-[#c45b84] hover:underline">6. 成婚率に影響する要因</a></li>
            <li><a href="#faq" className="text-[#c45b84] hover:underline">7. よくある質問</a></li>
          </ol>
        </nav>

        {/* Section 1 */}
        <section id="definition" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">成婚率の定義の違い</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            結婚相談所の「成婚率」は統一された計算方法がなく、各社が独自の定義で算出しています。同じ「成婚率」でも意味が全く違うため、数字だけで比較すると判断を誤ります。
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white border-2 border-[#c45b84] rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-3 text-[#c45b84]">退会者ベース</h3>
              <div className="bg-gray-50 rounded-xl p-4 mb-3 text-center">
                <p className="text-sm text-gray-600">計算式</p>
                <p className="font-bold text-lg mt-1">成婚退会者数 / 全退会者数</p>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                退会した人のうち、成婚で退会した人の割合。退会者の中で比較するため数値が高くなりやすい。
              </p>
              <p className="text-xs text-gray-500"><strong>採用例：</strong>IBJメンバーズ（50.4%）</p>
              <div className="mt-3 bg-yellow-50 rounded-lg p-3 text-xs text-yellow-800">
                <strong>注意：</strong>成婚以外の理由（諦め・休会・乗り換え）で退会した人は母数に入るが分子には入らない。活動を続けている会員は母数に含まれない。
              </div>
            </div>
            <div className="bg-white border-2 border-[#c9a76c] rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-3 text-[#c9a76c]">会員ベース</h3>
              <div className="bg-gray-50 rounded-xl p-4 mb-3 text-center">
                <p className="text-sm text-gray-600">計算式</p>
                <p className="font-bold text-lg mt-1">成婚退会者数 / 全会員数</p>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                在籍中の全会員に対する成婚退会者の割合。全員を母数にするため数値は低くなる。
              </p>
              <p className="text-xs text-gray-500"><strong>採用例：</strong>ゼクシィ縁結びエージェント（26.2%）</p>
              <div className="mt-3 bg-yellow-50 rounded-lg p-3 text-xs text-yellow-800">
                <strong>注意：</strong>入会したばかりの人も母数に含まれるため、数値は低くなりやすい。ただし、より実態に近い数字と言える。
              </div>
            </div>
          </div>
          <div className="bg-[#fdf8fa] border border-[#f0dde3] rounded-2xl p-6">
            <h3 className="font-bold mb-3">「成婚」の定義も各社で異なる</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li className="flex items-start gap-2"><span className="text-[#c45b84] font-bold mt-0.5">●</span><span><strong>プロポーズ成功：</strong>プロポーズが承諾された時点で「成婚」（IBJ系）</span></li>
              <li className="flex items-start gap-2"><span className="text-[#c45b84] font-bold mt-0.5">●</span><span><strong>真剣交際発展：</strong>真剣交際（1対1の交際）に進んだ時点で「成婚」とする場合も</span></li>
              <li className="flex items-start gap-2"><span className="text-[#c45b84] font-bold mt-0.5">●</span><span><strong>交際成立：</strong>お見合い後に交際が成立した時点で「成婚」とするケース</span></li>
            </ul>
            <p className="text-sm text-gray-600 mt-3">
              「成婚」のゴールが異なれば、当然数値も変わります。成婚率を比較する際は、必ず定義を確認しましょう。
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section id="comparison" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">各社の成婚率比較</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#c45b84] text-white">
                  <th className="p-3 text-left font-bold rounded-tl-lg">結婚相談所</th>
                  <th className="p-3 text-center font-bold">成婚率</th>
                  <th className="p-3 text-center font-bold">計算方法</th>
                  <th className="p-3 text-left font-bold rounded-tr-lg">備考</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["IBJメンバーズ", "50.4%", "退会者ベース", "業界最高水準。IBJ直営ならではの手厚いサポートが要因。"],
                  ["naco-do", "41.2%", "交際成立ベース", "交際成立から6ヶ月以内の成婚率。定義がやや独自。"],
                  ["ゼクシィ縁結びエージェント", "26.2%", "会員ベース", "会員同士の成婚率。計算方法が厳密なため低く見える。"],
                  ["パートナーエージェント", "27.0%", "会員ベース", "1年以内の交際率は93.1%と高い。"],
                  ["ツヴァイ", "非公開", "—", "成婚率は非公開だが、会員数の多さが強み。"],
                  ["サンマリエ", "非公開", "—", "「業界平均以上」と公表。具体的な数値は開示なし。"],
                ].map((row, i) => (
                  <tr key={i} className={`border-b border-[#f0dde3] ${i % 2 === 0 ? "bg-white" : "bg-[#fdf8fa]"}`}>
                    <td className="p-3 font-bold text-gray-900">{row[0]}</td>
                    <td className="p-3 text-center font-bold text-[#c45b84]">{row[1]}</td>
                    <td className="p-3 text-center">{row[2]}</td>
                    <td className="p-3 text-gray-600 text-xs">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
            <p className="font-bold text-yellow-800 mb-1">成婚率は参考値として見ましょう</p>
            <p className="text-sm text-yellow-800">
              各社の成婚率は計算方法が異なるため、単純な数値比較は意味がありません。成婚率が高い＝自分も結婚できる、ということではなく、サポート体制や会員の質、自分との相性を総合的に判断することが大切です。
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section id="how-to-read" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">成婚率の正しい読み方</h2>
          <div className="space-y-4">
            <div className="bg-white border border-[#f0dde3] rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-2 text-[#c45b84]">計算方法を必ず確認する</h3>
              <p className="text-sm text-gray-700">退会者ベースか会員ベースかで数値は2倍以上変わることがあります。無料カウンセリングで「この成婚率はどのように計算していますか？」と質問しましょう。</p>
            </div>
            <div className="bg-white border border-[#f0dde3] rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-2 text-[#c9a76c]">「成婚」の定義を確認する</h3>
              <p className="text-sm text-gray-700">プロポーズ成功を成婚とする相談所と、交際成立を成婚とする相談所では、同じ「成婚率50%」でも意味が全く異なります。</p>
            </div>
            <div className="bg-white border border-[#f0dde3] rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-2 text-[#9b8ec4]">自分の年代・条件での成婚率を聞く</h3>
              <p className="text-sm text-gray-700">全体の成婚率ではなく、「30代女性の成婚率」「40代男性の成婚率」など、自分に近い条件での実績を聞くと、より参考になります。</p>
            </div>
            <div className="bg-white border border-[#f0dde3] rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-2 text-[#5b8a6b]">成婚率だけで選ばない</h3>
              <p className="text-sm text-gray-700">成婚率が高くても、自分に合わない相談所では結果が出ません。カウンセラーとの相性、会員層、サポート内容、料金など、総合的に判断しましょう。</p>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section id="improve" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">成婚率を上げる7つのコツ</h2>
          <div className="space-y-4">
            {[
              { title: "入会後3ヶ月のゴールデン期間に集中する", detail: "新規会員は注目されやすく、お見合い申し込みも多くなります。この最初の3ヶ月で可能な限りお見合いを組みましょう。月6〜8回のペースが理想です。" },
              { title: "カウンセラーのアドバイスに素直に従う", detail: "カウンセラーは何百人もの成婚を見てきたプロです。自分の感覚だけで判断せず、プロのアドバイスを積極的に取り入れましょう。素直な人ほど成婚が早いというデータもあります。" },
              { title: "条件にこだわりすぎない", detail: "譲れない条件は3つまで。それ以外は柔軟に対応して、まずは多くの人と会ってみましょう。「条件外だけど会ってみたら素敵だった」というケースは非常に多いです。" },
              { title: "プロフィール写真にこだわる", detail: "お見合い成立率はプロフィール写真で70%以上が決まると言われています。プロのカメラマンに依頼し、清潔感のある自然な笑顔の写真を用意しましょう。" },
              { title: "お見合い後のフィードバックを活用する", detail: "お見合い後にカウンセラーから「相手の印象」のフィードバックをもらえます。良かった点・改善点を次のお見合いに活かすPDCAサイクルが成婚への近道です。" },
              { title: "仮交際中も積極的に動く", detail: "仮交際に入ったら安心してペースを落としがちですが、ここからが本番です。週1回のデートペースを維持し、相手との関係を深めていきましょう。" },
              { title: "活動期間に期限を設ける", detail: "「1年以内に成婚退会」など明確な期限を設定しましょう。期限があることで活動にメリハリが生まれ、だらだらと活動を続けるリスクを防げます。" },
            ].map((tip, i) => (
              <div key={i} className="flex items-start gap-4 bg-white border border-[#f0dde3] rounded-2xl p-5">
                <div className="w-8 h-8 bg-[#c45b84] rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">{i + 1}</div>
                <div><h3 className="font-bold mb-1">{tip.title}</h3><p className="text-sm text-gray-600">{tip.detail}</p></div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5 */}
        <section id="period" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">活動期間の目安</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {[
              { age: "20代", period: "6〜8ヶ月", desc: "若さが武器になり、お見合い成立率が高い。短期集中で成婚に至るケースが多い。", color: "#c45b84" },
              { age: "30代前半", period: "6〜10ヶ月", desc: "結婚相談所のボリュームゾーン。活発に活動すれば半年以内の成婚も十分可能。", color: "#c9a76c" },
              { age: "30代後半", period: "10〜14ヶ月", desc: "戦略的な活動が必要。カウンセラーと密に連携し、効率的にお見合いを組むことが大切。", color: "#9b8ec4" },
              { age: "40代", period: "12〜18ヶ月", desc: "焦らず腰を据えた活動が必要。ただし、積極的に動けば1年以内の成婚も可能。", color: "#5b8a6b" },
            ].map((item, i) => (
              <div key={i} className="bg-white border-2 rounded-2xl p-6" style={{ borderColor: item.color }}>
                <h3 className="font-bold text-lg mb-1" style={{ color: item.color }}>{item.age}</h3>
                <p className="text-2xl font-bold mb-2">{item.period}</p>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#fdf8fa] border border-[#f0dde3] rounded-2xl p-6">
            <h3 className="font-bold mb-3">活動期間を短縮するポイント</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li className="flex items-start gap-2"><span className="text-[#c45b84] font-bold mt-0.5">●</span><span>入会後すぐに活動開始する（準備期間を最小限に）</span></li>
              <li className="flex items-start gap-2"><span className="text-[#c45b84] font-bold mt-0.5">●</span><span>月4回以上のお見合いを組む</span></li>
              <li className="flex items-start gap-2"><span className="text-[#c45b84] font-bold mt-0.5">●</span><span>仮交際から真剣交際への移行を迅速に判断する</span></li>
              <li className="flex items-start gap-2"><span className="text-[#c45b84] font-bold mt-0.5">●</span><span>複数の紹介方法（検索・紹介・AI）を併用する</span></li>
            </ul>
          </div>
        </section>

        {/* Section 6 */}
        <section id="factors" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">成婚率に影響する要因</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: "年齢", desc: "若いほど成婚率は高くなる傾向。特に女性は35歳前後で成婚率に差が出ます。", impact: "影響大" },
              { title: "活動量", desc: "月のお見合い回数が多いほど成婚率が上がります。受け身では結果は出ません。", impact: "影響大" },
              { title: "条件の柔軟さ", desc: "条件を柔軟に設定できる人ほど出会いの数が増え、成婚に至りやすいです。", impact: "影響大" },
              { title: "プロフィールの質", desc: "写真と自己PRの質がお見合い成立率を左右。プロに相談して作り込みましょう。", impact: "影響中" },
              { title: "コミュニケーション力", desc: "お見合いやデートでの会話力が仮交際への発展率に影響します。", impact: "影響中" },
              { title: "カウンセラーとの相性", desc: "信頼できるカウンセラーがいると活動がスムーズに進み、成婚率が上がります。", impact: "影響中" },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-[#f0dde3] rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-bold">{item.title}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${item.impact === "影響大" ? "bg-red-100 text-red-700" : "bg-yellow-100 text-yellow-700"}`}>{item.impact}</span>
                </div>
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
              { q: "結婚相談所の成婚率はどのくらいですか？", a: "各社の公表する成婚率は10〜50%と幅がありますが、計算方法が異なります。IBJメンバーズの50.4%は退会者ベース、ゼクシィの26.2%は会員ベースです。計算方法を確認した上で比較しましょう。" },
              { q: "成婚率の計算方法は各社で違うのですか？", a: "はい、「退会者ベース」と「会員ベース」の2つが主流です。退会者ベースは退会した人のうち成婚退会した人の割合で数字が大きくなりやすく、会員ベースは全会員に対する割合で数字は小さくなります。" },
              { q: "成婚率が高い結婚相談所はどこですか？", a: "公表値ではIBJメンバーズの50.4%が最高です。ただし計算方法が異なるため単純比較はできません。成婚率だけでなく、サポート内容や会員数も含めた総合力で判断しましょう。" },
              { q: "成婚率を上げるにはどうすれば良いですか？", a: "入会後3ヶ月のゴールデン期間に集中的に活動する、カウンセラーのアドバイスに素直に従う、条件にこだわりすぎない、月に4回以上のお見合いを組む、プロフィール写真にこだわるなどが効果的です。" },
              { q: "成婚までの平均活動期間はどのくらいですか？", a: "全体の平均は約8〜12ヶ月です。20代は6〜8ヶ月、30代は8〜12ヶ月、40代は12〜18ヶ月が目安です。積極的に活動すれば6ヶ月以内の成婚も可能です。" },
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

        {/* Section: 成婚率シミュレーション */}
        <section id="simulation" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">
            あなたの成婚率をシミュレーション
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            成婚率は「相談所の力」と「自分の努力」の掛け算で決まります。以下の要素を確認して、あなたの成婚率を高めるポイントを見つけましょう。
          </p>
          <div className="bg-white border-2 border-[#c45b84] rounded-2xl p-6 md:p-8 mb-6">
            <h3 className="font-bold text-lg mb-4">
              成婚率を左右する5つのポイント
            </h3>
            <div className="space-y-4">
              {[
                {
                  point: "月のお見合い回数",
                  low: "月1〜2回（成婚率：低）",
                  high: "月4〜6回（成婚率：高）",
                  detail:
                    "お見合いの数は成婚率に直結します。月4回以上のお見合いを組んでいる方は、月1〜2回の方と比べて約2倍の成婚率です。",
                },
                {
                  point: "カウンセラーのアドバイス受け入れ度",
                  low: "自己流で進める（成婚率：低）",
                  high: "素直に実行する（成婚率：高）",
                  detail:
                    "カウンセラーのアドバイスを素直に実行する人は、自己流の人に比べて成婚率が約1.5倍高いというデータがあります。",
                },
                {
                  point: "条件の柔軟さ",
                  low: "条件を5つ以上設定（成婚率：低）",
                  high: "条件は3つまで（成婚率：高）",
                  detail:
                    "譲れない条件が多いほど出会いの数が減り、成婚率は下がります。条件は3つまでに絞り、あとは実際に会ってから判断しましょう。",
                },
                {
                  point: "プロフィール写真の質",
                  low: "自撮りやスナップ写真（成婚率：低）",
                  high: "プロ撮影の高品質写真（成婚率：高）",
                  detail:
                    "プロフィール写真の質でお見合い成立率は2〜3倍変わります。費用はかかりますが、プロに撮影を依頼するのは最もコスパの良い投資です。",
                },
                {
                  point: "活動の継続性",
                  low: "途中で休止する（成婚率：低）",
                  high: "継続的に活動する（成婚率：高）",
                  detail:
                    "お見合いがうまくいかなくて落ち込んでも、活動を止めないことが重要。休止期間があるとモチベーションの回復にも時間がかかります。",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-[#fdf8fa] rounded-xl p-4"
                >
                  <p className="font-bold text-sm mb-2">
                    {i + 1}. {item.point}
                  </p>
                  <div className="grid md:grid-cols-2 gap-2 mb-2">
                    <div className="bg-red-50 rounded-lg p-2 text-xs text-red-700">
                      {item.low}
                    </div>
                    <div className="bg-green-50 rounded-lg p-2 text-xs text-green-700">
                      {item.high}
                    </div>
                  </div>
                  <p className="text-xs text-gray-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section: 成婚率の裏側 */}
        <section id="behind-numbers" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">
            成婚率の数字の裏側を読み解く
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            成婚率の数字をそのまま信じるのは危険です。各社の成婚率の裏に隠れた要素を理解しましょう。
          </p>
          <div className="space-y-4">
            {[
              {
                title: "成婚率が高い相談所の特徴",
                detail:
                  "成婚率が高い相談所は、入会時の審査が厳しい傾向があります。年収や年齢で入会を断る場合があり、「成婚しやすい人」だけを会員にしている可能性があります。つまり、成婚率が高い＝サービスが優れている、とは限りません。入会審査の基準も確認しましょう。",
              },
              {
                title: "成婚率が非公開の相談所について",
                detail:
                  "ツヴァイやサンマリエのように成婚率を公開していない相談所もあります。これは必ずしも成婚率が低いことを意味しません。計算方法が統一されていないため、誤解を避けるためにあえて公開しないケースもあります。非公開だからといって敬遠する必要はありません。",
              },
              {
                title: "「交際率」と「成婚率」の違い",
                detail:
                  "パートナーエージェントの「1年以内の交際率93.1%」のように、「交際率」を前面に出す相談所もあります。交際率は成婚率よりもハードルが低い指標です。交際が始まっても成婚に至らないケースも多いため、数字の定義をしっかり確認しましょう。",
              },
              {
                title: "成婚率は「自分次第」で大きく変わる",
                detail:
                  "同じ相談所でも、積極的に活動する人と受け身の人では成婚率は大きく異なります。月に1回しかお見合いをしない人と、月に6回お見合いをする人では、後者の方が圧倒的に成婚率が高くなります。成婚率は相談所の力だけでなく、自分の努力も大きく影響するのです。",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white border border-[#f0dde3] rounded-2xl p-6"
              >
                <h3 className="font-bold mb-2 text-[#c45b84]">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section: 成婚率と料金の関係 */}
        <section id="rate-vs-price" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">
            成婚率と料金の関係
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            「高い相談所ほど成婚率が高いのか？」この疑問に、データを基に答えます。
          </p>
          <div className="space-y-4">
            {[
              {
                name: "naco-do",
                price: "約113,560円",
                rate: "41.2%",
                analysis:
                  "最も安い料金で高い成婚率を実現。ただし「交際成立から6ヶ月以内」という独自の定義。コスパは抜群。",
              },
              {
                name: "ゼクシィ縁結びエージェント",
                price: "約244,200円",
                rate: "26.2%",
                analysis:
                  "中価格帯で会員ベースの成婚率。計算方法が厳密なため数値は控えめだが、実態は高い満足度。",
              },
              {
                name: "パートナーエージェント",
                price: "約416,900円",
                rate: "27.0%",
                analysis:
                  "会員ベースの成婚率で26%超。交際率93.1%という高い数値も。PDCA型のサポートが効果的。",
              },
              {
                name: "IBJメンバーズ",
                price: "約606,100円",
                rate: "50.4%",
                analysis:
                  "最も高い成婚率。退会者ベースの計算で、手厚いサポートが功を奏している。費用対効果は実は高い。",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-white border border-[#f0dde3] rounded-2xl p-5"
              >
                <div className="shrink-0 text-center w-20">
                  <p className="text-lg font-bold text-[#c45b84]">
                    {item.rate}
                  </p>
                  <p className="text-xs text-gray-500">{item.price}</p>
                </div>
                <div>
                  <h3 className="font-bold mb-1">{item.name}</h3>
                  <p className="text-sm text-gray-600">{item.analysis}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-[#fdf8fa] border border-[#f0dde3] rounded-2xl p-6">
            <h3 className="font-bold mb-2">結論</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              料金と成婚率は必ずしも比例しません。最も安いnaco-doが41.2%と高い成婚率を出している一方で、最も高いIBJメンバーズも50.4%と高水準です。大切なのは「自分に合った相談所を選ぶこと」と「積極的に活動すること」。料金の高さ＝成婚率の高さではなく、自分の活動量とサポートの相性が成婚を左右します。
            </p>
          </div>
        </section>

        {/* Section: 成婚者の共通点 */}
        <section id="common-traits" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">
            成婚者に共通する7つの特徴
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            多くの結婚相談所のカウンセラーが口を揃えて言う、成婚者に共通する特徴をまとめました。これらの特徴を意識して活動すれば、あなたの成婚率も上がるはずです。
          </p>
          <div className="space-y-4">
            {[
              {
                trait: "素直にアドバイスを受け入れる",
                detail:
                  "カウンセラーのアドバイスに「でも…」「私はこう思う…」と反論する人より、素直に実行する人の方が圧倒的に成婚率が高いです。プロの視点を信じて行動しましょう。",
              },
              {
                trait: "条件にこだわりすぎない",
                detail:
                  "「会ってみたら意外と良かった」という出会いが成婚につながるケースは非常に多いです。条件は参考程度にし、実際に会ってからの印象を大切にしましょう。",
              },
              {
                trait: "活動量が多い",
                detail:
                  "月に4回以上お見合いを組んでいる人は、月1〜2回の人と比べて成婚率が約2倍高いというデータがあります。「量は質に転化する」は婚活にも当てはまります。",
              },
              {
                trait: "ポジティブな姿勢",
                detail:
                  "お見合いで断られても落ち込みすぎず、次に切り替えられる人は成婚が早いです。断られるのは相性の問題であり、あなた自身が否定されたわけではありません。",
              },
              {
                trait: "自分磨きを怠らない",
                detail:
                  "外見（清潔感・ファッション）と内面（コミュニケーション力・教養）の両方を磨き続ける人は、活動期間中にどんどん魅力が増し、成婚に至りやすくなります。",
              },
              {
                trait: "期限を決めている",
                detail:
                  "「1年以内に成婚する」と明確な期限を設定している人は、ダラダラと活動を続ける人よりも成婚率が高いです。期限があることで行動にメリハリが生まれます。",
              },
              {
                trait: "カウンセラーとの信頼関係を築いている",
                detail:
                  "カウンセラーに本音で相談できる関係を築いている人は、的確なアドバイスを受けられるため成婚率が上がります。遠慮せずに何でも相談しましょう。",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white border border-[#f0dde3] rounded-2xl p-5"
              >
                <div className="w-8 h-8 bg-[#c9a76c] rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-bold mb-1">{item.trait}</h3>
                  <p className="text-sm text-gray-600">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center bg-gradient-to-r from-[#fdf2f6] to-[#faf5ee] rounded-2xl p-8 md:p-12 mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-4">成婚率を自分の手で上げよう</h2>
          <p className="text-gray-600 mb-6 max-w-lg mx-auto text-sm">成婚率は「受け身」では上がりません。あなたの行動次第で、成婚の確率は大きく変わります。</p>
          <Link href="/ranking/" className="btn-cta">おすすめ結婚相談所ランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-4">関連記事</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/ranking/" className="block bg-white border border-[#f0dde3] rounded-2xl p-5 hover:bg-[#fdf8fa] transition-colors">
              <p className="font-bold text-sm mb-1">結婚相談所おすすめ6選</p>
              <p className="text-xs text-gray-500">料金・口コミ・成婚率で徹底比較</p>
            </Link>
            <Link href="/articles/price-comparison/" className="block bg-white border border-[#f0dde3] rounded-2xl p-5 hover:bg-[#fdf8fa] transition-colors">
              <p className="font-bold text-sm mb-1">結婚相談所の料金比較</p>
              <p className="text-xs text-gray-500">大手6社の費用を徹底比較</p>
            </Link>
            <Link href="/articles/flow-guide/" className="block bg-white border border-[#f0dde3] rounded-2xl p-5 hover:bg-[#fdf8fa] transition-colors">
              <p className="font-bold text-sm mb-1">入会から成婚までの流れ</p>
              <p className="text-xs text-gray-500">完全ガイド</p>
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
