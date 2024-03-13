import { getUserByIdService } from "@/services/userServices";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest,{params}:{params:{userId:string}}) => {
 try {
    const {userId}=params
    const user= await getUserByIdService(Number(userId))
    if (!user){
        return NextResponse.json({success:false, message:'no user found'})
    }
    
     return NextResponse.json({success:true,user});
 } catch (error:any) {
    return NextResponse.json({success:false,error:error.message})
 }

};
