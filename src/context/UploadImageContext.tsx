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
  const [state, dispatch] = useReducer(
    uploadPhotoReducer,
    uploadPhotoReducerInitialState
  );

const setUserId=(userId:string)=>{
  dispatch({type:uploadActions.SETUSERID,payload:{userId}})
}

  const setFile = (file: string) => {
    dispatch({ type: uploadActions.SETFILE, payload: file });
  };
  const setProfileImage = (profileImage: string) => {
    dispatch({ type: uploadActions.SETPROFILEIMAGE, payload: profileImage  });
  };
  const setSelectedImage = (selectedIMage: string) => {    
    dispatch({ type: uploadActions.SETSELECTEDIMAGE, payload:selectedIMage  });
  };
  const values:UploadPhotoReducerType = {
    file: state.file,
    profileImage: state.profileImage,
    selectedImage: state.selectedImage,
    setFile,
    setProfileImage,
    setSelectedImage,
    setUserId,
    userId:state.userId
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
