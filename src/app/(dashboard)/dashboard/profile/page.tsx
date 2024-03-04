"use client";
import { axiosInstance } from "@/axios-handlers";
import axios from "axios";
import { readFileSync } from "fs";
import { readFile } from "fs/promises";
import { url } from "inspector";
import { GetServerSideProps } from "next";
import Image from "next/image";
import path from "path";
import React, { ChangeEvent, FormEvent, useState } from "react";
import fs from "fs";

interface Props {
  dirs: string[];
}

const ProfilePage = () => {
  const [file, setFile] = useState<File>();
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
          {selectedIMage && (
            <div className="w-[7rem] h-[7rem]">
              <img className="w-full h-full" src={selectedIMage}  alt="profile" />
            </div>
          )}
        <label className="border border-blue-600" htmlFor="profileImage">
        <input
          type="file"
          name="profileImage"
          id="profileImage"
          hidden={true}
          onChange={onChangeHanlder}
        />
       Select Photo
        </label>
        <br />
        <button type="submit">Send</button>
      </form>
      {profileIMage && (
        <div>
          <img src={profileIMage} alt="text" />
        </div>
      )}

      <div></div>
    </div>
  );
};

export default ProfilePage;
