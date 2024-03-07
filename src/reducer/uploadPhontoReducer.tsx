"use client";

import { UploadPhotoReducerType } from "@/type";

export const uploadPhotoReducerInitialState: UploadPhotoReducerType = {
  file: null,
  profileImage: "profile image",
  selectedImage: "",
  setFile: (file) => {},
  setProfileImage: (file) => {},
  setSelectedImage: (file) => {},
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

  const {type,payload}=action
  switch (type) {
    case uploadActions.SETFILE:
      return { ...state, file: payload.file };

    case uploadActions.SETPROFILEIMAGE:
      return { ...state, profileImage:payload.profileImage };

    case uploadActions.SETSELECTEDIMAGE:      
      return { ...state, selectedImage:payload.selectedImage };

    default:
      return state;
  }
};
