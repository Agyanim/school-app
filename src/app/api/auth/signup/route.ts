import { createUser, getUserByName } from "@/services/userServices";
import { hashPassword } from "@/util/password";
import { NextRequest, NextResponse } from "next/server";

export const POST=async(request:NextRequest)=>{
    try {
        let {userName,password}=await request.json()
        if(!userName||!password){
            return NextResponse.json("UserName and password must be provided!")
        }
        userName=userName.toLowerCase()
        
        const existingUser=await getUserByName(userName)
        if(existingUser[0]){
            return NextResponse.json("username already taken.")
        }
        const encodePassword= hashPassword(password)
        
        const user=await createUser([userName,encodePassword])
        
        return NextResponse.json({success:true, message:"User created successfully.",user:user[user.length-1]})
    } catch (error:any) {
        return NextResponse.json({error:error.message})
        
    }
}