import { toast } from "sonner";
import { axiosInstance } from ".";
import { UserType } from "@/type";

export async function getUsersHandler() {
  try {
    const result = await axiosInstance.get('/users');
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