import { NextRequest, NextResponse } from "next/server";

export const POST =async (request: NextRequest) => {
	console.log(await request.formData());
	return NextResponse.json({'success':true});
};
