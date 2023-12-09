import { deleteUserById, getUserById, updateUserById } from "@/services/userServices";
import { NextRequest, NextResponse } from "next/server";

export const GET=async(request:NextRequest,{params}:any)=>{
   const {userId}=params
   const user=await getUserById(userId)
   return NextResponse.json({success:true,user})
   
}
export const DELETE=async(request:NextRequest,{params}:any)=>{
   const {userId}=params
   const existingUser= await getUserById(userId)
   if (!existingUser){
      return NextResponse.json("User not found")
   }
   const deletedUser=await deleteUserById(userId)
   return NextResponse.json({success:true, message:"User deleted successful.", deletedUser})
}
export const PUT=async(request:NextRequest,{params}:any)=>{
   const {userId}=params
   const {userName}= await request.json()
   if(!userName||!userId){
      return NextResponse.json("userName and userId are required!")
   }
   const existingUser=await getUserById(userId)
   if(!existingUser){
      return NextResponse.json("User not found")
   }
   const updatedUser=await updateUserById(userName,userId)   
   return NextResponse.json({success:true,message:"user updated successfully",updatedUser})
}