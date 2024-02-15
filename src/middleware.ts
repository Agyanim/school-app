import { NextRequest, NextResponse } from "next/server";
import { isLogedIn } from "./services/authServices";

export const middleware = async (request: NextRequest) => {
  const url = request.nextUrl;
  try {
    const token = request.cookies.get("token")?.value;

    if (!token) {
      throw new Error("no token found");
    }
    const logedIn = await isLogedIn(token);
    if (!logedIn) {
      return NextResponse.redirect(new URL("/signin", url));
    }
    return NextResponse.next();
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
};

export const config = {
  matcher: ["/dashboard"],
};
