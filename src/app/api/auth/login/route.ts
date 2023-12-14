import { NextRequest, NextResponse } from "next/server";
import { validatePassword } from "@/util/password";
import { getUserByName } from "@/services/userServices";

// login enpoint
export const POST = async (request: NextRequest) => {
  try {
    let { userName, password } = await request.json();

    // checking if username and password are provided
    if (!userName || !password) {
      return NextResponse.json("Username and password are required",{status:200});
    }
    userName=userName.toLowerCase()
    
    // fetching user using using name
    const user = await getUserByName(userName);
    // checking if username exist
    if (!user[0]) {
      return NextResponse.json("Sorry, user not found",{status:404});
    }
    // validating password if user exist
    const validatedPassword = validatePassword(password, user[0].password);
    // console.log(validatedPassword);

    if (!validatedPassword) {
      return NextResponse.json("Password do not much!. Try again.",{status:200});
    }
    // sending response to client after password validation
    return NextResponse.json({
      success: true,
      message: "User loged in successfully",
    },{status:200});
  } catch (error: any) {
    return NextResponse.json(error.message,{status:501});
  }
};
