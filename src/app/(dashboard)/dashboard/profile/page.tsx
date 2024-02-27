"use client";
import { axiosInstance } from "@/axios-handlers";
import React, { ChangeEvent, FormEvent, useState } from "react";
const ProfilePage = () => {
	const [file, setFile] = useState<File | string>("");
	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		if (!e.target.files) {
			return;
		}
		setFile(e.target.files[0]);
	};
	const uploadProfileImage = async (e: FormEvent) => {
		e.preventDefault();
		try {
			const formData = new FormData();
			formData.append("file", file);
			const res = await axiosInstance.post("dashboard/upload", formData);
      console.log(res);
      
		} catch (error: any) {
			console.log(error.message);
		}
	};
	return (
		<div>
			<form onSubmit={uploadProfileImage}>
				<input
					type="file"
					name="profileImage"
					id="profileImage"
					onChange={onChangeHandler}
				/>
				<br />
				<button type="submit">Send</button>
			</form>
		</div>
	);
};

export default ProfilePage;
