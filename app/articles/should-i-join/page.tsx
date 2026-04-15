import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "結婚相談所はやめたほうがいい？後悔しないための判断基準",
  description:
    "結婚相談所はやめたほうがいい人と向いている人の特徴を徹底解説。実際に後悔した人・成功した人の声、入会前の判断チェックリスト付きで、あなたの最適な選択をサポートします。",
  keywords: "結婚相談所 やめたほうがいい, 結婚相談所 後悔, 結婚相談所 向いている人",
  alternates: { canonical: "https://kekkon-navi.pages.dev/articles/should-i-join/" },
  openGraph: {
    title: "結婚相談所はやめたほうがいい？後悔しないための判断基準",
    description: "結婚相談所に向いている人・向いていない人の特徴を徹底解説。判断チェックリスト付き。",
    url: "https://kekkon-navi.pages.dev/articles/should-i-join/",
    type: "article",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "結婚相談所はやめたほうがいい？後悔しないための判断基準",
      datePublished: "2026-04-15",
      dateModified: "2026-04-15",
      author: { "@type": "Organization", name: "結婚相談所比較ナビ", url: "https://kekkon-navi.pages.dev" },
      publisher: { "@type": "Organization", name: "結婚相談所比較ナビ", url: "https://kekkon-navi.pages.dev" },
      description: "結婚相談所に向いている人・向いていない人の特徴を徹底解説。",
      mainEntityOfPage: "https://kekkon-navi.pages.dev/articles/should-i-join/",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "結婚相談所に入って後悔する人の特徴は？", acceptedAnswer: { "@type": "Answer", text: "結婚への本気度が低い人、相手への条件が高すぎる人、カウンセラーのアドバイスを聞かない人、活動に時間を割けない人が後悔しやすいです。入会前に自分の婚活への覚悟を確認しましょう。" } },
        { "@type": "Question", name: "結婚相談所に向いている人はどんな人ですか？", acceptedAnswer: { "@type": "Answer", text: "1年以内に結婚したい明確な意思がある人、身元が保証された安全な出会いを求める人、プロのサポートを受けたい人、自然な出会いが少ない環境の人が向いています。" } },
        { "@type": "Question", name: "結婚相談所はお金の無駄ですか？", acceptedAnswer: { "@type": "Answer", text: "結婚という明確な目標があり、積極的に活動するなら無駄にはなりません。ただし、受け身で何もしなければお金を捨てるだけになります。費用対効果は本人の活動量に大きく左右されます。" } },
        { "@type": "Question", name: "結婚相談所で失敗しないためのコツは？", acceptedAnswer: { "@type": "Answer", text: "入会前に複数社を比較する、自分に合った相談所を選ぶ、活動初期のゴールデン期間を逃さない、カウンセラーのアドバイスに素直に従う、条件にこだわりすぎないことが大切です。" } },
        { "@type": "Question", name: "結婚相談所をやめた後はどうすれば良いですか？", acceptedAnswer: { "@type": "Answer", text: "他の相談所への乗り換え、マッチングアプリの活用、婚活パーティーへの参加、友人の紹介など、出会いの方法は複数あります。一つの方法に固執せず、複数を併用するのがおすすめです。" } },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "ホーム", item: "https://kekkon-navi.pages.dev" },
        { "@type": "ListItem", position: 2, name: "コラム", item: "https://kekkon-navi.pages.dev/articles" },
        { "@type": "ListItem", position: 3, name: "結婚相談所はやめたほうがいい？", item: "https://kekkon-navi.pages.dev/articles/should-i-join/" },
      ],
    },
  ],
};

const breadcrumbItems = [
  { label: "コラム", href: "/articles" },
  { label: "結婚相談所はやめたほうがいい？" },
];

export default function ShouldIJoinPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Breadcrumb items={breadcrumbItems} />

      <article className="max-w-4xl mx-auto px-4 pb-16">
        <header className="text-center py-10">
          <div className="inline-block px-4 py-1 rounded-full text-xs font-bold bg-[#fdf2f6] text-[#c45b84] mb-4">お悩み解決</div>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
            結婚相談所はやめたほうがいい？
            <br />
            <span className="text-[#c45b84]">後悔しないための判断基準</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            「結婚相談所って本当に意味あるの？」「高いお金を払って後悔しない？」そんな不安を抱えているあなたへ。やめたほうがいい人と向いている人の特徴を明確にし、後悔しないための判断基準をお伝えします。
          </p>
          <time dateTime="2026-04-15" className="text-xs text-gray-400 mt-4 block">2026年4月15日更新</time>
        </header>

        <nav className="bg-[#fdf8fa] border border-[#f0dde3] rounded-2xl p-6 mb-10">
          <h2 className="text-lg font-bold mb-3 text-[#c45b84]">この記事の目次</h2>
          <ol className="space-y-2 text-sm">
            <li><a href="#stop" className="text-[#c45b84] hover:underline">1. やめたほうがいい人の特徴</a></li>
            <li><a href="#suitable" className="text-[#c45b84] hover:underline">2. 向いている人の特徴</a></li>
            <li><a href="#regret" className="text-[#c45b84] hover:underline">3. 後悔した人のリアルな声</a></li>
            <li><a href="#success" className="text-[#c45b84] hover:underline">4. 成功した人のリアルな声</a></li>
            <li><a href="#checklist" className="text-[#c45b84] hover:underline">5. 判断チェックリスト</a></li>
            <li><a href="#tips" className="text-[#c45b84] hover:underline">6. 後悔しないための5つのコツ</a></li>
            <li><a href="#faq" className="text-[#c45b84] hover:underline">7. よくある質問</a></li>
          </ol>
        </nav>

        {/* Section 1 */}
        <section id="stop" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">結婚相談所をやめたほうがいい人の特徴</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            結婚相談所は万能ではありません。以下の特徴に当てはまる方は、入会しても後悔する可能性が高いため、慎重に検討しましょう。
          </p>
          <div className="space-y-4">
            {[
              { title: "結婚への本気度が低い", detail: "「なんとなく婚活してみようかな」程度の気持ちでは、結婚相談所の費用に見合う成果は得られません。結婚相談所は「1年以内に結婚したい」という強い意志を持った方のためのサービスです。本気度が低いなら、まずはマッチングアプリから始める方が良いでしょう。" },
              { title: "相手への条件が高すぎる・譲れない", detail: "「年収1,000万以上・身長175cm以上・大卒・イケメン」など、条件を盛りすぎると誰ともマッチングしません。条件を一切妥協できない方は、どの相談所に入っても結果は同じです。" },
              { title: "カウンセラーのアドバイスを聞けない", detail: "「自分のやり方でやりたい」というタイプは、結婚相談所には向きません。プロのアドバイスに素直に従える方が、成婚率が圧倒的に高いのが現実です。" },
              { title: "活動に時間を割けない", detail: "月に2〜3回のお見合いやデートの時間を確保できない方は、活動が停滞して月会費だけが積み重なります。最低でも週末のどちらかは婚活に充てる覚悟が必要です。" },
              { title: "恋愛を楽しみたい", detail: "結婚相談所は「結婚」がゴールです。「まずは恋愛を楽しみたい」「ドキドキする出会いが欲しい」という方は、マッチングアプリや婚活パーティーの方が合っています。" },
              { title: "経済的に余裕がない", detail: "活動費用（年間10〜60万円＋隠れコスト10〜30万円）を捻出するのが厳しい方は、無理して入会すべきではありません。お金の心配をしながらの婚活はストレスになり、良い結果にもつながりにくいです。" },
            ].map((item, i) => (
              <div key={i} className="bg-red-50 border border-red-200 rounded-2xl p-5 flex items-start gap-4">
                <div className="w-8 h-8 bg-red-400 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">{i + 1}</div>
                <div><h3 className="font-bold text-red-700 mb-1">{item.title}</h3><p className="text-sm text-red-700">{item.detail}</p></div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2 */}
        <section id="suitable" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">結婚相談所に向いている人の特徴</h2>
          <div className="space-y-4">
            {[
              { title: "1年以内に結婚したい明確な意思がある", detail: "「来年までに結婚したい」という具体的な目標を持っている方は、結婚相談所の仕組みが最も効果を発揮します。カウンセラーと一緒にスケジュールを組み、計画的に婚活を進められます。" },
              { title: "身元が保証された安全な出会いを求めている", detail: "結婚相談所は独身証明書・収入証明書・学歴証明書の提出が必須。相手の情報が嘘でないことが保証されるため、安心して婚活ができます。マッチングアプリにはない大きなメリットです。" },
              { title: "自然な出会いが少ない環境にいる", detail: "仕事が忙しい、職場に異性がいない、地方在住で出会いがない、転勤が多いなど、日常生活で出会いの機会が少ない方には最適な手段です。" },
              { title: "プロのサポートを受けたい", detail: "恋愛経験が少ない、自分に自信がない、どうアプローチすれば良いかわからない…。そんな方は、プロのカウンセラーがあなたの婚活を全面サポートしてくれます。" },
              { title: "効率的に相手を見つけたい", detail: "結婚の意思がある人だけが集まっているため、「この人は結婚する気があるのかな？」と悩む必要がありません。条件で絞り込んで効率的にお相手を探せます。" },
              { title: "真剣な交際を望んでいる", detail: "結婚相談所では「遊び目的」の人は入会できません。全員が真剣に結婚を考えている方なので、時間を無駄にするリスクが低いです。" },
            ].map((item, i) => (
              <div key={i} className="bg-green-50 border border-green-200 rounded-2xl p-5 flex items-start gap-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">{i + 1}</div>
                <div><h3 className="font-bold text-green-700 mb-1">{item.title}</h3><p className="text-sm text-green-700">{item.detail}</p></div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: 後悔した人の声 */}
        <section id="regret" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">後悔した人のリアルな声</h2>
          <div className="space-y-4">
            {[
              { text: "半年で50万円近く使いましたが、お見合いは3回しかできませんでした。自分から積極的に動けなかったのが原因だと思います。もっと覚悟を持って入会すべきでした。", age: "34歳・男性", reason: "活動量が少なかった" },
              { text: "条件を高くしすぎてお見合いが全然成立しませんでした。カウンセラーに「条件を緩めましょう」と言われても聞き入れられず、結局1年で退会。今思えば、もっと素直にアドバイスを聞くべきだったと後悔しています。", age: "37歳・女性", reason: "条件が高すぎた" },
              { text: "仕事が忙しくて月に1回しか活動できず、月会費が無駄になっていました。結婚相談所は時間の確保が前提。忙しい時期に入会したのが失敗でした。", age: "31歳・男性", reason: "時間が確保できなかった" },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-[#f0dde3] rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 bg-red-100 text-red-700 text-xs font-bold rounded-full">{item.reason}</span>
                  <span className="text-xs text-gray-500">{item.age}</span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">&ldquo;{item.text}&rdquo;</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: 成功した人の声 */}
        <section id="success" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">成功した人のリアルな声</h2>
          <div className="space-y-4">
            {[
              { text: "マッチングアプリで1年間うまくいかなかったのですが、結婚相談所に入って6ヶ月で成婚退会できました。カウンセラーのアドバイスで自分の強みに気づけたのが大きかったです。費用は高かったですが、結婚できたことを考えると安い投資でした。", age: "33歳・女性", point: "カウンセラーのサポートが決め手" },
              { text: "仕事が忙しくて自然な出会いがなく、結婚相談所を選びました。毎月紹介してもらえるので効率的に婚活でき、8ヶ月で素敵なパートナーに出会えました。身元が保証されている安心感も大きかったです。", age: "38歳・男性", point: "効率的な出会いができた" },
              { text: "友人の紹介で入会しました。最初は「相談所なんて…」と思っていましたが、同じように真剣に結婚を考えている人ばかりで驚きました。条件を少し緩めたら、想像以上に素敵な方に出会えました。", age: "29歳・女性", point: "真剣な出会いに満足" },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-[#f0dde3] rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-bold rounded-full">{item.point}</span>
                  <span className="text-xs text-gray-500">{item.age}</span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">&ldquo;{item.text}&rdquo;</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: チェックリスト */}
        <section id="checklist" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">入会前の判断チェックリスト</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            以下のチェックリストで、あなたが結婚相談所に向いているかどうかを確認してみましょう。7個以上当てはまれば、結婚相談所の利用をおすすめします。
          </p>
          <div className="bg-white border-2 border-[#c45b84] rounded-2xl p-6 md:p-8">
            <div className="space-y-3">
              {[
                "1年以内に結婚したいという明確な意思がある",
                "結婚相手に求める条件に優先順位をつけられる",
                "月に3万円以上の婚活予算を確保できる",
                "週末のどちらかを婚活に充てる時間がある",
                "プロのアドバイスを素直に聞き入れられる",
                "自分から積極的にお見合いを申し込める、または申し込む意思がある",
                "外見や身だしなみに投資する気持ちがある",
                "断られても落ち込みすぎず、次に切り替えられる",
                "結婚後の生活について具体的なイメージがある",
                "最低6ヶ月は継続して活動する覚悟がある",
              ].map((item, i) => (
                <label key={i} className="flex items-start gap-3 p-3 bg-[#fdf8fa] rounded-xl cursor-pointer hover:bg-[#fdf2f6] transition-colors">
                  <span className="w-5 h-5 border-2 border-[#c45b84] rounded flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-[#c45b84] text-xs font-bold">{i + 1}</span>
                  </span>
                  <span className="text-sm text-gray-700">{item}</span>
                </label>
              ))}
            </div>
            <div className="mt-6 p-4 bg-[#c45b84] text-white rounded-xl text-center">
              <p className="font-bold">7個以上 → 結婚相談所がおすすめ</p>
              <p className="text-sm mt-1">4〜6個 → まずは無料カウンセリングで相談してみましょう</p>
              <p className="text-sm mt-1">3個以下 → マッチングアプリなど他の方法から始める方が良いかもしれません</p>
            </div>
          </div>
        </section>

        {/* Section 6 */}
        <section id="tips" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">後悔しないための5つのコツ</h2>
          <div className="space-y-4">
            {[
              { title: "必ず3社以上の無料カウンセリングを受ける", detail: "1社だけで決めず、複数社を比較検討しましょう。料金・サポート内容・カウンセラーとの相性を確認し、自分に最も合った相談所を選ぶことが後悔を防ぐ最大のポイントです。" },
              { title: "入会前に活動スケジュールを立てる", detail: "「いつまでに成婚する」「月何回お見合いする」など具体的な計画を立ててから入会しましょう。なんとなく入会すると、だらだらと月会費を払い続けることになりかねません。" },
              { title: "条件は3つまでに絞る", detail: "絶対に譲れない条件は3つまでに絞り、それ以外は柔軟に対応しましょう。条件を絞りすぎると出会いの数が激減し、理想の相手を見逃す可能性があります。" },
              { title: "入会後3ヶ月は全力で活動する", detail: "入会直後は「新規会員」として注目されるゴールデン期間です。この時期に最も多くのお見合いが組めるため、最初の3ヶ月は全力で活動しましょう。" },
              { title: "退会条件を事前に確認する", detail: "最低活動期間や中途退会時の違約金を入会前に確認しておきましょう。「やめたくてもやめられない」状況を避けるために、退会条件の確認は必須です。" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-white border border-[#f0dde3] rounded-2xl p-5">
                <div className="w-8 h-8 bg-[#c9a76c] rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">{i + 1}</div>
                <div><h3 className="font-bold mb-1">{item.title}</h3><p className="text-sm text-gray-600">{item.detail}</p></div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: 結婚相談所のメリット・デメリット総まとめ */}
        <section id="merit-demerit" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">
            結婚相談所のメリット・デメリット総まとめ
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            入会を決める前に、結婚相談所のメリットとデメリットを客観的に整理しておきましょう。良い面も悪い面も知った上で判断することが、後悔を防ぐ最大のポイントです。
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
              <h3 className="font-bold text-green-700 text-lg mb-4">
                メリット
              </h3>
              <ul className="text-sm text-green-700 space-y-3">
                <li className="flex items-start gap-2">
                  <span className="font-bold mt-0.5">1.</span>
                  <div>
                    <strong>身元が保証されている</strong>
                    <p className="text-xs mt-0.5">
                      独身証明書・収入証明書・学歴証明書の提出が必須。相手のプロフィールに嘘がないことが保証されています。マッチングアプリにはない最大のメリットです。
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold mt-0.5">2.</span>
                  <div>
                    <strong>全員が結婚を前提に活動</strong>
                    <p className="text-xs mt-0.5">
                      「遊び目的」「友達探し」の人はいません。全員が真剣に結婚相手を探しているため、時間を無駄にするリスクが低いです。
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold mt-0.5">3.</span>
                  <div>
                    <strong>プロのサポートが受けられる</strong>
                    <p className="text-xs mt-0.5">
                      プロフィール作成、お見合いの段取り、交際中のアドバイスまで、婚活のプロがサポートしてくれます。恋愛経験が少ない方でも安心です。
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold mt-0.5">4.</span>
                  <div>
                    <strong>効率的に相手を見つけられる</strong>
                    <p className="text-xs mt-0.5">
                      条件で絞り込んで検索でき、カウンセラーからの紹介もあるため、効率的にお相手を探せます。
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold mt-0.5">5.</span>
                  <div>
                    <strong>断りもプロに任せられる</strong>
                    <p className="text-xs mt-0.5">
                      お見合い後のお断りはカウンセラーが代行。直接「ごめんなさい」を言う必要がないため、精神的な負担が軽くなります。
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
              <h3 className="font-bold text-red-700 text-lg mb-4">
                デメリット
              </h3>
              <ul className="text-sm text-red-700 space-y-3">
                <li className="flex items-start gap-2">
                  <span className="font-bold mt-0.5">1.</span>
                  <div>
                    <strong>費用が高い</strong>
                    <p className="text-xs mt-0.5">
                      年間10〜60万円の費用がかかります。さらにお見合い時のカフェ代、デート代、写真撮影代などの隠れコストもあります。
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold mt-0.5">2.</span>
                  <div>
                    <strong>会員数はアプリより少ない</strong>
                    <p className="text-xs mt-0.5">
                      マッチングアプリの数百万人に比べ、結婚相談所は数万〜数十万人。出会いの「量」ではアプリに劣ります。
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold mt-0.5">3.</span>
                  <div>
                    <strong>ルールに縛られる</strong>
                    <p className="text-xs mt-0.5">
                      お見合い時間の制限、仮交際中の身体的接触の禁止など、様々なルールがあります。自由な恋愛を楽しみたい人には窮屈に感じるかもしれません。
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold mt-0.5">4.</span>
                  <div>
                    <strong>必ず結婚できるわけではない</strong>
                    <p className="text-xs mt-0.5">
                      入会すれば自動的に結婚できるわけではありません。自分から積極的に活動しないと、お金だけ消費して終わるリスクがあります。
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold mt-0.5">5.</span>
                  <div>
                    <strong>周囲に言いにくい</strong>
                    <p className="text-xs mt-0.5">
                      結婚相談所の利用を友人や家族に話しにくいと感じる方もいます。ただし、近年は利用者が増えており、抵抗感は薄れてきています。
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section: 他の婚活方法との比較 */}
        <section id="alternatives" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">
            他の婚活方法との比較
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            結婚相談所以外にも婚活の方法はあります。自分に合った方法を選ぶために、各方法のメリット・デメリットを比較してみましょう。
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#c45b84] text-white">
                  <th className="p-3 text-left font-bold rounded-tl-lg">
                    比較項目
                  </th>
                  <th className="p-3 text-center font-bold">結婚相談所</th>
                  <th className="p-3 text-center font-bold">
                    マッチングアプリ
                  </th>
                  <th className="p-3 text-center font-bold">婚活パーティー</th>
                  <th className="p-3 text-center font-bold rounded-tr-lg">
                    友人の紹介
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "費用",
                    "年間10〜60万円",
                    "月3,000〜5,000円",
                    "1回3,000〜8,000円",
                    "無料",
                  ],
                  [
                    "真剣度",
                    "非常に高い",
                    "バラつきあり",
                    "やや高い",
                    "ケースによる",
                  ],
                  [
                    "身元確認",
                    "厳密",
                    "年齢確認のみ",
                    "本人確認",
                    "友人が保証",
                  ],
                  [
                    "サポート",
                    "充実",
                    "なし",
                    "なし",
                    "友人のフォロー",
                  ],
                  [
                    "出会いの数",
                    "月5〜10人",
                    "無制限",
                    "1回5〜15人",
                    "限定的",
                  ],
                  [
                    "成婚率",
                    "30〜50%",
                    "統計なし",
                    "低い",
                    "ケースによる",
                  ],
                  [
                    "おすすめの人",
                    "本気で結婚したい人",
                    "気軽に始めたい人",
                    "直接会って判断したい人",
                    "人脈が広い人",
                  ],
                ].map((row, i) => (
                  <tr
                    key={i}
                    className={`border-b border-[#f0dde3] ${i % 2 === 0 ? "bg-white" : "bg-[#fdf8fa]"}`}
                  >
                    <td className="p-3 font-bold text-gray-900">{row[0]}</td>
                    <td className="p-3 text-center text-[#c45b84] font-bold">
                      {row[1]}
                    </td>
                    <td className="p-3 text-center">{row[2]}</td>
                    <td className="p-3 text-center">{row[3]}</td>
                    <td className="p-3 text-center">{row[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-[#fdf8fa] border border-[#f0dde3] rounded-2xl p-6">
            <h3 className="font-bold mb-2">婚活方法の選び方</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-[#c45b84] font-bold mt-0.5">●</span>
                <span>
                  <strong>1年以内に結婚したい</strong> →
                  結婚相談所が最も効率的
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c45b84] font-bold mt-0.5">●</span>
                <span>
                  <strong>まずは気軽に始めたい</strong> →
                  マッチングアプリからスタート
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c45b84] font-bold mt-0.5">●</span>
                <span>
                  <strong>複数の方法を試したい</strong> →
                  結婚相談所＋アプリの併用もアリ
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#c45b84] font-bold mt-0.5">●</span>
                <span>
                  <strong>費用を抑えたい</strong> →
                  オンライン型（naco-do）なら年間約11万円
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section: 入会前にやるべきこと */}
        <section id="before-joining" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">
            入会前にやるべき5つの準備
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            結婚相談所に入会する前にやっておくべき準備を紹介します。準備を怠ると、入会後に「こんなはずじゃなかった」と後悔する原因になります。
          </p>
          <div className="space-y-4">
            {[
              {
                num: 1,
                title: "結婚の目的を明確にする",
                detail:
                  "「なぜ結婚したいのか」「結婚後にどんな生活がしたいのか」を具体的に考えておきましょう。目的が曖昧だと、お相手選びの基準もブレてしまいます。紙に書き出して、自分の気持ちを整理するのがおすすめです。",
              },
              {
                num: 2,
                title: "譲れない条件と妥協できる条件を整理する",
                detail:
                  "年齢・年収・学歴・職業・性格・趣味・住まいなど、相手に求める条件を書き出し、「絶対に譲れないもの」と「あれば嬉しいもの」に分けましょう。譲れない条件は3つまでに絞るのがコツです。",
              },
              {
                num: 3,
                title: "予算を決める",
                detail:
                  "入会金・月会費・成婚料の公式料金だけでなく、お見合いのカフェ代、デート代、写真撮影代、交通費なども含めた総予算を計算しましょう。無理のない予算で活動できる相談所を選ぶことが大切です。",
              },
              {
                num: 4,
                title: "活動に充てる時間を確保する",
                detail:
                  "月に何回お見合いやデートの時間を作れるか、事前に確認しておきましょう。最低でも月2〜3回はお見合いの時間が必要です。仕事のスケジュールと照らし合わせて、現実的に活動できるか判断しましょう。",
              },
              {
                num: 5,
                title: "外見の準備を始める",
                detail:
                  "入会前からヘアスタイルの見直し、スキンケア、体型管理などを始めておくと、プロフィール写真撮影時にベストな状態で臨めます。男性はスーツの手入れ、女性はメイクの研究も始めておきましょう。",
              },
            ].map((item) => (
              <div
                key={item.num}
                className="flex items-start gap-4 bg-white border border-[#f0dde3] rounded-2xl p-5"
              >
                <div className="w-10 h-10 bg-[#c45b84] rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0">
                  {item.num}
                </div>
                <div>
                  <h3 className="font-bold mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: 結婚相談所を利用した人の統計 */}
        <section id="statistics" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">
            結婚相談所の利用実態データ
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            結婚相談所の利用者に関するデータを紹介します。客観的なデータを参考に、入会の判断材料にしてください。
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white border border-[#f0dde3] rounded-2xl p-5 text-center">
              <p className="text-3xl font-bold text-[#c45b84] mb-1">約6万人</p>
              <p className="text-xs text-gray-500">
                結婚相談所での年間成婚者数（業界推計）
              </p>
            </div>
            <div className="bg-white border border-[#f0dde3] rounded-2xl p-5 text-center">
              <p className="text-3xl font-bold text-[#c9a76c] mb-1">
                約8〜12ヶ月
              </p>
              <p className="text-xs text-gray-500">成婚までの平均活動期間</p>
            </div>
            <div className="bg-white border border-[#f0dde3] rounded-2xl p-5 text-center">
              <p className="text-3xl font-bold text-[#9b8ec4] mb-1">
                30〜50%
              </p>
              <p className="text-xs text-gray-500">
                大手結婚相談所の平均成婚率
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border border-[#f0dde3] rounded-2xl p-5">
              <h3 className="font-bold mb-2">入会者の年代分布</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>20代：約15〜20%</li>
                <li>30代前半：約25〜30%</li>
                <li>30代後半：約20〜25%</li>
                <li>40代：約20〜25%</li>
                <li>50代以上：約5〜10%</li>
              </ul>
            </div>
            <div className="bg-white border border-[#f0dde3] rounded-2xl p-5">
              <h3 className="font-bold mb-2">入会のきっかけ（複数回答）</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>周りの結婚ラッシュ：約35%</li>
                <li>アプリで結果が出なかった：約25%</li>
                <li>親からのプレッシャー：約20%</li>
                <li>年齢的な焦り：約30%</li>
                <li>自然な出会いがない：約40%</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-14">
          <h2 className="text-xl md:text-2xl font-bold mb-6 pb-2 border-b-2 border-[#c45b84]">よくある質問</h2>
          <div className="space-y-3">
            {[
              { q: "結婚相談所に入って後悔する人の特徴は？", a: "結婚への本気度が低い人、相手への条件が高すぎる人、カウンセラーのアドバイスを聞かない人、活動に時間を割けない人が後悔しやすいです。入会前に自分の婚活への覚悟を確認しましょう。" },
              { q: "結婚相談所に向いている人はどんな人ですか？", a: "1年以内に結婚したい明確な意思がある人、身元が保証された安全な出会いを求める人、プロのサポートを受けたい人、自然な出会いが少ない環境の人が向いています。" },
              { q: "結婚相談所はお金の無駄ですか？", a: "結婚という明確な目標があり、積極的に活動するなら無駄にはなりません。ただし、受け身で何もしなければお金を捨てるだけになります。費用対効果は本人の活動量に大きく左右されます。" },
              { q: "結婚相談所で失敗しないためのコツは？", a: "入会前に複数社を比較する、自分に合った相談所を選ぶ、活動初期のゴールデン期間を逃さない、カウンセラーのアドバイスに素直に従う、条件にこだわりすぎないことが大切です。" },
              { q: "結婚相談所をやめた後はどうすれば良いですか？", a: "他の相談所への乗り換え、マッチングアプリの活用、婚活パーティーへの参加、友人の紹介など、出会いの方法は複数あります。一つの方法に固執せず、複数を併用するのがおすすめです。" },
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
          <h2 className="text-xl md:text-2xl font-bold mb-4">迷っているなら、まずは無料相談から</h2>
          <p className="text-gray-600 mb-6 max-w-lg mx-auto text-sm">入会するかどうかは、無料カウンセリングを受けてから判断しても遅くありません。まずは複数社に相談してみましょう。</p>
          <Link href="/ranking/" className="btn-cta">おすすめ結婚相談所ランキングを見る</Link>
        </section>

        <section>
          <h2 className="text-lg font-bold mb-4">関連記事</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/ranking/" className="block bg-white border border-[#f0dde3] rounded-2xl p-5 hover:bg-[#fdf8fa] transition-colors">
              <p className="font-bold text-sm mb-1">結婚相談所おすすめ6選</p>
              <p className="text-xs text-gray-500">料金・口コミ・成婚率で徹底比較</p>
            </Link>
            <Link href="/articles/vs-matching-app/" className="block bg-white border border-[#f0dde3] rounded-2xl p-5 hover:bg-[#fdf8fa] transition-colors">
              <p className="font-bold text-sm mb-1">結婚相談所 vs マッチングアプリ</p>
              <p className="text-xs text-gray-500">どっちが結婚に近い？</p>
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
