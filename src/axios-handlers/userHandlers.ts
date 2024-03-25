import { toast } from "sonner";
import { axiosInstance } from ".";
import { UserType } from "@/type";

export const getUsersHandler = async () => {
  try {
    const result = await axiosInstance.get("/dashboard/users");
    return result.data;
  } catch (error: any) {
    toast.error(error.message);
  }
};

export const getUserByIdHandler = async (userId: string) => {
  try {
    const data= await axiosInstance(`/dashboard/users/${userId}`);
    return data.data
    
  } catch (error: any) {
    return new Error(error.message);
  }
};

export const updateUserHandler=async(userId: string,data:any)=>{
  try {
    const result= await axiosInstance.put(`/dashboard/update/${userId}`,{data})
  return result
  } catch (error:any) {
    console.log(error.message)
  }
}

export async function postRequest(endpoint: string, data: UserType) {
  try {
    return await axiosInstance.post(endpoint, data);
  } catch (error: any) {
    toast.error(error.message);
  }
}
