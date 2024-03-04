'use client'
import { UseUploadProfileImageContext } from "@/context/UploadImageContext";
import React, { useState,FormEvent } from "react";

const UploadPhoto = () => {
  const {profileImage,setFile,file}=UseUploadProfileImageContext()

    // const [file, setFile] = useState<File>();
    const [profileIMage, setProfileImage] = useState("");
    const [selectedIMage, setSelectedImage] = useState("");
  
    const onChangeHanlder = (e: any) => {
      const file = e.target.files?.[0];
      setSelectedImage(URL.createObjectURL(file));
      setFile(file);
    };
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
        const data = await res.json();
        setProfileImage(data.imageUrl);
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
          onChange={onChangeHanlder}
        />
        <br />
        <button type="submit">Upload Image</button>
      </form>
    </div>
  );
};

export default UploadPhoto;
