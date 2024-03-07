"use client";
import React from "react";
import { UploadPhoto } from "@/components/client";
import { UseUploadProfileImageContext } from "@/context/UploadImageContext";

const UpdateUserProfile = () => {
  const { selectedImage, profileImage } = UseUploadProfileImageContext();
  return (
    <main>
      <section>
        <div>
          {/* {selectedImage ? (
            <img src={selectedImage} alt="selected Image" />
          ) : (
            <div className="w-[2rem] h-[2rem] bg-orange-700"></div>
          )} */}
        </div>
      </section>
      {/* <img src={profileImage} alt="profile image" /> */}
      <UploadPhoto />
    </main>
  );
};

export default UpdateUserProfile;
