"use client";
import { axiosInstance } from "@/axios-handlers";
import axios from "axios";
import React, { ChangeEvent, FormEvent, useState } from "react";
const ProfilePage = () => {
  const [file, setFile] = useState<File>();

  const uploadProfileImage = async (e: FormEvent) => {
    e.preventDefault();
    if (!file) return;
    try {
      const formData = new FormData();
      formData.set("file", file);
      const res = await fetch("/api/dashboard/upload", {
        method: "post",
        body: formData,
      });
      if (!res) return;
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
          onChange={(e) => {
            setFile(e.target.files?.[0]);
          }}
        />
        <br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ProfilePage;
