"use client";
import React, { useRef } from "react";
import { SecondaryButtonComponent } from ".";
import { useForm } from "react-hook-form";
import { axiosInstance } from "@/axios-handlers";
import { toast } from "sonner";

const SignUpForm:React.FC = () => {
const confirmPassErr = useRef(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreateAccountType>({});

  const onClickHandler = async (data: CreateAccountType) => {
    try {
      const {password,confirmPassword}=data
      if(password !== confirmPassword){
        confirmPassErr.current.textContent="Password do not match"
      }
      else{
        confirmPassErr.current.textContent=""
        const response = await axiosInstance.post("/auth/signup", data);
        toast.success(response.data.message);
      }
    } catch (error: any) {
      // toast.error(error.message);
    }
  };


  return (
    <form
      className="flex w-[90%] flex-col lg:w-[30%] mx-h-[31.25rem] h-[31.25rem] justify-center mb-[-1rem]"
      noValidate
      onSubmit={handleSubmit(onClickHandler)}
    >
      <section className="border border-orange-500 mb-10 p-5 rounded-md shadow shadow-pink-500/50">
        <div className="flex flex-col mb-5 relative">
          <label className="mb-2 text-orange-700 font-bold" htmlFor="email">
            Email:
          </label>
          <input
            className="px-2 py-3 rounded  border border-orange-400/40"
            type="text"
            placeholder="Enter user name or email"
            {...register("email", { required: "User field is required" })}
          />
          <p className="text-red-500  text-sm absolute -bottom-5 left-1">{errors.email ? errors.email.message : ""}</p>
        </div>

        <div className="flex flex-col mb-5 relative">
          <label className="mb-2 text-orange-700 font-bold" htmlFor="password">
            Password:
          </label>

          <input
            className="px-2 py-3 rounded border border-orange-400/40"
            type="Password"
            placeholder="password"
            {...register("password", {
              required: "Password field cannot be empty",
            })}
          />
          <p className="text-red-500  text-sm absolute -bottom-5 left-1">{errors.password ? errors.password.message : ""}</p>
          </div>
          <div className="flex flex-col mb-5 relative">
          <label className="mb-2 text-orange-700 font-bold" htmlFor="password">
            Conform password:
          </label>

          <input 
            className="px-2 py-3 rounded border border-orange-400/40"
            type="Password"
            placeholder="password"
            {...register("confirmPassword", {
              required: "Password field cannot be empty",
            })}
          />
      <p ref={confirmPassErr} className="text-red-500  text-sm absolute -bottom-5 left-1"></p>
          </div>
      </section>
      <SecondaryButtonComponent Text="Submit" />
    </form>
  );
};

export default SignUpForm;
