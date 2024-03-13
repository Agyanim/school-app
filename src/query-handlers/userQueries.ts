import {
  getUserByIdHandler,
  getUsersHandler,
} from "@/axios-handlers/userHandlers";
import { useQuery } from "@tanstack/react-query";

export const getUsersQuery = () => {
  const { data, isLoading, status } = useQuery({
    queryFn: async () => {
      const data = await getUsersHandler();
      return data;
    },
    queryKey: ["users"],
  });
  return { data, isLoading, status };
};

export const getUserByIdQuery = (userId: number) => {
  const { data, isLoading, status } = useQuery({
    queryFn: async () => {
      return await getUserByIdHandler(userId);
    },
    queryKey: ["userid"],
  });
  return { data, isLoading, status };
};
