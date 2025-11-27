'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useState } from 'react';
import LocaleSwitcher from './LocaleSwitcher';

export default function Navbar() {
  const t = useTranslations();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center group">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-primary-light rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v10z"/>
                </svg>
              </div>
              <span className="ml-3 text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                {t('home.title')}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1 rtl:space-x-reverse">
            <Link
              href="/"
              className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-primary hover:bg-gray-50 transition-all"
            >
              {t('nav.home')}
            </Link>
            <Link
              href="/products"
              className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-primary hover:bg-gray-50 transition-all"
            >
              {t('nav.products')}
            </Link>
            <Link
              href="/categories"
              className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-primary hover:bg-gray-50 transition-all"
            >
              {t('nav.categories')}
            </Link>
            <Link
              href="/group-buying"
              className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-primary hover:bg-gray-50 transition-all"
            >
              {t('nav.groupBuying')}
            </Link>
            <Link
              href="/deals"
              className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-primary hover:bg-gray-50 transition-all"
            >
              {t('nav.deals')}
            </Link>
            <Link
              href="/profile"
              className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-primary hover:bg-gray-50 transition-all"
            >
              {t('nav.profile')}
            </Link>
            <Link
              href="/admin"
              className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-primary hover:bg-gray-50 transition-all"
            >
              {t('nav.admin')}
            </Link>
            <Link
              href="/signin"
              className="ml-4 px-6 py-2.5 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
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
              className="ml-3 inline-flex items-center justify-center p-2 rounded-lg text-gray-600 hover:text-primary hover:bg-gray-50 focus:outline-none transition-all"
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
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-3 rounded-lg text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.home')}
            </Link>
            <Link
              href="/products"
              className="block px-3 py-3 rounded-lg text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.products')}
            </Link>
            <Link
              href="/categories"
              className="block px-3 py-3 rounded-lg text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.categories')}
            </Link>
            <Link
              href="/group-buying"
              className="block px-3 py-3 rounded-lg text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.groupBuying')}
            </Link>
            <Link
              href="/deals"
              className="block px-3 py-3 rounded-lg text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.deals')}
            </Link>
            <Link
              href="/profile"
              className="block px-3 py-3 rounded-lg text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.profile')}
            </Link>
            <Link
              href="/admin"
              className="block px-3 py-3 rounded-lg text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.admin')}
            </Link>
            <Link
              href="/signin"
              className="block px-3 py-3 rounded-lg text-base font-medium text-white bg-gradient-to-r from-primary to-primary-light shadow-lg transition-all"
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
