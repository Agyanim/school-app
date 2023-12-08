import { createUser } from "@/services/authServices";
import { getUserByName } from "@/services/userServices";
import { hashPassword } from "@/util/password";
import { NextRequest, NextResponse } from "next/server";
import { use } from "react";

export const POST=async(request:NextRequest)=>{
    try {
        const {userName,password}=await request.json()
        if(!userName||!password){
            return NextResponse.json("UserName and password must be provided!")
        }
        const existingUser=await getUserByName(userName)
        if(existingUser[0]){
            return NextResponse.json("username already taken.")
        }
        const encodePassword= hashPassword(password)
        const data={
            userName,
            password:encodePassword
        }
        const user=await createUser(data)
        
        return NextResponse.json({success:true,result:user[user.length-1]})
    } catch (error:any) {
        return NextResponse.json({error:error.message})
        
    }
}