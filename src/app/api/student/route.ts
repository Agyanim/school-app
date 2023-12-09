import { createStudent, getAllStudent } from "@/services/studentServices"
import { NextRequest, NextResponse } from "next/server"

export const POST=async(request:NextRequest)=>{
    try {
        const data= await request.json()
        const values=[
            data.firstName,
            data.middleName,
            data.lastName,
            data.gender,
            data.dateOfBirth,
            data.placeOfBirth,
            data.hometown,
            data.address1,
            data.primaryLanguage,
            data.secondaryLanguage,
            data.className,
            data.enrollmentDate
        ]
        const student= await createStudent(values)
        return NextResponse.json({
            success:true,
            message:"student created successfully.",
            student})
    
    } catch (error:any) {
       return NextResponse.json({error:error.message})
    }
}

export const GET=async(request:NextRequest)=>{
    try {
        const students= await getAllStudent()
        if(!students[0]){
            return NextResponse.json("Student data empty")
        }
        return NextResponse.json({
            success:true,
            students
        })
    } catch (error:any) {
      return NextResponse.json({error:error.message}) 
    }
}