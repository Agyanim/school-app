import { createUser, getUserByName } from "@/services/userServices";
import { hashPassword } from "@/util/password";
import { NextRequest, NextResponse } from "next/server";

export const POST=async(request:NextRequest)=>{
    try {
        let {userName,password}=await request.json()
        if(!userName||!password){
            return NextResponse.json({message:"UserName and password must be provided!"})
        }
        userName=userName.toLowerCase()
        
        const existingUser=await getUserByName(userName)
        if(existingUser){
            return NextResponse.json({message:"username already taken."})
        }
        const encodePassword= hashPassword(password)
        
        const user=await createUser([userName,encodePassword])
        
        return NextResponse.json({success:true, message:"User created successfully.",user})
    } catch (error:any) {
        return NextResponse.json({error:error.message})
        
    }
}