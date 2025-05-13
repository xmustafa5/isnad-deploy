import { NextRequest, NextResponse } from 'next/server';
import { i18nRouter } from 'next-i18n-router';
import i18nConfig from '@/localization/i18nConfig';
import { CustomMiddleware } from './chain';

export function i18Middleware(middleware: CustomMiddleware) {
  return async (request: NextRequest, event: any, response: NextResponse) => {
    // initialize the i18n router
    i18nRouter(request, i18nConfig);
    // redirect to the default locale if the locale is not found in the URL
    const { pathname } = request.nextUrl;
    const locale =
      request.cookies.get('NEXT_LOCALE')?.value || i18nConfig.defaultLocale;
    const locales = i18nConfig.locales;
    if (!locales.some((locale) => pathname.startsWith(`/${locale}`)))
      return NextResponse.redirect(
        new URL(`/${locale}${pathname}`, request.url)
      );
    return middleware(request, event, response);
  };
}
