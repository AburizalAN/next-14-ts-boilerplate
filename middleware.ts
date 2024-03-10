import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import  { i18n } from "@app/i18n.config"
import { NextRequest, NextResponse } from 'next/server'

function getLocale(request: NextRequest): string | undefined {
  let headers = { 'accept-language': request.headers.get("accept-language") as "string" }
  let languages = new Negotiator({ headers }).languages()
  let locales: readonly string[] = i18n.locales
  let defaultLocale = i18n.defaultLocale

  return match(languages, locales, defaultLocale)
}

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  let localeCookie = request.cookies.get("NEXT_LOCALE")

  if (localeCookie) return

  const locale = getLocale(request) as string
  response.cookies.set("NEXT_LOCALE", locale)
  
  return response
  
  // const { pathname } = request.nextUrl
  // const locales: readonly string[] = i18n.locales
  // const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)
  // if (pathnameHasLocale) return
  
  // request.nextUrl.pathname = `/${locale}${pathname}`
  // return NextResponse.redirect(
  //   new URL(
  //     `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
  //     request.url
  //   )
  // )
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}

