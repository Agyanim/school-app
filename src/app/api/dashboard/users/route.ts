import {getUsersService } from "@/services/userServices";
import {NextResponse } from "next/server";

export const GET =async()=>{
    try {
        const users=await getUsersService()
        return NextResponse.json({success:true, users})
    } catch (error:any) {
        return NextResponse.json({error:error.message})
    }

}



