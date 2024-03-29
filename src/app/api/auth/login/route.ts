import { NextRequest, NextResponse } from "next/server";
import { validatePassword } from "@/util/password";
import { getUserByEmailService } from "@/services/userServices";
import { registerAccessToken, registerRefreshToken } from "@/util/jwt";
import { updateRefreshTokenService } from "@/services/authServices";

// login enpoint
export const POST = async (request: NextRequest) => {
  try {
    
    const { email, password } = await request.json();
    
    // checking if email and password are provided
    if (!email || !password) {
      return NextResponse.json({success:false,message:"email and password are required"});
    }    
    // fetching user using using name
    const user = await getUserByEmailService(email);  
    
    // checking if email exist
    if (!user) {
      return NextResponse.json({success:false,message:"Sorry, user not found"});
    }
    // validating password if user exist
    const validatedPassword = validatePassword(password, user.password);
    if (!validatedPassword) {
      return NextResponse.json({success:false,message:"validation fialed"});
    }
    // Generation accessToken
    const token=  registerAccessToken(email)
    const refreshToken=registerRefreshToken(email)
    await updateRefreshTokenService(email,refreshToken)
    // sending response to client after password validation
    return NextResponse.json({
      success: true,
      message: "User loged in successfully",
      user:{
        id:user.id,
        email:user.email
      },
      token
    },{status:200});
  } catch (error: any) {
    return NextResponse.json({error:error.message},{status:501});
  }
};
