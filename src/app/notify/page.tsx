"use client";

import React from "react";
import { toast } from "sonner";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "@/server/serverActions";

interface DataType {
  userid: number;
  username: string;
}
const Notify = () => {

  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const {users} = await getUser();      
      return users as DataType[];
    },
  });

  const render = data?.map((user) => {
    return (
      <div key={user.userid}>
        <p> User Id: {user.userid}</p>
        <p>User Name: {user.username}</p>
      </div>
    );
  });

  if (isLoading){
    return <p>Loading...</p>;
  }
  
  return (
    <section className="flex justify-center items-center h-full">
      <div className="mt-[1rem]">
        <h1>Nofication</h1>
        <button
          className="px-5 py-2 bg-blue-600 rounded  text-white mt-[10rem]"
          onClick={() => {
            toast.info("Notification")
          }}
        >
          Notify
        </button>
         {render}
      </div>
    </section>
  );
};
export default Notify;
