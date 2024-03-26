import {
  getUserByIdService,
  updateProfileService,
} from "@/services/userServices";
import { UserProfiletype } from "@/type";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest, myContext: any) => {
  const { params } = myContext;

  return new NextResponse("testing");
};

export const PUT = async (
  request: NextRequest,
  context: { params: { userId: string } }
) => {
  try {
    const { userId } = context.params;
    const user = await getUserByIdService(Number(userId));
    if (!user) {
      return NextResponse.json({ success: false, message: "No user found" });
    }

    const profile = user?.profile;
    if(profile==null)return 
      const body = await request.json();
      const data: UserProfiletype = body.data;

      data.firstName !== undefined
        ? (profile!.firstName = data.firstName)
        : profile?.firstName;
      data.lastName !== undefined
        ? (profile!.lastName = data.lastName)
        : profile?.lastName;
      data.phone !== undefined
        ? (profile!.phone = data.phone)
        : profile?.userName;
      data.userName !== undefined
        ? (profile!.userName = data.userName)
        : profile?.phone;

      const updatedProfile = await updateProfileService(
        Number(userId), profile      );
      console.log(updatedProfile);

      return NextResponse.json({ succuss: true ,profile:updatedProfile});
    
    
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message });
  }

};
