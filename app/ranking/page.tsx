import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";

export const metadata: Metadata = {
  title:
    "【2026年最新】結婚相談所おすすめ6選を徹底比較！料金・口コミ・成婚率まで",
  description:
    "結婚相談所おすすめ6社を徹底比較。ゼクシィ縁結びエージェント・ツヴァイ・サンマリエ・IBJメンバーズ・naco-do・パートナーエージェントの料金・会員数・成婚率・口コミを詳しく解説。あなたにぴったりの結婚相談所が見つかります。",
  keywords:
    "結婚相談所 おすすめ, 結婚相談所 ランキング, 結婚相談所 比較, 結婚相談所 どこがいい, 結婚相談所 口コミ, 結婚相談所 料金",
  alternates: {
    canonical: "https://kekkon-navi.pages.dev/ranking/",
  },
};

const breadcrumbItems = [{ label: "結婚相談所おすすめ6選" }];

const companies = [
  {
    id: "zexy",
    rank: 1,
    name: "ゼクシィ縁結びエージェント",
    badge: "満足度No.1",
    badgeColor: "#c45b84",
    tagline: "オリコン顧客満足度調査 結婚相談所ランキング8年連続1位",
    type: "ハイブリッド型",
    description:
      "リクルートが運営するゼクシィ縁結びエージェントは、オリコン顧客満足度調査で8年連続No.1を獲得している人気の結婚相談所です。お見合い料・成婚料が無料で、月会費のみというシンプルな料金体系が魅力。専任のマッチングコーディネーターによるサポートと、AIを活用したデータマッチングのハイブリッド型で、効率的に理想のパートナーを見つけられます。",
    features: [
      "オリコン顧客満足度8年連続1位",
      "お見合い料・成婚料が一切不要",
      "リクルート運営の信頼感",
      "AIマッチング+専任コーディネーター",
      "全国に店舗展開",
      "オンラインでの活動も可能",
    ],
    pricing: {
      initial: "33,000円",
      monthly: "17,600円",
      omiai: "無料",
      seikon: "無料",
      yearly: "約244,200円",
    },
    members: "約3.2万人（コネクトシップ加盟）",
    seikonRate: "26.2%（会員同士）",
    support: "専任コーディネーター / 月6名紹介 / 定期面談",
    area: "全国27店舗 + オンライン対応",
    online: "対応（入会〜お見合いまでオンライン可）",
    merits: [
      "業界トップクラスの顧客満足度で安心感がある",
      "お見合い料・成婚料が完全無料でトータルコストを抑えやすい",
      "リクルートグループ運営の信頼性が高い",
      "シンプルな料金体系でわかりやすい",
      "オンラインでも活動できるため忙しい人にも対応",
    ],
    demerits: [
      "会員数は大手の中ではやや少なめ",
      "仲人型ほどの手厚いサポートは期待しにくい",
      "成婚料がないため、コーディネーターの成婚へのモチベーションが見えにくいという声も",
    ],
    target:
      "顧客満足度の高い安心感のあるサービスを求める方、お見合い料・成婚料なしでコスパ良く婚活したい方、リクルートブランドの信頼感を重視する方におすすめです。",
    reviews: [
      {
        text: "お見合い料と成婚料がかからないので、気軽にお見合いを組めました。コーディネーターの方も親身で、4ヶ月で交際に発展できました。",
        age: "32歳・女性",
        rating: 5,
      },
      {
        text: "料金がシンプルで分かりやすいのが決め手でした。紹介される方の質も高く、3人目の方とお付き合いが始まりました。",
        age: "35歳・男性",
        rating: 4,
      },
      {
        text: "オリコン1位というだけあって、対応は丁寧です。ただ、もう少し積極的にプッシュしてほしいと思う場面もありました。",
        age: "29歳・女性",
        rating: 4,
      },
    ],
  },
  {
    id: "zwei",
    rank: 2,
    name: "ツヴァイ",
    badge: "会員数No.1",
    badgeColor: "#c9a76c",
    tagline: "IBJ提携で業界最大級の会員ネットワーク",
    type: "ハイブリッド型",
    description:
      "ツヴァイはIBJと業務提携し、合計10万人超の会員ネットワークを持つ業界最大級の結婚相談所です。全国50店舗以上を展開しており、地方在住の方でも利用しやすいのが特徴。データマッチングと仲人型を融合したハイブリッド型で、条件検索と人の目によるお相手紹介の両方を活用できます。イオングループの安心感もポイントです。",
    features: [
      "IBJ提携で会員数10万人超",
      "全国50店舗以上の展開",
      "データマッチング+仲人型のハイブリッド",
      "イオングループ運営の安心感",
      "20代向けの割引プランあり",
      "条件マッチング・価値観マッチング・AIマッチングの3種対応",
    ],
    pricing: {
      initial: "115,500円",
      monthly: "15,400円",
      omiai: "無料",
      seikon: "無料（IBJ会員とのお見合い成立時は別途）",
      yearly: "約300,300円",
    },
    members: "約9.7万人（IBJ提携含む）",
    seikonRate: "非公開",
    support: "マリッジコンサルタント / 月最大6名紹介 / 活動サポート面談",
    area: "全国50店舗以上 + オンライン対応",
    online: "対応（オンラインお見合い可）",
    merits: [
      "IBJ提携により会員数が業界最大級",
      "全国50店舗以上で地方の方も利用しやすい",
      "データマッチングと仲人型の良いとこ取りができる",
      "お見合い料・成婚料が基本無料でコスパが良い",
      "20代割引プランがあり若い世代も始めやすい",
    ],
    demerits: [
      "初期費用がやや高め",
      "IBJ会員とのお見合い成立時は別途費用がかかる場合がある",
      "店舗によって担当者のクオリティにばらつきがあるという声も",
    ],
    target:
      "会員数の多さで出会いの幅を広げたい方、地方在住で近くに店舗がほしい方、データマッチングと仲人型の両方を試したい方におすすめです。",
    reviews: [
      {
        text: "IBJの会員も検索できるので、出会いの幅が広がりました。全国に店舗があるので、転勤が多い自分にとってはありがたかったです。",
        age: "38歳・男性",
        rating: 4,
      },
      {
        text: "20代割引を使って入会しました。データマッチングで条件の合う方を効率よく探せたのが良かったです。半年で成婚退会できました。",
        age: "27歳・女性",
        rating: 5,
      },
      {
        text: "会員数が多い分、いろいろな方と出会えます。ただ、担当者によってサポートの質に差があると感じました。",
        age: "34歳・男性",
        rating: 3,
      },
    ],
  },
  {
    id: "sunmarie",
    rank: 3,
    name: "サンマリエ",
    badge: "サポート充実",
    badgeColor: "#9b8ec4",
    tagline: "創業40年以上の老舗結婚相談所",
    type: "仲人型",
    description:
      "サンマリエは1981年創業の老舗結婚相談所で、40年以上の実績があります。専任の仲人による手厚いオーダーメイドサポートが最大の特徴。会員一人ひとりの性格や価値観を深く理解し、条件だけでは分からない「相性」を重視した紹介を行います。婚活セミナーやファッション診断、メイクレッスンなども充実しており、婚活力を総合的に高められます。",
    features: [
      "創業40年超の老舗の信頼感",
      "専任仲人によるオーダーメイド紹介",
      "婚活セミナー・レッスンが充実",
      "IBJネットワーク加盟で会員数8.7万超",
      "プロフィール作成から写真撮影までサポート",
      "お相手への交際アドバイスも徹底",
    ],
    pricing: {
      initial: "187,000円（入会金33,000円＋初期活動費154,000円）",
      monthly: "17,600円",
      omiai: "11,000円",
      seikon: "220,000円",
      yearly: "約618,200円（お見合い月1回想定）",
    },
    members: "約8.7万人（IBJネットワーク）",
    seikonRate: "非公開（業界平均以上と公表）",
    support:
      "専任仲人 / 月1回以上の面談 / 婚活セミナー / ファッション・メイクレッスン / お見合い練習",
    area: "全国対応（東京・横浜・大阪・名古屋など主要都市に店舗）",
    online: "対応（オンラインお見合い・面談可）",
    merits: [
      "専任仲人の手厚いサポートで婚活初心者でも安心",
      "婚活セミナーやレッスンで自分磨きができる",
      "IBJネットワークで会員数は十分",
      "40年以上の実績に基づくノウハウが豊富",
      "一人ひとりに合わせたオーダーメイド紹介",
    ],
    demerits: [
      "成婚料220,000円がかかるためトータルコストが高い",
      "お見合い料が1回11,000円かかる",
      "料金が高い分、費用対効果を感じにくい場合も",
    ],
    target:
      "手厚いサポートを受けながら婚活したい方、自分磨きも含めて総合的に婚活力を高めたい方、老舗の安心感を重視する方におすすめです。",
    reviews: [
      {
        text: "仲人さんが本当に親身になってくれました。お見合いの服装からトーク内容まで細かくアドバイスしてもらえて、自信を持って臨めました。",
        age: "36歳・女性",
        rating: 5,
      },
      {
        text: "婚活セミナーで自分のコミュニケーションの癖に気づけたのが大きかったです。成婚料は高いですが、結果的にお金以上の価値がありました。",
        age: "41歳・男性",
        rating: 5,
      },
      {
        text: "サポートの質は文句なしですが、やはりトータル費用が高いのがネック。ただ、真剣に婚活したい人には本気度を引き出してくれる環境だと思います。",
        age: "33歳・女性",
        rating: 4,
      },
    ],
  },
  {
    id: "ibj",
    rank: 4,
    name: "IBJメンバーズ",
    badge: "成婚率50.4%",
    badgeColor: "#5b8a6b",
    tagline: "IBJ直営の最上位プレミアムサービス",
    type: "仲人型",
    description:
      "IBJメンバーズは、日本最大級の結婚相談所ネットワーク「IBJ」の直営店です。約8.7万人超の会員基盤と、成婚率50.4%という業界トップクラスの実績が強み。専任カウンセラーが活動計画の策定からお見合いのフィードバック、交際中のアドバイスまで一貫してサポートします。会員の質が高いことでも知られ、本気度の高い婚活が可能です。",
    features: [
      "IBJ直営で会員8.7万人超にアクセス",
      "成婚率50.4%の業界トップクラス実績",
      "専任カウンセラーの一貫サポート",
      "会員の質が高い（年収・学歴）",
      "少人数担当制で丁寧な対応",
      "お見合い申し込み月最大20名",
    ],
    pricing: {
      initial: "181,500円（入会金33,000円＋活動サポート費148,500円）",
      monthly: "17,050円",
      omiai: "無料",
      seikon: "220,000円",
      yearly: "約606,100円",
    },
    members: "約8.7万人（IBJ会員）",
    seikonRate: "50.4%",
    support:
      "専任カウンセラー / 少人数担当制 / 活動プランニング / お見合いフィードバック / 交際サポート",
    area: "東京・横浜・大阪・名古屋・福岡など主要12店舗",
    online: "対応（オンラインお見合い可）",
    merits: [
      "成婚率50.4%で業界トップクラスの成果",
      "IBJ直営ならではの会員数と質の両立",
      "少人数担当制で一人ひとりに手厚いサポート",
      "お見合い料が無料で積極的にお見合いを組める",
      "会員の本気度が高く真剣な出会いが期待できる",
    ],
    demerits: [
      "成婚料220,000円が高額",
      "店舗が主要都市のみで地方カバーが弱い",
      "料金全体が高めで短期決戦向き",
    ],
    target:
      "高い成婚率を重視する方、会員の質にこだわりたい方、1年以内に結婚相手を見つけたい本気度の高い方におすすめです。",
    reviews: [
      {
        text: "カウンセラーさんが少人数制なので、いつでもすぐに相談できるのが心強かったです。入会から8ヶ月で成婚退会できました。",
        age: "31歳・女性",
        rating: 5,
      },
      {
        text: "会員の質は本当に高いと思います。真剣な方ばかりなので、お見合いの度に将来の話ができて効率的でした。",
        age: "37歳・男性",
        rating: 5,
      },
      {
        text: "成婚料は正直痛かったですが、結果的に素敵なパートナーに出会えたので満足しています。地方住みだと通うのが大変かもしれません。",
        age: "30歳・女性",
        rating: 4,
      },
    ],
  },
  {
    id: "nacodo",
    rank: 5,
    name: "naco-do",
    badge: "コスパ最強",
    badgeColor: "#4c6e8a",
    tagline: "オンライン完結で業界最安クラスの結婚相談所",
    type: "オンライン型",
    description:
      "naco-doは、スマホ一つで完結するオンライン結婚相談所です。月額6,980円〜という業界最安クラスの料金ながら、JBA・コネクトシップ・Rnetの3つの連盟に加盟しており、会員数は25.4万人と業界トップレベル。専属サポーターによるオンライン面談やチャットサポートも充実しています。店舗に通う時間がない忙しい方や、コストを抑えて婚活したい方に最適です。",
    features: [
      "月額6,980円〜の業界最安クラス",
      "3つの連盟で会員25.4万人",
      "スマホで完結するオンライン型",
      "専属サポーターのチャット・ビデオ面談",
      "入会金29,800円とリーズナブル",
      "成婚料無料（一部プランを除く）",
    ],
    pricing: {
      initial: "29,800円",
      monthly: "6,980円〜（1ヶ月プラン16,800円）",
      omiai: "無料",
      seikon: "無料（一部プランは成婚料あり）",
      yearly: "約113,560円（6ヶ月プラン月6,980円の場合）",
    },
    members: "約25.4万人（JBA+コネクトシップ+Rnet）",
    seikonRate: "41.2%（交際成立から6ヶ月以内）",
    support:
      "専属サポーター / ビデオ面談（月1回） / チャットサポート / 活動アドバイス",
    area: "全国対応（オンライン完結）",
    online: "完全対応（入会〜成婚まですべてオンライン）",
    merits: [
      "月額6,980円〜で業界最安クラスのコストパフォーマンス",
      "3連盟加入で会員数25.4万人と出会いの幅が広い",
      "スマホだけで婚活が完結し来店不要",
      "成婚料が基本無料でトータルコストを大幅に抑えられる",
      "オンライン面談で全国どこからでもサポートを受けられる",
    ],
    demerits: [
      "対面でのサポートがないため不安を感じる方も",
      "店舗型と比べてサポートの手厚さでは劣る面がある",
      "自主的に行動できる人向きの仕組み",
    ],
    target:
      "費用を抑えて婚活を始めたい方、忙しくて店舗に通えない方、まずは気軽に婚活をスタートしたい方におすすめです。",
    reviews: [
      {
        text: "月6,980円でこの会員数は本当にコスパ最強です。オンラインだけで心配でしたが、サポーターさんとのビデオ面談で十分相談できました。",
        age: "28歳・女性",
        rating: 5,
      },
      {
        text: "3つの連盟に入っているので、他社の会員さんとも出会えるのが良いです。地方住みですが、選択肢が多くて助かりました。",
        age: "33歳・男性",
        rating: 4,
      },
      {
        text: "手軽さとコスパは最高ですが、自分から積極的に動ける人でないと成果が出にくいかも。受け身タイプの方は店舗型も検討した方がいいかもしれません。",
        age: "30歳・女性",
        rating: 3,
      },
    ],
  },
  {
    id: "partner-agent",
    rank: 6,
    name: "パートナーエージェント",
    badge: "成婚率No.1",
    badgeColor: "#a8476d",
    tagline: "成婚率No.1を誇るコンシェルジュ型結婚相談所",
    type: "仲人型",
    description:
      "パートナーエージェントは「成婚率No.1」を掲げる結婚相談所です。専任のコンシェルジュが婚活をトータルでプロデュースし、PDCAサイクルに基づいた活動設計で成婚に導きます。成婚退会者の65.6%が1年以内に成婚しているという実績があり、短期間で結果を出したい方に支持されています。コンシェルジュ・チーム体制で複数の目線からサポートを受けられるのも魅力です。",
    features: [
      "成婚率No.1の実績",
      "専任コンシェルジュのチーム体制",
      "PDCAサイクルで活動を最適化",
      "成婚退会者の65.6%が1年以内に成婚",
      "コネクトシップ加盟で約3万人にアクセス",
      "お見合い後のフィードバックが充実",
    ],
    pricing: {
      initial: "137,500円（入会金33,000円＋初期費用104,500円）",
      monthly: "18,700円",
      omiai: "無料",
      seikon: "55,000円",
      yearly: "約416,900円",
    },
    members: "約3万人（コネクトシップ加盟）",
    seikonRate: "27.0%（業界平均の約4.5倍と公表）",
    support:
      "専任コンシェルジュ / チーム体制 / 定期面談 / PDCA活動設計 / お見合いフィードバック / 交際中サポート",
    area: "全国24店舗 + オンライン対応",
    online: "対応（オンラインお見合い・面談可）",
    merits: [
      "成婚率No.1で結果にコミットした婚活ができる",
      "PDCAサイクルで婚活を科学的にアプローチ",
      "チーム体制で多角的なサポートを受けられる",
      "65.6%が1年以内に成婚しており短期決戦に強い",
      "お見合い料が無料で積極的にお見合いを組める",
    ],
    demerits: [
      "会員数がやや少なめ（約3万人）",
      "月会費18,700円とやや高め",
      "コンシェルジュの相性が合わないと感じるケースも",
    ],
    target:
      "成婚率を最重視する方、1年以内に結婚したい方、PDCAに基づく論理的な婚活をしたい方におすすめです。",
    reviews: [
      {
        text: "コンシェルジュの方が本当に親身で、毎回のお見合い後にフィードバックをもらえるのが成長につながりました。10ヶ月で成婚退会できました。",
        age: "34歳・女性",
        rating: 5,
      },
      {
        text: "PDCAで活動を振り返る仕組みが良いです。何がダメだったのか、どう改善すればいいのかが明確になりました。",
        age: "39歳・男性",
        rating: 4,
      },
      {
        text: "成婚率No.1の名に恥じないサポート体制だと思います。ただ、会員数がもう少し多いと嬉しいかな。コネクトシップだけだと物足りなさを感じる人もいるかも。",
        age: "31歳・女性",
        rating: 4,
      },
    ],
  },
];

const comparisonCategories = [
  {
    title: "料金比較",
    id: "price-comparison",
    headers: ["相談所", "初期費用", "月会費", "お見合い料", "成婚料", "年間目安"],
    rows: [
      ["ゼクシィ縁結びエージェント", "33,000円", "17,600円", "無料", "無料", "約244,200円"],
      ["ツヴァイ", "115,500円", "15,400円", "無料", "無料", "約300,300円"],
      ["サンマリエ", "187,000円", "17,600円", "11,000円", "220,000円", "約618,200円"],
      ["IBJメンバーズ", "181,500円", "17,050円", "無料", "220,000円", "約606,100円"],
      ["naco-do", "29,800円", "6,980円〜", "無料", "無料", "約113,560円"],
      ["パートナーエージェント", "137,500円", "18,700円", "無料", "55,000円", "約416,900円"],
    ],
  },
  {
    title: "会員数比較",
    id: "members-comparison",
    headers: ["相談所", "会員数", "加盟連盟", "主な会員層"],
    rows: [
      ["ゼクシィ縁結びエージェント", "約3.2万人", "コネクトシップ", "20代後半〜30代"],
      ["ツヴァイ", "約9.7万人", "IBJ提携", "20代〜40代前半"],
      ["サンマリエ", "約8.7万人", "IBJ", "30代〜40代"],
      ["IBJメンバーズ", "約8.7万人", "IBJ（直営）", "30代中心・高年収層"],
      ["naco-do", "約25.4万人", "JBA+コネクトシップ+Rnet", "20代後半〜30代"],
      ["パートナーエージェント", "約3万人", "コネクトシップ", "30代〜40代前半"],
    ],
  },
  {
    title: "成婚率比較",
    id: "seikon-comparison",
    headers: ["相談所", "成婚率", "成婚の定義", "成婚までの平均期間"],
    rows: [
      ["ゼクシィ縁結びエージェント", "26.2%", "会員同士の成婚", "約6〜12ヶ月"],
      ["ツヴァイ", "非公開", "−", "約6〜12ヶ月"],
      ["サンマリエ", "非公開", "−", "約7〜12ヶ月"],
      ["IBJメンバーズ", "50.4%", "全退会者に対する成婚退会率", "約6〜12ヶ月"],
      ["naco-do", "41.2%", "交際成立から6ヶ月以内", "約6ヶ月"],
      ["パートナーエージェント", "27.0%", "在籍会員の成婚率", "約8〜10ヶ月"],
    ],
  },
  {
    title: "サポート内容比較",
    id: "support-comparison",
    headers: ["相談所", "サポートタイプ", "担当者", "面談頻度", "紹介人数/月"],
    rows: [
      ["ゼクシィ縁結びエージェント", "ハイブリッド型", "専任コーディネーター", "定期面談", "6名"],
      ["ツヴァイ", "ハイブリッド型", "マリッジコンサルタント", "随時", "6名"],
      ["サンマリエ", "仲人型", "専任仲人", "月1回以上", "3名+自由検索"],
      ["IBJメンバーズ", "仲人型", "専任カウンセラー", "随時", "申込20名/月"],
      ["naco-do", "オンライン型", "専属サポーター", "月1回ビデオ面談", "6名+自由検索"],
      ["パートナーエージェント", "仲人型", "専任コンシェルジュ", "定期面談", "6名"],
    ],
  },
  {
    title: "対応エリア比較",
    id: "area-comparison",
    headers: ["相談所", "店舗数", "主要エリア", "地方対応"],
    rows: [
      ["ゼクシィ縁結びエージェント", "27店舗", "首都圏・関西・東海・福岡", "オンライン対応"],
      ["ツヴァイ", "50店舗以上", "全国", "全国対応"],
      ["サンマリエ", "約20店舗", "首都圏・関西・名古屋", "オンライン対応"],
      ["IBJメンバーズ", "12店舗", "首都圏・関西・名古屋・福岡", "店舗限定"],
      ["naco-do", "なし（オンライン）", "全国対応", "完全対応"],
      ["パートナーエージェント", "24店舗", "首都圏・関西・東海・福岡", "オンライン対応"],
    ],
  },
  {
    title: "オンライン対応比較",
    id: "online-comparison",
    headers: ["相談所", "入会手続き", "お見合い", "面談・相談", "プロフィール閲覧"],
    rows: [
      ["ゼクシィ縁結びエージェント", "オンライン可", "オンライン可", "オンライン可", "アプリ・Web"],
      ["ツヴァイ", "来店推奨", "オンライン可", "来店中心", "Web"],
      ["サンマリエ", "来店推奨", "オンライン可", "オンライン可", "Web"],
      ["IBJメンバーズ", "来店必須", "オンライン可", "来店中心", "アプリ"],
      ["naco-do", "完全オンライン", "オンライン", "ビデオ面談", "アプリ"],
      ["パートナーエージェント", "来店推奨", "オンライン可", "オンライン可", "Web"],
    ],
  },
];

const typeRecommendations = [
  {
    type: "コスパ重視の方",
    company: "naco-do",
    reason:
      "月額6,980円〜・成婚料無料で年間約11万円。それでいて会員数25.4万人は業界最多級。コストを抑えつつ出会いの幅を最大化したい方に最適です。オンライン完結なので通う時間も不要。",
    icon: "💰",
  },
  {
    type: "サポート重視の方",
    company: "サンマリエ",
    reason:
      "専任仲人のオーダーメイド紹介に加え、婚活セミナー・ファッション診断・メイクレッスンまで充実。婚活そのものを楽しみながら自分磨きもしたい方に。40年以上のノウハウが活きた丁寧なサポートが魅力です。",
    icon: "🤝",
  },
  {
    type: "会員数重視の方",
    company: "ツヴァイ",
    reason:
      "IBJ提携で会員数10万人超。出会いの選択肢を最大限に広げたい方に最適です。全国50店舗以上の展開で地方の方も利用しやすく、データマッチング+仲人型のハイブリッドで効率的にお相手を探せます。",
    icon: "👥",
  },
  {
    type: "実績重視の方",
    company: "ゼクシィ縁結びエージェント",
    reason:
      "オリコン顧客満足度8年連続No.1の圧倒的実績。リクルートグループ運営の信頼感に加え、お見合い料・成婚料無料でコスパも良好。「間違いのない選択」をしたい方に。",
    icon: "🏆",
  },
  {
    type: "本気度が高い方",
    company: "IBJメンバーズ",
    reason:
      "成婚率50.4%で業界トップクラス。IBJ直営ならではの質の高い会員層と、少人数担当制の手厚いカウンセリング。1年以内に結婚相手を見つけたい本気度の高い方におすすめです。",
    icon: "💍",
  },
  {
    type: "成婚率重視の方",
    company: "パートナーエージェント",
    reason:
      "「成婚率No.1」を掲げ、PDCAサイクルに基づく科学的な婚活をサポート。成婚退会者の65.6%が1年以内に成婚しており、短期集中で結果を出したい方に最適です。",
    icon: "📊",
  },
];

const flowSteps = [
  {
    step: 1,
    title: "無料カウンセリング・資料請求",
    description:
      "まずは気になる結婚相談所の無料カウンセリングに参加するか、資料を請求しましょう。自分の婚活の方向性を確認し、サービス内容や料金の説明を受けます。複数の相談所を比較検討するのがおすすめです。",
  },
  {
    step: 2,
    title: "入会・プロフィール作成",
    description:
      "入会手続きを行い、プロフィールを作成します。写真撮影、自己PRの作成、希望条件の設定などを担当者と一緒に行います。このプロフィールがお相手の第一印象を決めるため、しっかり作り込むことが大切です。",
  },
  {
    step: 3,
    title: "お相手紹介・マッチング",
    description:
      "担当者からの紹介やデータマッチング、自分での検索などでお相手を探します。気になる方にお見合いを申し込みましょう。月に数名〜20名程度のお相手に申し込みが可能です。",
  },
  {
    step: 4,
    title: "お見合い",
    description:
      "マッチングが成立したら、お見合いを行います。ホテルのラウンジやカフェなどで1時間程度お話しします。最近はオンラインお見合いにも対応。お見合い後、双方が「また会いたい」と思えば仮交際に進みます。",
  },
  {
    step: 5,
    title: "仮交際・真剣交際",
    description:
      "仮交際では複数の方と同時にお会いし、相性を見極めます。その中から一人に絞って真剣交際に進みます。担当者が交際中のアドバイスやフォローを行い、二人の関係構築をサポートしてくれます。",
  },
  {
    step: 6,
    title: "プロポーズ・成婚退会",
    description:
      "真剣交際を経てお互いの結婚の意思が固まったら、プロポーズをして成婚退会となります。相談所によってはプロポーズのサポートや、退会後の結婚準備のアドバイスも行っています。",
  },
];

const faqItems = [
  {
    question: "結婚相談所に入会するのに必要な書類は何ですか？",
    answer:
      "一般的に必要な書類は、本人確認書類（運転免許証・パスポートなど）、独身証明書（本籍地の市区町村で取得）、収入証明書（源泉徴収票・確定申告書など）、学歴証明書（卒業証明書）、勤務先証明書などです。相談所によって異なりますが、独身証明書はほぼ必須です。",
  },
  {
    question: "結婚相談所の費用の相場はどのくらいですか？",
    answer:
      "費用は相談所のタイプによって大きく異なります。オンライン型のnaco-doなら年間約11万円、ハイブリッド型のゼクシィ縁結びエージェントなら年間約24万円、仲人型のサンマリエやIBJメンバーズなら年間約60万円が目安です。成婚料の有無で総額が大きく変わります。",
  },
  {
    question: "仲人型とデータマッチング型の違いは何ですか？",
    answer:
      "仲人型は専任の担当者が条件だけでなく性格や価値観も考慮してお相手を紹介するスタイル。手厚いサポートが受けられますが費用は高め。データマッチング型は条件を入力してシステムでお相手を検索するスタイル。効率的ですがサポートは少なめ。ハイブリッド型はその両方を兼ね備えています。",
  },
  {
    question: "成婚率はどのように計算されていますか？",
    answer:
      "成婚率の計算方法は相談所によって異なるため、単純な比較は難しいです。「全退会者に対する成婚退会の割合」「在籍会員の年間成婚率」など定義が違います。成婚率だけでなく、成婚の定義や算出方法も確認しましょう。",
  },
  {
    question: "結婚相談所はどのくらいの期間利用するのが一般的ですか？",
    answer:
      "一般的には6ヶ月〜1年程度で成婚退会される方が多いです。パートナーエージェントでは成婚退会者の65.6%が1年以内、IBJメンバーズでも1年以内の成婚が多くなっています。ただし個人差があり、2〜3ヶ月で成婚する方もいれば、2年以上かかる方もいます。",
  },
  {
    question: "オンライン型の結婚相談所のメリット・デメリットは？",
    answer:
      "メリットは料金が安い（月6,980円〜）、スマホで完結するため忙しい方でも利用しやすい、全国どこからでも活動できる点です。デメリットは対面サポートがない、自主的に動く必要がある、店舗型と比べてモチベーション管理が難しい点です。",
  },
  {
    question: "結婚相談所に向いているのはどんな人ですか？",
    answer:
      "真剣に結婚を考えている方、効率的にお相手を探したい方、恋愛経験が少なくプロのサポートが欲しい方、年齢的に早く結婚したい方に向いています。逆に、気軽な出会いを求める方やまだ結婚に迷いがある方にはマッチングアプリの方が合うかもしれません。",
  },
  {
    question: "途中で退会することはできますか？",
    answer:
      "はい、ほとんどの結婚相談所では途中退会が可能です。ただし、契約期間の途中退会の場合、違約金が発生する場合があります。入会前に中途退会時の条件を必ず確認しましょう。クーリングオフ（契約から8日以内）も適用されます。",
  },
  {
    question: "お見合いを断ることはできますか？",
    answer:
      "はい、お見合い後に「今回はご縁がなかった」とお断りすることは全く問題ありません。お断りの連絡は担当者を通じて行われるため、直接相手に伝える必要はなく、心理的な負担も軽減されます。これは結婚相談所の大きなメリットの一つです。",
  },
  {
    question: "結婚相談所とマッチングアプリの違いは何ですか？",
    answer:
      "最大の違いは「本人確認の厳格さ」と「結婚への本気度」です。結婚相談所は独身証明書や収入証明書の提出が必須のため、身元が保証されており、全員が結婚を前提に活動しています。また、専任の担当者によるサポートがあるのも大きな違いです。一方、費用はマッチングアプリの方が圧倒的に安価です。",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "【2026年最新】結婚相談所おすすめ6選を徹底比較！料金・口コミ・成婚率まで",
  author: {
    "@type": "Organization",
    name: "結婚相談所比較ナビ",
    url: "https://kekkon-navi.pages.dev",
  },
  publisher: {
    "@type": "Organization",
    name: "結婚相談所比較ナビ",
    url: "https://kekkon-navi.pages.dev",
    logo: {
      "@type": "ImageObject",
      url: "https://kekkon-navi.pages.dev/logo.png",
    },
  },
  datePublished: "2026-01-15",
  dateModified: "2026-04-13",
  description:
    "結婚相談所おすすめ6社を徹底比較。ゼクシィ縁結びエージェント・ツヴァイ・サンマリエ・IBJメンバーズ・naco-do・パートナーエージェントの料金・会員数・成婚率・口コミを詳しく解説。",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://kekkon-navi.pages.dev/ranking/",
  },
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "ホーム",
      item: "https://kekkon-navi.pages.dev/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "結婚相談所おすすめ6選",
      item: "https://kekkon-navi.pages.dev/ranking/",
    },
  ],
};

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="text-[#c9a76c]" aria-label={`${rating}点`}>
      {"★".repeat(rating)}
      {"☆".repeat(5 - rating)}
    </span>
  );
}

export default function RankingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />

      <Breadcrumb items={breadcrumbItems} />

      {/* Hero */}
      <section className="relative overflow-hidden py-12 md:py-16">
        <div className="absolute inset-0 bg-gradient-to-br from-[#fdf2f6] via-[#faf5ee] to-[#f3eef7]" />
        <div className="absolute top-10 right-10 w-32 h-32 bg-[#c45b84]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-[#9b8ec4]/10 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <p className="inline-block text-xs font-semibold text-[#c9a76c] bg-[#faf5ee] px-4 py-1.5 rounded-full mb-4 tracking-wider border border-[#f0dde3]">
            2026年4月最新版
          </p>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
            結婚相談所おすすめ<span className="text-gradient">6選</span>を
            <br className="hidden md:block" />
            徹底比較！
          </h1>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            料金・会員数・成婚率・サポート内容・口コミを徹底調査。
            <br className="hidden md:block" />
            6社に絞った深い比較であなたに最適な結婚相談所が見つかります。
          </p>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="card">
            <p className="text-sm font-bold text-gray-900 mb-3">この記事の目次</p>
            <ol className="space-y-2 text-sm">
              <li>
                <a href="#how-to-choose" className="text-[#c45b84] hover:underline">
                  1. 結婚相談所の選び方3つのポイント
                </a>
              </li>
              <li>
                <a href="#best6" className="text-[#c45b84] hover:underline">
                  2. 結婚相談所おすすめBEST6
                </a>
              </li>
              <li>
                <a href="#detailed-comparison" className="text-[#c45b84] hover:underline">
                  3. 6社を6つの基準で徹底比較
                </a>
              </li>
              <li>
                <a href="#type-recommendation" className="text-[#c45b84] hover:underline">
                  4. タイプ別おすすめ結婚相談所
                </a>
              </li>
              <li>
                <a href="#flow" className="text-[#c45b84] hover:underline">
                  5. 結婚相談所の入会から成婚までの流れ
                </a>
              </li>
              <li>
                <a href="#faq" className="text-[#c45b84] hover:underline">
                  6. よくある質問
                </a>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* How to choose */}
      <section id="how-to-choose" className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-8 text-center">
            結婚相談所の選び方<span className="text-gradient">3つのポイント</span>
          </h2>

          {/* Point 1: Type */}
          <div className="card mb-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#fdf2f6] text-[#c45b84] font-bold text-lg">
                1
              </span>
              <h3 className="text-lg font-bold text-gray-900">
                仲人型 vs データマッチング型 vs ハイブリッド型
              </h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              結婚相談所は大きく3つのタイプに分かれます。それぞれの特徴を理解して、自分に合ったタイプを選びましょう。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#fdf8fa] rounded-xl p-4 border border-[#f0dde3]">
                <p className="text-sm font-bold text-[#c45b84] mb-2">仲人型</p>
                <p className="text-xs text-gray-600 leading-relaxed">
                  専任の仲人・カウンセラーが条件だけでなく性格や価値観も考慮してお相手を紹介。手厚いサポートが特徴ですが、費用は高めです。
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  <span className="font-medium">代表例：</span>サンマリエ、IBJメンバーズ、パートナーエージェント
                </p>
              </div>
              <div className="bg-[#fdf8fa] rounded-xl p-4 border border-[#f0dde3]">
                <p className="text-sm font-bold text-[#c9a76c] mb-2">データマッチング型</p>
                <p className="text-xs text-gray-600 leading-relaxed">
                  希望条件や価値観をもとにシステムでお相手を検索・紹介。効率的に多くの方と出会えますが、サポートは少なめです。
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  <span className="font-medium">代表例：</span>オーネット（今回の比較対象外）
                </p>
              </div>
              <div className="bg-[#fdf8fa] rounded-xl p-4 border border-[#f0dde3]">
                <p className="text-sm font-bold text-[#9b8ec4] mb-2">ハイブリッド型</p>
                <p className="text-xs text-gray-600 leading-relaxed">
                  データマッチングと仲人型の良いとこ取り。システムで効率的に検索しつつ、担当者のサポートも受けられます。
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  <span className="font-medium">代表例：</span>ゼクシィ縁結びエージェント、ツヴァイ
                </p>
              </div>
            </div>
          </div>

          {/* Point 2: Pricing */}
          <div className="card mb-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#fdf2f6] text-[#c45b84] font-bold text-lg">
                2
              </span>
              <h3 className="text-lg font-bold text-gray-900">
                料金体系をしっかり確認する
              </h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              結婚相談所の料金は「入会金」「月会費」「お見合い料」「成婚料」の4つに分かれます。月会費だけでなくトータルコストで比較することが大切です。
            </p>
            <div className="bg-[#fdf8fa] rounded-xl p-4 border border-[#f0dde3]">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div>
                  <p className="text-xs font-bold text-gray-700 mb-1">入会金</p>
                  <p className="text-xs text-gray-600">入会時に一括で支払う費用。29,800円〜187,000円と幅広い。</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-700 mb-1">月会費</p>
                  <p className="text-xs text-gray-600">毎月の活動費用。6,980円〜18,700円が相場。</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-700 mb-1">お見合い料</p>
                  <p className="text-xs text-gray-600">お見合い1回ごとの費用。無料〜11,000円。無料の会社が主流。</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-700 mb-1">成婚料</p>
                  <p className="text-xs text-gray-600">成婚退会時に支払う費用。無料〜220,000円。最大の差がつくポイント。</p>
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-3 leading-relaxed">
              ※ 成婚料は「成功報酬」の意味合いがあるため、担当者のモチベーションにつながるという考え方もあります。一概に「高い＝悪い」ではありません。
            </p>
          </div>

          {/* Point 3: Support */}
          <div className="card mb-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#fdf2f6] text-[#c45b84] font-bold text-lg">
                3
              </span>
              <h3 className="text-lg font-bold text-gray-900">
                サポート内容を比較する
              </h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              同じ料金帯でもサポート内容は大きく異なります。以下のポイントをチェックしましょう。
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <span className="mt-0.5 text-[#c45b84] shrink-0">&#10003;</span>
                <div>
                  <span className="font-medium text-gray-700">担当者の人数制</span>
                  <span className="text-xs block text-gray-500">少人数担当制ほど一人ひとりに手厚いサポートが期待できます</span>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <span className="mt-0.5 text-[#c45b84] shrink-0">&#10003;</span>
                <div>
                  <span className="font-medium text-gray-700">面談の頻度</span>
                  <span className="text-xs block text-gray-500">定期面談か随時相談か。月1回以上の定期面談があると安心です</span>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <span className="mt-0.5 text-[#c45b84] shrink-0">&#10003;</span>
                <div>
                  <span className="font-medium text-gray-700">紹介人数</span>
                  <span className="text-xs block text-gray-500">月に何名紹介してもらえるか。自分での検索もできるかを確認</span>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <span className="mt-0.5 text-[#c45b84] shrink-0">&#10003;</span>
                <div>
                  <span className="font-medium text-gray-700">セミナー・レッスン</span>
                  <span className="text-xs block text-gray-500">婚活セミナー、ファッション診断、メイクレッスンなどの付帯サービス</span>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <span className="mt-0.5 text-[#c45b84] shrink-0">&#10003;</span>
                <div>
                  <span className="font-medium text-gray-700">お見合い後のフォロー</span>
                  <span className="text-xs block text-gray-500">お見合い後のフィードバックや交際中のアドバイスがあるか</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Competitive analysis intro */}
      <section className="py-8 md:py-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="card bg-gradient-to-r from-[#fdf2f6] to-[#f3eef7] border-[#f0dde3]">
            <h3 className="text-base font-bold text-gray-900 mb-3">
              他サイトとの違い：なぜ6社に絞っているのか
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              多くの結婚相談所比較サイトでは7〜17社を幅広く紹介していますが、情報が浅くなりがちです。当サイトでは、実績・知名度・サービス品質の観点から厳選した6社に絞り、それぞれを深く掘り下げて比較しています。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-white rounded-lg p-3 border border-[#f0dde3]">
                <p className="text-xs font-bold text-[#c45b84] mb-1">一般的な比較サイト</p>
                <p className="text-xs text-gray-600">7〜17社を広く浅く紹介。各社の違いがわかりにくい。</p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-[#f0dde3]">
                <p className="text-xs font-bold text-[#c9a76c] mb-1">当サイトの特徴</p>
                <p className="text-xs text-gray-600">6社に特化した深い比較。料金・口コミ・成婚率まで徹底解説。</p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-[#f0dde3]">
                <p className="text-xs font-bold text-[#9b8ec4] mb-1">タイプ別おすすめ</p>
                <p className="text-xs text-gray-600">コスパ・サポート・会員数など、重視するポイント別に最適な1社を提案。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selection criteria */}
      <section className="pb-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="card">
            <h3 className="text-base font-bold text-gray-900 mb-3">
              6社の選定基準
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              今回ご紹介する6社は、以下の基準をすべて満たす結婚相談所を選びました。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              <div className="flex items-start gap-2">
                <span className="text-[#c45b84] mt-0.5 shrink-0 text-sm">&#10003;</span>
                <div>
                  <p className="text-xs font-medium text-gray-700">運営実績3年以上</p>
                  <p className="text-xs text-gray-500">長期運営による信頼性</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#c45b84] mt-0.5 shrink-0 text-sm">&#10003;</span>
                <div>
                  <p className="text-xs font-medium text-gray-700">会員数1万人以上</p>
                  <p className="text-xs text-gray-500">十分な出会いの機会</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#c45b84] mt-0.5 shrink-0 text-sm">&#10003;</span>
                <div>
                  <p className="text-xs font-medium text-gray-700">身元確認の徹底</p>
                  <p className="text-xs text-gray-500">独身証明書・収入証明必須</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#c45b84] mt-0.5 shrink-0 text-sm">&#10003;</span>
                <div>
                  <p className="text-xs font-medium text-gray-700">専任担当者制</p>
                  <p className="text-xs text-gray-500">担当者による個別サポート</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#c45b84] mt-0.5 shrink-0 text-sm">&#10003;</span>
                <div>
                  <p className="text-xs font-medium text-gray-700">料金体系の透明性</p>
                  <p className="text-xs text-gray-500">追加費用が明確</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[#c45b84] mt-0.5 shrink-0 text-sm">&#10003;</span>
                <div>
                  <p className="text-xs font-medium text-gray-700">口コミ評価が良好</p>
                  <p className="text-xs text-gray-500">実際の利用者の満足度</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BEST 6 */}
      <section id="best6" className="section-light py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 text-center">
            結婚相談所おすすめ<span className="text-gradient">BEST6</span>
          </h2>
          <p className="text-sm text-gray-500 text-center mb-8">
            料金・会員数・サポート・口コミを総合評価してランキング
          </p>

          {/* Quick comparison table */}
          <div className="card mb-10 overflow-x-auto">
            <h3 className="text-base font-bold text-gray-900 mb-4">6社クイック比較表</h3>
            <table className="w-full text-xs min-w-[700px]">
              <thead>
                <tr className="border-b border-[#f0dde3]">
                  <th className="text-left py-3 px-2 font-semibold text-gray-700">順位</th>
                  <th className="text-left py-3 px-2 font-semibold text-gray-700">相談所</th>
                  <th className="text-left py-3 px-2 font-semibold text-gray-700">タイプ</th>
                  <th className="text-left py-3 px-2 font-semibold text-gray-700">月会費</th>
                  <th className="text-left py-3 px-2 font-semibold text-gray-700">会員数</th>
                  <th className="text-left py-3 px-2 font-semibold text-gray-700">成婚料</th>
                  <th className="text-left py-3 px-2 font-semibold text-gray-700">年間目安</th>
                </tr>
              </thead>
              <tbody>
                {companies.map((c) => (
                  <tr key={c.id} className="border-b border-[#f0dde3]/50 hover:bg-[#fdf8fa] transition-colors">
                    <td className="py-3 px-2">
                      <span
                        className="inline-flex items-center justify-center w-7 h-7 rounded-full text-white text-xs font-bold"
                        style={{ backgroundColor: c.badgeColor }}
                      >
                        {c.rank}
                      </span>
                    </td>
                    <td className="py-3 px-2">
                      <a href={`#${c.id}`} className="font-medium text-gray-900 hover:text-[#c45b84] transition-colors">
                        {c.name}
                      </a>
                    </td>
                    <td className="py-3 px-2 text-gray-600">{c.type}</td>
                    <td className="py-3 px-2 text-gray-600">{c.pricing.monthly}</td>
                    <td className="py-3 px-2 text-gray-600">{c.members.replace(/（.*）/, "")}</td>
                    <td className="py-3 px-2 text-gray-600">{c.pricing.seikon.split("（")[0]}</td>
                    <td className="py-3 px-2 font-medium text-[#c45b84]">{c.pricing.yearly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Individual company details */}
          {companies.map((company) => (
            <div key={company.id} id={company.id} className="card mb-8">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full text-white font-bold text-xl"
                    style={{ backgroundColor: company.badgeColor }}
                  >
                    {company.rank}
                  </span>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900">
                      {company.name}
                    </h3>
                    <p className="text-xs text-gray-500">{company.tagline}</p>
                  </div>
                </div>
                <span
                  className="text-[11px] font-bold text-white px-3 py-1 rounded-full shrink-0"
                  style={{ backgroundColor: company.badgeColor }}
                >
                  {company.badge}
                </span>
              </div>

              {/* Type badge */}
              <div className="mb-4">
                <span className="inline-block text-xs font-medium text-[#9b8ec4] bg-[#f3eef7] px-3 py-1 rounded-full border border-[#e0d4ed]">
                  {company.type}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                {company.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-bold text-gray-800 mb-3">主な特徴</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {company.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <span className="text-[#c45b84] mt-0.5 shrink-0">&#10003;</span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing table */}
              <div className="mb-6">
                <h4 className="text-sm font-bold text-gray-800 mb-3">料金表</h4>
                <div className="bg-[#fdf8fa] rounded-xl border border-[#f0dde3] overflow-hidden">
                  <table className="w-full text-sm">
                    <tbody>
                      <tr className="border-b border-[#f0dde3]/50">
                        <td className="py-3 px-4 font-medium text-gray-700 bg-[#fdf2f6]/50 w-1/3">入会金・初期費用</td>
                        <td className="py-3 px-4 text-gray-600">{company.pricing.initial}</td>
                      </tr>
                      <tr className="border-b border-[#f0dde3]/50">
                        <td className="py-3 px-4 font-medium text-gray-700 bg-[#fdf2f6]/50">月会費</td>
                        <td className="py-3 px-4 text-gray-600">{company.pricing.monthly}</td>
                      </tr>
                      <tr className="border-b border-[#f0dde3]/50">
                        <td className="py-3 px-4 font-medium text-gray-700 bg-[#fdf2f6]/50">お見合い料</td>
                        <td className="py-3 px-4 text-gray-600">{company.pricing.omiai}</td>
                      </tr>
                      <tr className="border-b border-[#f0dde3]/50">
                        <td className="py-3 px-4 font-medium text-gray-700 bg-[#fdf2f6]/50">成婚料</td>
                        <td className="py-3 px-4 text-gray-600">{company.pricing.seikon}</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium text-[#c45b84] bg-[#fdf2f6]/50">年間目安</td>
                        <td className="py-3 px-4 font-bold text-[#c45b84]">{company.pricing.yearly}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-[#fdf8fa] rounded-xl p-4 border border-[#f0dde3]">
                  <p className="text-xs font-bold text-gray-700 mb-1">会員数</p>
                  <p className="text-sm text-gray-600">{company.members}</p>
                </div>
                <div className="bg-[#fdf8fa] rounded-xl p-4 border border-[#f0dde3]">
                  <p className="text-xs font-bold text-gray-700 mb-1">成婚率</p>
                  <p className="text-sm text-gray-600">{company.seikonRate}</p>
                </div>
                <div className="bg-[#fdf8fa] rounded-xl p-4 border border-[#f0dde3]">
                  <p className="text-xs font-bold text-gray-700 mb-1">サポート体制</p>
                  <p className="text-sm text-gray-600">{company.support}</p>
                </div>
                <div className="bg-[#fdf8fa] rounded-xl p-4 border border-[#f0dde3]">
                  <p className="text-xs font-bold text-gray-700 mb-1">対応エリア</p>
                  <p className="text-sm text-gray-600">{company.area}</p>
                </div>
              </div>

              {/* Merits / Demerits */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-[#fdf2f6] rounded-xl p-4 border border-[#f0dde3]">
                  <h4 className="text-sm font-bold text-[#c45b84] mb-3">メリット</h4>
                  <ul className="space-y-2">
                    {company.merits.map((merit) => (
                      <li
                        key={merit}
                        className="flex items-start gap-2 text-xs text-gray-700"
                      >
                        <span className="text-[#c45b84] mt-0.5 shrink-0">◎</span>
                        {merit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-[#fff8f0] rounded-xl p-4 border border-[#f0e0d0]">
                  <h4 className="text-sm font-bold text-[#c9a76c] mb-3">デメリット</h4>
                  <ul className="space-y-2">
                    {company.demerits.map((demerit) => (
                      <li
                        key={demerit}
                        className="flex items-start gap-2 text-xs text-gray-700"
                      >
                        <span className="text-[#c9a76c] mt-0.5 shrink-0">△</span>
                        {demerit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Target */}
              <div className="bg-gradient-to-r from-[#fdf2f6] to-[#f3eef7] rounded-xl p-4 border border-[#f0dde3] mb-6">
                <h4 className="text-sm font-bold text-gray-800 mb-2">こんな人におすすめ</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {company.target}
                </p>
              </div>

              {/* Reviews */}
              <div id="reviews">
                <h4 className="text-sm font-bold text-gray-800 mb-3">口コミ・評判</h4>
                <div className="space-y-3">
                  {company.reviews.map((review, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-xl p-4 border border-[#f0dde3]"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-gray-500">{review.age}</span>
                        <StarRating rating={review.rating} />
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {review.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed comparison */}
      <section id="detailed-comparison" className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 text-center">
            6社を<span className="text-gradient">6つの基準</span>で徹底比較
          </h2>
          <p className="text-sm text-gray-500 text-center mb-8">
            料金・会員数・成婚率・サポート・対応エリア・オンライン対応を一覧比較
          </p>

          {comparisonCategories.map((category) => (
            <div key={category.id} id={category.id} className="card mb-6 overflow-x-auto">
              <h3 className="text-base font-bold text-gray-900 mb-4">{category.title}</h3>
              <table className="w-full text-xs min-w-[600px]">
                <thead>
                  <tr className="border-b border-[#f0dde3]">
                    {category.headers.map((header) => (
                      <th
                        key={header}
                        className="text-left py-3 px-2 font-semibold text-gray-700"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {category.rows.map((row, i) => (
                    <tr
                      key={i}
                      className="border-b border-[#f0dde3]/50 hover:bg-[#fdf8fa] transition-colors"
                    >
                      {row.map((cell, j) => (
                        <td
                          key={j}
                          className={`py-3 px-2 ${
                            j === 0
                              ? "font-medium text-gray-900"
                              : "text-gray-600"
                          }`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </section>

      {/* Type recommendation */}
      <section id="type-recommendation" className="section-light py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 text-center">
            <span className="text-gradient">タイプ別</span>おすすめ結婚相談所
          </h2>
          <p className="text-sm text-gray-500 text-center mb-8">
            あなたの優先事項に合わせたベストチョイスをご提案
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {typeRecommendations.map((rec) => (
              <div key={rec.type} className="card">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">{rec.icon}</span>
                  <div>
                    <p className="text-sm font-bold text-gray-900">{rec.type}</p>
                    <p className="text-xs font-semibold text-[#c45b84]">
                      → {rec.company}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {rec.reason}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flow */}
      <section id="flow" className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 text-center">
            結婚相談所の<span className="text-gradient">入会から成婚まで</span>の流れ
          </h2>
          <p className="text-sm text-gray-500 text-center mb-8">
            6つのステップで理想のパートナーとの出会いへ
          </p>

          <div className="space-y-6">
            {flowSteps.map((step) => (
              <div key={step.step} className="card flex gap-4">
                <div className="shrink-0">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#c45b84] to-[#9b8ec4] text-white font-bold text-lg">
                    {step.step}
                  </span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips for success */}
      <section className="section-light py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 text-center">
            結婚相談所で<span className="text-gradient">成功する</span>ための5つのコツ
          </h2>
          <p className="text-sm text-gray-500 text-center mb-8">
            成婚退会した先輩たちの声をもとにまとめました
          </p>

          <div className="space-y-4">
            <div className="card">
              <div className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#fdf2f6] text-[#c45b84] font-bold text-sm shrink-0">1</span>
                <div>
                  <h3 className="text-sm font-bold text-gray-900 mb-1">プロフィール写真にこだわる</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    第一印象はプロフィール写真で決まります。スマホの自撮りではなく、プロのカメラマンに撮影してもらいましょう。多くの結婚相談所では写真撮影のサポートがあります。自然な笑顔、清潔感のある服装がポイントです。
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#fdf2f6] text-[#c45b84] font-bold text-sm shrink-0">2</span>
                <div>
                  <h3 className="text-sm font-bold text-gray-900 mb-1">条件を広げすぎない・狭めすぎない</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    条件を絞りすぎるとお見合いの機会が減り、広げすぎるとミスマッチが増えます。「絶対に譲れない条件」と「できれば」の条件を分けて考えましょう。担当者と相談しながら、適切な条件設定を見つけることが大切です。
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#fdf2f6] text-[#c45b84] font-bold text-sm shrink-0">3</span>
                <div>
                  <h3 className="text-sm font-bold text-gray-900 mb-1">積極的にお見合いを組む</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    成婚した方の多くは、活動の初期に積極的にお見合いを組んでいます。最初の3ヶ月で10人以上の方とお会いするのが理想的。プロフィールだけではわからない「雰囲気」や「フィーリング」を大切にしましょう。
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#fdf2f6] text-[#c45b84] font-bold text-sm shrink-0">4</span>
                <div>
                  <h3 className="text-sm font-bold text-gray-900 mb-1">担当者を最大限活用する</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    担当者はあなたの婚活のプロフェッショナルパートナーです。お見合いの感想、悩み、不安は遠慮せずに相談しましょう。フィードバックをもとに改善を重ねることで、成婚までのスピードが格段に上がります。
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#fdf2f6] text-[#c45b84] font-bold text-sm shrink-0">5</span>
                <div>
                  <h3 className="text-sm font-bold text-gray-900 mb-1">期限を決めて活動する</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    「1年以内に成婚する」など明確な目標を設定しましょう。ダラダラと活動を続けるよりも、期限を意識して集中的に活動する方が成果が出やすいです。パートナーエージェントでは成婚退会者の65.6%が1年以内に成婚しています。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Age-specific advice */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 text-center">
            <span className="text-gradient">年代別</span>結婚相談所の選び方
          </h2>
          <p className="text-sm text-gray-500 text-center mb-8">
            年齢によって重視すべきポイントは異なります
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="text-base font-bold text-[#c45b84] mb-3">20代の方</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                20代は結婚相談所の中でも人気の年代です。時間に余裕がある分、焦らずじっくり相手を探せます。
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-xs text-gray-600">
                  <span className="text-[#c45b84] mt-0.5 shrink-0">&#10003;</span>
                  費用を抑えたいならnaco-do（月6,980円〜）がおすすめ
                </li>
                <li className="flex items-start gap-2 text-xs text-gray-600">
                  <span className="text-[#c45b84] mt-0.5 shrink-0">&#10003;</span>
                  ツヴァイの20代割引プランも要チェック
                </li>
                <li className="flex items-start gap-2 text-xs text-gray-600">
                  <span className="text-[#c45b84] mt-0.5 shrink-0">&#10003;</span>
                  婚活経験が少ないならサポート重視のサンマリエも検討
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-base font-bold text-[#c9a76c] mb-3">30代前半の方</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                婚活の主戦場となる年代。条件の良いお相手と出会いやすく、選択肢も豊富です。
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-xs text-gray-600">
                  <span className="text-[#c9a76c] mt-0.5 shrink-0">&#10003;</span>
                  会員数の多いツヴァイで出会いの幅を最大化
                </li>
                <li className="flex items-start gap-2 text-xs text-gray-600">
                  <span className="text-[#c9a76c] mt-0.5 shrink-0">&#10003;</span>
                  ゼクシィ縁結びエージェントのバランスの良さも魅力
                </li>
                <li className="flex items-start gap-2 text-xs text-gray-600">
                  <span className="text-[#c9a76c] mt-0.5 shrink-0">&#10003;</span>
                  本気度の高い方はIBJメンバーズで短期集中も
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-base font-bold text-[#9b8ec4] mb-3">30代後半の方</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                効率的な活動が重要になる年代。プロのサポートを最大限活用しましょう。
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-xs text-gray-600">
                  <span className="text-[#9b8ec4] mt-0.5 shrink-0">&#10003;</span>
                  成婚率No.1のパートナーエージェントで短期決戦
                </li>
                <li className="flex items-start gap-2 text-xs text-gray-600">
                  <span className="text-[#9b8ec4] mt-0.5 shrink-0">&#10003;</span>
                  IBJメンバーズの成婚率50.4%にも注目
                </li>
                <li className="flex items-start gap-2 text-xs text-gray-600">
                  <span className="text-[#9b8ec4] mt-0.5 shrink-0">&#10003;</span>
                  担当者の手厚さを重視してサンマリエも候補に
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-base font-bold text-[#5b8a6b] mb-3">40代以上の方</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                経験豊富な仲人のサポートが成功の鍵。諦めずに活動を続けることが大切です。
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-xs text-gray-600">
                  <span className="text-[#5b8a6b] mt-0.5 shrink-0">&#10003;</span>
                  サンマリエの40年超のノウハウを活用
                </li>
                <li className="flex items-start gap-2 text-xs text-gray-600">
                  <span className="text-[#5b8a6b] mt-0.5 shrink-0">&#10003;</span>
                  パートナーエージェントのPDCAサイクルで改善を重ねる
                </li>
                <li className="flex items-start gap-2 text-xs text-gray-600">
                  <span className="text-[#5b8a6b] mt-0.5 shrink-0">&#10003;</span>
                  ツヴァイの会員数の多さで選択肢を確保
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section-light py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-center text-gray-900 mb-8">
            よくある質問
          </h2>
          <div className="space-y-4">
            {faqItems.map((faq) => (
              <details
                key={faq.question}
                className="group border border-[#f0dde3] rounded-xl bg-white"
              >
                <summary className="flex items-center justify-between cursor-pointer px-5 py-4 text-sm font-semibold text-gray-900 hover:bg-[#fdf2f6] rounded-xl transition-colors">
                  <span>{faq.question}</span>
                  <svg
                    className="w-5 h-5 text-[#c45b84] shrink-0 ml-4 group-open:rotate-180 transition-transform"
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
        <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-[#c45b84]/10 rounded-full blur-3xl" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            まずは無料カウンセリングから
            <br />
            婚活の第一歩を踏み出そう
          </h2>
          <p className="text-sm text-gray-600 mb-8 leading-relaxed">
            ほとんどの結婚相談所では無料カウンセリングを実施しています。
            <br className="hidden md:block" />
            2〜3社の無料カウンセリングを受けて比較するのがおすすめです。
            <br className="hidden md:block" />
            あなたにぴったりの結婚相談所で、素敵な出会いを見つけましょう。
          </p>
          <Link href="/" className="btn-cta text-base md:text-lg">
            トップページに戻る
          </Link>
        </div>
      </section>
    </>
  );
}
