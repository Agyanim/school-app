import { getUserById } from "@/services/userServices";
import { NextRequest, NextResponse } from "next/server";

export const GET=async(request:NextRequest,{params}:any)=>{
   const {userId}=params
   const user=await getUserById(userId)
   return NextResponse.json({success:true,user})
   
}