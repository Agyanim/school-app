import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from 'fs'
import { updateProfileIMageUrlService } from "@/services/userServices";
export const POST = async (request: NextRequest) => {
  const data = await request.formData();
  const file: File | null = data.get("file") as unknown as File;
  const userId:string|null=data.get('userId') as string
  
  try {
    if (!file) {
      return NextResponse.json({ success: false });
    }
    
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const myPath=path.join(process.cwd(),`public/upload/${file.name}`)
     fs.writeFileSync(myPath, buffer)
     const imageUrl=`/upload/${file.name}`
     const response=await updateProfileIMageUrlService(Number(userId),imageUrl)
    
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