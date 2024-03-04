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

    const setFile=(file:File)=>{
        dispatch({type:'setFile',payload:file})
    }
	const values = {
		file: state.file,
		profileImage: state.profileImage,
		selectedImage: state.selectedImage,
        setFile
	};
	return (
		<UploadProfileImageContext.Provider value={values}>
			{children}
		</UploadProfileImageContext.Provider>
	);
};

export const UseUploadProfileImageContext = () => {
	return useContext(UploadProfileImageContext);
};
