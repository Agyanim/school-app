"use client";

import { UploadPhotoReducerType } from "@/type";

export const uploadPhotoReducerInitialState: UploadPhotoReducerType = {
  file: null,
  profileImage: "profile image",
  selectedImage: "",
  userId: "",
  setFile: (file) => {},
  setProfileImage: (file) => {},
  setSelectedImage: (file) => {},
  setUserId() {},
  currentUserId: "",
  setCurrentUserId() {},
  setUserProfile() {},
  userProfile: {
    userId:"",
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    imageUrl:''
  },
};

export enum uploadActions {
  SETFILE = "setFile",
  SETPROFILEIMAGE = "setProfileImage",
  SETSELECTEDIMAGE = "setSelectedImage",
  SETCOUNT = "setCount",
  SETUSERID = "setUserId",
  SETCURRENTUSERID = "setCurrentUserId",
  SETUSERPROFILE="setUserProfile"
}
export const uploadPhotoReducer = (
  state: UploadPhotoReducerType,
  action: { type: uploadActions; payload: any }
) => {
  const { type, payload } = action;
  switch (type) {
    case uploadActions.SETFILE:
      return { ...state, file: payload.file };

    case uploadActions.SETPROFILEIMAGE:
      return { ...state, profileImage: payload.profileImage };

    case uploadActions.SETSELECTEDIMAGE:
      return { ...state, selectedImage: payload.selectedImage };
    case uploadActions.SETUSERID:
      return { ...state, userId: payload.userId };
    case uploadActions.SETCURRENTUSERID:
      return { ...state, currentUserId: payload.currentUserId };

    case uploadActions.SETUSERPROFILE:
      return{...state,userProfile:payload.userProfile}
    default:
      return state;
  }
};
