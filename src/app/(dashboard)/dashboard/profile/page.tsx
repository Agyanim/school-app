"use client";
import React, { useState } from "react";
const ProfilePage = () => {
  const [file, setFile] = useState(null);
  const onChangeHandler = (e: any) => {
    setFile(e.target.files[0]);
  };
  const uploadProfileImage = (e: any) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append("profileImage", file);
    // console.log(formData);
  };
  return (
    <div>
      <form onSubmit={uploadProfileImage}>
        <input
          type="file"
          name="profileImage"
          id="profileImage"
          onChange={onChangeHandler}
        />
        <br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ProfilePage;
