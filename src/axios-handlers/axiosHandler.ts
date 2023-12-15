import { toast } from "sonner";
import { axiosInstance } from ".";

export async function getRequest(endpoint: string) {
  try {
    const result = await axiosInstance.get(endpoint, {});
    return result.data;
  } catch (error: any) {
    toast.error(error.message);
  }
}

export async function postRequest(endpoint:string,data:UserType) {
  try {
    return await axiosInstance.post(endpoint,data)
  } catch (error:any) {
    toast.error(error.message)
  }
}