"use client";
import React from "react";
import { UploadPhoto } from "@/components/client";


const UpdateUserProfile = () => {
  // const [file, setFile] = useState<File>();
  // const [profileIMage, setProfileImage] = useState("");
  // const [selectedIMage, setSelectedImage] = useState("");

  // const onChangeHanlder = (e: any) => {
  //   const file = e.target.files?.[0];
  //   setSelectedImage(URL.createObjectURL(file));
  //   setFile(file);
  // };
  // const uploadProfileImage = async (e: FormEvent) => {
  //   e.preventDefault();
  //   if (!file) return;
  //   try {
  //     const formData = new FormData();
  //     formData.set("file", file);
  //     const res = await fetch("/api/dashboard/upload", {
  //       method: "post",
  //       body: formData,
  //     });
  //     const data = await res.json();
  //     setProfileImage(data.imageUrl);
  //   } catch (error: any) {
  //     console.log(error.message);
  //   }
  // };
  return (
    <div>
      <UploadPhoto/>
    </div>
  );
};

export default UpdateUserProfile;
