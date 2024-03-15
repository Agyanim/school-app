import { verifyAccessToken } from "@/util/jwt";
import prisma from "@/db/prismaClient";

const prismaClient = prisma;
export const isLogedIn = async (accessToken: string) => {
  try {
    const payload = accessToken && (await verifyAccessToken(accessToken));
    if (payload) {
      return true;
    } else return false;
  } catch (error: any) {
    return false;
  }
};

export const updateRefreshTokenService = async (email:string, refreshToken:string) => {
  return await prismaClient.user.update({
    where: {
      email,
    },
    data:{
      refreshToken
    }
  });
};
