import { getRequestConfig } from 'next-intl/server';
import { cookies, headers } from 'next/headers';

export const locales = ['ar', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'ar';

function getLocale(): Locale {
  // Try to get locale from cookie
  const cookieStore = cookies();
  const localeCookie = cookieStore.get('NEXT_LOCALE')?.value as Locale | undefined;
  
  if (localeCookie && locales.includes(localeCookie)) {
    return localeCookie;
  }

  // Try to get locale from Accept-Language header
  const headersList = headers();
  const acceptLanguage = headersList.get('accept-language');
  
  if (acceptLanguage) {
    const preferredLocale = acceptLanguage
      .split(',')[0]
      .split('-')[0] as Locale;
    
    if (locales.includes(preferredLocale)) {
      return preferredLocale;
    }
  }

  // Fallback to default locale (Arabic)
  return defaultLocale;
}

export default getRequestConfig(async () => {
  const locale = getLocale();

  return {
    locale,
    messages: (await import(`./public/locales/${locale}/common.json`)).default,
  };
});
