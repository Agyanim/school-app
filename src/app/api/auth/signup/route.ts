import {
  createUser,
  getUserByEmailService,
} from "@/services/userServices";
import { hashPassword } from "@/util/password";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  try {
    const { email, password } = await request.json();
    console.log(email);

    if (!email || !password) {
      return NextResponse.json({
        message: "UserName and password must be provided!",
      });
    }

    const existingUser = await getUserByEmailService(email);
    if (existingUser) {
      return NextResponse.json({ message: "username already taken." });
    }

    const encodePassword = hashPassword(password);
    const value = {
      email: email,
      password: encodePassword,
      profile: {
        create: {
        },
      },
    };
    const user = await createUser(value);
    const newUser = {
      id: user.id,
      email: user.email,
      createdAt: user.createdAt,
      refreshToken: user.refreshToken,
    };
    // console.log(user);

    const { password: newPassword, ...rest } = user;
    return NextResponse.json(
      { success: true, message: "User created successfully.", user: newUser },
      { status: 200 }
    );
  } catch (error: any) {
    console.log(error.message);

    return NextResponse.json({ error: error.message });
  }
};
