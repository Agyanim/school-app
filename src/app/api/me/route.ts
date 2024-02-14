import { NextRequest, NextResponse } from "next/server";

export const GET = (request: NextRequest) => {
  console.log("test");
  return NextResponse.json("me");
};
