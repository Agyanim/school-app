"use client";
import React from "react";
import { SecondaryButtonComponent } from ".";
import { useForm } from "react-hook-form";
import { axiosInstance } from "@/axios-handlers";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema, signInSchemaType } from "@/util/zod";
import { useRouter } from "next/navigation";
import { UseUploadProfileImageContext } from "@/context/UploadImageContext";

interface userType{
  id:string
  email:string

}

const SignInForm = () => {
  const router = useRouter();
  const {setUserId,userId}=UseUploadProfileImageContext()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signInSchemaType>({
    resolver: zodResolver(signInSchema),
  });

  const onClickHandler = async (data: signInSchemaType) => {
    try {
      const response = await axiosInstance.post("auth/login", data);
      if (!response.data.user) {
        return  toast.error(response.data.message);
      }
      // console.log(response.data);
      
        setUserId(response.data.user.id)
        toast.success(response.data.message);
        
        router.push("/dashboard");
      
    } catch (error: any) {
      toast.error(error.message);
    }
    console.log('user:'+userId);
    
  };
  return (
    <form
      className="flex w-[90%] flex-col lg:w-[30%] max-h-[28rem] h-[28rem] justify-center mb-[-3.5rem]"
      noValidate
      onSubmit={handleSubmit(onClickHandler)}
    >
      <section className="border border-orange-500/10 mb-10 p-5 rounded-md shadow shadow-pink-500/50 flex flex-col gap-2">
        <div className="flex flex-col mb-5  relative">
          <label className="mb-2 text-orange-700 font-bold" htmlFor="userName">
            Email:
          </label>
          <input
            className="px-2 py-1 rounded  border border-orange-400/40"
            type="text"
            placeholder="Enter user name or email"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500/50  text-sm absolute left-1 -bottom-5 italic">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="flex flex-col mb-5 relative">
          <label className="mb-2 text-orange-700 font-bold" htmlFor="password">
            Password:
          </label>

          <input
            className="px-2 py-1 rounded border border-orange-400/40"
            type="Password"
            placeholder="password"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-red-500/50  text-sm absolute left-1 -bottom-5">
              {errors.password.message}
            </p>
          )}
        </div>
      </section>
      <SecondaryButtonComponent Text="Login" />
    </form>
  );
};

export default SignInForm;
