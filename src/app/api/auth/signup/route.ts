import { createUser } from "@/services/authServices";
import { NextRequest, NextResponse } from "next/server";

export const POST=async(request:NextRequest)=>{
    try {
        const data=await request.json()
        const result=await createUser(data)
        
        return NextResponse.json({success:true,result:result.rows[result.rows.length-1]})
    } catch (error:any) {
        return NextResponse.json({error:error.message})
        
    }
}