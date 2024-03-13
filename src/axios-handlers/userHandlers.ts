import { toast } from "sonner";
import { axiosInstance } from ".";
import { UserType } from "@/type";

export const getUsersHandler=async() {
  try {
    const result = await axiosInstance.get('/dashboard/users');
    return result.data;
  } catch (error: any) {
    toast.error(error.message);
  }
}

export const getUserByIdHandler=async(userId:number)=>{
try {
  return await axiosInstance(`/dashboard/user/${userId}`)
} catch (error:any) {
  return new Error(error.message)
}
}

export async function postRequest(endpoint:string,data:UserType) {
  try {
    return await axiosInstance.post(endpoint,data)
  } catch (error:any) {
    toast.error(error.message)
  }
}