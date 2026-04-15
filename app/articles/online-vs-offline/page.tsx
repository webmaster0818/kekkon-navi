import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "オンライン結婚相談所 vs 店舗型｜メリット・デメリット比較",
  description:
    "オンライン結婚相談所（naco-do等）と店舗型（ゼクシィ等）を徹底比較。料金差、サポートの違い、向いている人の特徴を解説。あなたに合ったタイプの結婚相談所が見つかります。",
  keywords: "オンライン結婚相談所 おすすめ, 店舗型 結婚相談所 違い, オンライン婚活",
  alternates: { canonical: "https://kekkon-navi.pages.dev/articles/online-vs-offline/" },
  openGraph: {
    title: "オンライン結婚相談所 vs 店舗型｜メリット・デメリット比較",
    description: "オンライン結婚相談所と店舗型を徹底比較。料金差やサポートの違いを解説。",
    url: "https://kekkon-navi.pages.dev/articles/online-vs-offline/",
    type: "article",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "オンライン結婚相談所 vs 店舗型｜メリット・デメリット比較",
      datePublished: "2026-04-15", dateModified: "2026-04-15",
      author: { "@type": "Organization", name: "結婚相談所比較ナビ", url: "https://kekkon-navi.pages.dev" },
      publisher: { "@type": "Organization", name: "結婚相談所比較ナビ", url: "https://kekkon-navi.pages.dev" },
      description: "オンライン結婚相談所と店舗型を徹底比較。",
      mainEntityOfPage: "https://kekkon-navi.pages.dev/articles/online-vs-offline/",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "オンライン結婚相談所と店舗型の最大の違いは何ですか？", acceptedAnswer: { "@type": "Answer", text: "最大の違いは料金とサポートの手厚さです。オンライン型は年間10〜15万円と安い反面、対面サポートがありません。店舗型は年間25〜60万円と高い分、対面でのカウンセリングや手厚いサポートが受けられます。" } },
        { "@type": "Question", name: "オンライン結婚相談所でも本当に結婚できますか？", acceptedAnswer: { "@type": "Answer", text: "はい、オンライン型でも成婚している方は多数います。naco-doの成婚率は41.2%と高水準です。ただし、自分で積極的に活動できるセルフマネジメント能力が求められます。" } },
        { "@type": "Question", name: "オンライン型と店舗型、どちらが安いですか？", acceptedAnswer: { "@type": "Answer", text: "オンライン型が圧倒的に安いです。naco-doの年間総額は約11万円、店舗型のゼクシィは約24万円、サンマリエは約62万円です。オンライン型は店舗運営費がかからない分、料金を抑えられます。" } },
        { "@type": "Question", name: "オンライン型のサポートは十分ですか？", acceptedAnswer: { "@type": "Answer", text: "オンライン型でもビデオ面談やチャットサポートは充実していますが、対面で表情や雰囲気を見ながらのカウンセリングとは質が異なります。婚活初心者や手厚いサポートが欲しい方は店舗型がおすすめです。" } },
        { "@type": "Question", name: "ハイブリッド型の結婚相談所はありますか？", acceptedAnswer: { "@type": "Answer", text: "はい、ゼクシィ縁結びエージェントやツヴァイはオンラインと店舗の両方に対応しています。普段はオンラインで活動し、重要な相談時は店舗で対面カウンセリングを受けるという使い方ができます。" } },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "ホーム", item: "https://kekkon-navi.pages.dev" },
        { "@type": "ListItem", position: 2, name: "コラム", item: "https://kekkon-navi.pages.dev/articles" },
        { "@type": "ListItem", position: 3, name: "オンライン vs 店舗型", item: "https://kekkon-navi.pages.dev/articles/online-vs-offline/" },
      ],
    },
  ],
};

const breadcrumbItems = [
  { label: "コラム", href: "/articles" },
  { label: "オンライン vs 店舗型" },
];

export default function OnlineVsOfflinePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Breadcrumb items={breadcrumbItems} />

      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="text-center py-10">
          <div className="inline-block px-4 py-1 rounded-full text-xs font-bold bg-[#fdf2f6] text-[#c45b84] mb-4">比較ガイド</div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
            オンライン結婚相談所 vs 店舗型
            <br />
            <span className="text-[#c45b84]">メリット・デメリット比較</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            近年、naco-doなどのオンライン完結型の結婚相談所が急速に普及しています。従来の店舗型と比べて何が違うのか？料金・サポート・会員数など、あらゆる角度から比較して、あなたに合ったタイプを見つけましょう。
          </p>
          <time dateTime="2026-04-15" className="text-xs text-gray-400 mt-4 block">2026年4月15日更新</time>
        </header>

        <nav className="bg-[#fdf8fa] border border-[#f0dde3] rounded-2xl p-6 mb-10">
          <h2 className="text-lg font-bold mb-3 text-[#c45b84]">この記事の目次</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#overview" className="text-[#c45b84] hover:underline">1. オンライン型と店舗型の基本的な違い</a></li>
            <li><a href="#comparison" className="text-[#c45b84] hover:underline">2. 6つの観点で徹底比較</a></li>
            <li><a href="#online-merit" className="text-[#c45b84] hover:underline">3. オンライン型のメリット・デメリット</a></li>
            <li><a href="#offline-merit" className="text-[#c45b84] hover:underline">4. 店舗型のメリット・デメリット</a></li>
            <li><a href="#for-whom" className="text-[#c45b84] hover:underline">5. 向いている人の違い</a></li>
            <li><a href="#hybrid" className="text-[#c45b84] hover:underline">6. ハイブリッド型という選択肢</a></li>
            <li><a href="#faq" className="text-[#c45b84] hover:underline">7. よくある質問</a></li>
          </ol>
        </nav>

        {/* Section 1 */}
        <section id="overview" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">オンライン型と店舗型の基本的な違い</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white border-2 border-[#c9a76c] rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-3 text-[#c9a76c]">オンライン型</h3>
              <p className="text-sm text-gray-700 mb-3">入会から活動、成婚退会まで全てオンラインで完結。スマホやPCがあれば自宅から婚活できます。</p>
              <p className="text-xs text-gray-500 mb-2"><strong>代表例：</strong>naco-do</p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>・店舗不要のためコストが安い</li>
                <li>・スマホで24時間いつでも活動可能</li>
                <li>・ビデオ面談・チャットでサポート</li>
                <li>・全国どこでも同じサービスを受けられる</li>
              </ul>
            </div>
            <div className="bg-white border-2 border-[#c45b84] rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-3 text-[#c45b84]">店舗型</h3>
              <p className="text-sm text-gray-700 mb-3">全国に店舗を展開し、対面でのカウンセリングやサポートを提供。手厚いサポートが特徴。</p>
              <p className="text-xs text-gray-500 mb-2"><strong>代表例：</strong>ゼクシィ、ツヴァイ、サンマリエ、IBJ、パートナーエージェント</p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>・対面カウンセリングで安心感がある</li>
                <li>・カウンセラーの表情を見ながら相談できる</li>
                <li>・プロフィール写真撮影のサポートも</li>
                <li>・店舗によってはイベントも開催</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: 6つの比較 */}
        <section id="comparison" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">6つの観点で徹底比較</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#c45b84] text-white">
                  <th className="p-3 text-left font-bold rounded-tl-lg">比較項目</th>
                  <th className="p-3 text-center font-bold">オンライン型</th>
                  <th className="p-3 text-center font-bold rounded-tr-lg">店舗型</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["料金（年間総額）", "約11〜15万円", "約24〜62万円"],
                  ["サポート方法", "ビデオ面談・チャット", "対面面談・電話・メール"],
                  ["会員数", "naco-do: 25.4万人", "各社3〜10万人"],
                  ["活動の手軽さ", "スマホで完結", "店舗訪問が必要な場合あり"],
                  ["対面サポート", "なし", "あり（店舗での面談）"],
                  ["お見合い方法", "オンライン中心", "対面＋オンライン"],
                ].map((row, i) => (
                  <tr key={i} className={`border-b border-[#f0dde3] ${i % 2 === 0 ? "bg-white" : "bg-[#fdf8fa]"}`}>
                    <td className="p-3 font-bold text-gray-900">{row[0]}</td>
                    <td className="p-3 text-center">{row[1]}</td>
                    <td className="p-3 text-center">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="space-y-6">
            {[
              { title: "料金の差", detail: "最も大きな違いは料金です。オンライン型のnaco-doは年間約11万円、店舗型のサンマリエは年間約62万円と、約5倍の差があります。この差は主に店舗運営費（家賃・人件費）の有無によるものです。料金が安い＝品質が低い、ではなく、ビジネスモデルの違いです。", winner: "オンライン型" },
              { title: "サポートの質", detail: "対面で表情や雰囲気を見ながらのカウンセリングは、ビデオ面談では完全に再現できません。特に婚活に悩んでいる時、目の前にカウンセラーがいる安心感は大きいです。一方、チャットサポートは24時間いつでも相談できる手軽さがあります。", winner: "店舗型" },
              { title: "会員数", detail: "naco-doは3つの連盟に加盟し25.4万人の会員にアクセスでき、数の面では最大級。ただし、IBJ加盟の店舗型（サンマリエ、IBJメンバーズ）はIBJ会員8.7万人にアクセスでき、会員の質（年収・学歴）が高い傾向があります。", winner: "引き分け" },
              { title: "活動の手軽さ", detail: "オンライン型はスマホ一つで全ての活動が完結。店舗に通う時間や交通費が不要なため、忙しい方にはオンライン型が圧倒的に便利です。", winner: "オンライン型" },
              { title: "セミナー・イベント", detail: "サンマリエのファッション診断やメイクレッスン、IBJの婚活セミナーなど、店舗型ならではのリアルイベントは自分磨きの機会になります。オンライン型ではこうしたイベントは少ないです。", winner: "店舗型" },
              { title: "プロフィール作成サポート", detail: "店舗型ではカウンセラーが対面でプロフィールを一緒に作成し、提携のフォトスタジオで写真撮影も手配してくれます。オンライン型では自分で準備する部分が多くなります。", winner: "店舗型" },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-[#f0dde3] rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${item.winner === "オンライン型" ? "bg-yellow-100 text-yellow-700" : item.winner === "店舗型" ? "bg-[#fdf2f6] text-[#c45b84]" : "bg-gray-100 text-gray-600"}`}>
                    {item.winner}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: オンラインのメリデメ */}
        <section id="online-merit" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">オンライン型のメリット・デメリット</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
              <h3 className="font-bold text-green-700 text-lg mb-3">メリット</h3>
              <ul className="text-sm text-green-700 space-y-2">
                <li>・年間10万円台と圧倒的に安い</li>
                <li>・スマホ完結で時間・場所を選ばない</li>
                <li>・店舗への交通費がかからない</li>
                <li>・複数の連盟に加盟し会員数が多い</li>
                <li>・入会手続きもオンラインで完結</li>
                <li>・地方在住でも同じサービスを受けられる</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
              <h3 className="font-bold text-red-700 text-lg mb-3">デメリット</h3>
              <ul className="text-sm text-red-700 space-y-2">
                <li>・対面サポートがない</li>
                <li>・自分で積極的に動く必要がある</li>
                <li>・プロフィール写真は自力で手配</li>
                <li>・セミナーやイベントが少ない</li>
                <li>・カウンセラーとの信頼関係を築きにくい場合も</li>
                <li>・モチベーション維持が自己管理に</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4: 店舗型のメリデメ */}
        <section id="offline-merit" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">店舗型のメリット・デメリット</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
              <h3 className="font-bold text-green-700 text-lg mb-3">メリット</h3>
              <ul className="text-sm text-green-700 space-y-2">
                <li>・対面カウンセリングの安心感</li>
                <li>・プロフィール作成から写真撮影までサポート</li>
                <li>・セミナー・レッスンで自分磨きができる</li>
                <li>・カウンセラーとの深い信頼関係を築ける</li>
                <li>・お見合いの段取りを任せられる</li>
                <li>・モチベーション管理もサポートしてくれる</li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
              <h3 className="font-bold text-red-700 text-lg mb-3">デメリット</h3>
              <ul className="text-sm text-red-700 space-y-2">
                <li>・料金が高い（年間25〜60万円）</li>
                <li>・店舗に通う時間と交通費がかかる</li>
                <li>・営業時間内にしか相談できない</li>
                <li>・地方だと近くに店舗がない場合も</li>
                <li>・成婚料が20万円以上かかる場合も</li>
                <li>・担当者の質にばらつきがある可能性</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5: 向いている人 */}
        <section id="for-whom" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">向いている人の違い</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-[#c9a76c] rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-3 text-[#c9a76c]">オンライン型が向いている人</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start gap-2"><span className="text-[#c9a76c] font-bold mt-0.5">●</span><span>費用をできるだけ抑えたい</span></li>
                <li className="flex items-start gap-2"><span className="text-[#c9a76c] font-bold mt-0.5">●</span><span>仕事が忙しく店舗に通う時間がない</span></li>
                <li className="flex items-start gap-2"><span className="text-[#c9a76c] font-bold mt-0.5">●</span><span>自分で積極的に動ける（セルフマネジメント力がある）</span></li>
                <li className="flex items-start gap-2"><span className="text-[#c9a76c] font-bold mt-0.5">●</span><span>地方在住で近くに店舗がない</span></li>
                <li className="flex items-start gap-2"><span className="text-[#c9a76c] font-bold mt-0.5">●</span><span>まずは気軽に婚活を始めてみたい</span></li>
                <li className="flex items-start gap-2"><span className="text-[#c9a76c] font-bold mt-0.5">●</span><span>恋愛経験があり、自分で判断できる</span></li>
              </ul>
            </div>
            <div className="bg-white border-2 border-[#c45b84] rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-3 text-[#c45b84]">店舗型が向いている人</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start gap-2"><span className="text-[#c45b84] font-bold mt-0.5">●</span><span>手厚いサポートを受けたい</span></li>
                <li className="flex items-start gap-2"><span className="text-[#c45b84] font-bold mt-0.5">●</span><span>婚活初心者で何をすべきかわからない</span></li>
                <li className="flex items-start gap-2"><span className="text-[#c45b84] font-bold mt-0.5">●</span><span>対面で相談できる安心感が欲しい</span></li>
                <li className="flex items-start gap-2"><span className="text-[#c45b84] font-bold mt-0.5">●</span><span>自分磨きのセミナーやレッスンも受けたい</span></li>
                <li className="flex items-start gap-2"><span className="text-[#c45b84] font-bold mt-0.5">●</span><span>費用よりもサービスの質を重視する</span></li>
                <li className="flex items-start gap-2"><span className="text-[#c45b84] font-bold mt-0.5">●</span><span>プロにモチベーション管理も任せたい</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 6: ハイブリッド */}
        <section id="hybrid" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">ハイブリッド型という選択肢</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            オンラインと店舗の両方の良さを取り入れた「ハイブリッド型」の結婚相談所もあります。普段はオンラインで効率的に活動し、重要な場面では対面でサポートを受けられます。
          </p>
          <div className="space-y-4">
            {[
              {
                name: "ゼクシィ縁結びエージェント",
                desc: "全国27店舗＋オンライン対応。入会からお見合いまでオンラインで完結可能。重要な相談は店舗での対面面談も。お見合い料・成婚料なしの年間約24万円。",
                color: "#c45b84",
              },
              {
                name: "ツヴァイ",
                desc: "全国50店舗以上＋オンラインお見合い対応。データマッチングと仲人型を融合したハイブリッド。地方の店舗カバー率が最も高い。",
                color: "#c9a76c",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white border-2 rounded-2xl p-6" style={{ borderColor: item.color }}>
                <h3 className="font-bold text-lg mb-2" style={{ color: item.color }}>{item.name}</h3>
                <p className="text-sm text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-[#fdf8fa] border border-[#f0dde3] rounded-2xl p-6">
            <h3 className="font-bold mb-2">迷ったらハイブリッド型がおすすめ</h3>
            <p className="text-sm text-gray-700">
              オンラインと店舗、どちらが合うかわからない方は、ハイブリッド型から始めるのが安心です。オンラインでの活動に慣れてきたら完全オンライン型に切り替えることもできますし、サポートが足りないと感じたら店舗面談を活用できます。
            </p>
          </div>
        </section>

        {/* Section: 各社の詳細比較 */}
        <section id="detail-comparison" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">
            代表的な相談所の詳細比較
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            オンライン型・店舗型・ハイブリッド型の代表的な結婚相談所を、より詳細に比較してみましょう。
          </p>
          <div className="space-y-6">
            <div className="bg-white border-2 border-[#c9a76c] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-[#c9a76c] text-white text-xs font-bold rounded-full">
                  オンライン型代表
                </span>
                <h3 className="text-xl font-bold">naco-do</h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                月額6,980円〜と業界最安クラスの料金で、3つの連盟（JBA・コネクトシップ・Rnet）に加盟し25.4万人の会員にアクセスできるオンライン完結型。専属サポーターによるビデオ面談やチャットサポートもあり、コスパの高さが最大の魅力です。
              </p>
              <div className="grid md:grid-cols-3 gap-3 mb-4">
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <p className="text-xs text-gray-500">年間総額</p>
                  <p className="font-bold text-[#c45b84]">約113,560円</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <p className="text-xs text-gray-500">会員数</p>
                  <p className="font-bold">約25.4万人</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <p className="text-xs text-gray-500">成婚率</p>
                  <p className="font-bold">41.2%</p>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                <strong>こんな人におすすめ：</strong>
                費用を最小限に抑えたい方、スマホで手軽に活動したい方、自分で積極的に動ける方、地方在住の方
              </p>
            </div>

            <div className="bg-white border-2 border-[#c45b84] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-[#c45b84] text-white text-xs font-bold rounded-full">
                  ハイブリッド型代表
                </span>
                <h3 className="text-xl font-bold">ゼクシィ縁結びエージェント</h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                リクルート運営で顧客満足度8年連続No.1。全国27店舗＋オンライン対応で、対面とオンラインのいいとこ取りが可能。お見合い料・成婚料が無料のシンプルな料金体系が魅力です。AIマッチングと専任コーディネーターのハイブリッドで効率的にお相手を見つけられます。
              </p>
              <div className="grid md:grid-cols-3 gap-3 mb-4">
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <p className="text-xs text-gray-500">年間総額</p>
                  <p className="font-bold text-[#c45b84]">約244,200円</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <p className="text-xs text-gray-500">会員数</p>
                  <p className="font-bold">約3.2万人</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <p className="text-xs text-gray-500">成婚率</p>
                  <p className="font-bold">26.2%</p>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                <strong>こんな人におすすめ：</strong>
                コスパと品質のバランスを求める方、対面もオンラインも使いたい方、リクルートブランドの安心感を重視する方
              </p>
            </div>

            <div className="bg-white border-2 border-[#9b8ec4] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-[#9b8ec4] text-white text-xs font-bold rounded-full">
                  店舗型代表
                </span>
                <h3 className="text-xl font-bold">サンマリエ</h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                創業40年超の老舗で、専任仲人によるオーダーメイドサポートが最大の特徴。婚活セミナー・ファッション診断・メイクレッスンなど、店舗型ならではの自分磨きプログラムが充実。対面でのきめ細かなサポートを受けたい方に最適です。
              </p>
              <div className="grid md:grid-cols-3 gap-3 mb-4">
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <p className="text-xs text-gray-500">年間総額</p>
                  <p className="font-bold text-[#c45b84]">約618,200円</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <p className="text-xs text-gray-500">会員数</p>
                  <p className="font-bold">約8.7万人</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 text-center">
                  <p className="text-xs text-gray-500">成婚率</p>
                  <p className="font-bold">非公開</p>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                <strong>こんな人におすすめ：</strong>
                手厚いサポートを受けたい方、婚活初心者の方、自分磨きも含めて総合的に婚活したい方、費用よりサービスの質を重視する方
              </p>
            </div>
          </div>
        </section>

        {/* Section: オンライン型の活用術 */}
        <section id="online-tips" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">
            オンライン型を最大限に活用する方法
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            オンライン型を選んだ方が、サービスを最大限に活用するためのコツを紹介します。オンラインならではの強みを活かしましょう。
          </p>
          <div className="space-y-4">
            {[
              {
                title: "ビデオ面談を月1回は必ず利用する",
                detail:
                  "naco-doでは月1回のビデオ面談が利用できます。チャットだけでは伝わりにくい悩みや相談も、ビデオ面談なら表情を見ながら話せます。毎月の面談で活動の振り返りと次月の目標設定を行いましょう。面談をスキップする人より、毎月利用する人の方が成婚率が高い傾向にあります。",
              },
              {
                title: "チャットサポートはこまめに活用する",
                detail:
                  "お見合い後の感想や悩みは、その日のうちにチャットで相談しましょう。リアルタイムでアドバイスがもらえるのはオンライン型の強みです。「こんな些細なことを聞いてもいいのかな」と遠慮せず、何でも相談することが大切です。",
              },
              {
                title: "プロフィール写真は自分で高品質なものを用意する",
                detail:
                  "オンライン型では写真撮影のサポートがないため、自分でフォトスタジオを探して予約する必要があります。「婚活写真 スタジオ」で検索して、実績のあるスタジオを選びましょう。費用は1〜3万円程度。写真の質はお見合い成立率に直結するため、ここをケチらないことが重要です。",
              },
              {
                title: "3つの連盟を使い分ける（naco-doの場合）",
                detail:
                  "naco-doは JBA・コネクトシップ・Rnetの3つの連盟に加盟しています。それぞれの連盟で検索条件や会員層が異なるため、3つ全てを活用して出会いの幅を最大化しましょう。一つの連盟だけに偏らないのがコツです。",
              },
              {
                title: "オンラインお見合いを積極的に活用する",
                detail:
                  "移動時間ゼロのオンラインお見合いは、忙しい方の強い味方。平日の夜にも組めるため、お見合いの回数を増やしやすいです。カメラの角度、照明、背景に気を配り、対面と同じくらいの好印象を演出しましょう。",
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
                  <h3 className="font-bold mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: 選び方フローチャート */}
        <section id="flowchart" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">
            あなたに合うのはどっち？診断チャート
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            以下の質問に答えて、あなたに合ったタイプの結婚相談所を見つけましょう。
          </p>
          <div className="bg-white border-2 border-[#c45b84] rounded-2xl p-6 md:p-8">
            <div className="space-y-4">
              {[
                {
                  question: "婚活の予算は年間25万円以上ある",
                  yes: "店舗型・ハイブリッド型が選択肢に入る",
                  no: "オンライン型（naco-do）がおすすめ",
                },
                {
                  question: "対面でカウンセラーに相談したい",
                  yes: "店舗型がおすすめ（サンマリエ、IBJ等）",
                  no: "オンライン型でも十分。ビデオ面談で対応可能",
                },
                {
                  question: "自分で積極的に行動できるタイプだ",
                  yes: "オンライン型で費用を抑えつつ効率的に活動",
                  no: "店舗型で手厚いサポートを受けるのが安心",
                },
                {
                  question: "近くに結婚相談所の店舗がある",
                  yes: "ハイブリッド型で対面＋オンラインの使い分けが◎",
                  no: "オンライン型一択。全国どこでも同じサービスを受けられる",
                },
                {
                  question: "自分磨きのセミナーやレッスンも受けたい",
                  yes: "サンマリエなど店舗型がおすすめ。プログラムが充実",
                  no: "オンライン型やハイブリッド型で十分",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-[#fdf8fa] rounded-xl p-4"
                >
                  <p className="font-bold text-sm mb-2">
                    Q{i + 1}. {item.question}
                  </p>
                  <div className="grid md:grid-cols-2 gap-2">
                    <div className="bg-green-50 rounded-lg p-2 text-xs">
                      <strong className="text-green-700">YES →</strong>{" "}
                      <span className="text-green-700">{item.yes}</span>
                    </div>
                    <div className="bg-yellow-50 rounded-lg p-2 text-xs">
                      <strong className="text-yellow-700">NO →</strong>{" "}
                      <span className="text-yellow-700">{item.no}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section: 乗り換え事例 */}
        <section id="switch-cases" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">
            オンライン型 ↔ 店舗型の乗り換え事例
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            最初に選んだタイプが合わなかった場合、途中で乗り換えることも可能です。実際の乗り換え事例を紹介します。
          </p>
          <div className="space-y-4">
            {[
              {
                direction: "オンライン型 → 店舗型",
                text: "naco-doで半年活動しましたが、一人で進めるのに限界を感じ、サンマリエに乗り換えました。仲人さんに対面で相談できる安心感は段違い。費用は上がりましたが、入会3ヶ月で仮交際に進めました。",
                age: "36歳・女性",
                reason: "対面サポートの必要性を感じたため",
              },
              {
                direction: "店舗型 → オンライン型",
                text: "IBJメンバーズで1年活動しましたが費用が厳しくなり、naco-doに乗り換え。月6,980円は家計に優しく、活動を続けやすかったです。IBJでの経験があったので自分で進められました。乗り換え2ヶ月で成婚。",
                age: "34歳・男性",
                reason: "費用を抑えるため",
              },
              {
                direction: "オンライン型 → ハイブリッド型",
                text: "オンライン型では物足りないけど仲人型は高い…という悩みで、ゼクシィに乗り換え。対面もオンラインも選べて、成婚料なしの料金体系が決め手でした。バランスの良さに満足しています。",
                age: "31歳・女性",
                reason: "コスパとサポートのバランスを求めて",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white border border-[#f0dde3] rounded-2xl p-6"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 bg-[#fdf2f6] text-[#c45b84] text-xs font-bold rounded-full">
                    {item.direction}
                  </span>
                  <span className="text-xs text-gray-500">{item.age}</span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed mb-2">
                  &ldquo;{item.text}&rdquo;
                </p>
                <p className="text-xs text-gray-500">
                  <strong>乗り換え理由：</strong>
                  {item.reason}
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
              { q: "オンライン結婚相談所と店舗型の最大の違いは何ですか？", a: "最大の違いは料金とサポートの手厚さです。オンライン型は年間10〜15万円と安い反面、対面サポートがありません。店舗型は年間25〜60万円と高い分、対面でのカウンセリングや手厚いサポートが受けられます。" },
              { q: "オンライン結婚相談所でも本当に結婚できますか？", a: "はい、オンライン型でも成婚している方は多数います。naco-doの成婚率は41.2%と高水準です。ただし、自分で積極的に活動できるセルフマネジメント能力が求められます。" },
              { q: "オンライン型と店舗型、どちらが安いですか？", a: "オンライン型が圧倒的に安いです。naco-doの年間総額は約11万円、ゼクシィは約24万円、サンマリエは約62万円です。オンライン型は店舗運営費がかからない分、料金を抑えられます。" },
              { q: "オンライン型のサポートは十分ですか？", a: "ビデオ面談やチャットサポートは充実していますが、対面カウンセリングとは質が異なります。婚活初心者や手厚いサポートが欲しい方は店舗型がおすすめです。" },
              { q: "ハイブリッド型の結婚相談所はありますか？", a: "はい、ゼクシィ縁結びエージェントやツヴァイはオンラインと店舗の両方に対応しています。普段はオンラインで活動し、重要な相談時は店舗で対面カウンセリングを受けるという使い方ができます。" },
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
          <h2 className="text-xl md:text-2xl font-bold mb-4">あなたに合ったスタイルで婚活を始めよう</h2>
          <p className="text-gray-600 mb-6 max-w-lg mx-auto text-sm">オンラインでも店舗でも、大切なのは「行動すること」。まずは気になる相談所に相談してみましょう。</p>
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
            <Link href="/articles/vs-matching-app/" className="block bg-white border border-[#f0dde3] rounded-2xl p-5 hover:bg-[#fdf8fa] transition-colors">
              <p className="font-bold text-sm mb-1">結婚相談所 vs マッチングアプリ</p>
              <p className="text-xs text-gray-500">どっちが結婚に近い？</p>
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
