import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from 'fs'
import { writeFile } from "fs/promises";

export const POST = async (request: NextRequest) => {
  const data = await request.formData();
  const file: File | null = data.get("file") as unknown as File;
  try {
    if (!file) {
      return NextResponse.json({ success: false });
    }
    
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    // console.log(buffer);
    const myPath=path.join(process.cwd(),`public/upload/${file.name}`)
     fs.writeFileSync(myPath, buffer)
    
    return NextResponse.json({ success: true });
    
  } catch (error:any) {
    console.log(error.message);
    
  }
};

export const GET=async()=>{
  console.log('get');
  
  const myPath=path.join(process.cwd(),"/public/upload/working-hours.jpg")
  const file= fs.readFileSync(myPath)
  console.log(file);
  
  return NextResponse.json({success:true,data:file})
}