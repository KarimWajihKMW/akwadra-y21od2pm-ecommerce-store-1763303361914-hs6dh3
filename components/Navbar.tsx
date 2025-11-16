'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useState } from 'react';
import LocaleSwitcher from './LocaleSwitcher';

export default function Navbar() {
  const t = useTranslations();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-primary">🛍️</span>
              <span className="ml-2 text-xl font-bold text-gray-800">
                {t('home.title')}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4 rtl:space-x-reverse">
            <Link
              href="/"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition"
            >
              {t('nav.home')}
            </Link>
            <Link
              href="/products"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition"
            >
              {t('nav.products')}
            </Link>
            <Link
              href="/categories"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition"
            >
              {t('nav.categories')}
            </Link>
            <Link
              href="/group-buying"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition"
            >
              {t('nav.groupBuying')}
            </Link>
            <Link
              href="/deals"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition"
            >
              {t('nav.deals')}
            </Link>
            <Link
              href="/profile"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition"
            >
              {t('nav.profile')}
            </Link>
            <Link
              href="/admin"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition"
            >
              {t('nav.admin')}
            </Link>
            <Link
              href="/signin"
              className="px-4 py-2 rounded-md text-sm font-medium text-white bg-primary hover:bg-primary-dark transition"
            >
              {t('nav.signin')}
            </Link>
            <LocaleSwitcher />
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <LocaleSwitcher />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="ml-2 inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
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
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.home')}
            </Link>
            <Link
              href="/products"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.products')}
            </Link>
            <Link
              href="/categories"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.categories')}
            </Link>
            <Link
              href="/group-buying"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.groupBuying')}
            </Link>
            <Link
              href="/deals"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.deals')}
            </Link>
            <Link
              href="/profile"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.profile')}
            </Link>
            <Link
              href="/admin"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.admin')}
            </Link>
            <Link
              href="/signin"
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-primary hover:bg-primary-dark"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.signin')}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
