import React from "react";
import { getUsersHandler } from "@/axios-handlers/userHandlers";
import { map } from "zod";

interface UserType {
  map(arg0: (users: any) => React.JSX.Element): React.ReactNode;
  // map(arg0: (users: any) => React.JSX.Element): React.ReactNode;
  id: string;
  email: string;
  createdAt: Date;
  profile: {
    userName: string;
    firstName: string;
    lastName: string;
  };
}
[];
const UserPage = async () => {
  const data = await getUsersHandler();
  const users: UserType = data.users;

  return (
    <div className="flex flex-col gap-4">
      {users?.map((users) => (
        <div>
          <p>{users.email}</p>
          <p>{users.createdAt}</p>
          {users.profile?.userName && <p>UserName:{users.profile?.userName}</p>}
        </div>
      ))}
    </div>
  );
};

export default UserPage;
