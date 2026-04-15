"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  { label: "トップ", href: "/" },
  { label: "おすすめ6選", href: "/ranking/" },
  { label: "料金比較", href: "/articles/price-comparison/" },
  { label: "業者レビュー", href: "/reviews/zexy/" },
  { label: "婚活コラム", href: "/articles/should-i-join/" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#fffbf7]/90 backdrop-blur-md border-b border-[#edddd5] shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="text-xl font-bold text-gradient">結婚相談所比較ナビ</span>
          <span className="text-[10px] text-gray-500 tracking-wide">
            結婚相談所おすすめ6社を徹底比較
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-[#d4735e] hover:bg-[#fef5f2] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden p-2 text-gray-600 hover:text-[#d4735e] transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="メニューを開く"
          aria-expanded={isMenuOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <nav className="md:hidden border-t border-[#edddd5] bg-[#fffbf7]/95 backdrop-blur-md">
          <div className="max-w-6xl mx-auto px-4 py-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-3 text-sm font-medium text-gray-700 hover:text-[#d4735e] hover:bg-[#fef5f2] rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
