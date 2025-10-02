import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isPublicRoute = createRouteMatcher([]);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();
  
  if (!userId && !isPublicRoute(req)) {
    const signUpUrl = new URL('https://concise-goldfish-34.accounts.dev/sign-up', req.url);
    signUpUrl.searchParams.set('redirect_url', req.url);
    return NextResponse.redirect(signUpUrl);
  }
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};