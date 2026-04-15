import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "結婚相談所比較ナビ | 結婚相談所おすすめ6社を徹底比較【2026年】",
    template: "%s | 結婚相談所比較ナビ",
  },
  description:
    "結婚相談所のおすすめ6社を徹底比較。ゼクシィ縁結びエージェント・ツヴァイ・サンマリエ・IBJメンバーズ・naco-do・パートナーエージェントの料金・口コミ・成婚率を正直にレビュー。",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: "結婚相談所比較ナビ",
      url: "https://kekkon-navi.pages.dev",
      description:
        "結婚相談所のおすすめ6社を徹底比較。料金・口コミ・成婚率を正直にレビュー。理想のパートナーに出会える結婚相談所選びをサポートします。",
    },
    {
      "@type": "Organization",
      name: "結婚相談所比較ナビ",
      url: "https://kekkon-navi.pages.dev",
      logo: "https://kekkon-navi.pages.dev/logo.png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
