"use client";
import React from "react";
import { UploadPhoto } from "@/components/client";
import { UseUploadProfileImageContext } from "@/context/UploadImageContext";

const UpdateProfilePage = () => {
  const { selectedImage, profileImage } = UseUploadProfileImageContext();
  return (
    <main>
      <UploadPhoto />
    </main>
  );
};

export default UpdateProfilePage;
