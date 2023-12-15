"use client";
import React from "react";
import { PrimaryButton } from ".";
import { useForm } from "react-hook-form";

const SignUpForm = () => {
  const {register,handleSubmit,formState:{errors},reset,}=useForm({
    
  })
  const OnClickHandler = (e:any) => {
    e.preventDefault()
    console.log("hello");
    
  };
  return (
    <form className="flex flex-col items-center w-[40%] ">
      <section className="w-full">
        <div className="flex flex-col mb-5">
          <label className="mb-2" htmlFor="userName">
            User Name:
          </label>
          <input
            className="px-2 py-3 rounded"
            type="text"
            placeholder="User Name"
            name="userName"
            value={...register("userName")}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label className="mb-2" htmlFor="password">
            Password:
          </label>
          <input
            className="px-2 py-3 rounded"
            type="Password"
            name="password"
            placeholder="password"
          />
        </div>
      </section>
      <div>
        <PrimaryButton
          Text={"Submit"}
          BackgroundColor={"blue"}
          Color={"white"}
          OnClickHandler={OnClickHandler}
        />
      </div>
    </form>
  );
};

export default SignUpForm;
