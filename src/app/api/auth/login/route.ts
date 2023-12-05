import { NextRequest, NextResponse } from "next/server";
import conn from "../../../../db/pgConnection"

export const GET=async(request:NextRequest)=>{
    try {
        const result= await conn.query("SELECT * FROM public.note_tbl")
        console.log(result.rows);
        
        return NextResponse.json({
            success:true,
            message:"Request successful",
            data:result.rows
        })
    
    } catch (error:any) {
        return NextResponse.json(error.message);
        
    }
}


