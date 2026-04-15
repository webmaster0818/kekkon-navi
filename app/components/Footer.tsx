import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Site info */}
          <div>
            <p className="text-lg font-bold mb-2">結婚相談所比較ナビ</p>
            <p className="text-sm text-pink-200 leading-relaxed">
              結婚相談所を徹底比較し、
              正直な情報をお届けするレビューサイトです。
              理想のパートナーとの出会いをサポートします。
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-sm font-semibold mb-3 text-pink-200">
              ページ一覧
            </p>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-pink-100 hover:text-white transition-colors"
                >
                  トップ
                </Link>
              </li>
              <li>
                <Link
                  href="/ranking/"
                  className="text-sm text-pink-100 hover:text-white transition-colors"
                >
                  おすすめ6選
                </Link>
              </li>
              <li>
                <Link
                  href="/ranking/#price-comparison"
                  className="text-sm text-pink-100 hover:text-white transition-colors"
                >
                  料金比較
                </Link>
              </li>
              <li>
                <Link
                  href="/ranking/#reviews"
                  className="text-sm text-pink-100 hover:text-white transition-colors"
                >
                  業者レビュー
                </Link>
              </li>
              <li>
                <Link
                  href="/ranking/#flow"
                  className="text-sm text-pink-100 hover:text-white transition-colors"
                >
                  婚活コラム
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <p className="text-sm font-semibold mb-3 text-pink-200">
              カテゴリー
            </p>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/ranking/"
                  className="text-sm text-pink-100 hover:text-white transition-colors"
                >
                  ランキング・比較
                </Link>
              </li>
              <li>
                <span className="text-sm text-pink-100">口コミ・評判</span>
              </li>
              <li>
                <span className="text-sm text-pink-100">料金・費用</span>
              </li>
              <li>
                <span className="text-sm text-pink-100">婚活の基礎知識</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-pink-900/50 text-center">
          <p className="text-xs text-pink-300">
            &copy; {new Date().getFullYear()} 結婚相談所比較ナビ All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
