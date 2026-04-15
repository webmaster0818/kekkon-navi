import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "30代におすすめの結婚相談所4選｜アラサー・アラフォーの婚活戦略",
  description:
    "30代の婚活に最適な結婚相談所4社（IBJメンバーズ・ゼクシィ・サンマリエ・パートナーエージェント）を徹底比較。30代前半と後半の違い、効率的な婚活スケジュールも解説。",
  keywords: "結婚相談所 30代 おすすめ, 30代 婚活, アラサー 婚活, アラフォー 婚活",
  alternates: { canonical: "https://kekkon-navi.pages.dev/articles/age-30s/" },
  openGraph: {
    title: "30代におすすめの結婚相談所4選｜アラサー・アラフォーの婚活戦略",
    description: "30代の婚活に最適な結婚相談所4社を徹底比較。効率的な婚活スケジュールも解説。",
    url: "https://kekkon-navi.pages.dev/articles/age-30s/",
    type: "article",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "30代におすすめの結婚相談所4選｜アラサー・アラフォーの婚活戦略",
      datePublished: "2026-04-15",
      dateModified: "2026-04-15",
      author: { "@type": "Organization", name: "結婚相談所比較ナビ", url: "https://kekkon-navi.pages.dev" },
      publisher: { "@type": "Organization", name: "結婚相談所比較ナビ", url: "https://kekkon-navi.pages.dev" },
      description: "30代の婚活に最適な結婚相談所4社を徹底比較。",
      mainEntityOfPage: "https://kekkon-navi.pages.dev/articles/age-30s/",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "30代で結婚相談所に入会するのは遅いですか？", acceptedAnswer: { "@type": "Answer", text: "まったく遅くありません。結婚相談所の中心層は30代で、最も会員数が多い年代です。30代は仕事も安定し、結婚への具体的なビジョンを持っている方が多いため、成婚率も高い傾向にあります。" } },
        { "@type": "Question", name: "30代前半と後半では婚活の状況は違いますか？", acceptedAnswer: { "@type": "Answer", text: "はい、特に女性は35歳前後で状況が変わります。30代前半は人気が高く選びやすい立場ですが、35歳を超えるとお見合い申し込み数が減少する傾向があります。男性は30代全体を通じて安定した人気がありますが、後半になると年収などの条件面での評価がより重要になります。" } },
        { "@type": "Question", name: "30代の結婚相談所の費用相場はどのくらいですか？", acceptedAnswer: { "@type": "Answer", text: "年間25万〜60万円が目安です。30代は最も成婚しやすい年代のため、短期間で成果が出れば実質的なコストを抑えられます。サポートの手厚い相談所を選んで効率的に活動することをおすすめします。" } },
        { "@type": "Question", name: "30代で成婚するまでの平均期間はどのくらいですか？", acceptedAnswer: { "@type": "Answer", text: "30代の平均活動期間は約8〜12ヶ月です。30代前半は6〜10ヶ月、30代後半は10〜14ヶ月程度が目安です。積極的にお見合いを組んで短期集中で活動すれば、6ヶ月以内の成婚も十分可能です。" } },
        { "@type": "Question", name: "30代のうちに結婚したいのですが、いつまでに入会すべきですか？", acceptedAnswer: { "@type": "Answer", text: "成婚までの平均期間が約1年と考えると、30代のうちに結婚したいなら38歳までには入会したいところです。ただし、早ければ早いほど有利なので、思い立ったときが始めどきです。特に30代後半の方は1日でも早い行動をおすすめします。" } },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "ホーム", item: "https://kekkon-navi.pages.dev" },
        { "@type": "ListItem", position: 2, name: "コラム", item: "https://kekkon-navi.pages.dev/articles" },
        { "@type": "ListItem", position: 3, name: "30代におすすめの結婚相談所", item: "https://kekkon-navi.pages.dev/articles/age-30s/" },
      ],
    },
  ],
};

const breadcrumbItems = [
  { label: "コラム", href: "/articles" },
  { label: "30代におすすめの結婚相談所" },
];

export default function Age30sPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Breadcrumb items={breadcrumbItems} />

      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="text-center py-10">
          <div className="inline-block px-4 py-1 rounded-full text-xs font-bold bg-[#fdf2f6] text-[#c45b84] mb-4">年代別ガイド</div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
            30代におすすめの結婚相談所4選
            <br />
            <span className="text-[#c45b84]">アラサー・アラフォーの婚活戦略</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            30代は結婚相談所の「ボリュームゾーン」。会員数が最も多く、本気度の高い婚活ができる年代です。30代前半と後半では戦略が異なるため、それぞれに合った相談所選びと婚活スケジュールを解説します。
          </p>
          <time dateTime="2026-04-15" className="text-xs text-gray-400 mt-4 block">2026年4月15日更新</time>
        </header>

        <nav className="bg-[#fdf8fa] border border-[#f0dde3] rounded-2xl p-6 mb-10">
          <h2 className="text-lg font-bold mb-3 text-[#c45b84]">この記事の目次</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#situation" className="text-[#c45b84] hover:underline">1. 30代の婚活事情</a></li>
            <li><a href="#early-vs-late" className="text-[#c45b84] hover:underline">2. 30代前半 vs 後半の違い</a></li>
            <li><a href="#recommended" className="text-[#c45b84] hover:underline">3. 30代におすすめの結婚相談所4選</a></li>
            <li><a href="#schedule" className="text-[#c45b84] hover:underline">4. 効率的な婚活スケジュール</a></li>
            <li><a href="#success-tips" className="text-[#c45b84] hover:underline">5. 30代の婚活成功のコツ</a></li>
            <li><a href="#faq" className="text-[#c45b84] hover:underline">6. よくある質問</a></li>
          </ol>
        </nav>

        {/* Section 1 */}
        <section id="situation" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">30代の婚活事情</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            30代は結婚相談所において最も活発に活動している年代です。仕事が安定し、収入面でも余裕が出てくるため、「そろそろ本気で結婚相手を探したい」と考える方が多くなります。
          </p>
          <div className="bg-[#fdf8fa] border border-[#f0dde3] rounded-2xl p-6 mb-6">
            <h3 className="font-bold mb-3">30代の結婚相談所データ</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div><p className="text-2xl font-bold text-[#c45b84]">約40〜50%</p><p className="text-xs text-gray-500 mt-1">30代会員の割合</p></div>
              <div><p className="text-2xl font-bold text-[#c9a76c]">約8〜12ヶ月</p><p className="text-xs text-gray-500 mt-1">平均活動期間</p></div>
              <div><p className="text-2xl font-bold text-[#9b8ec4]">最も多い</p><p className="text-xs text-gray-500 mt-1">入会者数</p></div>
              <div><p className="text-2xl font-bold text-[#5b8a6b]">高い</p><p className="text-xs text-gray-500 mt-1">成婚率</p></div>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            30代は結婚相談所の「ゴールデンエイジ」とも言えます。20代のような勢いと、40代のような落ち着きの両方を持ち合わせ、パートナーとしての魅力が高い年代です。だからこそ、この時期の婚活は効率的に進めることが重要です。
          </p>
        </section>

        {/* Section 2 */}
        <section id="early-vs-late" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">30代前半 vs 後半の違い</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white border-2 border-[#c45b84] rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-3 text-[#c45b84]">30代前半（30〜34歳）</h3>
              <ul className="text-sm text-gray-700 space-y-3">
                <li className="flex items-start gap-2"><span className="text-[#c45b84] font-bold mt-0.5">●</span><span><strong>女性：</strong>お見合い申し込みが多く、選びやすい立場。結婚・出産のタイムリミットを意識し始める時期。</span></li>
                <li className="flex items-start gap-2"><span className="text-[#c45b84] font-bold mt-0.5">●</span><span><strong>男性：</strong>年収が上がり始め、結婚相談所でも評価されやすい。同年代〜5歳下の女性と出会いやすい。</span></li>
                <li className="flex items-start gap-2"><span className="text-[#c45b84] font-bold mt-0.5">●</span><span><strong>戦略：</strong>まだ余裕がある分、条件にこだわりすぎて「あと1年あるから」と先延ばしにしがち。早めに行動開始を。</span></li>
                <li className="flex items-start gap-2"><span className="text-[#c45b84] font-bold mt-0.5">●</span><span><strong>おすすめの相談所：</strong>コスパ重視ならゼクシィ、真剣度重視ならIBJメンバーズ</span></li>
              </ul>
            </div>
            <div className="bg-white border-2 border-[#c9a76c] rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-3 text-[#c9a76c]">30代後半（35〜39歳）</h3>
              <ul className="text-sm text-gray-700 space-y-3">
                <li className="flex items-start gap-2"><span className="text-[#c9a76c] font-bold mt-0.5">●</span><span><strong>女性：</strong>35歳を境にお見合い申し込み数が減少傾向。より戦略的な婚活が必要になる。</span></li>
                <li className="flex items-start gap-2"><span className="text-[#c9a76c] font-bold mt-0.5">●</span><span><strong>男性：</strong>年収・地位が確立されている方は人気が高い。ただし「なぜ独身？」と聞かれることも。</span></li>
                <li className="flex items-start gap-2"><span className="text-[#c9a76c] font-bold mt-0.5">●</span><span><strong>戦略：</strong>時間との勝負。手厚いサポートのある仲人型を選び、プロと二人三脚で短期決戦を。</span></li>
                <li className="flex items-start gap-2"><span className="text-[#c9a76c] font-bold mt-0.5">●</span><span><strong>おすすめの相談所：</strong>サポート重視でサンマリエ、実績重視でパートナーエージェント</span></li>
              </ul>
            </div>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
            <h3 className="font-bold text-yellow-800 mb-2">35歳の壁について</h3>
            <p className="text-sm text-yellow-800">
              結婚相談所では「35歳」が一つの境界線とされることがあります。特に女性は、多くの男性が検索条件を「〜34歳」「〜35歳」に設定するため、35歳を超えると検索にヒットする機会が減ります。この「35歳の壁」を意識して、30代前半のうちに行動を始めることが成功への近道です。ただし、35歳以降でも成婚している方は大勢います。年齢だけが全てではありません。
            </p>
          </div>
        </section>

        {/* Section 3: おすすめ4社 */}
        <section id="recommended" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">30代におすすめの結婚相談所4選</h2>

          {[
            {
              name: "IBJメンバーズ",
              badge: "成婚率No.1",
              badgeColor: "#c45b84",
              desc: "成婚率50.4%と業界トップクラスの実績を持つIBJ直営の結婚相談所。30代は会員のボリュームゾーンであり、同年代の真剣な出会いが豊富です。少人数担当制の専任カウンセラーが、プロフィール作成からお見合いのフィードバック、交際中のアドバイスまで一貫サポート。費用は高めですが、1年以内の成婚を目指すならコスパは実は良いです。",
              forWhom: "30代前半〜後半の方で、成婚率を重視する方、1年以内に結果を出したい方",
              initial: "181,500円", monthly: "17,050円", seikon: "220,000円", yearly: "約606,100円",
            },
            {
              name: "ゼクシィ縁結びエージェント",
              badge: "満足度No.1",
              badgeColor: "#c9a76c",
              desc: "オリコン顧客満足度8年連続No.1。お見合い料・成婚料が無料でコスパが良く、30代前半の方に特におすすめです。リクルートが運営する信頼感があり、AIマッチングと専任コーディネーターのハイブリッド型で効率的にお相手を見つけられます。全国27店舗＋オンライン対応。",
              forWhom: "30代前半で費用を抑えたい方、コスパと品質のバランスを重視する方",
              initial: "33,000円", monthly: "17,600円", seikon: "無料", yearly: "約244,200円",
            },
            {
              name: "サンマリエ",
              badge: "サポート充実",
              badgeColor: "#9b8ec4",
              desc: "創業40年以上の老舗で、専任仲人によるオーダーメイドサポートが最大の特徴。婚活セミナーやファッション・メイクレッスンも充実しており、自分磨きをしながら婚活を進められます。30代後半で「プロのサポートが必要」と感じる方に最適。IBJネットワーク加盟で会員数も充分。",
              forWhom: "30代後半で手厚いサポートを求める方、自分磨きも含めて婚活したい方",
              initial: "187,000円", monthly: "17,600円", seikon: "220,000円", yearly: "約618,200円",
            },
            {
              name: "パートナーエージェント",
              badge: "PDCA婚活",
              badgeColor: "#5b8a6b",
              desc: "独自のPDCAサイクルメソッドで婚活を「科学的に」進めるのが特徴。専任コンシェルジュが定期的に活動を振り返り、改善点を明確にしてくれます。成婚料は55,000円と仲人型としては安め。30代後半で効率的に婚活を進めたい方に向いています。",
              forWhom: "30代後半で論理的に婚活を進めたい方、PDCAで改善しながら活動したい方",
              initial: "137,500円", monthly: "18,700円", seikon: "55,000円", yearly: "約416,900円",
            },
          ].map((company, i) => (
            <div key={i} className="bg-white border-2 rounded-2xl p-6 md:p-8 mb-6" style={{ borderColor: company.badgeColor }}>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 text-white text-xs font-bold rounded-full" style={{ backgroundColor: company.badgeColor }}>{company.badge}</span>
                <h3 className="text-xl font-bold">{company.name}</h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">{company.desc}</p>
              <p className="text-sm text-gray-600 mb-4"><strong>こんな30代におすすめ：</strong>{company.forWhom}</p>
              <div className="bg-gray-50 rounded-xl p-4 text-sm">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div><span className="text-gray-500">入会金</span><br /><strong>{company.initial}</strong></div>
                  <div><span className="text-gray-500">月会費</span><br /><strong>{company.monthly}</strong></div>
                  <div><span className="text-gray-500">成婚料</span><br /><strong>{company.seikon}</strong></div>
                  <div><span className="text-gray-500">年間総額</span><br /><strong className="text-[#c45b84]">{company.yearly}</strong></div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Section 4: スケジュール */}
        <section id="schedule" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">30代の効率的な婚活スケジュール</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            30代は「効率」がキーワードです。以下のスケジュールを目安に、短期集中で婚活を進めましょう。
          </p>
          <div className="space-y-4">
            {[
              { period: "入会前", title: "情報収集・無料相談（2〜3週間）", detail: "3社以上の無料カウンセリングを受け、自分に合った相談所を見極めます。料金・サポート内容・会員層を比較検討。この段階で婚活の方向性を明確にしましょう。" },
              { period: "1ヶ月目", title: "プロフィール作成・活動準備", detail: "プロフィール写真の撮影、自己PR文の作成、希望条件の設定を行います。カウンセラーと相談しながら、魅力的なプロフィールを完成させましょう。第一印象を左右する重要なステップです。" },
              { period: "2〜4ヶ月目", title: "お見合い集中期間", detail: "月に4〜6回のお見合いを目標に、積極的に活動します。最初の3ヶ月は「新規会員」として注目されやすいゴールデン期間。幅広い条件でお見合いを組み、多くの方と会いましょう。" },
              { period: "4〜6ヶ月目", title: "仮交際・相手の絞り込み", detail: "仮交際に進んだ相手とデートを重ね、結婚相手としてふさわしいか見極めます。複数人と同時に仮交際することも可能です。この時期にカウンセラーに相談しながら候補を絞りましょう。" },
              { period: "6〜9ヶ月目", title: "真剣交際", detail: "1人に絞って真剣交際に進みます。結婚後の生活について具体的な話し合いを行い、お互いの価値観や将来のビジョンを確認。両家顔合わせの準備も始めます。" },
              { period: "9〜12ヶ月目", title: "プロポーズ・成婚退会", detail: "プロポーズ→成婚退会。カウンセラーがプロポーズのタイミングや方法もアドバイスしてくれます。成婚退会後は結婚準備へ進みましょう。" },
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-4 bg-white border border-[#f0dde3] rounded-2xl p-5">
                <div className="shrink-0 text-center">
                  <div className="w-14 h-14 bg-[#c45b84] rounded-xl flex items-center justify-center text-white font-bold text-xs leading-tight">{step.period}</div>
                </div>
                <div>
                  <h3 className="font-bold mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: 成功のコツ */}
        <section id="success-tips" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">30代の婚活成功のコツ</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "条件の優先順位を明確にする", desc: "30代は「あれもこれも」と条件を求めがちです。年収・年齢・学歴・性格・趣味など、どれが本当に大切なのか優先順位を付けましょう。譲れない条件は3つまでに絞るのがおすすめです。", color: "#c45b84" },
              { title: "お見合いの回数を意識する", desc: "30代前半なら月4〜6回、後半なら月6〜8回のお見合いを目標にしましょう。数をこなすことで自分の好みが明確になり、理想のパートナー像がクリアになっていきます。", color: "#c9a76c" },
              { title: "仮交際を恐れない", desc: "「なんとなく良いかも」と思ったら仮交際に進みましょう。仮交際は複数人と同時進行OKのフェーズなので、この段階で深く悩みすぎる必要はありません。デートを重ねて判断すれば大丈夫です。", color: "#9b8ec4" },
              { title: "カウンセラーを味方につける", desc: "30代は仕事との両立で忙しいからこそ、カウンセラーの力を最大限に活用しましょう。お見合い後のフィードバックを必ず確認し、改善点を次に活かすPDCAサイクルが成功のカギです。", color: "#5b8a6b" },
              { title: "自分磨きも並行する", desc: "ファッション・髪型・体型管理・コミュニケーションなど、自分の魅力を高める努力も大切です。サンマリエのセミナーやレッスンを活用するのも一つの手です。内面と外面の両方を磨きましょう。", color: "#4c6e8a" },
              { title: "期限を決めて活動する", desc: "「1年以内に成婚退会」など具体的な期限を設定しましょう。期限があることで活動にメリハリが生まれ、だらだらと活動を続けるリスクを防げます。カウンセラーにも期限を伝えておくと効果的です。", color: "#8a4c6e" },
            ].map((tip, i) => (
              <div key={i} className="bg-white border border-[#f0dde3] rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-2" style={{ color: tip.color }}>{tip.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{tip.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section: 30代の婚活失敗パターン */}
        <section id="failures" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">
            30代が陥りやすい婚活の失敗パターン
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            30代の婚活でよくある失敗パターンを知っておくことで、同じ轍を踏まずに済みます。以下のパターンに当てはまっていないか確認してみましょう。
          </p>
          <div className="space-y-4">
            {[
              {
                pattern: "「まだ大丈夫」と先延ばしにする",
                detail:
                  "30代前半は「まだ余裕がある」と感じやすく、婚活を後回しにしがちです。しかし、35歳を過ぎると状況は急激に変わります。特に女性は、男性の検索条件で「〜34歳」に設定されるケースが多く、1歳の差が大きな影響を持ちます。今日が最も若い日です。思い立ったら即行動しましょう。",
                solution: "「来月から」ではなく「今週中に無料カウンセリングを予約する」と具体的な期限を設けましょう。",
              },
              {
                pattern: "条件を盛りすぎて出会いがない",
                detail:
                  "30代になると自分の理想がはっきりしてくる反面、「年収700万以上・身長175cm以上・大卒・長男以外・〇〇勤務」など条件を積み上げすぎるケースがあります。条件に完全一致する人は極めて少なく、結果的にお見合いが成立しません。",
                solution: "譲れない条件は3つまでに絞り、それ以外は「会ってみてから判断」のスタンスで。意外な出会いが最高のパートナーになることは珍しくありません。",
              },
              {
                pattern: "仕事を言い訳に活動を怠る",
                detail:
                  "30代はキャリアの重要な時期でもあり、「今は仕事が忙しいから」と婚活を後回しにしがちです。しかし、仕事は60代まで続きますが、婚活には適齢期があります。",
                solution: "週末のどちらかを婚活に充てるルールを作りましょう。仕事と婚活は両立できます。カウンセラーにスケジュール調整を相談するのも手です。",
              },
              {
                pattern: "1人に執着しすぎる",
                detail:
                  "仮交際で「この人しかいない」と決め打ちしてしまい、他のお見合いを断ってしまうパターン。結果的にその1人とうまくいかなかった場合、振り出しに戻ってしまいます。",
                solution: "仮交際中は2〜3人と同時進行するのが基本ルール。比較することで相手の良さもより明確に見えてきます。",
              },
              {
                pattern: "カウンセラーのアドバイスを無視する",
                detail:
                  "「自分のことは自分が一番わかっている」と思いがちですが、婚活においてはプロの視点が重要です。カウンセラーのアドバイスを無視して自己流で進めると、非効率な活動になりがちです。",
                solution: "カウンセラーは何百人もの成婚を見てきたプロ。素直にアドバイスを聞き入れることが成婚への最短ルートです。",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white border border-[#f0dde3] rounded-2xl p-6"
              >
                <h3 className="font-bold text-[#c45b84] mb-2">
                  失敗パターン{i + 1}：{item.pattern}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-2">
                  {item.detail}
                </p>
                <div className="bg-green-50 rounded-lg p-3">
                  <p className="text-xs text-green-700">
                    <strong>対策：</strong>
                    {item.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: 30代の婚活データ */}
        <section id="data" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">
            30代の婚活にまつわるデータ
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white border border-[#f0dde3] rounded-2xl p-6">
              <h3 className="font-bold mb-3 text-[#c45b84]">
                30代のお見合い成立率
              </h3>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between items-center">
                  <span>30代前半女性</span>
                  <div className="flex items-center gap-2">
                    <div className="w-32 h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#c45b84] rounded-full"
                        style={{ width: "75%" }}
                      />
                    </div>
                    <span className="font-bold">約75%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>30代後半女性</span>
                  <div className="flex items-center gap-2">
                    <div className="w-32 h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#c9a76c] rounded-full"
                        style={{ width: "50%" }}
                      />
                    </div>
                    <span className="font-bold">約50%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>30代前半男性</span>
                  <div className="flex items-center gap-2">
                    <div className="w-32 h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#9b8ec4] rounded-full"
                        style={{ width: "60%" }}
                      />
                    </div>
                    <span className="font-bold">約60%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>30代後半男性</span>
                  <div className="flex items-center gap-2">
                    <div className="w-32 h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#5b8a6b] rounded-full"
                        style={{ width: "55%" }}
                      />
                    </div>
                    <span className="font-bold">約55%</span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                ※お見合い申し込みに対するOK率の目安。年収・容姿・プロフィールの質によって大きく変動します。
              </p>
            </div>
            <div className="bg-white border border-[#f0dde3] rounded-2xl p-6">
              <h3 className="font-bold mb-3 text-[#c9a76c]">
                30代の成婚までに必要なお見合い回数
              </h3>
              <div className="space-y-3 text-sm text-gray-700">
                <div>
                  <p className="font-bold">30代前半</p>
                  <p>
                    平均お見合い回数：<strong className="text-[#c45b84]">8〜15回</strong>
                  </p>
                  <p className="text-xs text-gray-500">
                    比較的少ない回数で成婚に至るケースが多い
                  </p>
                </div>
                <div>
                  <p className="font-bold">30代後半</p>
                  <p>
                    平均お見合い回数：<strong className="text-[#c45b84]">15〜25回</strong>
                  </p>
                  <p className="text-xs text-gray-500">
                    より多くの出会いが必要になる傾向。月4回以上のペースが理想
                  </p>
                </div>
              </div>
              <div className="mt-4 bg-[#fdf8fa] rounded-lg p-3 text-xs text-gray-600">
                お見合い回数が多い＝ダメということではありません。多くの人と会うことで自分の好みが明確になり、理想のパートナーを見極める力がつきます。
              </div>
            </div>
          </div>
        </section>

        {/* Section: 30代の体験談 */}
        <section id="stories" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">
            30代で成婚した方の体験談
          </h2>
          <div className="space-y-4">
            {[
              {
                text: "33歳でIBJメンバーズに入会しました。最初は月2回のお見合いペースでしたが、カウンセラーに「ゴールデン期間を逃すな」と言われ、月6回に増やしました。結果、入会4ヶ月目で今の夫と出会い、8ヶ月で成婚退会。成婚料22万円は高かったですが、結婚できたことを考えれば安い投資でした。",
                age: "33歳・女性",
                company: "IBJメンバーズ利用",
              },
              {
                text: "37歳でゼクシィに入会。「35歳の壁」を超えていたので不安でしたが、成婚料なし・お見合い料なしのシンプルな料金で始めやすかったです。AIマッチングで自分では選ばなかったタイプの女性を紹介され、意外にも意気投合。10ヶ月で成婚退会できました。",
                age: "37歳・男性",
                company: "ゼクシィ利用",
              },
              {
                text: "35歳目前で焦ってサンマリエに入会。仲人さんが「焦りは禁物。でも行動は素早く」と的確にアドバイスしてくれました。メイクレッスンで印象が変わったのか、お見合い成立率が上がりました。11ヶ月で成婚退会。自分磨きと婚活を同時にできたのがサンマリエの良いところです。",
                age: "35歳・女性",
                company: "サンマリエ利用",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white border border-[#f0dde3] rounded-2xl p-6"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                    {item.company}
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

        {/* Section: 4社の詳細比較表 */}
        <section id="detail-comparison" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">
            おすすめ4社の詳細比較表
          </h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#c45b84] text-white">
                  <th className="p-3 text-left font-bold rounded-tl-lg">
                    比較項目
                  </th>
                  <th className="p-3 text-center font-bold">IBJメンバーズ</th>
                  <th className="p-3 text-center font-bold">ゼクシィ</th>
                  <th className="p-3 text-center font-bold">サンマリエ</th>
                  <th className="p-3 text-center font-bold rounded-tr-lg">
                    パートナーAG
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["タイプ", "仲人型", "ハイブリッド型", "仲人型", "仲人型"],
                  [
                    "入会金",
                    "181,500円",
                    "33,000円",
                    "187,000円",
                    "137,500円",
                  ],
                  [
                    "月会費",
                    "17,050円",
                    "17,600円",
                    "17,600円",
                    "18,700円",
                  ],
                  [
                    "成婚料",
                    "220,000円",
                    "無料",
                    "220,000円",
                    "55,000円",
                  ],
                  [
                    "年間総額",
                    "約606,100円",
                    "約244,200円",
                    "約618,200円",
                    "約416,900円",
                  ],
                  [
                    "成婚率",
                    "50.4%",
                    "26.2%",
                    "非公開",
                    "27.0%",
                  ],
                  [
                    "会員数",
                    "約8.7万人",
                    "約3.2万人",
                    "約8.7万人",
                    "約9.4万人",
                  ],
                  [
                    "30代前半おすすめ度",
                    "★★★★★",
                    "★★★★★",
                    "★★★★☆",
                    "★★★★☆",
                  ],
                  [
                    "30代後半おすすめ度",
                    "★★★★☆",
                    "★★★☆☆",
                    "★★★★★",
                    "★★★★★",
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
                    <td className="p-3 text-center">{row[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">30代の結婚相談所に関するよくある質問</h2>
          <div className="space-y-3">
            {[
              { q: "30代で結婚相談所に入会するのは遅いですか？", a: "まったく遅くありません。結婚相談所の中心層は30代で、最も会員数が多い年代です。30代は仕事も安定し、結婚への具体的なビジョンを持っている方が多いため、成婚率も高い傾向にあります。むしろ30代は結婚相談所の「適齢期」と言えます。" },
              { q: "30代前半と後半では婚活の状況は違いますか？", a: "はい、特に女性は35歳前後で状況が変わります。30代前半は人気が高く選びやすい立場ですが、35歳を超えるとお見合い申し込み数が減少する傾向があります。男性は30代全体を通じて安定した人気がありますが、後半になると年収などの条件面での評価がより重要になります。" },
              { q: "30代の結婚相談所の費用相場はどのくらいですか？", a: "年間25万〜60万円が目安です。ゼクシィなら約24万円、IBJメンバーズなら約60万円です。30代は最も成婚しやすい年代のため、短期間で成果が出れば実質的なコストを抑えられます。" },
              { q: "30代で成婚するまでの平均期間はどのくらいですか？", a: "30代の平均活動期間は約8〜12ヶ月です。30代前半は6〜10ヶ月、30代後半は10〜14ヶ月程度が目安です。積極的にお見合いを組んで短期集中で活動すれば、6ヶ月以内の成婚も十分可能です。" },
              { q: "30代のうちに結婚したいのですが、いつまでに入会すべきですか？", a: "成婚までの平均期間が約1年と考えると、30代のうちに結婚したいなら38歳までには入会したいところです。ただし、早ければ早いほど有利なので、思い立ったときが始めどきです。特に30代後半の方は1日でも早い行動をおすすめします。" },
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

        {/* Section: 30代向けの相談所選びのポイント */}
        <section id="selection-tips" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">
            30代が相談所を選ぶ際の重要ポイント
          </h2>
          <div className="space-y-3">
            {[
              {
                title: "同年代の会員が多い相談所を選ぶ",
                detail: "30代の会員比率が高い相談所を選びましょう。同年代の会員が多いほど、価値観が合う相手と出会いやすくなります。無料カウンセリングで「30代の会員は何%ですか？」と質問してみてください。",
              },
              {
                title: "カウンセラーとの相性を重視する",
                detail: "30代は仕事との両立で忙しいため、自分のペースを理解してくれるカウンセラーが重要です。押しが強すぎるカウンセラーや、逆に放任主義のカウンセラーは避け、「伴走型」のカウンセラーを選びましょう。",
              },
              {
                title: "成婚率と活動期間のデータを確認する",
                detail: "全体の成婚率だけでなく「30代の成婚率」「30代の平均活動期間」を聞きましょう。自分と近い条件のデータほど参考になります。",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-[#f0dde3] rounded-2xl p-5 flex items-start gap-4">
                <div className="w-8 h-8 bg-[#c45b84] rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">{i + 1}</div>
                <div><h3 className="font-bold mb-1">{item.title}</h3><p className="text-sm text-gray-600">{item.detail}</p></div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-gradient-to-r from-[#fdf2f6] to-[#faf5ee] rounded-2xl p-8 md:p-12 mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-4">30代のうちに、最高のパートナーを見つけよう</h2>
          <p className="text-gray-600 mb-6 max-w-lg mx-auto text-sm">30代は結婚相談所で最も有利な年代。今すぐ始めて、効率的に理想の相手を見つけましょう。</p>
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
            <Link href="/articles/age-40s/" className="block bg-white border border-[#f0dde3] rounded-2xl p-5 hover:bg-[#fdf8fa] transition-colors">
              <p className="font-bold text-sm mb-1">40代におすすめの結婚相談所</p>
              <p className="text-xs text-gray-500">40代からの婚活成功のコツ</p>
            </Link>
            <Link href="/articles/success-rate/" className="block bg-white border border-[#f0dde3] rounded-2xl p-5 hover:bg-[#fdf8fa] transition-colors">
              <p className="font-bold text-sm mb-1">成婚率を徹底比較</p>
              <p className="text-xs text-gray-500">本当に結婚できるの？</p>
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
