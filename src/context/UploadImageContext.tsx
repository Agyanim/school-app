'use client'
import { uploadPhotoReducer, uploadPhotoReducerInitialState } from "@/reducer/uploadPhontoReducer";
import { createContext, useContext, useReducer, useState } from "react";

const UploadProfileImageContext=createContext('')


export const UploadProfileImageContextProvider=({children})=>{
const [name,setName]=useState('')
    // const [state, dispatch] = useReducer(uploadPhotoReducer,uploadPhotoReducerInitialState)

    const values={
        name:'gideon'
    }
    return(
        <UploadProfileImageContext.Provider value={values}>{children}</UploadProfileImageContext.Provider>
    )
 
}

export const UploadProfileImageProvider=useContext(UploadProfileImageContext)
