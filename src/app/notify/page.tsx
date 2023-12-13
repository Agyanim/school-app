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

  const { data, error, isSuccess, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const user = await getUser();
      return user as DataType[];
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

  isSuccess && toast.success("success");
  isLoading && <p>Loading...</p>;
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
         {render}
        </button>
      </div>
    </section>
  );
};
export default Notify;
