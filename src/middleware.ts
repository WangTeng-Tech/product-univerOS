import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';
  const { pathname } = request.nextUrl;

  // 如果请求域名以 partner. 开头且路径为根路径 /，自动重写至 /partner 页面
  if (host.toLowerCase().startsWith('partner.') && pathname === '/') {
    return NextResponse.rewrite(new URL('/partner', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/'],
};
