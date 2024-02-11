"use client";
import React, { RefObject, useRef, useState } from "react";
import { SecondaryButtonComponent } from ".";
import { useForm } from "react-hook-form";
import { axiosInstance } from "@/axios-handlers";
import { toast } from "sonner";
import { signUpSchemaType } from "@/type";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "@/util/zod";

const SignUpForm: React.FC = () => {
	const [passwordMatch, setPasswordMatch] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<signUpSchemaType>({
    resolver:zodResolver(signUpSchema)
  });

	const onClickHandler = async (data: signUpSchemaType) => {
		try {
			const { password, confirmPassword } = data;
			if (password !== confirmPassword) {
				setPasswordMatch(true);
			} else {
				reset();
        setPasswordMatch(false)
				const response = await axiosInstance.post("/auth/signup", data);
				toast.success(response.data.message);
			}
		} catch (error: any) {
			toast.error(error.message);
		}
	};

	return (
		<form
			className="flex w-[90%] flex-col lg:w-[30%] mx-h-[31.25rem] h-[31.25rem] justify-center -mb-12"
			noValidate
			onSubmit={handleSubmit(onClickHandler)}
		>
			<section className="border border-gray-500/10 mb-10 p-5 rounded-md shadow shadow-pink-500/50 flex flex-col gap-2">
				<div className="flex flex-col mb-5 relative">
					<label className="mb-2 text-orange-700 font-bold" htmlFor="email">
						Email:
					</label>
					<input
						className="px-2 py-1 rounded  border border-gray-400/40"
						type="text"
						placeholder="Enter user name or email"
						{...register("email")}
					/>
					{errors.email && (
						<p className="text-red-500/70  text-sm absolute -bottom-5 left-1 italic">
							{errors.email.message}
						</p>
					)}
				</div>

				<div className="flex flex-col mb-5 relative">
					<label className="mb-2 text-orange-700 font-bold" htmlFor="password">
						Password:
					</label>

					<input
						className="px-2 py-1 rounded border border-gray-400/40"
						type="Password"
						placeholder="password"
						{...register("password")}
					/>
					{errors.password && (
						<p className="text-red-500/70  text-sm absolute -bottom-5 left-1 italic">
							{errors.password.message}
						</p>
					)}
				</div>
				<div className="flex flex-col mb-5 relative">
					<label className="mb-2 text-orange-700 font-bold" htmlFor="password">
						Conform password:
					</label>

					<input
						className="px-2 py-1 rounded border border-gray-400/40"
						type="Password"
						placeholder="password"
						{...register("confirmPassword")}
					/>
					{passwordMatch && (
						<p className="text-red-500/50  text-sm absolute -bottom-5 left-1">
							Password do not match
						</p>
					)}
				</div>
			</section>
			<SecondaryButtonComponent Text="Create account" />
		</form>
	);
};

export default SignUpForm;
