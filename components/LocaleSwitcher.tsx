'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useState, useTransition } from 'react';

export default function LocaleSwitcher() {
  const t = useTranslations('common');
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);

  const switchLocale = (newLocale: string) => {
    startTransition(() => {
      document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;
      window.location.reload();
    });
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={isPending}
        className="flex items-center space-x-2 rtl:space-x-reverse px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition"
      >
        <span>🌐</span>
        <span>{locale === 'ar' ? 'العربية' : 'English'}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 rtl:right-auto rtl:left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
          <button
            onClick={() => {
              switchLocale('ar');
              setIsOpen(false);
            }}
            className={`block w-full text-left rtl:text-right px-4 py-2 text-sm ${
              locale === 'ar'
                ? 'bg-primary text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            العربية
          </button>
          <button
            onClick={() => {
              switchLocale('en');
              setIsOpen(false);
            }}
            className={`block w-full text-left rtl:text-right px-4 py-2 text-sm ${
              locale === 'en'
                ? 'bg-primary text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            English
          </button>
        </div>
      )}
    </div>
  );
}
