import {
  createUser,
  createUserProfile,
  getUserByEmail,
} from "@/services/userServices";
import { hashPassword } from "@/util/password";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  try {
    const { email, password } = await request.json();
    if (!email || !password) {
      return NextResponse.json({
        message: "UserName and password must be provided!",
      });
    }

    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      return NextResponse.json({ message: "username already taken." });
    }

    const encodePassword = hashPassword(password);
    const value = {
      email: email,
      password: encodePassword,
    };
    const user = await createUser(value);
    const newUser = {
      id: user.id,
      email: user.email,
      createdAt: user.createdAt,
      refreshToken: user.refreshToken,
    };
    const userProfile = await createUserProfile(user.id);
    console.log(userProfile);
    const { password: newPassword, ...rest } = user;
    return NextResponse.json(
      { success: true, message: "User created successfully.", user: newUser },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
};
