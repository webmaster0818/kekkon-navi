import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "お見合いのマナー・服装・会話｜好印象を残す完全ガイド",
  description:
    "お見合いのマナーを完全解説。男女別の服装、待ち合わせのコツ、会話のネタ、NG行動、お見合い後の返事、仮交際への進め方まで。好印象を残して成功率を上げるための実践ガイドです。",
  keywords: "お見合い マナー, お見合い 服装, お見合い 会話, お見合い 成功",
  alternates: { canonical: "https://kekkon-navi.pages.dev/articles/omiai-manners/" },
  openGraph: {
    title: "お見合いのマナー・服装・会話｜好印象を残す完全ガイド",
    description: "お見合いのマナーを完全解説。服装・会話・NG行動・仮交際への進め方。",
    url: "https://kekkon-navi.pages.dev/articles/omiai-manners/",
    type: "article",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "お見合いのマナー・服装・会話｜好印象を残す完全ガイド",
      datePublished: "2026-04-15", dateModified: "2026-04-15",
      author: { "@type": "Organization", name: "結婚相談所比較ナビ", url: "https://kekkon-navi.pages.dev" },
      publisher: { "@type": "Organization", name: "結婚相談所比較ナビ", url: "https://kekkon-navi.pages.dev" },
      description: "お見合いのマナーを完全解説。",
      mainEntityOfPage: "https://kekkon-navi.pages.dev/articles/omiai-manners/",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "お見合いの時間はどのくらいですか？", acceptedAnswer: { "@type": "Answer", text: "一般的に1時間程度です。盛り上がっても1時間半を超えないのがマナー。短すぎる（30分未満）のも失礼にあたります。話が尽きてしまった場合でも、1時間は頑張りましょう。" } },
        { "@type": "Question", name: "お見合いの服装で気をつけることは？", acceptedAnswer: { "@type": "Answer", text: "男性はスーツまたはジャケット＋パンツの清潔感のあるスタイル、女性はワンピースやブラウス＋スカートなど上品なスタイルがおすすめです。カジュアルすぎる服装（デニム、Tシャツ、スニーカー）は避けましょう。" } },
        { "@type": "Question", name: "お見合いで話すべき話題は？", acceptedAnswer: { "@type": "Answer", text: "趣味・休日の過ごし方・好きな食べ物・旅行先・仕事のやりがいなど、明るく前向きな話題がおすすめです。相手のプロフィールに書かれていることに触れると「しっかり読んでくれた」と好印象です。" } },
        { "@type": "Question", name: "お見合い後の返事はいつまでにすべきですか？", acceptedAnswer: { "@type": "Answer", text: "お見合い当日中〜翌日中に相談所を通じて返事をするのがマナーです。返事が遅いと相手を不安にさせるだけでなく、他の方とのお見合いスケジュールにも影響します。" } },
        { "@type": "Question", name: "お見合いで緊張しないコツはありますか？", acceptedAnswer: { "@type": "Answer", text: "事前に話す話題を5つほど準備しておく、深呼吸で気持ちを落ち着かせる、「相手も緊張している」と考える、完璧を目指さず自然体でいることが大切です。回数を重ねるうちに慣れてきます。" } },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "ホーム", item: "https://kekkon-navi.pages.dev" },
        { "@type": "ListItem", position: 2, name: "コラム", item: "https://kekkon-navi.pages.dev/articles" },
        { "@type": "ListItem", position: 3, name: "お見合いのマナー完全ガイド", item: "https://kekkon-navi.pages.dev/articles/omiai-manners/" },
      ],
    },
  ],
};

const breadcrumbItems = [
  { label: "コラム", href: "/articles" },
  { label: "お見合いのマナー完全ガイド" },
];

export default function OmiaiMannersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Breadcrumb items={breadcrumbItems} />

      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="text-center py-10">
          <div className="inline-block px-4 py-1 rounded-full text-xs font-bold bg-[#fdf2f6] text-[#c45b84] mb-4">お見合いガイド</div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
            お見合いのマナー・服装・会話
            <br />
            <span className="text-[#c45b84]">好印象を残す完全ガイド</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            お見合いは第一印象が全てを左右します。服装、待ち合わせ、会話、お見合い後の返事まで、好印象を残すためのマナーを完全網羅。これを読めば、自信を持ってお見合いに臨めます。
          </p>
          <time dateTime="2026-04-15" className="text-xs text-gray-400 mt-4 block">2026年4月15日更新</time>
        </header>

        <nav className="bg-[#fdf8fa] border border-[#f0dde3] rounded-2xl p-6 mb-10">
          <h2 className="text-lg font-bold mb-3 text-[#c45b84]">この記事の目次</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#clothes" className="text-[#c45b84] hover:underline">1. 服装のマナー（男女別）</a></li>
            <li><a href="#meeting" className="text-[#c45b84] hover:underline">2. 待ち合わせのマナー</a></li>
            <li><a href="#conversation" className="text-[#c45b84] hover:underline">3. 会話のコツ</a></li>
            <li><a href="#ng" className="text-[#c45b84] hover:underline">4. NG行動リスト</a></li>
            <li><a href="#after" className="text-[#c45b84] hover:underline">5. お見合い後の返事</a></li>
            <li><a href="#karikosat" className="text-[#c45b84] hover:underline">6. 仮交際への進め方</a></li>
            <li><a href="#faq" className="text-[#c45b84] hover:underline">7. よくある質問</a></li>
          </ol>
        </nav>

        {/* Section 1: 服装 */}
        <section id="clothes" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">服装のマナー（男女別）</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-[#c9a76c] rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-4 text-[#c9a76c]">男性の服装</h3>
              <div className="space-y-3">
                <div className="bg-green-50 rounded-xl p-4">
                  <p className="font-bold text-sm text-green-700 mb-2">おすすめスタイル</p>
                  <ul className="text-xs text-green-700 space-y-1">
                    <li>・ネイビーやグレーのスーツ</li>
                    <li>・清潔感のある白シャツ</li>
                    <li>・ジャケット＋チノパンでもOK</li>
                    <li>・磨かれた革靴</li>
                    <li>・シンプルな腕時計</li>
                  </ul>
                </div>
                <div className="bg-red-50 rounded-xl p-4">
                  <p className="font-bold text-sm text-red-700 mb-2">NGスタイル</p>
                  <ul className="text-xs text-red-700 space-y-1">
                    <li>・デニム・Tシャツ・スニーカー</li>
                    <li>・ブランドロゴが目立つ服</li>
                    <li>・シワのあるシャツ</li>
                    <li>・汚れた靴</li>
                    <li>・派手なアクセサリー</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 text-xs text-gray-700">
                  <strong>身だしなみチェック：</strong>髪は整えてあるか、爪は短いか、鼻毛は出ていないか、歯は磨いてあるか、口臭対策はOKか、香水はほのかに香る程度か
                </div>
              </div>
            </div>
            <div className="bg-white border-2 border-[#c45b84] rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-4 text-[#c45b84]">女性の服装</h3>
              <div className="space-y-3">
                <div className="bg-green-50 rounded-xl p-4">
                  <p className="font-bold text-sm text-green-700 mb-2">おすすめスタイル</p>
                  <ul className="text-xs text-green-700 space-y-1">
                    <li>・清楚なワンピース</li>
                    <li>・ブラウス＋スカート</li>
                    <li>・パステルカラーや明るい色合い</li>
                    <li>・ヒール3〜5cmのパンプス</li>
                    <li>・上品なアクセサリー（シンプル）</li>
                  </ul>
                </div>
                <div className="bg-red-50 rounded-xl p-4">
                  <p className="font-bold text-sm text-red-700 mb-2">NGスタイル</p>
                  <ul className="text-xs text-red-700 space-y-1">
                    <li>・露出が多い服（胸元・肩出し）</li>
                    <li>・カジュアルすぎる服</li>
                    <li>・全身ブランド物</li>
                    <li>・派手すぎるネイル</li>
                    <li>・濃いメイク</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 text-xs text-gray-700">
                  <strong>メイクのポイント：</strong>ナチュラルメイクが基本。つけまつげ・カラコンは避ける。リップはピンク系が万人受け。ヘアスタイルはダウンスタイルかハーフアップが好印象。
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: 待ち合わせ */}
        <section id="meeting" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">待ち合わせのマナー</h2>
          <div className="space-y-4">
            {[
              { title: "男性は10分前に到着する", detail: "お見合い場所（ホテルのラウンジなど）に10分前に到着し、席を確保しておきましょう。女性を待たせるのは絶対にNG。早く着いて落ち着いてから迎えるのがスマートです。" },
              { title: "笑顔で挨拶する", detail: "第一声は「初めまして、○○です。今日はお時間いただきありがとうございます」と笑顔で。第一印象は最初の7秒で決まると言われています。" },
              { title: "席への誘導は男性がリードする", detail: "「こちらの席でよろしいですか？」と声をかけ、女性を先に座ってもらいましょう。自分は奥側の席ではなく、手前の席に座るのがマナーです。" },
              { title: "ドリンクのオーダーは男性から声をかける", detail: "「何かお飲みになりますか？」と聞き、女性が先にオーダーしてから自分のドリンクを注文しましょう。ここでのスマートな振る舞いが好印象につながります。" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-white border border-[#f0dde3] rounded-2xl p-5">
                <div className="w-8 h-8 bg-[#c45b84] rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">{i + 1}</div>
                <div><h3 className="font-bold mb-1">{item.title}</h3><p className="text-sm text-gray-600">{item.detail}</p></div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: 会話 */}
        <section id="conversation" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">会話のコツ</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white border border-[#f0dde3] rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-3 text-[#c45b84]">鉄板の話題</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">○</span><span>趣味・ハマっていること</span></li>
                <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">○</span><span>休日の過ごし方</span></li>
                <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">○</span><span>好きな食べ物・おすすめのレストラン</span></li>
                <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">○</span><span>旅行先・行ってみたい場所</span></li>
                <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">○</span><span>ペットの話（相手が飼っている場合）</span></li>
                <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">○</span><span>最近観た映画やドラマ</span></li>
                <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">○</span><span>仕事のやりがい（自慢にならない程度に）</span></li>
              </ul>
            </div>
            <div className="bg-white border border-[#f0dde3] rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-3 text-red-500">避けるべき話題</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">×</span><span>年収・貯金額の詳細</span></li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">×</span><span>過去の恋愛・元カレ/元カノの話</span></li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">×</span><span>政治・宗教・思想の話</span></li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">×</span><span>容姿に関するコメント</span></li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">×</span><span>他のお見合い相手の話</span></li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">×</span><span>愚痴・ネガティブな話題</span></li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">×</span><span>結婚後の家事分担など踏み込んだ話（初回は避ける）</span></li>
              </ul>
            </div>
          </div>

          <div className="bg-[#fdf8fa] border border-[#f0dde3] rounded-2xl p-6">
            <h3 className="font-bold mb-3">会話上手になるための5つのテクニック</h3>
            <div className="space-y-3">
              {[
                { title: "相づちのバリエーションを持つ", desc: "「そうなんですね」「へえ、すごい」「わかります」「それは楽しそう」など、様々な相づちで相手の話に反応しましょう。" },
                { title: "オウム返し＋質問で会話を広げる", desc: "「旅行が好きなんですね。最近はどこに行かれましたか？」のように、相手の発言を拾って質問につなげると会話が自然に広がります。" },
                { title: "共通点を見つけて盛り上がる", desc: "好きな食べ物、趣味、出身地など、共通点が見つかったら「私も！」と盛り上がりましょう。共通点があると親近感が生まれます。" },
                { title: "沈黙を恐れない", desc: "少しの沈黙は問題ありません。焦って話し続けるより、一呼吸置いて「そういえば…」と次の話題に自然に移りましょう。" },
                { title: "笑顔を忘れない", desc: "楽しそうに話を聞くだけで好印象です。無理に面白い話をしなくても、笑顔で相手の話を聞くことが最大の武器です。" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-[#c9a76c] font-bold mt-0.5">{i + 1}.</span>
                  <div><strong className="text-sm">{item.title}</strong><p className="text-xs text-gray-600 mt-0.5">{item.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: NG */}
        <section id="ng" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">NG行動リスト</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "スマホを見る", desc: "お見合い中にスマホを確認するのは失礼。電源を切るかマナーモードにして鞄にしまいましょう。" },
              { title: "遅刻する", desc: "お見合いの遅刻は論外。交通機関の遅延に備えて余裕を持って出発しましょう。" },
              { title: "一方的に話し続ける", desc: "自分の話ばかりするのはNG。話す：聞く＝3：7くらいを意識しましょう。" },
              { title: "上から目線で話す", desc: "「教えてあげよう」「それは違う」など、上から目線の発言は即アウトです。" },
              { title: "割り勘を提案する（男性）", desc: "お見合い時のドリンク代は男性がスマートに支払うのがマナーです。" },
              { title: "写真と違いすぎる", desc: "プロフィール写真と実物のギャップが大きいと信頼を失います。写真は加工しすぎず、清潔感重視で。" },
              { title: "延長しすぎる", desc: "盛り上がっても1時間〜1時間半で切り上げましょう。長居すると「もう少し話したい」という余韻が残せません。" },
              { title: "個人情報を聞きすぎる", desc: "住所の詳細、年収の具体額、家族構成の深堀りは初回では避けましょう。" },
            ].map((item, i) => (
              <div key={i} className="bg-red-50 border border-red-200 rounded-2xl p-4">
                <h3 className="font-bold text-red-700 text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-red-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: お見合い後 */}
        <section id="after" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">お見合い後の返事</h2>
          <div className="space-y-4">
            <div className="bg-white border border-[#f0dde3] rounded-2xl p-6">
              <h3 className="font-bold mb-2">返事のタイミング</h3>
              <p className="text-sm text-gray-700">お見合い当日中〜翌日中に、相談所を通じて「交際希望」か「お断り」の返事をしましょう。返事が遅いと相手を不安にさせ、自分の印象も下がります。迷っている場合は、「少し考えたい」とカウンセラーに伝えてOKです。</p>
            </div>
            <div className="bg-white border border-[#f0dde3] rounded-2xl p-6">
              <h3 className="font-bold mb-2">「もう一度会いたい」と思ったら</h3>
              <p className="text-sm text-gray-700">カウンセラーに「交際希望」と伝えましょう。お互いが交際を希望すれば、仮交際成立です。100点満点の相手でなくても、「もう一度会ってみたい」と思えたら前向きに返事をしましょう。</p>
            </div>
            <div className="bg-white border border-[#f0dde3] rounded-2xl p-6">
              <h3 className="font-bold mb-2">お断りする場合</h3>
              <p className="text-sm text-gray-700">直接相手にお断りの連絡をする必要はなく、相談所を通じて伝えてもらえます。お断りの理由は正直に伝えましょう。カウンセラーが相手に丁寧に伝えてくれます。</p>
            </div>
          </div>
        </section>

        {/* Section 6: 仮交際 */}
        <section id="karikosat" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">仮交際への進め方</h2>
          <div className="space-y-4">
            {[
              { title: "最初のデートは1週間以内に設定する", detail: "仮交際成立後、なるべく早く（できれば1週間以内に）最初のデートを設定しましょう。時間が空くとお互いの温度が下がってしまいます。" },
              { title: "デートプランは男性がリードする", detail: "ランチやカフェなど、カジュアルなデートからスタート。映画やテーマパークなど「会話ができない」デートは初期は避けましょう。" },
              { title: "連絡頻度は相手に合わせる", detail: "毎日LINEする必要はありません。相手のペースに合わせて、1〜2日に1回程度のやり取りが適度です。既読スルーをしない配慮も大切。" },
              { title: "3〜5回のデートで判断する", detail: "仮交際は3〜5回のデートで真剣交際に進むか判断するのが一般的。長引かせると相手にも自分にも良くありません。迷ったらカウンセラーに相談しましょう。" },
              { title: "カウンセラーに定期的に報告する", detail: "デート後はカウンセラーに感想を伝えましょう。相手のカウンセラーからのフィードバックももらえるため、相手の気持ちを知る貴重な情報源になります。" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-white border border-[#f0dde3] rounded-2xl p-5">
                <div className="w-8 h-8 bg-[#c9a76c] rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">{i + 1}</div>
                <div><h3 className="font-bold mb-1">{item.title}</h3><p className="text-sm text-gray-600">{item.detail}</p></div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: お見合い場所ガイド */}
        <section id="venue" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">
            お見合い場所の選び方
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            お見合いの場所は第一印象に大きく影響します。相手に好印象を与えられる場所選びのポイントを解説します。
          </p>
          <div className="space-y-4">
            {[
              {
                place: "ホテルのラウンジ（最もおすすめ）",
                merit: "上品な雰囲気、席の間隔が広くプライバシーが確保、ドリンクの質が高い",
                demerit: "ドリンク代がやや高い（1人1,000〜2,000円）、予約が必要な場合がある",
                tips: "予約なしでも入れるラウンジを事前に調べておきましょう。混雑する土日は早めに到着して席を確保。帝国ホテル、ハイアット、リッツカールトンなどの名門ホテルは雰囲気も格別です。",
              },
              {
                place: "カフェ・喫茶店",
                merit: "気軽な雰囲気、ドリンク代が安い、店舗数が多い",
                demerit: "周囲の声が気になる場合がある、席が狭い場合がある",
                tips: "チェーン店より個人経営の落ち着いたカフェがおすすめ。隣の席と距離があり、静かな環境が理想です。スターバックスなどは混雑するため避けましょう。",
              },
              {
                place: "オンライン（ビデオ通話）",
                merit: "移動不要、時間の融通が効く、リラックスできる",
                demerit: "表情やしぐさが伝わりにくい、通信トラブルのリスク",
                tips: "背景は清潔感のある部屋が写るようにする。照明は顔が明るく見えるよう正面から当てる。イヤホンを使って相手の声が聞き取りやすい環境を整えましょう。",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white border border-[#f0dde3] rounded-2xl p-6"
              >
                <h3 className="font-bold text-lg mb-3 text-[#c45b84]">
                  {item.place}
                </h3>
                <div className="grid md:grid-cols-2 gap-3 mb-3">
                  <div className="bg-green-50 rounded-lg p-3">
                    <p className="font-bold text-xs text-green-700 mb-1">
                      メリット
                    </p>
                    <p className="text-xs text-green-700">{item.merit}</p>
                  </div>
                  <div className="bg-red-50 rounded-lg p-3">
                    <p className="font-bold text-xs text-red-700 mb-1">
                      デメリット
                    </p>
                    <p className="text-xs text-red-700">{item.demerit}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  <strong>ポイント：</strong>
                  {item.tips}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section: お見合い当日のタイムスケジュール */}
        <section id="schedule" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">
            お見合い当日のタイムスケジュール
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            お見合い当日の理想的な時間の使い方を紹介します。事前にスケジュールを把握しておくことで、余裕を持って臨めます。
          </p>
          <div className="space-y-3">
            {[
              {
                time: "30分前",
                action: "身だしなみの最終チェック",
                detail:
                  "鏡で服装・髪型・歯をチェック。口臭ケア（ミントタブレット等）も忘れずに。",
              },
              {
                time: "15分前",
                action: "お見合い場所に到着",
                detail:
                  "早めに到着して気持ちを落ち着かせます。トイレで最終チェックを。",
              },
              {
                time: "10分前",
                action: "席の確保（男性の場合）",
                detail:
                  "男性は先に席を確保。ドリンクメニューを確認しておくとスムーズです。",
              },
              {
                time: "開始",
                action: "笑顔で挨拶・自己紹介",
                detail:
                  "「初めまして、○○です。今日はお時間いただきありがとうございます」と笑顔で。",
              },
              {
                time: "〜15分",
                action: "軽い話題でアイスブレイク",
                detail:
                  "天気や場所の話など軽い話題から入り、緊張をほぐしましょう。",
              },
              {
                time: "15〜40分",
                action: "趣味・仕事・価値観の会話",
                detail:
                  "相手のプロフィールに触れながら、趣味や休日の過ごし方を聞きましょう。",
              },
              {
                time: "40〜55分",
                action: "結婚観・将来のビジョンの話",
                detail:
                  "初回は軽めに。「将来はどんな家庭を築きたいですか？」程度でOK。",
              },
              {
                time: "55〜60分",
                action: "締めの挨拶・お見開き",
                detail:
                  "「今日は楽しかったです。ありがとうございました」と爽やかに締めましょう。",
              },
              {
                time: "直後",
                action: "カウンセラーに連絡",
                detail:
                  "感想と交際希望・お断りの意思をカウンセラーに連絡。当日中がベストです。",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white border border-[#f0dde3] rounded-xl p-4"
              >
                <div className="w-14 shrink-0 text-center">
                  <span className="text-xs font-bold text-[#c45b84] bg-[#fdf2f6] px-2 py-1 rounded-full">
                    {item.time}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-sm">{item.action}</p>
                  <p className="text-xs text-gray-600">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: オンラインお見合いのマナー */}
        <section id="online-omiai" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">
            オンラインお見合いのマナー
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            最近はオンライン（ビデオ通話）でのお見合いも一般的になっています。対面とは異なる注意点を押さえておきましょう。
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-[#f0dde3] rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-3 text-[#c45b84]">
                環境の準備
              </h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#c45b84] font-bold mt-0.5">●</span>
                  <span>
                    背景は清潔感のある部屋が映るようにする（バーチャル背景はNG）
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c45b84] font-bold mt-0.5">●</span>
                  <span>
                    照明は顔が明るく見えるよう正面から当てる（リングライト推奨）
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c45b84] font-bold mt-0.5">●</span>
                  <span>
                    カメラは目線の高さに設定（下からのアングルは避ける）
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c45b84] font-bold mt-0.5">●</span>
                  <span>
                    Wi-Fi環境を確認し、通信が安定する場所で参加
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c45b84] font-bold mt-0.5">●</span>
                  <span>
                    イヤホン・ヘッドセットを使用して音声品質を確保
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-[#f0dde3] rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-3 text-[#c9a76c]">
                オンラインならではの注意点
              </h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] font-bold mt-0.5">●</span>
                  <span>
                    服装は対面と同じレベルで整える（上半身だけスーツはバレます）
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] font-bold mt-0.5">●</span>
                  <span>
                    カメラ目線を意識する（画面ではなくカメラを見る）
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] font-bold mt-0.5">●</span>
                  <span>
                    リアクションは対面より大きめにする（うなずき・笑顔を意識）
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] font-bold mt-0.5">●</span>
                  <span>
                    通信トラブルに備えて、事前に連絡先を交換しておく
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#c9a76c] font-bold mt-0.5">●</span>
                  <span>
                    スクリーンショットや録画は絶対にNG
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section: お見合い回数ごとのステップアップ */}
        <section id="step-up" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">
            お見合い回数ごとのステップアップガイド
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            お見合いは回数を重ねるごとに上達します。段階ごとの成長ポイントを意識して、効率的にスキルアップしましょう。
          </p>
          <div className="space-y-4">
            {[
              {
                stage: "1〜3回目",
                title: "基本マナーを身につける段階",
                tips: "まずは基本的なマナー（時間厳守、清潔感、笑顔）を完璧にすることに集中。話す内容よりも「態度」が大切な時期です。緊張するのは当然なので、完璧を目指さず「楽しむ」ことを意識しましょう。断られても気にしない。",
              },
              {
                stage: "4〜8回目",
                title: "会話力を磨く段階",
                tips: "基本マナーが身についたら、会話の質を上げることに意識を向けましょう。相手の話を引き出す質問力、共感力、ユーモアを磨きます。お見合い後のフィードバックを活用して改善点を把握しましょう。",
              },
              {
                stage: "9〜15回目",
                title: "相性を見極める段階",
                tips: "ある程度の経験を積んだら、「この人と結婚生活を送れるか」を意識してお見合いに臨みましょう。条件だけでなく、フィーリングや価値観の一致を重視。仮交際に進む・進まないの判断も的確になってくる時期です。",
              },
              {
                stage: "16回目以降",
                title: "戦略を見直す段階",
                tips: "15回以上お見合いをしても仮交際に進めない場合は、プロフィールや条件設定の見直しが必要です。カウンセラーと相談して、写真の撮り直し、自己PR文の書き直し、条件の緩和などを検討しましょう。",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white border border-[#f0dde3] rounded-2xl p-6"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-[#c45b84] text-white text-xs font-bold rounded-full">
                    {item.stage}
                  </span>
                  <h3 className="font-bold">{item.title}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.tips}
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
              { q: "お見合いの時間はどのくらいですか？", a: "一般的に1時間程度です。盛り上がっても1時間半を超えないのがマナー。短すぎる（30分未満）のも失礼です。話が尽きてしまった場合でも、1時間は頑張りましょう。" },
              { q: "お見合いの服装で気をつけることは？", a: "男性はスーツまたはジャケット＋パンツの清潔感のあるスタイル、女性はワンピースやブラウス＋スカートなど上品なスタイルがおすすめです。カジュアルすぎる服装は避けましょう。" },
              { q: "お見合いで話すべき話題は？", a: "趣味・休日の過ごし方・好きな食べ物・旅行先・仕事のやりがいなど、明るく前向きな話題がおすすめです。相手のプロフィールに書かれていることに触れると好印象です。" },
              { q: "お見合い後の返事はいつまでにすべきですか？", a: "お見合い当日中〜翌日中に相談所を通じて返事をするのがマナーです。返事が遅いと相手を不安にさせ、他のお見合いスケジュールにも影響します。" },
              { q: "お見合いで緊張しないコツはありますか？", a: "事前に話す話題を5つほど準備しておく、深呼吸で気持ちを落ち着かせる、「相手も緊張している」と考える、完璧を目指さず自然体でいることが大切です。回数を重ねるうちに慣れてきます。" },
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
          <h2 className="text-xl md:text-2xl font-bold mb-4">マナーを身につけて、お見合いを成功させよう</h2>
          <p className="text-gray-600 mb-6 max-w-lg mx-auto text-sm">正しいマナーは自信につながります。しっかり準備して、最高の第一印象を残しましょう。</p>
          <Link href="/ranking/" className="btn-cta">おすすめ結婚相談所ランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-4">関連記事</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/ranking/" className="block bg-white border border-[#f0dde3] rounded-2xl p-5 hover:bg-[#fdf8fa] transition-colors">
              <p className="font-bold text-sm mb-1">結婚相談所おすすめ6選</p>
              <p className="text-xs text-gray-500">料金・口コミ・成婚率で徹底比較</p>
            </Link>
            <Link href="/articles/flow-guide/" className="block bg-white border border-[#f0dde3] rounded-2xl p-5 hover:bg-[#fdf8fa] transition-colors">
              <p className="font-bold text-sm mb-1">入会から成婚までの流れ</p>
              <p className="text-xs text-gray-500">完全ガイド</p>
            </Link>
            <Link href="/articles/for-men/" className="block bg-white border border-[#f0dde3] rounded-2xl p-5 hover:bg-[#fdf8fa] transition-colors">
              <p className="font-bold text-sm mb-1">男性におすすめの結婚相談所</p>
              <p className="text-xs text-gray-500">男性目線での選び方ガイド</p>
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
