"use client";
import React from "react";
import { UploadPhoto } from "@/components/client";
import { UseUploadProfileImageContext } from "@/context/UploadImageContext";

const UpdateUserProfile = () => {
  const { selectedImage, profileImage } = UseUploadProfileImageContext();
  return (
    <main>
      <UploadPhoto />
    </main>
  );
};

export default UpdateUserProfile;
