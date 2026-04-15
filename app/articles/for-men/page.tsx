import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "男性におすすめの結婚相談所4選｜男性目線での選び方ガイド",
  description:
    "男性におすすめの結婚相談所4社を徹底比較。男性の料金負担、プロフィール作成のコツ、お見合い成功率を上げる方法、男性の婚活事情まで詳しく解説します。",
  keywords: "結婚相談所 男性 おすすめ, 男性 婚活, 結婚相談所 男性 料金",
  alternates: { canonical: "https://kekkon-navi.pages.dev/articles/for-men/" },
  openGraph: {
    title: "男性におすすめの結婚相談所4選｜男性目線での選び方ガイド",
    description: "男性におすすめの結婚相談所4社を徹底比較。プロフィール・お見合い成功のコツも解説。",
    url: "https://kekkon-navi.pages.dev/articles/for-men/",
    type: "article",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "男性におすすめの結婚相談所4選｜男性目線での選び方ガイド",
      datePublished: "2026-04-15",
      dateModified: "2026-04-15",
      author: { "@type": "Organization", name: "結婚相談所比較ナビ", url: "https://kekkon-navi.pages.dev" },
      publisher: { "@type": "Organization", name: "結婚相談所比較ナビ", url: "https://kekkon-navi.pages.dev" },
      description: "男性におすすめの結婚相談所4社を徹底比較。",
      mainEntityOfPage: "https://kekkon-navi.pages.dev/articles/for-men/",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "男性の結婚相談所の費用は女性より高いですか？", acceptedAnswer: { "@type": "Answer", text: "多くの結婚相談所では男女同一料金です。ただし、お見合い時のカフェ代は男性が支払うのがマナーとされており、月3〜5回のお見合いで年間5〜10万円の追加出費になります。また、デート代も男性が多く負担するケースが多いため、実質的な負担は女性より大きくなります。" } },
        { "@type": "Question", name: "年収が低いのですが、結婚相談所で不利になりますか？", acceptedAnswer: { "@type": "Answer", text: "年収は重要な要素ですが、全てではありません。女性が求める年収の最低ラインは一般的に400〜500万円程度ですが、人柄やコミュニケーション力、将来性でカバーできる部分も大きいです。20代なら「ポテンシャル」で評価されることも多いです。" } },
        { "@type": "Question", name: "男性のプロフィール写真はどんなものが良いですか？", acceptedAnswer: { "@type": "Answer", text: "清潔感のあるスーツ姿がベストです。プロのカメラマンに撮影を依頼し、自然な笑顔の写真を用意しましょう。暗い表情、自撮り、旅行先の写真（サングラスや帽子着用）は避けてください。背景はシンプルなものが好印象です。" } },
        { "@type": "Question", name: "お見合いで何を話せばいいですか？", acceptedAnswer: { "@type": "Answer", text: "趣味・休日の過ごし方・食べ物の好み・旅行の話題が定番です。自分の話ばかりせず、相手に質問して興味を示すことが大切。仕事の自慢話、過去の恋愛話、年収の話はNGです。相手のプロフィールを事前に読み込んで、話題を準備しておきましょう。" } },
        { "@type": "Question", name: "結婚相談所とマッチングアプリ、男性はどちらが有利ですか？", acceptedAnswer: { "@type": "Answer", text: "マッチングアプリは「見た目重視」のため、ルックスに自信がない男性は苦戦しがちです。結婚相談所は年収・職業・人柄など総合的に評価されるため、真面目で誠実な男性が有利になります。また、結婚相談所は女性も高い入会金を払っているため、本気度の高い出会いが期待できます。" } },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "ホーム", item: "https://kekkon-navi.pages.dev" },
        { "@type": "ListItem", position: 2, name: "コラム", item: "https://kekkon-navi.pages.dev/articles" },
        { "@type": "ListItem", position: 3, name: "男性におすすめの結婚相談所", item: "https://kekkon-navi.pages.dev/articles/for-men/" },
      ],
    },
  ],
};

const breadcrumbItems = [
  { label: "コラム", href: "/articles" },
  { label: "男性におすすめの結婚相談所" },
];

export default function ForMenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Breadcrumb items={breadcrumbItems} />

      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="text-center py-10">
          <div className="inline-block px-4 py-1 rounded-full text-xs font-bold bg-[#fdf2f6] text-[#c45b84] mb-4">男性向けガイド</div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
            男性におすすめの結婚相談所4選
            <br />
            <span className="text-[#c45b84]">男性目線での選び方ガイド</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            結婚相談所は女性だけのものではありません。男性にとっても効率的に真剣なパートナーを見つけられる場です。男性ならではの視点で、料金負担・プロフィール作成・お見合い成功率を上げる方法を徹底解説します。
          </p>
          <time dateTime="2026-04-15" className="text-xs text-gray-400 mt-4 block">2026年4月15日更新</time>
        </header>

        <nav className="bg-[#fdf8fa] border border-[#f0dde3] rounded-2xl p-6 mb-10">
          <h2 className="text-lg font-bold mb-3 text-[#c45b84]">この記事の目次</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#situation" className="text-[#c45b84] hover:underline">1. 男性の婚活事情</a></li>
            <li><a href="#cost" className="text-[#c45b84] hover:underline">2. 男性の料金負担の実態</a></li>
            <li><a href="#recommended" className="text-[#c45b84] hover:underline">3. 男性におすすめの結婚相談所4選</a></li>
            <li><a href="#profile" className="text-[#c45b84] hover:underline">4. プロフィール作成のコツ</a></li>
            <li><a href="#omiai-tips" className="text-[#c45b84] hover:underline">5. お見合い成功率を上げる方法</a></li>
            <li><a href="#ng" className="text-[#c45b84] hover:underline">6. 男性がやりがちなNG行動</a></li>
            <li><a href="#faq" className="text-[#c45b84] hover:underline">7. よくある質問</a></li>
          </ol>
        </nav>

        {/* Section 1 */}
        <section id="situation" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">男性の婚活事情</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            男性の婚活市場は、女性とは異なる課題や強みがあります。まずは男性特有の婚活事情を理解しましょう。
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white border border-[#f0dde3] rounded-2xl p-5 text-center">
              <p className="text-2xl font-bold text-[#c45b84] mb-1">約45%</p>
              <p className="text-xs text-gray-500">結婚相談所の男性会員比率</p>
              <p className="text-xs text-gray-400 mt-1">男女比はほぼ同等</p>
            </div>
            <div className="bg-white border border-[#f0dde3] rounded-2xl p-5 text-center">
              <p className="text-2xl font-bold text-[#c9a76c] mb-1">30〜40代</p>
              <p className="text-xs text-gray-500">男性会員の中心年代</p>
              <p className="text-xs text-gray-400 mt-1">仕事が安定した時期に入会</p>
            </div>
            <div className="bg-white border border-[#f0dde3] rounded-2xl p-5 text-center">
              <p className="text-2xl font-bold text-[#9b8ec4] mb-1">500万円〜</p>
              <p className="text-xs text-gray-500">人気が出やすい年収ライン</p>
              <p className="text-xs text-gray-400 mt-1">ただし人柄も重要視される</p>
            </div>
          </div>
          <div className="bg-[#fdf8fa] border border-[#f0dde3] rounded-2xl p-6">
            <h3 className="font-bold mb-3">男性が結婚相談所を選ぶ理由</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li className="flex items-start gap-2"><span className="text-[#c45b84] font-bold mt-0.5">●</span><span>仕事が忙しく自然な出会いの機会が少ない</span></li>
              <li className="flex items-start gap-2"><span className="text-[#c45b84] font-bold mt-0.5">●</span><span>マッチングアプリでは「いいね」が来ない・マッチしない</span></li>
              <li className="flex items-start gap-2"><span className="text-[#c45b84] font-bold mt-0.5">●</span><span>真剣に結婚を考えている女性と効率的に出会いたい</span></li>
              <li className="flex items-start gap-2"><span className="text-[#c45b84] font-bold mt-0.5">●</span><span>恋愛経験が少なく、プロのサポートが欲しい</span></li>
              <li className="flex items-start gap-2"><span className="text-[#c45b84] font-bold mt-0.5">●</span><span>身元が保証された安心な出会いを求めている</span></li>
            </ul>
          </div>
        </section>

        {/* Section 2: 料金負担 */}
        <section id="cost" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">男性の料金負担の実態</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            結婚相談所の料金は男女同一ですが、男性は公式料金以外にも様々な出費があります。実質的な負担額を把握しておきましょう。
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#c45b84] text-white">
                  <th className="p-3 text-left font-bold rounded-tl-lg">費用項目</th>
                  <th className="p-3 text-right font-bold">男性の負担</th>
                  <th className="p-3 text-left font-bold rounded-tr-lg">備考</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["入会金・月会費", "10〜60万円/年", "女性と同額"],
                  ["お見合い時のカフェ代", "5〜10万円/年", "男性が支払うのがマナー（月3〜5回想定）"],
                  ["プロフィール写真撮影", "1〜3万円", "スーツ着用のプロ撮影推奨"],
                  ["デート代", "10〜20万円/年", "仮交際中のランチ・ディナー代"],
                  ["交通費", "5〜10万円/年", "店舗訪問、お見合い場所への移動"],
                  ["身だしなみ投資", "3〜10万円", "スーツ、ヘアカット、スキンケアなど"],
                ].map((row, i) => (
                  <tr key={i} className={`border-b border-[#f0dde3] ${i % 2 === 0 ? "bg-white" : "bg-[#fdf8fa]"}`}>
                    <td className="p-3 font-bold text-gray-900">{row[0]}</td>
                    <td className="p-3 text-right text-[#c45b84] font-bold">{row[1]}</td>
                    <td className="p-3 text-gray-600">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
            <p className="font-bold text-yellow-800 mb-1">男性の実質年間コストは40〜110万円</p>
            <p className="text-sm text-yellow-800">公式料金に加え、カフェ代・デート代・身だしなみ投資を含めると、年間40〜110万円の出費になります。短期で成婚すれば総額を抑えられるため、効率的な活動が重要です。</p>
          </div>
        </section>

        {/* Section 3: おすすめ4社 */}
        <section id="recommended" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">男性におすすめの結婚相談所4選</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            男性目線で「女性会員の質」「コスパ」「サポート内容」を重視して、おすすめの4社を選びました。
          </p>

          {[
            {
              name: "IBJメンバーズ",
              badge: "女性の質が高い",
              badgeColor: "#c45b84",
              desc: "IBJ直営で成婚率50.4%。会員の質が高いことで知られ、年収・学歴ともにハイスペックな女性が多い。お見合い料無料で積極的にお見合いを組めるため、出会いの数を重視する男性に最適。",
              forMen: "真剣に結婚を考えている女性と出会いたい男性に。少人数担当制のカウンセラーが、お見合い後のフィードバックまで丁寧にサポート。",
              yearly: "約606,100円",
            },
            {
              name: "ゼクシィ縁結びエージェント",
              badge: "コスパ良好",
              badgeColor: "#c9a76c",
              desc: "成婚料・お見合い料なしで年間約24万円とコスパが良い。リクルート運営の安心感もあり、初めて結婚相談所を利用する男性にもおすすめ。AIマッチング＋コーディネーターのハイブリッド型。",
              forMen: "費用を抑えながら質の高いサービスを受けたい男性に。オンラインでも活動でき、忙しいビジネスマンにも対応。",
              yearly: "約244,200円",
            },
            {
              name: "ツヴァイ",
              badge: "会員数最大",
              badgeColor: "#9b8ec4",
              desc: "IBJ提携で会員数10万人超。出会いの「分母」が多いため、様々なタイプの女性と出会える。全国50店舗以上で地方在住の男性も利用しやすい。",
              forMen: "多くの女性と出会ってから判断したい男性に。データマッチングで条件に合う女性を効率的に検索できる。",
              yearly: "約300,300円",
            },
            {
              name: "パートナーエージェント",
              badge: "PDCA婚活",
              badgeColor: "#5b8a6b",
              desc: "PDCAサイクルでの活動改善が特徴。「なぜお見合いが成立しないのか」「なぜ仮交際が進まないのか」を論理的に分析し、改善策を提案してくれる。",
              forMen: "論理的思考を好む男性に。データに基づいたアドバイスで、感覚ではなく戦略的に婚活を進められる。",
              yearly: "約416,900円",
            },
          ].map((company, i) => (
            <div key={i} className="bg-white border-2 rounded-2xl p-6 md:p-8 mb-6" style={{ borderColor: company.badgeColor }}>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 text-white text-xs font-bold rounded-full" style={{ backgroundColor: company.badgeColor }}>{company.badge}</span>
                <h3 className="text-xl font-bold">{company.name}</h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">{company.desc}</p>
              <p className="text-sm text-gray-600 mb-3"><strong className="text-[#c45b84]">男性におすすめの理由：</strong>{company.forMen}</p>
              <p className="text-sm"><strong>年間総額：</strong><span className="text-[#c45b84] font-bold">{company.yearly}</span></p>
            </div>
          ))}
        </section>

        {/* Section 4: プロフィール */}
        <section id="profile" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">男性のプロフィール作成のコツ</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            プロフィールはお見合い成立の第一関門です。女性に「会ってみたい」と思ってもらえるプロフィールを作りましょう。
          </p>

          <div className="space-y-6">
            <div className="bg-white border border-[#f0dde3] rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-3 text-[#c45b84]">写真のポイント</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 rounded-xl p-4">
                  <p className="font-bold text-sm text-green-700 mb-2">好印象の写真</p>
                  <ul className="text-xs text-green-700 space-y-1">
                    <li>・清潔感のあるスーツ姿</li>
                    <li>・自然な笑顔</li>
                    <li>・プロカメラマンによる撮影</li>
                    <li>・シンプルな背景（白or明るい色）</li>
                    <li>・程よい胸元から上のアングル</li>
                  </ul>
                </div>
                <div className="bg-red-50 rounded-xl p-4">
                  <p className="font-bold text-sm text-red-700 mb-2">NGな写真</p>
                  <ul className="text-xs text-red-700 space-y-1">
                    <li>・自撮り（真剣さが伝わらない）</li>
                    <li>・サングラスや帽子着用</li>
                    <li>・暗い表情・無表情</li>
                    <li>・高級車や高級時計と一緒に写った写真</li>
                    <li>・加工しすぎた写真</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#f0dde3] rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-3 text-[#c9a76c]">自己PR文のポイント</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start gap-2"><span className="text-[#c9a76c] font-bold mt-0.5">●</span><span><strong>仕事について：</strong>職種と仕事のやりがいを簡潔に。専門用語は使わず、誰でもわかる言葉で。</span></li>
                <li className="flex items-start gap-2"><span className="text-[#c9a76c] font-bold mt-0.5">●</span><span><strong>趣味について：</strong>2〜3個挙げ、具体的なエピソードを添える。「読書が好きです」ではなく「最近読んだ○○に感銘を受けました」のように。</span></li>
                <li className="flex items-start gap-2"><span className="text-[#c9a76c] font-bold mt-0.5">●</span><span><strong>結婚観：</strong>「一緒に笑い合える温かい家庭を築きたい」など、結婚後の具体的なビジョンを書く。</span></li>
                <li className="flex items-start gap-2"><span className="text-[#c9a76c] font-bold mt-0.5">●</span><span><strong>性格：</strong>友人からの評価を引用すると客観性が出て好印象。「友人からはよく『聞き上手だね』と言われます」など。</span></li>
                <li className="flex items-start gap-2"><span className="text-[#c9a76c] font-bold mt-0.5">●</span><span><strong>文字数：</strong>300〜500文字程度。長すぎず短すぎない分量が最適。</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5: お見合い成功率 */}
        <section id="omiai-tips" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">お見合い成功率を上げる7つの方法</h2>
          <div className="space-y-4">
            {[
              { title: "清潔感を徹底する", detail: "爪を短く切る、髪型を整える、歯を磨く、靴を磨く。当たり前のことですが、意外にできていない男性が多いです。香水はつけすぎず、ほのかに香る程度に。体臭対策も忘れずに。" },
              { title: "時間通りに到着する", detail: "お見合い場所には10分前に到着し、女性を待つ側になりましょう。遅刻は論外ですが、早すぎて相手を急かすのもNG。スマートな時間管理で好印象を。" },
              { title: "相手の話を8割聞く", detail: "男性はつい自分の話をしがちですが、お見合いでは「聞き役」に徹しましょう。相手の話に興味を持って質問し、共感の相づちを打つ。これだけでお見合いの成功率は大幅にアップします。" },
              { title: "笑顔を意識する", detail: "緊張して真顔になってしまう男性が多いですが、笑顔は最大の武器です。鏡の前で笑顔の練習をしておきましょう。目が笑っていない「営業スマイル」ではなく、自然な笑顔が大切です。" },
              { title: "会話のテンプレートを用意する", detail: "「趣味は何ですか？」「休日はどう過ごしていますか？」「好きな食べ物は？」など、基本的な質問を5〜10個用意しておくと安心です。相手のプロフィールに関連する質問も準備しておきましょう。" },
              { title: "ドリンク代は自然に支払う", detail: "お見合い後の会計は男性がスマートに支払いましょう。「ここは僕が」と一言添えるだけでOK。割り勘を提案すると、この時点で不合格になるケースが多いです。" },
              { title: "お見合い後すぐにお礼の連絡をする", detail: "お見合い後、相談所を通じてお礼の意思を伝えましょう。「今日はありがとうございました。楽しかったです」の一言が、仮交際に進むかどうかを左右します。返事は当日中がベストです。" },
            ].map((tip, i) => (
              <div key={i} className="flex items-start gap-4 bg-white border border-[#f0dde3] rounded-2xl p-5">
                <div className="w-8 h-8 bg-[#c45b84] rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">{i + 1}</div>
                <div>
                  <h3 className="font-bold mb-1">{tip.title}</h3>
                  <p className="text-sm text-gray-600">{tip.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: NG行動 */}
        <section id="ng" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">男性がやりがちなNG行動</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "年収や肩書きを自慢する", desc: "「年収○○万です」「○○会社の部長です」とアピールしすぎると、逆効果。自慢は女性が最も嫌う行動の一つです。" },
              { title: "容姿や年齢にこだわりすぎる", desc: "「25歳以下の美人」を希望する40代男性は、お見合いが成立しにくいのが現実。条件は柔軟に設定しましょう。" },
              { title: "上から目線で話す", desc: "「教えてあげよう」「それは違うよ」など、上から目線の言動はお見合いの即アウト。対等な立場で会話しましょう。" },
              { title: "連絡をすぐに返さない", desc: "ビジネスと同じで、レスポンスの速さは信頼感につながります。お見合い後の返事やメッセージは24時間以内に。" },
              { title: "見た目に無頓着", desc: "シワだらけのシャツ、ボサボサの髪、伸びた爪…。見た目は最低限の清潔感を保ちましょう。第一印象の55%は見た目で決まります。" },
              { title: "仮交際中に急にアプローチを強める", desc: "仮交際になった途端、毎日連絡・週末のデートを強要するのはNG。相手のペースを尊重しながら、徐々に距離を縮めましょう。" },
            ].map((item, i) => (
              <div key={i} className="bg-red-50 border border-red-200 rounded-2xl p-5">
                <h3 className="font-bold text-red-700 mb-1">{item.title}</h3>
                <p className="text-sm text-red-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section: 年収別の婚活戦略 */}
        <section id="income-strategy" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">
            年収別の婚活戦略
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            男性の結婚相談所での婚活は、年収によって戦略が大きく変わります。自分の年収帯に合った戦略で、効率的に婚活を進めましょう。
          </p>
          <div className="space-y-4">
            {[
              {
                income: "年収300〜400万円",
                strategy: "ポテンシャルと人柄で勝負",
                detail:
                  "この年収帯では年収だけで勝負するのは難しいですが、20代〜30代前半なら「将来性」を武器にできます。仕事への意欲や将来のキャリアプランをプロフィールに書き、「成長意欲のある男性」としてアピールしましょう。コミュニケーション力や清潔感、趣味の充実度など、年収以外の魅力を最大化することが重要です。",
                tips: "費用を抑えたいなら、naco-do（年間約11万円）やゼクシィ（年間約24万円）がおすすめ。",
                color: "#5b8a6b",
              },
              {
                income: "年収400〜600万円",
                strategy: "バランスの取れたアピール",
                detail:
                  "結婚相談所の男性会員の中央値に近い年収帯です。年収だけでは突出しないため、人柄・コミュニケーション力・趣味の充実度・清潔感で差別化を図りましょう。「安定した生活を提供できる」ことをさりげなくアピールしつつ、相手との相性を重視する姿勢が好印象です。",
                tips: "ゼクシィやツヴァイなど、コスパの良い相談所がおすすめ。",
                color: "#c9a76c",
              },
              {
                income: "年収600〜800万円",
                strategy: "モテ層として有利に活動",
                detail:
                  "この年収帯は女性からの人気が高く、お見合い申し込みも多くなります。ただし、年収だけでモテるわけではなく、プロフィール写真の質や会話力も重要です。選べる立場を活かして、条件だけでなく価値観の合う相手をじっくり選びましょう。焦る必要はありません。",
                tips: "IBJメンバーズなど、会員の質が高い相談所がおすすめ。",
                color: "#c45b84",
              },
              {
                income: "年収800万円以上",
                strategy: "ハイスペック枠で効率的に",
                detail:
                  "非常に有利な立場で婚活ができます。多くの女性からお見合い申し込みが来るため、条件を絞って効率的に活動できます。ただし、年収目当ての女性もいるため、「自分の年収ではなく人柄で選んでくれる相手」を見極める目が必要です。カウンセラーと相談しながら慎重に進めましょう。",
                tips: "IBJメンバーズやサンマリエなど、会員の質にこだわる相談所がおすすめ。",
                color: "#9b8ec4",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white border-l-4 rounded-r-2xl p-6 shadow-sm"
                style={{ borderLeftColor: item.color }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className="px-3 py-1 text-white text-xs font-bold rounded-full"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.income}
                  </span>
                  <h3 className="font-bold">{item.strategy}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-2">
                  {item.detail}
                </p>
                <p className="text-xs text-gray-500">
                  <strong>おすすめ：</strong>
                  {item.tips}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section: 男性の身だしなみ完全チェックリスト */}
        <section id="grooming" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">
            男性の身だしなみ完全チェックリスト
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            お見合い前に確認すべき身だしなみチェックリストです。第一印象の55%は外見で決まると言われています。しっかり準備しましょう。
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-[#f0dde3] rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-3 text-[#c45b84]">
                ヘア・フェイス
              </h3>
              <ul className="text-sm text-gray-700 space-y-2">
                {[
                  "髪は清潔に整えてあるか（お見合い前にカットがベスト）",
                  "ヒゲは剃ってあるか（おしゃれヒゲは避ける方が無難）",
                  "鼻毛が出ていないか",
                  "眉毛は整えてあるか",
                  "肌の調子は良いか（前日の保湿ケア）",
                  "口臭対策はしたか（ミントタブレット持参）",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#c45b84] font-bold mt-0.5">
                      □
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-[#f0dde3] rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-3 text-[#c9a76c]">
                服装・小物
              </h3>
              <ul className="text-sm text-gray-700 space-y-2">
                {[
                  "シャツにシワはないか（アイロンがけ or クリーニング）",
                  "スーツ・ジャケットのサイズは合っているか",
                  "靴は磨いてあるか（かかとの擦り減りもチェック）",
                  "爪は短く切ってあるか",
                  "時計はシンプルなものか（派手なブランド物は避ける）",
                  "香水はほのかに香る程度か（つけすぎ注意）",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#c9a76c] font-bold mt-0.5">
                      □
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-6 bg-[#fdf8fa] border border-[#f0dde3] rounded-2xl p-6">
            <h3 className="font-bold mb-2">投資すべき身だしなみアイテム</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  item: "スキンケアセット",
                  budget: "3,000〜5,000円/月",
                  detail: "洗顔・化粧水・乳液の基本3点で十分。肌の清潔感は大きな差になります。",
                },
                {
                  item: "定期的なヘアカット",
                  budget: "3,000〜5,000円/月",
                  detail: "月1回のカットで清潔感をキープ。美容室でスタイリングも相談しましょう。",
                },
                {
                  item: "良質なスーツ1着",
                  budget: "30,000〜50,000円",
                  detail: "お見合い用に体にフィットした1着を。オーダーメイドもコスパ良好です。",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-4">
                  <p className="font-bold text-sm">{item.item}</p>
                  <p className="text-xs text-[#c45b84] font-bold">
                    {item.budget}
                  </p>
                  <p className="text-xs text-gray-600 mt-1">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section: 男性の婚活スケジュール */}
        <section id="schedule" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">
            忙しい男性のための婚活スケジュール
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            仕事が忙しい男性でも効率的に婚活を進められるスケジュールの組み方を紹介します。
          </p>
          <div className="bg-white border border-[#f0dde3] rounded-2xl p-6">
            <h3 className="font-bold mb-4">週間スケジュール例</h3>
            <div className="space-y-2 text-sm">
              {[
                {
                  day: "月〜金",
                  task: "通勤時間にお見合い申し込み・プロフィール確認（各10分）",
                },
                {
                  day: "水 or 木",
                  task: "昼休みにカウンセラーとチャットで相談（15分）",
                },
                {
                  day: "金曜夜",
                  task: "翌週のお見合い・デートの準備（服装・話題の準備）（30分）",
                },
                {
                  day: "土曜",
                  task: "お見合い1〜2件 or デート（午前・午後に1件ずつ）",
                },
                {
                  day: "日曜",
                  task: "自由時間 or 仮交際中の方とのデート",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-[#fdf8fa] rounded-lg p-3"
                >
                  <span className="w-16 text-xs font-bold text-[#c45b84] shrink-0">
                    {item.day}
                  </span>
                  <span className="text-gray-700">{item.task}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-4">
              このスケジュールなら平日は合計1時間未満、週末は半日程度の時間で婚活を進められます。「忙しいから婚活できない」は言い訳になりません。
            </p>
          </div>
        </section>

        {/* Section: 男性の体験談 */}
        <section id="stories" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">
            結婚相談所で成婚した男性の体験談
          </h2>
          <div className="space-y-4">
            {[
              {
                text: "IT企業勤務で残業も多く、出会いの場がありませんでした。マッチングアプリも試しましたが、メッセージのやり取りが面倒で途中で放置…。結婚相談所ならカウンセラーが日程調整してくれるので楽でした。入会6ヶ月で今の妻と出会い、9ヶ月で成婚退会。効率を重視する自分に合っていました。",
                age: "34歳・男性・年収550万円",
                point: "忙しい社会人でも効率的に婚活できた",
              },
              {
                text: "正直、恋愛経験が少なくお見合いが不安でした。でもカウンセラーが会話のコツや服装のアドバイスまでしてくれて、回を重ねるごとに自信がつきました。3人目の方と仮交際に進み、5人目でついに成婚。カウンセラーのおかげです。",
                age: "37歳・男性・年収480万円",
                point: "恋愛経験が少なくてもプロのサポートで成婚",
              },
              {
                text: "最初は「結婚相談所なんて…」と抵抗がありました。でも入ってみたら、真剣に結婚を考えている素敵な女性ばかり。アプリとは出会える人の質が全然違いました。費用は60万円ほどかかりましたが、妻と出会えたことを考えれば最高の投資でした。",
                age: "41歳・男性・年収700万円",
                point: "費用以上の価値がある出会いがあった",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white border border-[#f0dde3] rounded-2xl p-6"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-bold rounded-full">
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
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">男性の結婚相談所に関するよくある質問</h2>
          <div className="space-y-3">
            {[
              { q: "男性の結婚相談所の費用は女性より高いですか？", a: "多くの結婚相談所では男女同一料金です。ただし、お見合い時のカフェ代は男性が支払うのがマナーとされており、月3〜5回のお見合いで年間5〜10万円の追加出費になります。デート代も男性が多く負担するケースが多いため、実質的な負担は女性より大きくなります。" },
              { q: "年収が低いのですが、結婚相談所で不利になりますか？", a: "年収は重要な要素ですが、全てではありません。女性が求める年収の最低ラインは一般的に400〜500万円程度ですが、人柄やコミュニケーション力、将来性でカバーできる部分も大きいです。20代なら「ポテンシャル」で評価されることも多いです。" },
              { q: "男性のプロフィール写真はどんなものが良いですか？", a: "清潔感のあるスーツ姿がベストです。プロのカメラマンに撮影を依頼し、自然な笑顔の写真を用意しましょう。暗い表情、自撮り、旅行先の写真は避けてください。背景はシンプルなものが好印象です。撮影費用は1〜3万円が相場です。" },
              { q: "お見合いで何を話せばいいですか？", a: "趣味・休日の過ごし方・食べ物の好み・旅行の話題が定番です。自分の話ばかりせず、相手に質問して興味を示すことが大切。仕事の自慢話、過去の恋愛話、年収の話はNGです。相手のプロフィールを事前に読み込んで、話題を準備しておきましょう。" },
              { q: "結婚相談所とマッチングアプリ、男性はどちらが有利ですか？", a: "マッチングアプリは「見た目重視」のため、ルックスに自信がない男性は苦戦しがちです。結婚相談所は年収・職業・人柄など総合的に評価されるため、真面目で誠実な男性が有利です。女性も高い入会金を払っているため、本気度の高い出会いが期待できます。" },
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

        {/* CTA */}
        <section className="text-center bg-gradient-to-r from-[#fdf2f6] to-[#faf5ee] rounded-2xl p-8 md:p-12 mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-4">男性だからこそ、結婚相談所を活用しよう</h2>
          <p className="text-gray-600 mb-6 max-w-lg mx-auto text-sm">結婚相談所は真剣な出会いを求める男性の最強の味方。まずは無料カウンセリングから始めてみませんか？</p>
          <Link href="/ranking/" className="btn-cta">おすすめ結婚相談所ランキングを見る</Link>
        </section>

        {/* Related */}
        <section>
          <h2 className="text-lg font-bold mb-4">関連記事</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/ranking/" className="block bg-white border border-[#f0dde3] rounded-2xl p-5 hover:bg-[#fdf8fa] transition-colors">
              <p className="font-bold text-sm mb-1">結婚相談所おすすめ6選</p>
              <p className="text-xs text-gray-500">料金・口コミ・成婚率で徹底比較</p>
            </Link>
            <Link href="/articles/omiai-manners/" className="block bg-white border border-[#f0dde3] rounded-2xl p-5 hover:bg-[#fdf8fa] transition-colors">
              <p className="font-bold text-sm mb-1">お見合いのマナー完全ガイド</p>
              <p className="text-xs text-gray-500">服装・会話・好印象のコツ</p>
            </Link>
            <Link href="/articles/price-comparison/" className="block bg-white border border-[#f0dde3] rounded-2xl p-5 hover:bg-[#fdf8fa] transition-colors">
              <p className="font-bold text-sm mb-1">結婚相談所の料金比較</p>
              <p className="text-xs text-gray-500">大手6社の費用を徹底比較</p>
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
