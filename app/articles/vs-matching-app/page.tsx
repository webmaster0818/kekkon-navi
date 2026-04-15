import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "結婚相談所 vs マッチングアプリ｜どっちが結婚に近い？徹底比較",
  description:
    "結婚相談所とマッチングアプリを7つの基準（料金・真剣度・出会いの質・サポート・成婚率・安全性・手軽さ）で徹底比較。それぞれに向いている人の特徴と併用のコツも解説。",
  keywords: "結婚相談所 マッチングアプリ 比較, 結婚相談所 マッチングアプリ どっち",
  alternates: { canonical: "https://kekkon-navi.pages.dev/articles/vs-matching-app/" },
  openGraph: {
    title: "結婚相談所 vs マッチングアプリ｜どっちが結婚に近い？徹底比較",
    description: "結婚相談所とマッチングアプリを7つの基準で徹底比較。向いている人の違いも解説。",
    url: "https://kekkon-navi.pages.dev/articles/vs-matching-app/",
    type: "article",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "結婚相談所 vs マッチングアプリ｜どっちが結婚に近い？徹底比較",
      datePublished: "2026-04-15", dateModified: "2026-04-15",
      author: { "@type": "Organization", name: "結婚相談所比較ナビ", url: "https://kekkon-navi.pages.dev" },
      publisher: { "@type": "Organization", name: "結婚相談所比較ナビ", url: "https://kekkon-navi.pages.dev" },
      description: "結婚相談所とマッチングアプリを7つの基準で徹底比較。",
      mainEntityOfPage: "https://kekkon-navi.pages.dev/articles/vs-matching-app/",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "結婚相談所とマッチングアプリ、どちらが結婚に近いですか？", acceptedAnswer: { "@type": "Answer", text: "結婚への近さでは結婚相談所が圧倒的に有利です。会員全員が結婚を前提に活動しており、身元確認も徹底されています。マッチングアプリは手軽さが魅力ですが、結婚への本気度にバラつきがあるのが課題です。" } },
        { "@type": "Question", name: "マッチングアプリと結婚相談所の併用はアリですか？", acceptedAnswer: { "@type": "Answer", text: "はい、併用は効果的な戦略です。結婚相談所でプロのサポートを受けながら、マッチングアプリで出会いの数を補完するのがおすすめ。ただし、時間の配分には注意が必要です。" } },
        { "@type": "Question", name: "マッチングアプリで結婚できる確率はどのくらいですか？", acceptedAnswer: { "@type": "Answer", text: "マッチングアプリでの結婚率の統計はありませんが、利用者の約20%が「結婚につながった」というデータがあります。一方、結婚相談所は成婚率30〜50%と高く、結婚への確実性では結婚相談所が上回ります。" } },
        { "@type": "Question", name: "費用面ではどちらが安いですか？", acceptedAnswer: { "@type": "Answer", text: "マッチングアプリは月額3,000〜5,000円、結婚相談所は年間10〜60万円と大きな差があります。ただし、マッチングアプリで何年も結婚できずに使い続けると累計費用が膨らみます。結婚までの「時間」を考慮したコスパで判断しましょう。" } },
        { "@type": "Question", name: "マッチングアプリから結婚相談所に切り替えるタイミングは？", acceptedAnswer: { "@type": "Answer", text: "アプリで半年〜1年活動しても良い出会いがない場合は、切り替えを検討しましょう。特に30代後半以降は時間が貴重なので、早めの切り替えがおすすめです。" } },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "ホーム", item: "https://kekkon-navi.pages.dev" },
        { "@type": "ListItem", position: 2, name: "コラム", item: "https://kekkon-navi.pages.dev/articles" },
        { "@type": "ListItem", position: 3, name: "結婚相談所 vs マッチングアプリ", item: "https://kekkon-navi.pages.dev/articles/vs-matching-app/" },
      ],
    },
  ],
};

const breadcrumbItems = [
  { label: "コラム", href: "/articles" },
  { label: "結婚相談所 vs マッチングアプリ" },
];

const comparisonItems = [
  { criteria: "料金", agency: "年間10〜60万円", app: "月額3,000〜5,000円", winner: "app", detail: "料金面ではマッチングアプリが圧倒的に安い。ただし、結婚までの期間を考慮すると結婚相談所の方がコスパが良い場合も。" },
  { criteria: "会員の真剣度", agency: "全員が結婚前提", app: "恋活〜婚活まで混在", winner: "agency", detail: "結婚相談所は入会時に独身証明書・収入証明書の提出が必須。全員が結婚を前提に活動しています。アプリは「まずは友達から」「恋人が欲しい」程度の方も多い。" },
  { criteria: "出会いの質", agency: "厳選された紹介", app: "大量のマッチング", winner: "agency", detail: "結婚相談所はカウンセラーが相性を考慮して紹介するため、質の高い出会いが期待できます。アプリは数は多いが、質のバラツキが大きい。" },
  { criteria: "サポート", agency: "専任カウンセラー付き", app: "基本的に自力", winner: "agency", detail: "結婚相談所ではプロフィール作成、お見合いの段取り、交際中のアドバイスまでフルサポート。アプリは全て自分で進める必要がある。" },
  { criteria: "成婚率", agency: "30〜50%", app: "統計なし（体感10〜20%）", winner: "agency", detail: "結婚相談所は明確な成婚率データがあり、30〜50%が目安。アプリは結婚率の統計がなく、利用者の約20%が「結婚につながった」程度。" },
  { criteria: "安全性", agency: "身元確認済み", app: "自己申告ベース", winner: "agency", detail: "結婚相談所は独身証明書・収入証明書・学歴証明書の提出が必須で、嘘がつけない。アプリは年齢確認のみで、プロフィールは自己申告。既婚者が紛れ込むリスクも。" },
  { criteria: "手軽さ", agency: "来店・面談が必要", app: "スマホで完結", winner: "app", detail: "マッチングアプリはスマホ一つで今すぐ始められる手軽さが魅力。結婚相談所は入会手続きや書類準備が必要で、最初のハードルは高め。" },
];

export default function VsMatchingAppPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Breadcrumb items={breadcrumbItems} />

      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="text-center py-10">
          <div className="inline-block px-4 py-1 rounded-full text-xs font-bold bg-[#fdf2f6] text-[#c45b84] mb-4">比較ガイド</div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
            結婚相談所 vs マッチングアプリ
            <br />
            <span className="text-[#c45b84]">どっちが結婚に近い？徹底比較</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            「結婚相談所とマッチングアプリ、どっちを使うべき？」この疑問に、7つの基準から客観的に答えます。それぞれのメリット・デメリットを正直に比較し、あなたに最適な選択をサポートします。
          </p>
          <time dateTime="2026-04-15" className="text-xs text-gray-400 mt-4 block">2026年4月15日更新</time>
        </header>

        <nav className="bg-[#fdf8fa] border border-[#f0dde3] rounded-2xl p-6 mb-10">
          <h2 className="text-lg font-bold mb-3 text-[#c45b84]">この記事の目次</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#overview" className="text-[#c45b84] hover:underline">1. 結婚相談所とマッチングアプリの違い</a></li>
            <li><a href="#comparison" className="text-[#c45b84] hover:underline">2. 7つの基準で徹底比較</a></li>
            <li><a href="#for-agency" className="text-[#c45b84] hover:underline">3. 結婚相談所が向いている人</a></li>
            <li><a href="#for-app" className="text-[#c45b84] hover:underline">4. マッチングアプリが向いている人</a></li>
            <li><a href="#both" className="text-[#c45b84] hover:underline">5. 併用という選択肢</a></li>
            <li><a href="#switch" className="text-[#c45b84] hover:underline">6. 切り替えのタイミング</a></li>
            <li><a href="#faq" className="text-[#c45b84] hover:underline">7. よくある質問</a></li>
          </ol>
        </nav>

        {/* Section 1 */}
        <section id="overview" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">結婚相談所とマッチングアプリの基本的な違い</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white border-2 border-[#c45b84] rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-3 text-[#c45b84]">結婚相談所</h3>
              <p className="text-sm text-gray-700 mb-3">結婚を前提とした出会いを提供するサービス。専任カウンセラーがサポートし、身元確認済みの会員同士がお見合いを行います。</p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>・入会時に各種証明書の提出が必須</li>
                <li>・専任カウンセラーによるサポート</li>
                <li>・年間10〜60万円の費用</li>
                <li>・会員数：数万〜数十万人</li>
                <li>・平均活動期間：8〜12ヶ月</li>
              </ul>
            </div>
            <div className="bg-white border-2 border-[#c9a76c] rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-3 text-[#c9a76c]">マッチングアプリ</h3>
              <p className="text-sm text-gray-700 mb-3">スマホで手軽に出会えるオンラインサービス。恋活〜婚活まで幅広い目的のユーザーが利用。自力で相手を探し、やり取りを進めます。</p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>・年齢確認のみ（身元保証なし）</li>
                <li>・サポートなし（自力）</li>
                <li>・月額3,000〜5,000円</li>
                <li>・会員数：数百万人</li>
                <li>・出会いまでの期間：数日〜数ヶ月</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: 7つの比較 */}
        <section id="comparison" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">7つの基準で徹底比較</h2>
          <div className="space-y-6">
            {comparisonItems.map((item, i) => (
              <div key={i} className="bg-white border border-[#f0dde3] rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 bg-[#c45b84] rounded-full flex items-center justify-center text-white font-bold text-sm">{i + 1}</span>
                  <h3 className="font-bold text-lg">{item.criteria}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${item.winner === "agency" ? "bg-[#fdf2f6] text-[#c45b84]" : "bg-yellow-100 text-yellow-700"}`}>
                    {item.winner === "agency" ? "結婚相談所の勝ち" : "アプリの勝ち"}
                  </span>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-3">
                  <div className={`rounded-xl p-3 text-sm ${item.winner === "agency" ? "bg-[#fdf2f6] border border-[#c45b84]" : "bg-gray-50"}`}>
                    <p className="font-bold text-xs text-gray-500 mb-1">結婚相談所</p>
                    <p className="font-bold">{item.agency}</p>
                  </div>
                  <div className={`rounded-xl p-3 text-sm ${item.winner === "app" ? "bg-yellow-50 border border-yellow-400" : "bg-gray-50"}`}>
                    <p className="font-bold text-xs text-gray-500 mb-1">マッチングアプリ</p>
                    <p className="font-bold">{item.app}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">{item.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-[#fdf8fa] border border-[#f0dde3] rounded-2xl p-6 text-center">
            <p className="font-bold text-lg mb-2">総合判定：結婚相談所 5勝 vs マッチングアプリ 2勝</p>
            <p className="text-sm text-gray-600">「結婚」が目的なら結婚相談所が圧倒的に有利。ただし、手軽さと費用ではアプリに軍配。</p>
          </div>
        </section>

        {/* Section 3 */}
        <section id="for-agency" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">結婚相談所が向いている人</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "1年以内に結婚したいという強い意思がある",
              "身元が保証された安全な出会いを求めている",
              "恋愛経験が少なく、プロのサポートが欲しい",
              "マッチングアプリで疲弊した経験がある",
              "仕事が忙しく、効率的に婚活したい",
              "真剣な出会いだけに時間を使いたい",
              "自分に合った相手をプロに紹介してほしい",
              "お見合いやデートのアドバイスが欲しい",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-[#fdf2f6] rounded-xl p-4">
                <span className="text-[#c45b84] font-bold text-lg">✓</span>
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4 */}
        <section id="for-app" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">マッチングアプリが向いている人</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "まずは気軽に出会いの場を広げたい",
              "婚活に高い費用をかけたくない",
              "恋愛経験が豊富で自力で進められる",
              "自分のペースでゆっくり相手を探したい",
              "20代でまだ結婚は急いでいない",
              "外見に自信がありマッチングしやすい",
              "プロのサポートは不要だと感じる",
              "まずは恋愛から始めたい",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-yellow-50 rounded-xl p-4">
                <span className="text-yellow-600 font-bold text-lg">✓</span>
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5 */}
        <section id="both" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">「併用」という選択肢もアリ</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            実は、結婚相談所とマッチングアプリの併用は効果的な戦略です。それぞれの長所を活かし、出会いの機会を最大化できます。
          </p>
          <div className="bg-white border-2 border-[#c45b84] rounded-2xl p-6 mb-6">
            <h3 className="font-bold text-lg mb-3 text-[#c45b84]">おすすめの併用パターン</h3>
            <div className="space-y-4">
              <div className="bg-[#fdf8fa] rounded-xl p-4">
                <p className="font-bold text-sm mb-1">メイン：結婚相談所 ＋ サブ：マッチングアプリ</p>
                <p className="text-xs text-gray-600">結婚相談所でプロのサポートを受けつつ、アプリで出会いの数を補完。時間配分は相談所7：アプリ3がおすすめ。</p>
              </div>
              <div className="bg-[#fdf8fa] rounded-xl p-4">
                <p className="font-bold text-sm mb-1">まずアプリで練習 → 結婚相談所で本気活動</p>
                <p className="text-xs text-gray-600">恋愛経験が少ない方は、まずアプリでメッセージやデートの経験を積み、慣れてきたら結婚相談所に入会する方法も。</p>
              </div>
            </div>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
            <p className="font-bold text-yellow-800 mb-1">併用時の注意点</p>
            <ul className="text-sm text-yellow-800 space-y-1">
              <li>・時間の配分を明確にする（どちらも中途半端にならないように）</li>
              <li>・結婚相談所の規約でアプリ併用がNGの場合があるので確認する</li>
              <li>・真剣度の違いを理解し、アプリの出会いに期待しすぎない</li>
            </ul>
          </div>
        </section>

        {/* Section 6 */}
        <section id="switch" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">アプリから結婚相談所への切り替えタイミング</h2>
          <div className="space-y-4">
            {[
              { signal: "アプリで半年〜1年活動しても良い出会いがない", advice: "そのまま続けても結果は変わりにくいです。結婚相談所でプロの力を借りましょう。" },
              { signal: "「遊び目的」「既婚者」に当たることが多い", advice: "アプリでは身元確認が不十分。結婚相談所なら全員が独身証明済みで安心です。" },
              { signal: "メッセージのやり取りに疲れた", advice: "結婚相談所なら日程調整もカウンセラーが代行。面倒なやり取りから解放されます。" },
              { signal: "30代後半に差し掛かった", advice: "時間は有限です。より確実に成果の出る結婚相談所への切り替えを強くおすすめします。" },
              { signal: "自分のどこが悪いのかわからない", advice: "結婚相談所のカウンセラーが客観的に分析し、改善点を教えてくれます。" },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-[#f0dde3] rounded-2xl p-5 flex items-start gap-4">
                <div className="w-8 h-8 bg-[#c45b84] rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">{i + 1}</div>
                <div>
                  <h3 className="font-bold mb-1 text-sm">{item.signal}</h3>
                  <p className="text-sm text-gray-600">{item.advice}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: 安全性の違いを深堀り */}
        <section id="safety-detail" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">
            安全性の違いを深堀り
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            結婚相談所とマッチングアプリでは、安全性に大きな差があります。特に女性にとって安全性は最も重要な要素の一つです。
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#c45b84] text-white">
                  <th className="p-3 text-left font-bold rounded-tl-lg">
                    確認項目
                  </th>
                  <th className="p-3 text-center font-bold">結婚相談所</th>
                  <th className="p-3 text-center font-bold rounded-tr-lg">
                    マッチングアプリ
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["本人確認", "厳密（免許証・パスポート等）", "年齢確認のみ"],
                  ["独身証明", "必須（公的書類）", "自己申告（既婚者リスク）"],
                  ["収入証明", "必須（源泉徴収票等）", "任意（虚偽リスク）"],
                  ["学歴証明", "必須（卒業証明書）", "自己申告"],
                  ["犯罪歴確認", "入会審査あり", "なし"],
                  ["既婚者の排除", "独身証明で完全排除", "不完全（潜り込むケースあり）"],
                  ["トラブル時の対応", "相談所が仲介", "自己対応（運営は基本関与せず）"],
                  ["個人情報管理", "相談所が厳重管理", "アプリ内で相互に知りうる"],
                ].map((row, i) => (
                  <tr
                    key={i}
                    className={`border-b border-[#f0dde3] ${i % 2 === 0 ? "bg-white" : "bg-[#fdf8fa]"}`}
                  >
                    <td className="p-3 font-bold text-gray-900">{row[0]}</td>
                    <td className="p-3 text-center text-green-700 font-bold">
                      {row[1]}
                    </td>
                    <td className="p-3 text-center text-red-600">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-xl p-5">
            <h3 className="font-bold text-red-700 mb-2">
              マッチングアプリで実際にあったトラブル例
            </h3>
            <ul className="text-sm text-red-700 space-y-2">
              <li className="flex items-start gap-2">
                <span className="font-bold mt-0.5">●</span>
                <span>
                  既婚者がプロフィールを偽って登録していたケース
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold mt-0.5">●</span>
                <span>
                  年収を数百万円水増ししていたケース
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold mt-0.5">●</span>
                <span>
                  デート商法やマルチ商法の勧誘目的だったケース
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold mt-0.5">●</span>
                <span>
                  プロフィール写真が別人（10年以上前の写真）だったケース
                </span>
              </li>
            </ul>
            <p className="text-xs text-red-600 mt-3">
              結婚相談所では各種証明書の提出が必須のため、上記のようなトラブルは基本的に起こりません。
            </p>
          </div>
        </section>

        {/* Section: 年代別おすすめ */}
        <section id="by-age" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">
            年代別・結婚相談所 vs マッチングアプリの選び方
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            年代によって、結婚相談所とマッチングアプリのどちらが効果的かは異なります。以下を参考に、あなたの年代に合った方法を選びましょう。
          </p>
          <div className="space-y-4">
            {[
              {
                age: "20代",
                recommendation: "まずはアプリ → 結果が出なければ相談所",
                detail:
                  "20代は出会いの機会が多く、マッチングアプリでも十分にマッチングします。まずはアプリで試してみて、半年〜1年で結果が出なければ結婚相談所を検討しましょう。ただし、真剣に1年以内の結婚を目指すなら、最初から相談所を選ぶのもアリです。20代は相談所で最もモテる年代なので、早めに始めればコスパ抜群です。",
                color: "#c45b84",
              },
              {
                age: "30代前半",
                recommendation: "相談所がおすすめ（アプリ併用も◎）",
                detail:
                  "30代前半はアプリでもまだ戦えますが、「結婚」にフォーカスするなら相談所がベターです。アプリでは「結婚はまだ先」という男性・女性も多く、時間を無駄にするリスクがあります。相談所をメインに、アプリをサブで使う併用がおすすめです。特に35歳が近づいている方は、早めの切り替えを。",
                color: "#c9a76c",
              },
              {
                age: "30代後半",
                recommendation: "結婚相談所を強くおすすめ",
                detail:
                  "30代後半はアプリでのマッチング率が下がり始める時期。時間が貴重なこの年代は、プロのサポートがある結婚相談所で効率的に活動すべきです。アプリに費やす時間を相談所での活動に集中させましょう。1年以内の成婚を目指して、手厚いサポートのある仲人型がおすすめです。",
                color: "#9b8ec4",
              },
              {
                age: "40代以上",
                recommendation: "結婚相談所一択",
                detail:
                  "40代以上のマッチングアプリは「いいね」がほとんど来ない可能性があります。結婚相談所では40代の会員も多く、同年代同士の出会いが期待できます。仲人型の相談所でプロの力を最大限に活用しましょう。サンマリエやパートナーエージェントなど、手厚いサポートのある相談所がおすすめです。",
                color: "#5b8a6b",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white border-2 rounded-2xl p-6"
                style={{ borderColor: item.color }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="px-3 py-1 text-white text-xs font-bold rounded-full"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.age}
                  </span>
                  <h3 className="font-bold">{item.recommendation}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section: 利用者の声 比較 */}
        <section id="user-voices" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">
            利用者の声で比較
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-[#c45b84] rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-3 text-[#c45b84]">
                結婚相談所利用者の声
              </h3>
              <div className="space-y-3">
                <div className="bg-[#fdf8fa] rounded-lg p-3 text-sm">
                  <p className="text-gray-700">
                    &ldquo;全員が結婚前提なので話が早い。アプリとは真剣度が全然違います。&rdquo;
                  </p>
                  <p className="text-xs text-gray-500 mt-1">30歳・女性</p>
                </div>
                <div className="bg-[#fdf8fa] rounded-lg p-3 text-sm">
                  <p className="text-gray-700">
                    &ldquo;カウンセラーが日程調整してくれるのが楽。メッセージのやり取り不要。&rdquo;
                  </p>
                  <p className="text-xs text-gray-500 mt-1">35歳・男性</p>
                </div>
                <div className="bg-[#fdf8fa] rounded-lg p-3 text-sm">
                  <p className="text-gray-700">
                    &ldquo;身元が保証されているので安心。既婚者に騙される心配がゼロ。&rdquo;
                  </p>
                  <p className="text-xs text-gray-500 mt-1">28歳・女性</p>
                </div>
              </div>
            </div>
            <div className="bg-white border-2 border-[#c9a76c] rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-3 text-[#c9a76c]">
                マッチングアプリ利用者の声
              </h3>
              <div className="space-y-3">
                <div className="bg-yellow-50 rounded-lg p-3 text-sm">
                  <p className="text-gray-700">
                    &ldquo;月4,000円で気軽に始められるのが良い。でも結婚に至る人は少ない印象。&rdquo;
                  </p>
                  <p className="text-xs text-gray-500 mt-1">27歳・女性</p>
                </div>
                <div className="bg-yellow-50 rounded-lg p-3 text-sm">
                  <p className="text-gray-700">
                    &ldquo;マッチングはするけど、会うまでのメッセージのやり取りが面倒…。&rdquo;
                  </p>
                  <p className="text-xs text-gray-500 mt-1">33歳・男性</p>
                </div>
                <div className="bg-yellow-50 rounded-lg p-3 text-sm">
                  <p className="text-gray-700">
                    &ldquo;2年使って3人と付き合ったけど、全員「まだ結婚は…」と言われました。&rdquo;
                  </p>
                  <p className="text-xs text-gray-500 mt-1">32歳・女性</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: コスト比較シミュレーション */}
        <section id="cost-simulation" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">
            コスト比較シミュレーション
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            「アプリの方が安い」は本当でしょうか？結婚までの総コストをシミュレーションしてみましょう。単純な月額の比較ではなく、結婚に至るまでの「時間」も含めたコストで考えることが重要です。
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white border-2 border-[#c9a76c] rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-3 text-[#c9a76c]">
                マッチングアプリで3年活動した場合
              </h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex justify-between">
                  <span>月額料金（3年）</span>
                  <span className="font-bold">約144,000円</span>
                </li>
                <li className="flex justify-between">
                  <span>デート代（月2回×36ヶ月）</span>
                  <span className="font-bold">約360,000円</span>
                </li>
                <li className="flex justify-between">
                  <span>交通費</span>
                  <span className="font-bold">約108,000円</span>
                </li>
                <li className="flex justify-between border-t border-gray-200 pt-2 mt-2">
                  <span className="font-bold">合計</span>
                  <span className="font-bold text-[#c45b84] text-lg">
                    約612,000円
                  </span>
                </li>
              </ul>
              <p className="text-xs text-gray-500 mt-3">
                ※結婚できる保証なし。3年で結婚に至らないケースも多い。
              </p>
            </div>
            <div className="bg-white border-2 border-[#c45b84] rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-3 text-[#c45b84]">
                結婚相談所で1年活動した場合
              </h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex justify-between">
                  <span>相談所費用（1年）</span>
                  <span className="font-bold">約244,200円</span>
                </li>
                <li className="flex justify-between">
                  <span>お見合いカフェ代</span>
                  <span className="font-bold">約60,000円</span>
                </li>
                <li className="flex justify-between">
                  <span>写真撮影・デート代等</span>
                  <span className="font-bold">約150,000円</span>
                </li>
                <li className="flex justify-between border-t border-gray-200 pt-2 mt-2">
                  <span className="font-bold">合計</span>
                  <span className="font-bold text-[#c45b84] text-lg">
                    約454,200円
                  </span>
                </li>
              </ul>
              <p className="text-xs text-gray-500 mt-3">
                ※ゼクシィの場合。成婚率26.2%、平均活動期間8〜12ヶ月。
              </p>
            </div>
          </div>
          <div className="bg-[#fdf8fa] border border-[#f0dde3] rounded-2xl p-6">
            <h3 className="font-bold mb-2">
              結論：「時間」を含めたコスパでは結婚相談所が優秀
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              マッチングアプリは月額は安いですが、結婚に至るまで3年以上かかるケースも珍しくありません。その間のデート代・時間的コストを考えると、結婚相談所で1年以内に成婚する方がトータルコストは安くなる可能性があります。特に30代後半以降は「時間」が最も貴重な資源です。お金で時間を買うという発想も大切です。
            </p>
          </div>
        </section>

        {/* Section: 体験談 */}
        <section id="stories" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">
            アプリから相談所に切り替えた人の体験談
          </h2>
          <div className="space-y-4">
            {[
              {
                text: "マッチングアプリを2年間使いましたが、真剣に結婚を考えている男性になかなか出会えませんでした。結婚相談所に切り替えてからは、全員が結婚前提なので話が早い。入会4ヶ月で今の夫と出会い、10ヶ月で成婚退会できました。",
                age: "33歳・女性",
                point: "アプリ2年 → 相談所10ヶ月で成婚",
              },
              {
                text: "アプリでは「いいね」はたくさんもらえるのですが、実際に会うと「まだ結婚は考えていない」という人ばかり。時間の無駄だと感じて結婚相談所に入会しました。カウンセラーのアドバイスが的確で、自分では選ばなかったタイプの女性と出会い、幸せな結婚ができました。",
                age: "36歳・男性",
                point: "アプリの「いいね」は多いが成果ゼロ → 相談所で成婚",
              },
              {
                text: "アプリと相談所を併用しました。メインは相談所でプロのサポートを受けながら、サブでアプリも使って出会いの数を確保。結果的に相談所で出会った方と成婚しましたが、アプリで得た経験（メッセージの書き方やデートの進め方）は役に立ちました。",
                age: "31歳・女性",
                point: "併用戦略で効率的に婚活",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white border border-[#f0dde3] rounded-2xl p-6"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 bg-[#fdf2f6] text-[#c45b84] text-xs font-bold rounded-full">
                    {item.point}
                  </span>
                  <span className="text-xs text-gray-500">{item.age}</span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  &ldquo;{item.text}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">よくある質問</h2>
          <div className="space-y-3">
            {[
              { q: "結婚相談所とマッチングアプリ、どちらが結婚に近いですか？", a: "結婚への近さでは結婚相談所が圧倒的に有利です。会員全員が結婚を前提に活動しており、身元確認も徹底されています。マッチングアプリは手軽さが魅力ですが、結婚への本気度にバラつきがあります。" },
              { q: "マッチングアプリと結婚相談所の併用はアリですか？", a: "はい、併用は効果的な戦略です。結婚相談所でプロのサポートを受けながら、マッチングアプリで出会いの数を補完するのがおすすめ。ただし、時間の配分には注意が必要です。" },
              { q: "マッチングアプリで結婚できる確率はどのくらいですか？", a: "マッチングアプリでの結婚率の統計はありませんが、利用者の約20%が「結婚につながった」というデータがあります。一方、結婚相談所は成婚率30〜50%と高く、結婚への確実性では結婚相談所が上回ります。" },
              { q: "費用面ではどちらが安いですか？", a: "マッチングアプリは月額3,000〜5,000円、結婚相談所は年間10〜60万円と大きな差があります。ただし、アプリで何年も結婚できずに使い続けると累計費用が膨らみます。結婚までの「時間」を考慮したコスパで判断しましょう。" },
              { q: "マッチングアプリから結婚相談所に切り替えるタイミングは？", a: "アプリで半年〜1年活動しても良い出会いがない場合は、切り替えを検討しましょう。特に30代後半以降は時間が貴重なので、早めの切り替えがおすすめです。" },
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

        <section className="text-center bg-gradient-to-r from-[#fdf2f6] to-[#faf5ee] rounded-2xl p-8 md:p-12 mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-4">本気で結婚したいなら、結婚相談所という選択</h2>
          <p className="text-gray-600 mb-6 max-w-lg mx-auto text-sm">アプリで結果が出ないなら、プロの力を借りる時期かもしれません。まずは無料カウンセリングで相談してみましょう。</p>
          <Link href="/ranking/" className="btn-cta">おすすめ結婚相談所ランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-4">関連記事</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/ranking/" className="block bg-white border border-[#f0dde3] rounded-2xl p-5 hover:bg-[#fdf8fa] transition-colors">
              <p className="font-bold text-sm mb-1">結婚相談所おすすめ6選</p>
              <p className="text-xs text-gray-500">料金・口コミ・成婚率で徹底比較</p>
            </Link>
            <Link href="/articles/should-i-join/" className="block bg-white border border-[#f0dde3] rounded-2xl p-5 hover:bg-[#fdf8fa] transition-colors">
              <p className="font-bold text-sm mb-1">結婚相談所はやめたほうがいい？</p>
              <p className="text-xs text-gray-500">後悔しないための判断基準</p>
            </Link>
            <Link href="/articles/online-vs-offline/" className="block bg-white border border-[#f0dde3] rounded-2xl p-5 hover:bg-[#fdf8fa] transition-colors">
              <p className="font-bold text-sm mb-1">オンライン vs 店舗型</p>
              <p className="text-xs text-gray-500">メリット・デメリット比較</p>
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
