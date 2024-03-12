"use client";
import React from "react";
import { getUsersQuery } from "@/query-handlers/userQueries";
import Link from "next/link";

interface UserType {
  map(arg0: (users: any) => React.JSX.Element): React.ReactNode;
  id: string;
  email: string;
  createdAt: any;
  profile: {
    userName: string;
    firstName: string;
    lastName: string;
  };
}
[];
const UserPage = () => {
  const {data,isLoading} = getUsersQuery();  
  const users: UserType = data?.users;
  

  return isLoading ?  (
    <p>Loading...</p>
  ):(
    <div className="flex flex-col gap-4 w-full">
      <div className="flex justify-between w-[80%] ml-10 mt-5 text-pink-950 text-lg font-bold ">
      <h1>User Accounts</h1>
      <p className="mr-5">Created at:</p>
      </div>
    <div className=" w-[80%] ml-10">
      <ol  className="w-full list-decimal text-pink-950">
      {users?.map((users:UserType) => (
          <li key={users.id} className="bg-pink-100/50 mb-2 rounded"> <Link className="flex justify-between px-2 py-1" href={`/dashboard/users/profile/${users.id}`}>{users.email} <span className="mr-5">{new Date(users.createdAt).toLocaleString() }</span></Link></li>
          
          ))}
          </ol>
    </div>
    </div>
  ) ;
};

export default UserPage;
