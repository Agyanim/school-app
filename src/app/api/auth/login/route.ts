import { NextRequest, NextResponse } from "next/server";
import { validatePassword } from "@/util/password";
import { getUserByEmail } from "@/services/userServices";
import { myTest } from "@/util/jwt";

// login enpoint
export const POST = async (request: NextRequest) => {
  console.log("test");
  
  myTest()
  try {
    
    const { email, password } = await request.json();

    // checking if email and password are provided
    if (!email || !password) {
      return NextResponse.json({success:false,message:"email and password are required"});
    }    
    // fetching user using using name
    const user = await getUserByEmail(email);  
    console.log(user);
     
    // checking if email exist
    if (!user) {
      return NextResponse.json({success:false,message:"Sorry, user not found"});
    }
    // validating password if user exist
    const validatedPassword = validatePassword(password, user.password);
    if (!validatedPassword) {
      return NextResponse.json({success:false,message:"validation fialed"});
    }
    // sending response to client after password validation
    return NextResponse.json({
      success: true,
      message: "User loged in successfully",
      user:user
    },{status:200});
  } catch (error: any) {
    return NextResponse.json({error:error.message},{status:501});
  }
};
