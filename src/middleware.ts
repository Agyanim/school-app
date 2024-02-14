import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { isLogedIn } from "./services/authServices";

export const middleware = async (request: NextRequest) => {
  try {
    const token = request.cookies.get("token");
    // console.log(token);

    if (token?.value) {
      const logedIn = await isLogedIn(token.value);
    //   console.log(logedIn);
      
      if (logedIn) {
        console.log("logedIn");
        return NextResponse.next();
      }
    } else {
      console.log("autorazation fialed");
      return null;
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
};

export const config = {
  matcher: ["/api/me"],
};
