// #reserved file name

import { NextResponse } from "next/server";

export function middleware(request) {
  console.log(request);
  return NextResponse.next(); // forwards the incoming request to its actual destination.(=the purpose of middleware)
  // It really runs this code for every request so that you can do with it whatever you want to do.
}

export const config = {
  matcher: "/news",
};

// we don't really need this feature now, but it's still important to know about it!
