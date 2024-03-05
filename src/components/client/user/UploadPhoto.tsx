"use client";
import { UseUploadProfileImageContext } from "@/context/UploadImageContext";
import React, { useState, FormEvent } from "react";

const UploadPhoto = () => {
  const {
    setFile,
    file,
    setProfileImage,
    selectedImage,
    setSelectedImage,
    profileImage,
    setCount,
    count
  } = UseUploadProfileImageContext();
  // console.log(file);

  // const [file, setFile] = useState<File>();
  // const [profileIMage, setProfileImage] = useState("");
  // const [selectedIMage, setSelectedImage] = useState("");

  const onChangeHanlder = (e: any) => {
    const file = e.target.files?.[0];
    // console.log(file);

    setSelectedImage(URL.createObjectURL(file));
    setFile({ file: "file" });
  };
  // console.log(file);
  const uploadProfileImage = async (e: FormEvent) => {
    e.preventDefault();
    
    // console.log(profileImage,selectedImage,file);
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
      <button onClick={()=>setCount()
      }>count</button>
      <p>{count}</p>
    </div>
  );
};

export default UploadPhoto;
