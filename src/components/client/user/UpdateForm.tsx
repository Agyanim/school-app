"use client";
import { getUserByIdHandler } from "@/axios-handlers/userHandlers";
import { UseUploadProfileImageContext } from "@/context/UploadImageContext";
import React, { ChangeEvent, useEffect, useState } from "react";

const UpdateForm = ({ userId }: { userId: string }) => {
  const { userProfile } = UseUploadProfileImageContext();
  const [profile, setProfile] = useState(userProfile);

  const onChangeHandler = (e: any) => {
    const {name,value}=e.target
    // const value=e.target.value
    console.log(name, value);
  };

  console.log(profile.email);

  return (
    <section className="w-full mt-10">
      <form className="w-[50%] flex flex-col gap-4 ml-3" action="">
        <div className="flex justify-between w-full flex-col">
          <label className="text-orange-800 font-bold mb-1" htmlFor="userName">
            Username:
          </label>
          <input
            className="border border-grey-100 w-[90%] px-2 py-2"
            type="text"
            name="userName"
            id="userName"
            value={profile.userName}
            onChange={onChangeHandler}
          />
        </div>
        <div className="flex justify-between w-full flex-col">
          <label className="text-orange-800 font-bold mb-1" htmlFor="firstName">
            First Name:
          </label>
          <input
            className="border border-grey-100 w-[90%] px-2 py-2"
            type="text"
            name="firstname"
            id="firstname"
            value={profile?.firstName}
            onChange={onChangeHandler}
          />
        </div>
        <div className="flex justify-between w-full flex-col">
          <label className="text-orange-800 font-bold mb-1" htmlFor="lastName">
            Last Name:
          </label>
          <input
            className="border border-grey-100 w-[90%] px-2 py-2"
            type="text"
            name="lastN"
            id="lastName"
            value={profile.lastName}
            onChange={onChangeHandler}
          />
        </div>
        <div className="flex justify-between w-full flex-col">
          <label className="text-orange-800 font-bold mb-1" htmlFor="email">
            Email:
          </label>
          <input
            className="border border-grey-100 w-[90%] px-2 py-2"
            type="emal"
            name="email"
            id="email"
            value={profile.email}
            // disabled={true}
            onChange={onChangeHandler}
          />
        </div>
        <div className="flex justify-between w-full flex-col">
          <label className="text-orange-800 font-bold mb-1" htmlFor="phone">
            Phone:
          </label>
          <input
            className="border border-grey-100 w-[90%] px-2 py-2"
            type="text"
            name="phone"
            id="phone"
            // value={userProfile.phone}
            onChange={onChangeHandler}
          />
        </div>
        <button
          className="bg-gradient-to-r from-orange-600 to-pink-600 w-[90%] text-white font-bold py-3 rounded border-none hover:bg-gradient-to-l"
          type="submit"
        >
          Update
        </button>
      </form>
    </section>
  );
};

export default UpdateForm;
