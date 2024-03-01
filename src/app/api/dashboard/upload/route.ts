import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from 'fs'
export const POST = async (request: NextRequest) => {
  // const form =formidable()
  // form.parse(request,(err:any,fields: formidable.Fields<string>, files: formidable.Files<string>)
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
     const imageUrl=`/upload/${file.name}`
    
    return NextResponse.json({ success: true ,imageUrl});
    
  } catch (error:any) {
    console.log(error.message);
    
  }
};

export const GET=async()=>{  
  const myPath=path.join(process.cwd(),"/public/upload/working-hours.jpg")
  const file= fs.readFileSync(myPath)
  return NextResponse.json({success:true,data:file})
}