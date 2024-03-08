import { NextRequest, NextResponse } from "next/server";

export const GET=(request:NextRequest,myContext:any)=>{
    const {params}=myContext
    console.log(params);
    
    return  new NextResponse("testing")

}