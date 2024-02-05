"use client";
import React from "react";
import { PrimaryButton } from ".";
import { useForm } from "react-hook-form";
import { axiosInstance } from "@/axios-handlers";
import { toast } from "sonner";


const SignUpForm = () => {
  const {register,handleSubmit,formState:{errors},reset,}=useForm<UserType>({
    
  })

  const onClickHandler= async (data:UserType)=>{
   try {
      const response= await axiosInstance.post("auth/signup",data)
      toast.success(response.data.message)
      
      
    } catch (error:any) {
      toast.error(error.message)
    }
    

  }
  return (
    <form className="flex flex-col items-center w-[40%] " onSubmit={handleSubmit(onClickHandler)}>
      <section className="w-full">
        <div className="flex flex-col mb-5">
          <label className="mb-2" htmlFor="userName">
            User Name:
          </label>
          <input
            className="px-2 py-3 rounded"
            type="text"
            placeholder="User Name"
            {...register("userName")}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label className="mb-2" htmlFor="password">
            Password:
          </label>
          <input
            className="px-2 py-3 rounded"
            type="Password"
            placeholder="password"
            {...register("password")}
          />
        </div>
      </section>
      <div>
        <PrimaryButton
          Text={"Submit"}
          BackgroundColor={"blue"}
          Color={"white"}
        />
      </div>
    </form>
  );
};

export default SignUpForm;
