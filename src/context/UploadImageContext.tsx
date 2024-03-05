"use client";
import {
  uploadActions,
  uploadPhotoReducer,
  uploadPhotoReducerInitialState,
} from "@/reducer/uploadPhontoReducer";
import { UploadPhotoReducerType } from "@/type";
import { createContext, useContext, useReducer, useState } from "react";

const UploadProfileImageContext = createContext<UploadPhotoReducerType>(
  uploadPhotoReducerInitialState
);

export const UploadProfileImageContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const UploadProfileImageContext = createContext<UploadPhotoReducerType>(
    uploadPhotoReducerInitialState
  );
  const [state, dispatch] = useReducer(
    uploadPhotoReducer,
    uploadPhotoReducerInitialState
  );

  const setCount = () => {
    console.log("set count");
    dispatch({
      type: uploadActions.SETCOUNT,
      payload: undefined,
    });
  };


  const setFile = (file: string) => {
    dispatch({ type: uploadActions.SETFILE, payload: { file } });
  };

  const setProfileImage = (file: string) => {
    dispatch({ type: uploadActions.SETFILE, payload: { file } });
  };
  const setSelectedImage = (file: string) => {
    dispatch({ type: uploadActions.SETFILE, payload: { file } });
  };
  const values:UploadPhotoReducerType = {
    file: state.file,
    profileImage: state.profileImage,
    selectedImage: state.selectedImage,
    setFile,
    setProfileImage,
    setSelectedImage,
    setCount:setCount,
    count: state.count,
  };
  return (
    <UploadProfileImageContext.Provider value={values}>
      {children}
    </UploadProfileImageContext.Provider>
  );
};

export const UseUploadProfileImageContext = (): UploadPhotoReducerType => {
  const context = useContext(UploadProfileImageContext);
  if (!context) {
    throw new Error("error occured");
  }
  return context;
};
