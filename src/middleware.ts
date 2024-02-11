import { NextRequest, NextResponse } from "next/server";

 export const middleware=(request:Request)=>{
    console.log("testing middleware");
    return NextResponse.next()
    
}

export const config={
    matcher:['/api/auth/me']
}