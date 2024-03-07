"use client";
import { UseUploadProfileImageContext } from "@/context/UploadImageContext";
import React, { FormEvent } from "react";

const UploadPhoto = () => {
  const { setFile, file, setProfileImage, setSelectedImage, selectedImage } =
    UseUploadProfileImageContext();

  const onChangeHanlder = (e: any) => {
    const newFile = e.target.files?.[0];
    if (newFile) {
      const imageUrl = URL.createObjectURL(newFile);
      setSelectedImage({ selectedImage: imageUrl });
      setFile({ file: newFile });
    }
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
      setProfileImage({ profileImage: data.imageUrl });
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div className="mt-10">
      <form
        className="w-[9rem]  flex flex-col gap-4"
        onSubmit={uploadProfileImage}
      >
        <label
          className="flex justify-center items-center bg-gray-400/20  h-[10rem] rounded hover:cursor-pointer"
          htmlFor="profileImage"
        >
          {selectedImage ? (
            <img
              className="h-full w-full"
              src={selectedImage}
              alt="selected image"
            />
          ) : (
            <p className="h-[6rem] w-[4rem] flex justify-center items-center text-orange-700 font-bold ">
              Select Image
            </p>
          )}
          <input
            type="file"
            name="profileImage"
            id="profileImage"
            hidden={true}
            onChange={onChangeHanlder}
          />
        </label>
        <button
          className="bg-gradient-to-r from-orange-600 to-pink-600 border-none hover:bg-gradient-to-l rounded py-2 px-3 text-white font-bold"
          type="submit"
        >
          Upload Image
        </button>
      </form>
    </div>
  );
};

export default UploadPhoto;
