import {
  getUserByIdHandler,
  getUsersHandler,
} from "@/axios-handlers/userHandlers";
import { useQuery } from "@tanstack/react-query";


interface UserType{
  success:boolean
  user:{
    id:number
    email:string
    createdAt:Date
    profile:{
      userId:string
      userName:string
      firstName:string
      lastName:string
      phone:string
      imageUrl:string
    }
  },

}
export const getUsersQuery = () => {
  const { data, isLoading, status } = useQuery({
    queryFn: async () => {
      const data= await getUsersHandler();
      return data;
    },
    queryKey: ["users"],
  });
  return { data, isLoading, status };
};

export const 
getUserByIdQuery = (userId:string) => {
  const { data, isLoading, status,error } = useQuery({
    queryFn: async () => {
      const data:UserType =await getUserByIdHandler(userId);
      return data
    },
    queryKey: ["userId"],
  });
  return { data, isLoading, status,error };
};
export const getCurrentUserByIdQuery = (currentUserId:string) => {
  const { data, isLoading, status,error } = useQuery({
    queryFn: async () => {
      const data:UserType =await getUserByIdHandler(currentUserId);
      return data
    },
    queryKey: ["currentUserId"],
  });
  return { data, isLoading, status,error };
};
