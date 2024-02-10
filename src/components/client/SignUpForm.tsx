"use client";
import React from "react";
import { PrimaryButton } from ".";
import { useForm } from "react-hook-form";
import { axiosInstance } from "@/axios-handlers";
import { toast } from "sonner";


const SignUpForm = () => {
  const {register,handleSubmit,formState:{errors},reset,}=useForm<UserType>({
    defaultValues:{
      userName:"",
      password:""
    }
  })

  const onClickHandler= async (data:UserType)=>{
   try {
      const response= await axiosInstance.post("auth/signup",data)
      if (!response.data.user){
        return toast.info(response.data.message)
      }
      toast.success(response.data.message)
      reset()
    } catch (error:any) {
      toast.error(error.message)
    }
    

  }
  return (
    <form className="flex flex-col items-center w-[40%] " onSubmit={handleSubmit(onClickHandler)} noValidate>
      <section className="w-full">
        <div className="flex flex-col mb-5">
          <label className="mb-2" htmlFor="userName">
            User Name:
          </label>
          <input
            className="px-2 py-3 rounded"
            type="text"
            placeholder="User Name"
            {...register("userName",{
              required:"userName is required"
            }) }
            
          />
          <p className="pl-2 mt-2 text-sm text-red-600">{errors.userName?.message}</p>
        </div>
        <div className="flex flex-col mb-5">
          <label className="mb-2" htmlFor="password">
            Password:
          </label>
          <input
            className="px-2 py-3 rounded"
            type="Password"
            placeholder="password"
            {...register("password",{required:"password is required"})}
          />
          <p className="pl-2 mt-2 text-sm text-red-600">{errors.password?.message}</p>
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
