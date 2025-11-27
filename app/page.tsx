'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function HomePage() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-bounce-slow">
            {t('home.title')}
          </h1>
          <p className="text-2xl text-gray-600 mb-12">
            {t('home.subtitle')}
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/products"
              className="px-8 py-4 bg-primary text-white rounded-lg font-semibold text-lg hover:bg-primary-dark transform hover:scale-105 transition-all shadow-lg"
            >
              {t('nav.products')}
            </Link>
            <Link
              href="/group-buying"
              className="px-8 py-4 bg-secondary text-gray-900 rounded-lg font-semibold text-lg hover:bg-secondary-dark transform hover:scale-105 transition-all shadow-lg"
            >
              {t('nav.groupBuying')}
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            {t('home.flashDeals')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-primary-light to-primary rounded-xl p-6 text-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all cursor-pointer"
              >
                <div className="text-4xl mb-4">🎁</div>
                <h3 className="text-xl font-bold mb-2">Flash Deal {i}</h3>
                <p className="text-sm opacity-90 mb-4">
                  Limited time offer - Save up to 70%
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">$99</span>
                  <span className="line-through text-sm">$199</span>
                </div>
                <button className="mt-4 w-full bg-white text-primary font-semibold py-2 rounded-lg hover:bg-gray-100 transition">
                  {t('product.buyNow')}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Group Buying Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            {t('home.groupDeals')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all cursor-pointer border-2 border-secondary"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-secondary text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                    {i}/5 {t('common.users')}
                  </span>
                  <span className="text-success font-bold">-50%</span>
                </div>
                <div className="text-4xl mb-4">📦</div>
                <h3 className="text-xl font-bold mb-2">Group Product {i}</h3>
                <p className="text-gray-600 mb-4">
                  Join now and save more with friends!
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-primary">$49</span>
                  <span className="line-through text-gray-400">$99</span>
                </div>
                <button className="w-full bg-secondary text-gray-900 font-semibold py-2 rounded-lg hover:bg-secondary-dark transition">
                  {t('product.joinGroup')}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">{t('home.inviteFriends')}</h2>
          <p className="text-xl mb-8">
            Invite your friends and earn points for every successful referral!
          </p>
          <Link
            href="/signup"
            className="inline-block px-8 py-4 bg-white text-primary rounded-lg font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all shadow-lg"
          >
            {t('nav.signup')}
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">{t('home.title')}</h3>
              <p className="text-gray-400">{t('home.subtitle')}</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">{t('nav.products')}</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/products" className="hover:text-white transition">
                    All Products
                  </Link>
                </li>
                <li>
                  <Link href="/deals" className="hover:text-white transition">
                    Flash Deals
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">{t('profile.myProfile')}</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/profile" className="hover:text-white transition">
                    My Account
                  </Link>
                </li>
                <li>
                  <Link href="/profile" className="hover:text-white transition">
                    My Orders
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">{t('common.language')}</h4>
              <p className="text-gray-400">العربية | English</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 كركر - منصة التسوق الجماعي. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
