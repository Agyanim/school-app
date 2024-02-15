import { verifyAccessToken } from "@/util/jwt";

export const isLogedIn = async (accessToken: string) => {
  try {
    const payload = accessToken && (await verifyAccessToken(accessToken));    
    if (payload) {
      return true;
    }
    else return false
  } catch (error: any) {
    return false
  }
};
