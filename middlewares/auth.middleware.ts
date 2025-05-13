import { NextRequest, NextResponse } from "next/server";
import { CustomMiddleware } from "./chain";
import i18nConfig from "@/localization/i18nConfig";

export function authMiddleware(middleware: CustomMiddleware) {
  return async (request: NextRequest, event: any, response: NextResponse) => {
    const token = request.cookies.get("token")?.value;
    const locale =
      request.cookies.get("NEXT_LOCALE")?.value || i18nConfig.defaultLocale;
    const { pathname } = request.nextUrl;

    // Pages that don't require authentication
    const publicPages = [
      `/auth/signin`
    ];
    const isPublicPage = publicPages.some((item) => pathname.includes(item));

    // If user is logged in and trying to access auth pages, redirect to home
    if (isPublicPage && token) {
      return NextResponse.redirect(new URL(`/${locale}`, request.url));
    }

    // If user is not logged in and trying to access protected pages
    if (!isPublicPage && !token) {
      return NextResponse.redirect(
        new URL(`/${locale}/auth/signin`, request.url)
      );
    }

    return middleware(request, event, response);
  };
}
