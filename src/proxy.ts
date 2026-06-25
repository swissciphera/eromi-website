import { NextResponse, type NextRequest } from "next/server";

// Next.js 16 renamed the "middleware" convention to "proxy".
// Proxy runs on the Node.js runtime, so process.env is read at request time
// and MAINTENANCE_MODE can be toggled via the Dokploy env var without a
// rebuild. Set MAINTENANCE_MODE=true to take the site offline for everyone.
export function proxy(request: NextRequest) {
  const maintenance = process.env.MAINTENANCE_MODE === "true";

  if (maintenance && !request.nextUrl.pathname.startsWith("/maintenance")) {
    const url = request.nextUrl.clone();
    url.pathname = "/maintenance";
    // Rewrite (keeps the visited URL) and signal "Service Unavailable" to bots.
    return NextResponse.rewrite(url, {
      status: 503,
      headers: { "Retry-After": "3600" },
    });
  }

  return NextResponse.next();
}

export const config = {
  // Run on every request except Next internals and static assets, so the
  // maintenance page can still load its CSS, fonts and the logo.
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|svg|ico|webp|avif|woff|woff2|ttf)).*)",
  ],
};
