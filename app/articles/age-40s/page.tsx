import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "40代におすすめの結婚相談所3選｜40代からの婚活成功のコツ",
  description:
    "40代で結婚相談所を選ぶならサンマリエ・パートナーエージェント・ツヴァイがおすすめ。40代の婚活の現実、再婚希望者向けのポイント、成功のコツを徹底解説します。",
  keywords: "結婚相談所 40代 おすすめ, 40代 婚活, 結婚相談所 再婚, 40代 結婚",
  alternates: { canonical: "https://kekkon-navi.pages.dev/articles/age-40s/" },
  openGraph: {
    title: "40代におすすめの結婚相談所3選｜40代からの婚活成功のコツ",
    description: "40代の婚活に最適な結婚相談所3社を解説。再婚向けポイントも。",
    url: "https://kekkon-navi.pages.dev/articles/age-40s/",
    type: "article",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "40代におすすめの結婚相談所3選｜40代からの婚活成功のコツ",
      datePublished: "2026-04-15",
      dateModified: "2026-04-15",
      author: { "@type": "Organization", name: "結婚相談所比較ナビ", url: "https://kekkon-navi.pages.dev" },
      publisher: { "@type": "Organization", name: "結婚相談所比較ナビ", url: "https://kekkon-navi.pages.dev" },
      description: "40代の婚活に最適な結婚相談所3社を解説。",
      mainEntityOfPage: "https://kekkon-navi.pages.dev/articles/age-40s/",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "40代で結婚相談所に入会して本当に結婚できますか？", acceptedAnswer: { "@type": "Answer", text: "はい、40代でも成婚退会されている方は多くいます。ただし20〜30代と比べると活動期間が長くなる傾向があり、平均12〜18ヶ月程度です。手厚いサポートのある仲人型の相談所を選び、カウンセラーと二人三脚で活動することが成功のカギです。" } },
        { "@type": "Question", name: "40代の結婚相談所の費用はどのくらいかかりますか？", acceptedAnswer: { "@type": "Answer", text: "年間30〜60万円が目安です。40代は活動期間が長くなりやすいため、月会費の総額が膨らみがちです。ただし、サポートの手厚い相談所を選んで短期で成婚できれば、トータルコストを抑えられます。" } },
        { "@type": "Question", name: "40代でバツイチ・再婚ですが、不利になりますか？", acceptedAnswer: { "@type": "Answer", text: "40代では初婚・再婚を問わず受け入れてくれる方が多いため、大きなハンデにはなりません。むしろ結婚生活の経験があることがプラスに評価されるケースもあります。子連れ再婚の場合は、相手への理解を得るための丁寧なコミュニケーションが大切です。" } },
        { "@type": "Question", name: "40代男性が結婚相談所で成功するポイントは？", acceptedAnswer: { "@type": "Answer", text: "年齢に見合った清潔感のある外見づくり、年収や経済力のアピール、相手の条件を柔軟に設定すること（年齢差±5歳程度）が重要です。また、コミュニケーション力を磨き、お見合いでの会話力を高めることが成婚への近道です。" } },
        { "@type": "Question", name: "40代女性が結婚相談所で成功するポイントは？", acceptedAnswer: { "@type": "Answer", text: "外見の印象を良くすること（ヘアメイク・ファッション）、相手の条件に柔軟性を持つこと、結婚後の生活ビジョンを明確にすることが大切です。仲人型の相談所でプロのアドバイスを受けながら活動すると成功率が上がります。" } },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "ホーム", item: "https://kekkon-navi.pages.dev" },
        { "@type": "ListItem", position: 2, name: "コラム", item: "https://kekkon-navi.pages.dev/articles" },
        { "@type": "ListItem", position: 3, name: "40代におすすめの結婚相談所", item: "https://kekkon-navi.pages.dev/articles/age-40s/" },
      ],
    },
  ],
};

const breadcrumbItems = [
  { label: "コラム", href: "/articles" },
  { label: "40代におすすめの結婚相談所" },
];

export default function Age40sPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Breadcrumb items={breadcrumbItems} />

      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="text-center py-10">
          <div className="inline-block px-4 py-1 rounded-full text-xs font-bold bg-[#fdf2f6] text-[#c45b84] mb-4">年代別ガイド</div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
            40代におすすめの結婚相談所3選
            <br />
            <span className="text-[#c45b84]">40代からの婚活成功のコツ</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            40代からの婚活は「戦略」が全てです。正しい相談所を選び、プロのサポートを最大限に活用すれば、40代でも理想のパートナーと出会えます。40代の婚活のリアルと、成功するための具体的な方法を解説します。
          </p>
          <time dateTime="2026-04-15" className="text-xs text-gray-400 mt-4 block">2026年4月15日更新</time>
        </header>

        <nav className="bg-[#fdf8fa] border border-[#f0dde3] rounded-2xl p-6 mb-10">
          <h2 className="text-lg font-bold mb-3 text-[#c45b84]">この記事の目次</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#reality" className="text-[#c45b84] hover:underline">1. 40代の婚活の現実</a></li>
            <li><a href="#recommended" className="text-[#c45b84] hover:underline">2. 40代におすすめの結婚相談所3選</a></li>
            <li><a href="#remarriage" className="text-[#c45b84] hover:underline">3. 再婚希望者向けのポイント</a></li>
            <li><a href="#success-men" className="text-[#c45b84] hover:underline">4. 40代男性の婚活成功のコツ</a></li>
            <li><a href="#success-women" className="text-[#c45b84] hover:underline">5. 40代女性の婚活成功のコツ</a></li>
            <li><a href="#mindset" className="text-[#c45b84] hover:underline">6. 40代婚活のマインドセット</a></li>
            <li><a href="#faq" className="text-[#c45b84] hover:underline">7. よくある質問</a></li>
          </ol>
        </nav>

        {/* Section 1 */}
        <section id="reality" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">40代の婚活の現実</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            40代の婚活は、20代や30代と比べると状況が異なります。しかし、現実を正しく理解した上で戦略的に活動すれば、十分に成婚のチャンスがあります。まずは現実を直視しましょう。
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white border border-[#f0dde3] rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-3 text-[#c45b84]">厳しい現実</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">▲</span><span>お見合い申し込み数は20〜30代より減少する</span></li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">▲</span><span>活動期間が長くなりやすい（平均12〜18ヶ月）</span></li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">▲</span><span>条件（年齢・容姿）で選ばれにくくなる</span></li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">▲</span><span>女性は出産を希望する場合、時間的制約がある</span></li>
              </ul>
            </div>
            <div className="bg-white border border-[#f0dde3] rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-3 text-[#5b8a6b]">ポジティブな面</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">●</span><span>経済的な安定感が魅力になる</span></li>
                <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">●</span><span>人生経験が豊かで会話が深い</span></li>
                <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">●</span><span>自分の価値観が明確で相性の良い相手を見極めやすい</span></li>
                <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">●</span><span>再婚同士の理解ある出会いが見つかりやすい</span></li>
              </ul>
            </div>
          </div>
          <div className="bg-[#fdf8fa] border border-[#f0dde3] rounded-2xl p-6">
            <h3 className="font-bold mb-3">40代の結婚相談所データ</h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div><p className="text-2xl font-bold text-[#c45b84]">約20〜30%</p><p className="text-xs text-gray-500 mt-1">40代会員の割合</p></div>
              <div><p className="text-2xl font-bold text-[#c9a76c]">約12〜18ヶ月</p><p className="text-xs text-gray-500 mt-1">平均活動期間</p></div>
              <div><p className="text-2xl font-bold text-[#9b8ec4]">増加傾向</p><p className="text-xs text-gray-500 mt-1">40代入会者の推移</p></div>
            </div>
          </div>
        </section>

        {/* Section 2: おすすめ3社 */}
        <section id="recommended" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">40代におすすめの結婚相談所3選</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            40代の婚活で重要なのは「手厚いサポート」と「豊富な会員数」です。自力だけでの活動は効率が悪く、プロの仲人やカウンセラーの力を借りることが成功の近道。以下の3社を特におすすめします。
          </p>

          {[
            {
              name: "サンマリエ",
              badge: "サポート充実",
              badgeColor: "#9b8ec4",
              desc: "40代の婚活に最もおすすめなのがサンマリエです。創業40年以上の老舗で、専任仲人が「人」を見たオーダーメイド紹介を行います。婚活セミナー・ファッション診断・メイクレッスンなど、自分磨きのプログラムが充実しており、40代の魅力を最大限に引き出してくれます。",
              why40: "40代は外見の第一印象が成否を分けることが多いため、ファッション・メイクのプロのアドバイスが受けられるサンマリエは非常に心強いです。仲人が「この人なら合う」と思った相手を紹介してくれるため、条件検索だけでは出会えない良縁にめぐり会えます。",
              initial: "187,000円", monthly: "17,600円", seikon: "220,000円", yearly: "約618,200円",
            },
            {
              name: "パートナーエージェント",
              badge: "PDCA婚活",
              badgeColor: "#5b8a6b",
              desc: "PDCAサイクルに基づく科学的なアプローチが特徴のパートナーエージェント。コンシェルジュが定期的に活動を振り返り、改善点を明確にして次のアクションにつなげてくれます。40代の婚活では「何がうまくいかないのか」を客観的に分析することが重要で、このメソッドが効果を発揮します。",
              why40: "40代は婚活に行き詰まりやすいですが、PDCAサイクルで常に改善を続けることで突破口を見つけられます。成婚料55,000円と仲人型としてはリーズナブルな点も、活動期間が長くなりがちな40代には安心材料です。",
              initial: "137,500円", monthly: "18,700円", seikon: "55,000円", yearly: "約416,900円",
            },
            {
              name: "ツヴァイ",
              badge: "会員数最大",
              badgeColor: "#c9a76c",
              desc: "IBJ提携で10万人超の会員ネットワークを持つツヴァイ。全国50店舗以上を展開しており、地方在住の40代にも対応。データマッチングと仲人型を融合したハイブリッド型で、幅広い出会いの機会を提供してくれます。",
              why40: "40代は出会いの「分母」を増やすことが重要です。ツヴァイの10万人超の会員数は、同年代の相手と出会える確率を高めてくれます。また、成婚料が基本無料のため、活動期間が長くなってもトータルコストが膨らみにくい点がメリットです。",
              initial: "115,500円", monthly: "15,400円", seikon: "基本無料", yearly: "約300,300円",
            },
          ].map((company, i) => (
            <div key={i} className="bg-white border-2 rounded-2xl p-6 md:p-8 mb-6" style={{ borderColor: company.badgeColor }}>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 text-white text-xs font-bold rounded-full" style={{ backgroundColor: company.badgeColor }}>{company.badge}</span>
                <h3 className="text-xl font-bold">{company.name}</h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">{company.desc}</p>
              <div className="bg-[#fdf8fa] rounded-xl p-4 mb-4">
                <p className="font-bold text-sm mb-2 text-[#c45b84]">40代におすすめの理由</p>
                <p className="text-sm text-gray-700">{company.why40}</p>
              </div>
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

        {/* Section 3: 再婚 */}
        <section id="remarriage" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">再婚希望者向けのポイント</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            40代の婚活では再婚を希望される方も多くいます。バツイチであることを後ろ向きに捉える必要はありません。大切なのは、過去の経験を活かして「次こそ幸せな結婚」を目指す姿勢です。
          </p>
          <div className="space-y-4">
            {[
              { title: "プロフィールでの伝え方", detail: "離婚歴は正直に記載しましょう。ただし離婚の理由を詳細に書く必要はありません。「お互いの価値観の違いで円満に離婚しました」など、前向きな表現が好印象です。隠すと後でトラブルの原因になります。" },
              { title: "子どもがいる場合", detail: "子どもの年齢や人数、親権の有無を明確にしましょう。「子どもを大切にしてくれる方」という条件を明確にすることで、理解のあるお相手と出会えます。初めから隠さず、オープンに伝える方が信頼関係を築けます。" },
              { title: "再婚に理解のある相手の見つけ方", detail: "カウンセラーに「再婚に理解のある方を希望」と伝えておくと、条件に合った紹介を受けやすくなります。40代同士なら相手も再婚というケースが多く、お互いに理解がある良いマッチングになりやすいです。" },
              { title: "再婚に強い結婚相談所の選び方", detail: "再婚に理解のある会員が多いか、カウンセラーが再婚サポートの経験が豊富かを確認しましょう。サンマリエやパートナーエージェントは再婚サポートの実績が多く、安心して活動できます。" },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-[#f0dde3] rounded-2xl p-5 flex items-start gap-4">
                <div className="w-8 h-8 bg-[#9b8ec4] rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">{i + 1}</div>
                <div><h3 className="font-bold mb-1">{item.title}</h3><p className="text-sm text-gray-600">{item.detail}</p></div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: 男性の成功コツ */}
        <section id="success-men" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">40代男性の婚活成功のコツ</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "清潔感のある外見づくり", desc: "ヘアスタイルの見直し、スキンケアの習慣化、体型管理を意識しましょう。年齢相応の清潔感があるだけで、お見合いの印象は大きく変わります。プロフィール写真はプロに撮影を依頼し、スーツ姿で清潔感をアピールしましょう。" },
              { title: "経済力をアピールする", desc: "40代男性の最大の武器は経済力です。年収や資産をプロフィールに記載し、安定した生活を提供できることをアピールしましょう。ただし自慢にならないよう、さりげなく伝えるのがポイントです。" },
              { title: "年齢条件を柔軟にする", desc: "「20代の女性を」と希望する40代男性は多いですが、年齢差が大きいとマッチングしにくい現実があります。±5歳程度の範囲で条件を設定すると、出会いの数が大幅に増えます。" },
              { title: "聞き上手になる", desc: "お見合いでは自分の話ばかりでなく、相手の話を聞くことが大切です。40代男性は仕事の話をしがちですが、相手の趣味や価値観に興味を持って質問する姿勢が好印象につながります。" },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-[#f0dde3] rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-2 text-[#c9a76c]">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: 女性の成功コツ */}
        <section id="success-women" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">40代女性の婚活成功のコツ</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "第一印象を最大化する", desc: "ヘアスタイル・メイク・ファッションを見直し、年齢相応の上品さと明るさを両立させましょう。サンマリエのメイクレッスンやファッション診断を活用するのもおすすめ。プロの力を借りて印象をアップさせましょう。" },
              { title: "条件に柔軟性を持つ", desc: "年収や学歴、年齢にこだわりすぎると出会いの幅が狭まります。「一緒にいて心地よい」と感じる相手を見つけることを意識し、条件の優先順位を見直してみましょう。" },
              { title: "結婚後の生活ビジョンを明確に", desc: "40代の婚活では「結婚してどんな生活をしたいか」が重要です。仕事を続けるか、子どもは希望するか、住まいはどうするかなど、具体的なビジョンを持っておくと、お見合いでの会話にも説得力が出ます。" },
              { title: "自然体でいること", desc: "無理に若作りしたり、自分を偽ったりせず、40代ならではの落ち着きと温かさを武器にしましょう。自然体でいることで、相性の良い相手と出会える確率が上がります。" },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-[#f0dde3] rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-2 text-[#c45b84]">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: マインドセット */}
        <section id="mindset" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">40代婚活のマインドセット</h2>
          <div className="space-y-4">
            {[
              { title: "「遅い」とは思わない", detail: "40代からの婚活は決して遅くありません。晩婚化が進む現代、40代の結婚は珍しくありません。「今が一番若い」と考え、今日から行動を始めましょう。" },
              { title: "過去を引きずらない", detail: "過去の恋愛や結婚の失敗にとらわれず、新しい出会いに対してオープンな姿勢で臨みましょう。過去の経験から学んだことを活かして、より良い関係を築けるはずです。" },
              { title: "完璧を求めない", detail: "100点満点の相手はいません。「70点で十分」くらいの気持ちで、お互いの足りない部分を補い合える関係を目指しましょう。完璧を求めすぎると、誰とも結婚できなくなってしまいます。" },
              { title: "プロの力を借りることを恥じない", detail: "結婚相談所を利用することは、効率的に理想のパートナーを見つけるための合理的な手段です。プロの力を借りることは恥ずかしいことではなく、むしろ積極的に婚活に取り組んでいる証です。" },
            ].map((item, i) => (
              <div key={i} className="bg-[#fdf8fa] border border-[#f0dde3] rounded-2xl p-5">
                <h3 className="font-bold mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section: 40代の婚活スケジュール */}
        <section id="schedule" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">
            40代の効率的な婚活スケジュール
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            40代の婚活では、20代や30代以上に戦略的なスケジュール管理が求められます。以下のタイムラインを参考に、計画的に活動しましょう。
          </p>
          <div className="space-y-4">
            {[
              {
                period: "1ヶ月目",
                title: "情報収集・入会",
                detail:
                  "3社以上の無料カウンセリングを受け、40代のサポート実績が豊富な相談所を選びましょう。カウンセラーとの相性も重要です。「40代の成婚事例」を具体的に聞くことがポイントです。",
              },
              {
                period: "2ヶ月目",
                title: "プロフィール最適化",
                detail:
                  "40代は第一印象が勝負。プロフィール写真はプロに依頼し、年齢相応の清潔感と品格をアピール。自己PR文は「安定感」「包容力」「人生経験」を軸に、カウンセラーと練り上げましょう。",
              },
              {
                period: "3〜6ヶ月目",
                title: "お見合い集中期間",
                detail:
                  "月4〜6回のお見合いを目標に積極的に活動。40代は「自分から申し込む」姿勢が重要です。条件を広めに設定し、まずは多くの方と会って相性を確認しましょう。この時期にカウンセラーとの定期面談で軌道修正も行います。",
              },
              {
                period: "6〜10ヶ月目",
                title: "仮交際・絞り込み",
                detail:
                  "仮交際に進んだ方とデートを重ね、結婚相手としてふさわしいか見極めます。40代は「フィーリング」だけでなく「価値観の一致」「生活面での相性」をしっかり確認することが大切です。",
              },
              {
                period: "10〜14ヶ月目",
                title: "真剣交際・成婚退会",
                detail:
                  "1人に絞って真剣交際。結婚後の具体的な生活（住居・家計・仕事・老後）について踏み込んだ話し合いを行います。両家顔合わせ→プロポーズ→成婚退会へ。",
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

        {/* Section: 40代の婚活データ */}
        <section id="data" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">
            40代の婚活にまつわるデータ
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white border border-[#f0dde3] rounded-2xl p-6">
              <h3 className="font-bold mb-3 text-[#c45b84]">
                40代の成婚者が相手に求めた条件TOP5
              </h3>
              <div className="space-y-2">
                {[
                  { rank: 1, item: "性格・人柄の良さ", pct: "92%" },
                  { rank: 2, item: "価値観の一致", pct: "85%" },
                  { rank: 3, item: "経済的な安定", pct: "78%" },
                  { rank: 4, item: "健康であること", pct: "72%" },
                  { rank: 5, item: "容姿（清潔感）", pct: "65%" },
                ].map((item) => (
                  <div
                    key={item.rank}
                    className="flex items-center gap-3 text-sm"
                  >
                    <span className="w-6 h-6 bg-[#c45b84] rounded-full flex items-center justify-center text-white font-bold text-xs">
                      {item.rank}
                    </span>
                    <span className="flex-1">{item.item}</span>
                    <span className="font-bold text-[#c45b84]">
                      {item.pct}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-3">
                ※40代の成婚者アンケートに基づく参考値。年収や学歴よりも人柄・価値観が重視される傾向。
              </p>
            </div>
            <div className="bg-white border border-[#f0dde3] rounded-2xl p-6">
              <h3 className="font-bold mb-3 text-[#c9a76c]">
                40代の婚活で多い失敗パターン
              </h3>
              <ul className="text-sm text-gray-700 space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold mt-0.5">1.</span>
                  <span>
                    <strong>若い相手にこだわりすぎる</strong>
                    <br />
                    <span className="text-xs text-gray-500">
                      40代男性が20代女性を希望→マッチングしない
                    </span>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold mt-0.5">2.</span>
                  <span>
                    <strong>外見の手入れを怠る</strong>
                    <br />
                    <span className="text-xs text-gray-500">
                      年齢相応の清潔感がないと第一印象で不合格
                    </span>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold mt-0.5">3.</span>
                  <span>
                    <strong>「自分が選ぶ側」だと思っている</strong>
                    <br />
                    <span className="text-xs text-gray-500">
                      40代は「選ばれる側」でもあることを認識すべき
                    </span>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold mt-0.5">4.</span>
                  <span>
                    <strong>過去の自分と比較する</strong>
                    <br />
                    <span className="text-xs text-gray-500">
                      「若い頃はモテた」は禁句。今の自分で勝負
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section: 40代の婚活体験談 */}
        <section id="stories" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">
            40代で成婚した方の体験談
          </h2>
          <div className="space-y-4">
            {[
              {
                text: "42歳で初めて結婚相談所に入会しました。正直「40代の自分に合う人はいるのかな」と不安でしたが、仲人さんが「40代だからこそ出会える方がいます」と背中を押してくれました。1年かけてじっくり活動し、44歳で素敵なパートナーと出会えました。年齢を理由に諦めなくて本当に良かったです。",
                age: "44歳・女性・初婚",
                company: "サンマリエ利用",
              },
              {
                text: "バツイチで40代。再婚は無理だろうと思っていましたが、パートナーエージェントのコンシェルジュが「40代の再婚は珍しくありません」と数字で説明してくれて安心できました。PDCAで自分の課題を明確にし、前回の結婚で足りなかったコミュニケーション力を改善。11ヶ月で成婚退会できました。",
                age: "45歳・男性・再婚",
                company: "パートナーエージェント利用",
              },
              {
                text: "地方在住の41歳です。近くに店舗がないため、オンラインでも活動できるツヴァイを選びました。IBJ提携で会員数が多いため、地方でも十分な数のお見合い相手が見つかりました。1年半かかりましたが、車で1時間の距離の方と成婚。遠距離ではありませんが、地方同士のマッチングはツヴァイならではだと思います。",
                age: "43歳・女性・初婚",
                company: "ツヴァイ利用",
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

        {/* Section: 3社の比較表 */}
        <section id="comparison-table" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">
            おすすめ3社の詳細比較表
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
                    パートナーAG
                  </th>
                  <th className="p-3 text-center font-bold rounded-tr-lg">
                    ツヴァイ
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["タイプ", "仲人型", "仲人型", "ハイブリッド型"],
                  [
                    "年間総額",
                    "約618,200円",
                    "約416,900円",
                    "約300,300円",
                  ],
                  ["会員数", "約8.7万人", "約9.4万人", "約9.7万人"],
                  [
                    "サポートの手厚さ",
                    "★★★★★",
                    "★★★★☆",
                    "★★★☆☆",
                  ],
                  [
                    "再婚対応",
                    "非常に充実",
                    "充実",
                    "対応あり",
                  ],
                  [
                    "自分磨きプログラム",
                    "あり（充実）",
                    "一部あり",
                    "なし",
                  ],
                  [
                    "店舗数",
                    "主要都市",
                    "主要都市",
                    "50店舗以上",
                  ],
                  [
                    "40代おすすめ度",
                    "★★★★★",
                    "★★★★★",
                    "★★★★☆",
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
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">40代の結婚相談所に関するよくある質問</h2>
          <div className="space-y-3">
            {[
              { q: "40代で結婚相談所に入会して本当に結婚できますか？", a: "はい、40代でも成婚退会されている方は多くいます。ただし20〜30代と比べると活動期間が長くなる傾向があり、平均12〜18ヶ月程度です。手厚いサポートのある仲人型の相談所を選び、カウンセラーと二人三脚で活動することが成功のカギです。" },
              { q: "40代の結婚相談所の費用はどのくらいかかりますか？", a: "年間30〜60万円が目安です。40代は活動期間が長くなりやすいため、月会費の総額が膨らみがちです。ただし、サポートの手厚い相談所を選んで短期で成婚できれば、トータルコストを抑えられます。" },
              { q: "40代でバツイチ・再婚ですが、不利になりますか？", a: "40代では初婚・再婚を問わず受け入れてくれる方が多いため、大きなハンデにはなりません。むしろ結婚生活の経験があることがプラスに評価されるケースもあります。子連れ再婚の場合は、相手への理解を得るための丁寧なコミュニケーションが大切です。" },
              { q: "40代男性が結婚相談所で成功するポイントは？", a: "年齢に見合った清潔感のある外見づくり、年収や経済力のアピール、相手の条件を柔軟に設定すること（年齢差±5歳程度）が重要です。コミュニケーション力を磨き、お見合いでの会話力を高めることが成婚への近道です。" },
              { q: "40代女性が結婚相談所で成功するポイントは？", a: "外見の印象を良くすること、相手の条件に柔軟性を持つこと、結婚後の生活ビジョンを明確にすることが大切です。仲人型の相談所でプロのアドバイスを受けながら活動すると成功率が上がります。" },
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

        {/* Section: 40代向けの結婚相談所の選び方チェックリスト */}
        <section id="checklist" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">
            40代が結婚相談所を選ぶ際のチェックポイント
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            40代の方が結婚相談所を選ぶ際に、必ず確認しておきたいポイントをまとめました。無料カウンセリングでこれらの質問を投げかけてみましょう。
          </p>
          <div className="bg-white border-2 border-[#c45b84] rounded-2xl p-6">
            <div className="space-y-3">
              {[
                "40代の成婚事例はどのくらいありますか？（具体的な数字を聞く）",
                "40代会員の男女比はどのくらいですか？",
                "40代の平均活動期間はどのくらいですか？",
                "再婚サポートの経験はありますか？（再婚希望の場合）",
                "40代の会員にはどのような方がいますか？（職業・年収・学歴の傾向）",
                "カウンセラーは40代のサポート経験が豊富ですか？",
                "途中退会する場合の違約金はありますか？",
                "活動中に休止することはできますか？（仕事が忙しい時期用）",
              ].map((item, i) => (
                <label
                  key={i}
                  className="flex items-start gap-3 p-3 bg-[#fdf8fa] rounded-xl"
                >
                  <span className="w-5 h-5 border-2 border-[#c45b84] rounded flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-[#c45b84] text-xs font-bold">
                      {i + 1}
                    </span>
                  </span>
                  <span className="text-sm text-gray-700">{item}</span>
                </label>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-gradient-to-r from-[#fdf2f6] to-[#faf5ee] rounded-2xl p-8 md:p-12 mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-4">40代の今こそ、新しい一歩を踏み出そう</h2>
          <p className="text-gray-600 mb-6 max-w-lg mx-auto text-sm">40代は人生経験を活かした、大人の婚活ができる年代。プロの力を借りて、最高のパートナーを見つけましょう。</p>
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
            <Link href="/articles/remarriage/" className="block bg-white border border-[#f0dde3] rounded-2xl p-5 hover:bg-[#fdf8fa] transition-colors">
              <p className="font-bold text-sm mb-1">バツイチ・再婚の婚活</p>
              <p className="text-xs text-gray-500">再婚におすすめの結婚相談所3選</p>
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
