import { verifyAccessToken } from "@/util/jwt";

export const isLogedIn = async (accessToken: string) => {
    try {
        const payload = await verifyAccessToken(accessToken);
        console.log(payload);
      //   if (payload) {
      //     return true;
      //   }
        
    } catch (error:any) {
        console.log(error.message);
        
    }
};
