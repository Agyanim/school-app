import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest, myContext: any) => {
  const { params } = myContext;
  console.log(myContext);

  return new NextResponse("testing");
};

export const PUT = async (request: NextRequest, context:any) => {
  try {
    const {params}=context
    console.log(params);
    
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message });
  }
};
