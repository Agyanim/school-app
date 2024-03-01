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
      // if (!res) return;
      // const response = await fetch("/api/dashboard/upload", {
      //   method: "get",
      // });
      // if (!response) return;
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
        <button type="submit">Send</button>
      </form>
      {selectedIMage && (
        <div>
          <img src={selectedIMage} width={100} height={100} alt="profile" />
        </div>
      )}
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
