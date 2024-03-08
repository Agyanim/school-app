import { NextRequest, NextResponse } from "next/server";

export const GET = (request: NextRequest) => {
  return new NextResponse("update handler");
};
