"use client";

import { UploadPhotoReducerType } from "@/type";

export const uploadPhotoReducerInitialState: UploadPhotoReducerType = {
  file: null,
  profileImage: "profile image",
  selectedImage: "",
  setFile: (file) => {},
  setProfileImage: (file) => {},
  setSelectedImage: (file) => {},
  count: 1,
  setCount:()=>{}
};


export enum uploadActions {
  SETFILE = "setFile",
  SETPROFILEIMAGE = "setProfileImage",
  SETSELECTEDIMAGE = "setSelectedImage",
  SETCOUNT = "setCount",
}
export const uploadPhotoReducer = (
  state: UploadPhotoReducerType,
  action: { type: uploadActions; payload: any }
) => {
  switch (action.type) {
    case uploadActions.SETFILE:
      return { ...state, file: action.payload };

    case uploadActions.SETPROFILEIMAGE:
      return { ...state, profileImage: action.payload };

    case uploadActions.SETSELECTEDIMAGE:
      return { ...state, selectedImage: action.payload };

    case uploadActions.SETCOUNT:
      console.log("set account");
      return { ...state, count: state.count + 1 };

    default:
      return state;
  }
};
