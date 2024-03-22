"use client";
import { UseUploadProfileImageContext } from "@/context/UploadImageContext";
import { getUserByIdQuery, getUsersQuery } from "@/query-handlers/userQueries";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
interface paramsType {
  params: {
    userId: string;
  };
}
const userProfilePage = ({ params }: paramsType) => {
  const { userId } = params;
  const { data, isLoading } = getUserByIdQuery(userId);
  const { setUserId, setUserProfile } = UseUploadProfileImageContext();
  const router = useRouter();
  useEffect(() => {
    setUserId(userId);
  }, [userId]);

  const editHandler = () => {
    data?.user?.profile;
    const userProfile = {
      userId:data?.user.id,
      userName: data?.user?.profile?.userName||'',
      firstName: data?.user?.profile?.firstName||'',
      lastName: data?.user?.profile?.lastName ||"",
      email: data?.user?.email,
      phone: data?.user?.profile?.phone||'',
      imageUrl:data?.user?.profile?.imageUrl||''
    };
    setUserProfile({ userProfile:data?.user.profile });
    router.push(`/dashboard/users/profile/update/${userId}`);
  };
  return (
    <main className="">
      {isLoading ? (
        <div className="">is Looding</div>
      ) : (
        <div className="flex flex-col items-center gap-2">
          <h1 className="my-[2rem] text-2xl text-orange-800 font-bold">
            User Profile
          </h1>
          <section>
            {data?.user?.profile?.imageUrl ? (
              <img
                className="w-[8rem] h-[10rem] rounded mb-[2rem]"
                src={data?.user?.profile?.imageUrl}
                alt="profile-image"
              />
            ) : (
              <img
                className="w-[8rem] h-[10rem] rounded mb-[2rem]"
                src="/upload/background-image.jpeg"
                alt="profile-image"
              />
            )}
          </section>
          <section className="flex flex-col gap-5 font-bold items-center text-orange-900 text-lg">
            <p>
              UserName:
              <span className="font-normal ml-2">
                {data?.user?.profile?.userName}
              </span>
            </p>
            <p>
              First Name:
              <span className="font-normal ml-2">
                {data?.user?.profile?.firstName}
              </span>
            </p>
            <p>
              Last Name:
              <span className="font-normal ml-2">
                {data?.user?.profile?.lastName}
              </span>
            </p>
            <p>
              Email:
              <span className="font-normal ml-2">{data?.user?.email}</span>
            </p>
            <p>
              Phone:
              <span className="font-normal ml-2">
                {data?.user?.profile?.phone || "0246793987"}
              </span>
            </p>
          </section>
          <button className="text-blue-600 font-bold mt-5" onClick={editHandler}>Edit</button>
        </div>
      )}
    </main>
  );
};

export default userProfilePage;
