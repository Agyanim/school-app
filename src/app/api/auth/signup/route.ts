import { createUser, getUserByEmail, getUserByName } from "@/services/userServices";
import { hashPassword } from "@/util/password";
import { NextRequest, NextResponse } from "next/server";

export const POST=async(request:NextRequest)=>{
    try {
        let {email,password}=await request.json()
        // console.log(email,password);
        if(!email||!password){
            return NextResponse.json({message:"UserName and password must be provided!"})
        }
        
        const existingUser=await getUserByEmail(email)
        // console.log(existingUser);
        
        if(existingUser!=null){
            return NextResponse.json({message:"username already taken."})
        }

        const encodePassword= hashPassword(password)
        
        const value={
            email:email,
            password:encodePassword
        }
        
        console.log(value);
        
        const user=await createUser(value)
        // console.log(user);
        
        return NextResponse.json({success:true, message:"User created successfully.",user})
    } catch (error:any) {
        return NextResponse.json({error:error.message})
        
    }
}