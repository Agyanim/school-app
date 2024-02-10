"use client";
import React from "react";
import { SecondaryButtonComponent } from ".";
import { useForm } from "react-hook-form";
import { axiosInstance } from "@/axios-handlers";
import { toast } from "sonner";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UserType>({});

  const onClickHandler = async (data: UserType) => {
    try {
      const response = await axiosInstance.post("auth/signup", data);
      toast.success(response.data.message);
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  return (
    <form
      className="flex w-[90%] flex-col lg:w-[30%] max-h-[28rem] h-[28rem] justify-center mb-[-3.5rem]"
      noValidate
      onSubmit={handleSubmit(onClickHandler)}
    >
      <section className="border border-orange-500 mb-10 p-5 rounded-md shadow shadow-pink-500/50">
        <div className="flex flex-col mb-5  relative">
          <label className="mb-2 text-orange-700 font-bold" htmlFor="userName">
            Email:
          </label>
          <input
            className="px-2 py-3 rounded  border border-orange-400/40"
            type="text"
            placeholder="Enter user name or email"
            {...register("user", { required: "User field is required" })}
          />
          <p className="text-red-500  text-sm absolute left-1 -bottom-5">{errors.user ? errors.user.message : ""}</p>
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
          <p className="text-red-500  text-sm absolute left-1 -bottom-5">{errors.password ? errors.password.message : ""}</p>
        </div>
      </section>
      <SecondaryButtonComponent Text="Submit" />
    </form>
  );
};

export default SignUpForm;