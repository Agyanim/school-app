"use client";
import { getUserByIdHandler, updateUserHandler } from "@/axios-handlers/userHandlers";
import { UseUploadProfileImageContext } from "@/context/UploadImageContext";
import React, { ChangeEvent, EventHandler, useEffect, useState } from "react";
import { updateUserQueryHandler } from "@/query-handlers/userQueries";
import { SubmitHandler } from "react-hook-form";

const UpdateForm = ({ userId }: { userId: string }) => {
  const { userProfile } = UseUploadProfileImageContext();
  
  const [profile, setProfile] = useState(userProfile);
  const {mutate,data,isSuccess}=updateUserQueryHandler(userId)
  console.log(isSuccess);
  
  console.log(data);
  
  useEffect(()=>{
    setProfile(userProfile)
    
  },[])
  
  const onChangeHandler = (e: any) => {
    const {name,value}=e.target
    setProfile({...profile,[name]:value})
  };

  const updateHandler=(e:any)=>{
    e.preventDefault()
    mutate(profile)
  }
  return (
    <section className="w-full mt-10">
      <form className="lg:w-[50%] flex flex-col gap-4 ml-3" action="">
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
            name="firstName"
            id="firstName"
            value={profile.firstName}
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
            name="lastName"
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
            disabled={true}
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
            value={profile.phone}
            onChange={onChangeHandler}
          />
        </div>
        <button
          className="bg-gradient-to-r from-orange-600 to-pink-600 w-[90%] text-white font-bold py-3 rounded border-none hover:bg-gradient-to-l"
          type="submit"
          onClick={updateHandler}
        >
          Update
        </button>
      </form>
    </section>
  );
};

export default UpdateForm;
