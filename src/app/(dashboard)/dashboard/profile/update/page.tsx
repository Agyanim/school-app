"use client";
import React from "react";
import { UploadPhoto } from "@/components/client";
import { UseUploadProfileImageContext } from "@/context/UploadImageContext";


const UpdateUserProfile = () => {
  const {profileImage}=UseUploadProfileImageContext()
  return (
    <div>
      <UploadPhoto/>
      <h1>{profileImage}</h1>
    </div>
  );
};

export default UpdateUserProfile;
