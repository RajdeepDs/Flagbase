import { getSessionCookie } from "better-auth/cookies";
import { type NextRequest, NextResponse } from "next/server";
import { apiAuthPrefix, authRoutes, publicRoutes } from "./lib/routes";

export default function proxy(request: NextRequest) {
  const { nextUrl } = request;

  const pathname = nextUrl.pathname;
  const isApiAuthRoute = pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(pathname);
  const isAuthRoute = authRoutes.includes(pathname);

  const session = getSessionCookie(request);

  if (isApiAuthRoute) {
    return NextResponse.next();
  }

  if (!session) {
    return handleUnauthenticatedUser(isAuthRoute, isPublicRoute, nextUrl);
  }

  if (isAuthRoute) {
    const redirectUrl = new URL("/", nextUrl);
    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.next();
}

function handleUnauthenticatedUser(
  isAuthRoute: boolean,
  isPublicRoute: boolean,
  nextUrl: URL
) {
  if (!(isAuthRoute || isPublicRoute)) {
    const loginUrl = new URL("/login", nextUrl);
    loginUrl.searchParams.set("callbackUrl", nextUrl.pathname + nextUrl.search);
    return NextResponse.redirect(loginUrl);
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
