import { getUsers } from "@/services/userServices";
import { NextRequest, NextResponse } from "next/server";

export const GET =async(request:NextRequest)=>{
    try {
        const result=await getUsers()
        return NextResponse.json({success:true, result})
    } catch (error:any) {
        return NextResponse.json({error:error.message})
    }

}