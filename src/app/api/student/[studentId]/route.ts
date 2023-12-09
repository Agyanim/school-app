import { deleteStudentById, getStudentById } from "@/services/studentServices";
import { NextRequest, NextResponse } from "next/server";


export const DELETE=async(request:NextRequest,{params}:any)=>{
    try {
        const {studentId}=params
        
        const existingStudent=await getStudentById(studentId)
        
        if(!existingStudent){
            return NextResponse.json("student not found!")
        }
        const deletedStudent=await deleteStudentById(studentId)
        return NextResponse.json({
            success:true,
            message:"student deleted successfully",
            deletedStudent
        })
    
    } catch (error:any) {
        return NextResponse.json({error:error.message})
        
    }
}
