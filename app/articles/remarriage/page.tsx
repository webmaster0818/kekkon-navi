import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "バツイチ・再婚におすすめの結婚相談所3選｜再婚の婚活成功法",
  description:
    "バツイチ・再婚におすすめの結婚相談所3社を徹底比較。再婚の婚活事情、子連れ再婚の注意点、成功体験談、よくある不安と回答まで詳しく解説。再婚でも幸せな結婚ができます。",
  keywords: "結婚相談所 再婚, 結婚相談所 バツイチ, 再婚 婚活, 子連れ再婚",
  alternates: { canonical: "https://kekkon-navi.pages.dev/articles/remarriage/" },
  openGraph: {
    title: "バツイチ・再婚におすすめの結婚相談所3選｜再婚の婚活成功法",
    description: "バツイチ・再婚におすすめの結婚相談所3社を徹底比較。子連れ再婚の注意点も解説。",
    url: "https://kekkon-navi.pages.dev/articles/remarriage/",
    type: "article",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "バツイチ・再婚におすすめの結婚相談所3選｜再婚の婚活成功法",
      datePublished: "2026-04-15", dateModified: "2026-04-15",
      author: { "@type": "Organization", name: "結婚相談所比較ナビ", url: "https://kekkon-navi.pages.dev" },
      publisher: { "@type": "Organization", name: "結婚相談所比較ナビ", url: "https://kekkon-navi.pages.dev" },
      description: "バツイチ・再婚におすすめの結婚相談所3社を徹底比較。",
      mainEntityOfPage: "https://kekkon-navi.pages.dev/articles/remarriage/",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "バツイチだと結婚相談所で不利になりますか？", acceptedAnswer: { "@type": "Answer", text: "大手結婚相談所の会員の約20〜30%はバツイチの方です。特に40代以上では再婚希望者同士のマッチングが多く、離婚歴がハンデになりにくい環境です。結婚生活の経験があることがプラスに評価されるケースも多いです。" } },
        { "@type": "Question", name: "子連れ再婚でも結婚相談所で出会えますか？", acceptedAnswer: { "@type": "Answer", text: "はい、子連れ再婚に理解のある方との出会いは可能です。プロフィールにお子様の情報を正直に記載し、カウンセラーに「子連れに理解のある方を希望」と伝えましょう。子どもとの関係性を大切にしてくれるパートナーと出会えます。" } },
        { "@type": "Question", name: "再婚向けの結婚相談所はありますか？", acceptedAnswer: { "@type": "Answer", text: "再婚専門の相談所もありますが、大手結婚相談所でも再婚サポートは充実しています。サンマリエ・パートナーエージェント・ツヴァイは再婚のサポート実績が多く、安心して活動できます。" } },
        { "@type": "Question", name: "離婚理由はプロフィールに書くべきですか？", acceptedAnswer: { "@type": "Answer", text: "離婚歴があることは記載しますが、詳細な理由を書く必要はありません。お見合いで聞かれた場合は「価値観の相違で円満に離婚しました」など、前向きな表現で簡潔に伝えましょう。相手を悪く言うのはNGです。" } },
        { "@type": "Question", name: "再婚の場合、成婚までどのくらいかかりますか？", acceptedAnswer: { "@type": "Answer", text: "再婚の場合は平均10〜14ヶ月程度です。初婚に比べるとやや長くなる傾向がありますが、結婚生活の経験があるため「何を重視すべきか」が明確で、効率的に活動できるという強みがあります。" } },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "ホーム", item: "https://kekkon-navi.pages.dev" },
        { "@type": "ListItem", position: 2, name: "コラム", item: "https://kekkon-navi.pages.dev/articles" },
        { "@type": "ListItem", position: 3, name: "バツイチ・再婚の婚活", item: "https://kekkon-navi.pages.dev/articles/remarriage/" },
      ],
    },
  ],
};

const breadcrumbItems = [
  { label: "コラム", href: "/articles" },
  { label: "バツイチ・再婚の婚活" },
];

export default function RemarriagePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Breadcrumb items={breadcrumbItems} />

      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="text-center py-10">
          <div className="inline-block px-4 py-1 rounded-full text-xs font-bold bg-[#fdf2f6] text-[#c45b84] mb-4">再婚ガイド</div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
            バツイチ・再婚におすすめの結婚相談所3選
            <br />
            <span className="text-[#c45b84]">再婚の婚活成功法</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            離婚経験があっても、幸せな再婚は十分に可能です。大手結婚相談所では会員の20〜30%がバツイチの方。再婚に特化したサポートや、理解のあるお相手との出会いを提供してくれます。
          </p>
          <time dateTime="2026-04-15" className="text-xs text-gray-400 mt-4 block">2026年4月15日更新</time>
        </header>

        <nav className="bg-[#fdf8fa] border border-[#f0dde3] rounded-2xl p-6 mb-10">
          <h2 className="text-lg font-bold mb-3 text-[#c45b84]">この記事の目次</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#situation" className="text-[#c45b84] hover:underline">1. 再婚の婚活事情</a></li>
            <li><a href="#recommended" className="text-[#c45b84] hover:underline">2. おすすめの結婚相談所3選</a></li>
            <li><a href="#children" className="text-[#c45b84] hover:underline">3. 子連れ再婚の注意点</a></li>
            <li><a href="#success" className="text-[#c45b84] hover:underline">4. 再婚成功体験談</a></li>
            <li><a href="#tips" className="text-[#c45b84] hover:underline">5. 再婚婚活の成功のコツ</a></li>
            <li><a href="#faq" className="text-[#c45b84] hover:underline">6. よくある質問</a></li>
          </ol>
        </nav>

        {/* Section 1 */}
        <section id="situation" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">再婚の婚活事情</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            厚生労働省のデータによると、婚姻件数のうち約26%（約4件に1件）が再婚を含むカップルです。再婚は決して珍しいことではなく、むしろ一般的になっています。
          </p>
          <div className="bg-[#fdf8fa] border border-[#f0dde3] rounded-2xl p-6 mb-6">
            <h3 className="font-bold mb-3">再婚に関するデータ</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div><p className="text-2xl font-bold text-[#c45b84]">約26%</p><p className="text-xs text-gray-500 mt-1">婚姻件数に占める再婚割合</p></div>
              <div><p className="text-2xl font-bold text-[#c9a76c]">20〜30%</p><p className="text-xs text-gray-500 mt-1">相談所のバツイチ会員比率</p></div>
              <div><p className="text-2xl font-bold text-[#9b8ec4]">10〜14ヶ月</p><p className="text-xs text-gray-500 mt-1">再婚の平均活動期間</p></div>
              <div><p className="text-2xl font-bold text-[#5b8a6b]">増加傾向</p><p className="text-xs text-gray-500 mt-1">再婚入会者の推移</p></div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-[#f0dde3] rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-3 text-[#5b8a6b]">再婚のアドバンテージ</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">●</span><span>結婚生活の経験があり、現実的な判断ができる</span></li>
                <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">●</span><span>「何が大切か」が明確で、相手選びが的確</span></li>
                <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">●</span><span>前回の失敗から学び、より良い関係を築ける</span></li>
                <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">●</span><span>同じ再婚者同士の理解ある出会いが期待できる</span></li>
              </ul>
            </div>
            <div className="bg-white border border-[#f0dde3] rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-3 text-red-400">再婚の課題</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">▲</span><span>「初婚の方を希望」という会員もいる</span></li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">▲</span><span>子どもがいる場合、相手の理解が必要</span></li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">▲</span><span>前の配偶者との比較をしてしまいがち</span></li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">▲</span><span>再婚への不安やトラウマ</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: おすすめ3社 */}
        <section id="recommended" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">再婚におすすめの結婚相談所3選</h2>
          {/* サンマリエ */}
          <div className="bg-white border-2 border-[#9b8ec4] rounded-2xl p-6 md:p-8 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-[#9b8ec4] text-white text-xs font-bold rounded-full">
                再婚サポート充実
              </span>
              <h3 className="text-xl font-bold">サンマリエ</h3>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              専任仲人が再婚の不安に寄り添い、理解のあるお相手を紹介してくれます。婚活セミナーでは再婚ならではの悩みにも対応。40年以上の実績があり、再婚の成功事例も豊富です。子連れ再婚のサポート経験も多く、安心して活動できます。
            </p>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              サンマリエが再婚者に特に強い理由は、仲人が会員一人ひとりの背景を深く理解した上で紹介を行う「オーダーメイド型」のサービスにあります。条件だけでは分からない「相性」を重視するため、離婚歴があっても「この人なら大丈夫」と感じてもらえる相手を選んでくれます。
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-green-50 rounded-xl p-4">
                <p className="font-bold text-sm text-green-700 mb-2">
                  再婚者にとってのメリット
                </p>
                <ul className="text-xs text-green-700 space-y-1">
                  <li>・仲人が離婚理由の伝え方をアドバイス</li>
                  <li>・再婚に理解のある会員を厳選紹介</li>
                  <li>・子連れ再婚の段階的な進め方を指導</li>
                  <li>・メイク・ファッション指導で自信回復</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-xl p-4">
                <p className="font-bold text-sm text-red-700 mb-2">
                  注意点
                </p>
                <ul className="text-xs text-red-700 space-y-1">
                  <li>・成婚料220,000円と費用は高め</li>
                  <li>・お見合い料も別途かかる</li>
                  <li>・トータルコストは最も高い部類</li>
                </ul>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 text-sm">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div>
                  <span className="text-gray-500">入会金</span>
                  <br />
                  <strong>187,000円</strong>
                </div>
                <div>
                  <span className="text-gray-500">月会費</span>
                  <br />
                  <strong>17,600円</strong>
                </div>
                <div>
                  <span className="text-gray-500">成婚料</span>
                  <br />
                  <strong>220,000円</strong>
                </div>
                <div>
                  <span className="text-gray-500">年間総額</span>
                  <br />
                  <strong className="text-[#c45b84]">約618,200円</strong>
                </div>
              </div>
            </div>
          </div>

          {/* パートナーエージェント */}
          <div className="bg-white border-2 border-[#5b8a6b] rounded-2xl p-6 md:p-8 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-[#5b8a6b] text-white text-xs font-bold rounded-full">
                PDCA婚活
              </span>
              <h3 className="text-xl font-bold">パートナーエージェント</h3>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              コンシェルジュが再婚ならではの課題を分析し、PDCAサイクルで改善していきます。「なぜ前回うまくいかなかったのか」を客観的に振り返り、次の結婚に活かすアプローチが特徴。成婚料55,000円と手頃な点も魅力です。
            </p>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              再婚者にとってPDCAアプローチが効果的な理由は、前回の結婚で「何を見落としていたか」を体系的に分析できる点にあります。感覚的な反省ではなく、データに基づいた改善策を提案してくれるため、同じ失敗を繰り返すリスクを大幅に減らせます。
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-green-50 rounded-xl p-4">
                <p className="font-bold text-sm text-green-700 mb-2">
                  再婚者にとってのメリット
                </p>
                <ul className="text-xs text-green-700 space-y-1">
                  <li>・前回の結婚を客観的に振り返れる</li>
                  <li>・成婚料55,000円と仲人型では安め</li>
                  <li>・科学的アプローチで効率的な活動</li>
                  <li>・定期的なフィードバックで軌道修正</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-xl p-4">
                <p className="font-bold text-sm text-red-700 mb-2">
                  注意点
                </p>
                <ul className="text-xs text-red-700 space-y-1">
                  <li>・店舗が主要都市のみ</li>
                  <li>・月会費は18,700円とやや高め</li>
                  <li>・論理的なアプローチが合わない人も</li>
                </ul>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 text-sm">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div>
                  <span className="text-gray-500">入会金</span>
                  <br />
                  <strong>137,500円</strong>
                </div>
                <div>
                  <span className="text-gray-500">月会費</span>
                  <br />
                  <strong>18,700円</strong>
                </div>
                <div>
                  <span className="text-gray-500">成婚料</span>
                  <br />
                  <strong>55,000円</strong>
                </div>
                <div>
                  <span className="text-gray-500">年間総額</span>
                  <br />
                  <strong className="text-[#c45b84]">約416,900円</strong>
                </div>
              </div>
            </div>
          </div>

          {/* ツヴァイ */}
          <div className="bg-white border-2 border-[#c9a76c] rounded-2xl p-6 md:p-8 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-[#c9a76c] text-white text-xs font-bold rounded-full">
                会員数最大
              </span>
              <h3 className="text-xl font-bold">ツヴァイ</h3>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              IBJ提携で10万人超の会員から探せるため、再婚に理解のある方との出会いの確率が高まります。全国50店舗以上で地方在住の方も利用しやすく、成婚料が基本無料なので費用面でも安心です。再婚者割引がある場合もあります。
            </p>
            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              ツヴァイが再婚者におすすめの理由は、会員数の多さにあります。分母が大きいほど「再婚OK」の方と出会える確率が高まります。また、データマッチングで「再婚に理解あり」の条件でフィルタリングできるため、効率的にお相手を見つけられます。
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-green-50 rounded-xl p-4">
                <p className="font-bold text-sm text-green-700 mb-2">
                  再婚者にとってのメリット
                </p>
                <ul className="text-xs text-green-700 space-y-1">
                  <li>・10万人超の会員から探せる</li>
                  <li>・成婚料が基本無料でコスパ良好</li>
                  <li>・全国50店舗以上で地方もカバー</li>
                  <li>・データマッチングで効率的な検索</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-xl p-4">
                <p className="font-bold text-sm text-red-700 mb-2">
                  注意点
                </p>
                <ul className="text-xs text-red-700 space-y-1">
                  <li>・初期費用は115,500円とやや高め</li>
                  <li>・仲人型ほどの手厚いサポートは期待しにくい</li>
                  <li>・担当者の質にばらつきがある場合も</li>
                </ul>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 text-sm">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div>
                  <span className="text-gray-500">入会金</span>
                  <br />
                  <strong>115,500円</strong>
                </div>
                <div>
                  <span className="text-gray-500">月会費</span>
                  <br />
                  <strong>15,400円</strong>
                </div>
                <div>
                  <span className="text-gray-500">成婚料</span>
                  <br />
                  <strong>基本無料</strong>
                </div>
                <div>
                  <span className="text-gray-500">年間総額</span>
                  <br />
                  <strong className="text-[#c45b84]">約300,300円</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: 子連れ再婚 */}
        <section id="children" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">子連れ再婚の注意点</h2>
          <div className="space-y-4">
            {[
              { title: "お子様の情報はプロフィールに正直に記載する", detail: "子どもの人数、年齢、性別、親権の有無を明確にしましょう。隠していると後でトラブルになります。最初からオープンにすることで、理解のある方とマッチングできます。" },
              { title: "お子様と新しいパートナーの関係づくりを計画する", detail: "真剣交際に進んだら、いつ・どのようにお子様を紹介するかカウンセラーと相談しましょう。焦って紹介するのではなく、お子様の気持ちを最優先に考えることが大切です。" },
              { title: "養育費・面会交流の取り決めを明確にする", detail: "前の配偶者との養育費や面会交流のルールが曖昧だと、新しいパートナーとの関係にも影響します。再婚前に法的な取り決めを明確にしておきましょう。" },
              { title: "相手にも子どもへの理解度を確認する", detail: "「子どもが好き」だけでなく、継親としての責任を理解しているかを確認しましょう。お見合いや交際中に子どもの話題に対する反応を注意深く観察することが大切です。" },
              { title: "お子様の生活リズムに合わせた婚活を", detail: "デートの時間や頻度は、お子様の生活に支障が出ないように調整しましょう。お子様の保育園や学校行事の日は避けるなど、配慮が必要です。" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-white border border-[#f0dde3] rounded-2xl p-5">
                <div className="w-8 h-8 bg-[#9b8ec4] rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">{i + 1}</div>
                <div><h3 className="font-bold mb-1">{item.title}</h3><p className="text-sm text-gray-600">{item.detail}</p></div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: 成功体験談 */}
        <section id="success" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">再婚成功体験談</h2>
          <div className="space-y-4">
            {[
              { text: "35歳の時に離婚し、38歳で結婚相談所に入会しました。最初は「バツイチの自分に合う人なんているのかな」と不安でしたが、仲人さんが「再婚に理解のある方」を厳選して紹介してくれました。3人目の方と意気投合し、10ヶ月で成婚退会。今は2人で幸せに暮らしています。", age: "38歳・女性", company: "サンマリエ利用" },
              { text: "前妻との離婚後、5年間独身でしたが、子どもたちのためにも新しいパートナーが欲しいと思い入会。「お子さんも含めて家族になりたい」と言ってくれた女性と出会い、1年で成婚。子どもたちも新しいお母さんに懐いてくれて本当に良かったです。", age: "43歳・男性（子ども2人）", company: "パートナーエージェント利用" },
              { text: "バツイチ同士で出会いました。お互いに「次こそは」という気持ちが強く、価値観の確認を丁寧に行えたのが成功の要因だったと思います。結婚生活の経験があるからこそ、何を大切にすべきかわかっていました。", age: "41歳・女性", company: "ツヴァイ利用" },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-[#f0dde3] rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-bold rounded-full">{item.company}</span>
                  <span className="text-xs text-gray-500">{item.age}</span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">&ldquo;{item.text}&rdquo;</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: 成功のコツ */}
        <section id="tips" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">再婚婚活の成功のコツ</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "過去を前向きに捉える", desc: "離婚は失敗ではなく、経験です。「あの経験があったからこそ、今の自分がある」と前向きに捉え、次の結婚に活かしましょう。お見合いでも前向きな姿勢が好印象です。" },
              { title: "前の配偶者の悪口を言わない", desc: "離婚理由を聞かれても、前の配偶者を悪く言うのは絶対NG。「お互いの方向性が合わなかった」など、客観的かつ前向きに伝えましょう。" },
              { title: "「次こそは」のプレッシャーを手放す", desc: "「今度こそ失敗できない」と思いすぎると力みが出て、自然体でいられなくなります。リラックスして婚活を楽しむ気持ちが、結果として良い出会いを引き寄せます。" },
              { title: "再婚に理解のある相談所を選ぶ", desc: "再婚のサポート経験が豊富なカウンセラーがいる相談所を選びましょう。バツイチならではの悩みや不安に共感してくれるカウンセラーがいると、安心して活動できます。" },
              { title: "条件を柔軟に設定する", desc: "「初婚の方のみ」と限定せず、同じ再婚者も含めて広く探しましょう。再婚同士の方がお互いの気持ちを理解し合えることも多いです。" },
              { title: "焦らず自分のペースで活動する", desc: "再婚は「慎重さ」が大切です。前回の結婚で感じた違和感を見逃さず、じっくりと相手を見極めましょう。カウンセラーに相談しながら、自分のペースで進めてOKです。" },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-[#f0dde3] rounded-2xl p-6">
                <h3 className="font-bold mb-2 text-[#c45b84]">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: 再婚の不安への対処法 */}
        <section id="anxiety" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">
            再婚によくある不安と対処法
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            再婚を考える方が抱えがちな不安と、その対処法をまとめました。不安を解消して、前向きに婚活を始めましょう。
          </p>
          <div className="space-y-4">
            {[
              {
                anxiety: "また離婚してしまうのではないか",
                solution:
                  "前回の離婚原因を客観的に分析し、同じ過ちを繰り返さない対策を立てましょう。カウンセラーと一緒に「どんな相手なら長続きするか」を考えることで、根拠のある相手選びができます。再婚で幸せな家庭を築いている方は大勢います。",
              },
              {
                anxiety: "子どもと新しいパートナーがうまくやれるか",
                solution:
                  "お子様と新しいパートナーの関係づくりは段階的に進めましょう。最初はオンラインで顔を見せる程度から始め、徐々に対面の時間を増やします。お子様のペースを最優先にし、無理強いしないことが大切です。カウンセラーからも段階的な紹介方法のアドバイスをもらえます。",
              },
              {
                anxiety: "周囲の目が気になる",
                solution:
                  "現在の日本では結婚の約4件に1件が再婚を含むカップルです。再婚は全く珍しいことではありません。むしろ「幸せになるために積極的に行動している」あなたは素晴らしいです。周囲の声より、自分の幸せを最優先にしましょう。",
              },
              {
                anxiety: "前の配偶者との比較をしてしまいそう",
                solution:
                  "比較してしまうのは自然なことです。ただし、新しいパートナーは別の人間です。前の配偶者の良いところと比較するのではなく、新しいパートナーの良いところに目を向けましょう。カウンセラーに相談すると、客観的なアドバイスがもらえます。",
              },
              {
                anxiety: "養育費や財産分与でトラブルにならないか",
                solution:
                  "再婚前に、前の配偶者との養育費・面会交流の取り決めを書面で明確にしておきましょう。必要に応じて弁護士に相談することもおすすめです。新しいパートナーにも、これらの取り決めを正直に伝えておくことが信頼関係の基盤になります。",
              },
              {
                anxiety: "相手の家族に受け入れてもらえるか",
                solution:
                  "バツイチを受け入れてくれるパートナーの家族は、基本的に理解のある方が多いです。ただし、真剣交際の段階で相手の家族の反応を確認しておくことが大切です。カウンセラーが相手側の家族の考えを確認してくれる場合もあります。",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white border border-[#f0dde3] rounded-2xl p-6"
              >
                <h3 className="font-bold text-[#c45b84] mb-2">
                  不安：{item.anxiety}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  <strong className="text-[#5b8a6b]">対処法：</strong>
                  {item.solution}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: 再婚活動のスケジュール */}
        <section id="schedule" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">
            再婚婚活の理想的なスケジュール
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            再婚の婚活は、初婚よりもやや慎重に進めるのがポイントです。以下のスケジュールを参考に、無理のないペースで活動しましょう。
          </p>
          <div className="space-y-4">
            {[
              {
                period: "1ヶ月目",
                title: "情報収集・入会準備",
                detail:
                  "複数の結婚相談所の無料カウンセリングを受けます。再婚サポートの経験や、バツイチ会員の割合、子連れ再婚の実績などを質問しましょう。自分の再婚への気持ちを整理する時期でもあります。",
              },
              {
                period: "2ヶ月目",
                title: "入会・プロフィール作成",
                detail:
                  "離婚歴の記載方法、お子様の情報の書き方をカウンセラーと相談しながらプロフィールを作成。プロフィール写真は「前向きで明るい雰囲気」を意識しましょう。希望条件は「再婚に理解のある方」を必ず含めます。",
              },
              {
                period: "3〜5ヶ月目",
                title: "お見合い期間",
                detail:
                  "月3〜4回のお見合いを目標に活動します。初婚の方ほどの数は必要ありません。質を重視し、カウンセラーが厳選した方とのお見合いを中心に。再婚ならではの会話（離婚理由、子どものことなど）の伝え方もカウンセラーに相談しましょう。",
              },
              {
                period: "5〜8ヶ月目",
                title: "仮交際・真剣交際",
                detail:
                  "仮交際では、相手の「再婚への理解度」をしっかり確認します。子どもがいる場合は、真剣交際に進んでからお子様を紹介するタイミングを検討。焦らず、お互いの信頼関係を深めましょう。",
              },
              {
                period: "8〜12ヶ月目",
                title: "お子様の紹介・成婚退会",
                detail:
                  "お子様と新しいパートナーの初対面、両家の顔合わせを経て、プロポーズ→成婚退会へ。再婚の場合は入籍のタイミングや住居の問題など、初婚以上に事前の話し合いが重要です。",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white border border-[#f0dde3] rounded-2xl p-5"
              >
                <div className="shrink-0 text-center">
                  <div className="w-16 h-12 bg-[#c45b84] rounded-xl flex items-center justify-center text-white font-bold text-xs leading-tight">
                    {step.period}
                  </div>
                </div>
                <div>
                  <h3 className="font-bold mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 8: 再婚の法的注意点 */}
        <section id="legal" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">
            再婚の法的な注意点
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            再婚には初婚にはない法的な注意点があります。事前に確認しておきましょう。
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "再婚禁止期間",
                desc: "女性の場合、離婚後100日間は再婚できません（民法733条）。ただし、離婚時に妊娠していないことの医師の証明があれば、100日を待たずに再婚可能です。男性には再婚禁止期間はありません。",
              },
              {
                title: "養子縁組の検討",
                desc: "連れ子がいる場合、新しい配偶者と子どもの間に法的な親子関係を作るには養子縁組が必要です。養子縁組すると、扶養義務や相続権が発生します。カップルで十分に話し合いましょう。",
              },
              {
                title: "姓の変更",
                desc: "再婚すると姓が変わる場合があります。子どもの姓をどうするか（新しい姓にするか、そのままにするか）も事前に話し合っておく必要があります。家庭裁判所への申立てが必要な場合もあります。",
              },
              {
                title: "前の配偶者への養育費",
                desc: "再婚しても前の配偶者への養育費の支払い義務は基本的に継続します。ただし、再婚により経済状況が変わった場合は、養育費の減額を申し立てることも可能です。弁護士に相談しましょう。",
              },
              {
                title: "相続の問題",
                desc: "再婚すると、新しい配偶者と前の配偶者との間の子ども、新しい配偶者との間の子どもの間で相続関係が複雑になります。遺言書の作成を検討することをおすすめします。",
              },
              {
                title: "住居の問題",
                desc: "前の配偶者との共有財産（持ち家など）がある場合は、再婚前に財産分与を完了させておきましょう。新しい配偶者との住居をどうするか、子どもの学区はどうするかなども事前に話し合いが必要です。",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white border border-[#f0dde3] rounded-2xl p-5"
              >
                <h3 className="font-bold mb-2 text-[#c9a76c]">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 9: 再婚3社の比較表 */}
        <section id="comparison-table" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">
            再婚おすすめ3社の比較表
          </h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#c45b84] text-white">
                  <th className="p-3 text-left font-bold rounded-tl-lg">
                    比較項目
                  </th>
                  <th className="p-3 text-center font-bold">サンマリエ</th>
                  <th className="p-3 text-center font-bold">
                    パートナーエージェント
                  </th>
                  <th className="p-3 text-center font-bold rounded-tr-lg">
                    ツヴァイ
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["タイプ", "仲人型", "仲人型", "ハイブリッド型"],
                  ["入会金", "187,000円", "137,500円", "115,500円"],
                  ["月会費", "17,600円", "18,700円", "15,400円"],
                  ["成婚料", "220,000円", "55,000円", "基本無料"],
                  ["年間総額", "約618,200円", "約416,900円", "約300,300円"],
                  [
                    "会員数",
                    "約8.7万人（IBJ）",
                    "約9.4万人",
                    "約9.7万人（IBJ提携）",
                  ],
                  [
                    "再婚サポート",
                    "非常に充実",
                    "充実（PDCA型）",
                    "対応あり",
                  ],
                  [
                    "店舗数",
                    "主要都市",
                    "主要都市",
                    "全国50店舗以上",
                  ],
                  [
                    "おすすめの年代",
                    "30〜40代",
                    "30〜40代",
                    "20〜40代",
                  ],
                ].map((row, i) => (
                  <tr
                    key={i}
                    className={`border-b border-[#f0dde3] ${i % 2 === 0 ? "bg-white" : "bg-[#fdf8fa]"}`}
                  >
                    <td className="p-3 font-bold text-gray-900">{row[0]}</td>
                    <td className="p-3 text-center">{row[1]}</td>
                    <td className="p-3 text-center">{row[2]}</td>
                    <td className="p-3 text-center">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-[#fdf8fa] border border-[#f0dde3] rounded-2xl p-6">
            <h3 className="font-bold mb-2">再婚の方への選び方アドバイス</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-[#c45b84] font-bold mt-0.5">●</span>
                <span>
                  <strong>手厚いサポートが欲しいなら：</strong>
                  サンマリエ。専任仲人が再婚の不安に寄り添い、オーダーメイドの紹介をしてくれます。
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c45b84] font-bold mt-0.5">●</span>
                <span>
                  <strong>論理的に婚活を進めたいなら：</strong>
                  パートナーエージェント。PDCAで前回の結婚の教訓を活かしたアプローチが可能。
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c45b84] font-bold mt-0.5">●</span>
                <span>
                  <strong>費用を抑えたいなら：</strong>
                  ツヴァイ。成婚料が基本無料で、活動期間が長くなってもコストが膨らみにくい。
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">よくある質問</h2>
          <div className="space-y-3">
            {[
              { q: "バツイチだと結婚相談所で不利になりますか？", a: "大手結婚相談所の会員の約20〜30%はバツイチの方です。特に40代以上では再婚希望者同士のマッチングが多く、離婚歴がハンデになりにくい環境です。結婚生活の経験がプラスに評価されるケースも多いです。" },
              { q: "子連れ再婚でも結婚相談所で出会えますか？", a: "はい、子連れ再婚に理解のある方との出会いは可能です。プロフィールにお子様の情報を正直に記載し、カウンセラーに希望を伝えましょう。子どもとの関係を大切にしてくれるパートナーと出会えます。" },
              { q: "再婚向けの結婚相談所はありますか？", a: "再婚専門の相談所もありますが、大手でも再婚サポートは充実しています。サンマリエ・パートナーエージェント・ツヴァイは再婚のサポート実績が多く安心です。" },
              { q: "離婚理由はプロフィールに書くべきですか？", a: "離婚歴は記載しますが、詳細な理由は不要です。お見合いで聞かれた場合は「価値観の相違で」など前向きに簡潔に伝えましょう。相手を悪く言うのはNGです。" },
              { q: "再婚の場合、成婚までどのくらいかかりますか？", a: "平均10〜14ヶ月程度です。初婚よりやや長くなる傾向がありますが、経験から「何を重視すべきか」が明確で効率的に活動できる強みがあります。" },
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
          <h2 className="text-xl md:text-2xl font-bold mb-4">再婚で、もう一度幸せを掴もう</h2>
          <p className="text-gray-600 mb-6 max-w-lg mx-auto text-sm">過去の経験を活かして、次こそは最高のパートナーを見つけましょう。プロのサポートがあなたの再婚を応援します。</p>
          <Link href="/ranking/" className="btn-cta">おすすめ結婚相談所ランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-4">関連記事</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/ranking/" className="block bg-white border border-[#f0dde3] rounded-2xl p-5 hover:bg-[#fdf8fa] transition-colors">
              <p className="font-bold text-sm mb-1">結婚相談所おすすめ6選</p>
              <p className="text-xs text-gray-500">料金・口コミ・成婚率で徹底比較</p>
            </Link>
            <Link href="/articles/age-40s/" className="block bg-white border border-[#f0dde3] rounded-2xl p-5 hover:bg-[#fdf8fa] transition-colors">
              <p className="font-bold text-sm mb-1">40代におすすめの結婚相談所</p>
              <p className="text-xs text-gray-500">40代からの婚活成功のコツ</p>
            </Link>
            <Link href="/articles/should-i-join/" className="block bg-white border border-[#f0dde3] rounded-2xl p-5 hover:bg-[#fdf8fa] transition-colors">
              <p className="font-bold text-sm mb-1">結婚相談所はやめたほうがいい？</p>
              <p className="text-xs text-gray-500">後悔しないための判断基準</p>
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
