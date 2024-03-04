'use client'

import { UploadPhotoReducerType } from "@/type"

export const uploadPhotoReducerInitialState:UploadPhotoReducerType={
    file :null,
    profileImage:'',
    selectedImage:'',
    setFile:null
}

interface Action{
type:
'setFile'|
'setProfileImage'|
'setSelectedImage',
payload:any
}

export const uploadActions={
    SETFILE:'setFile',
    SETPROFILEIMAGE:'setProfileImage',
    SETSELECTEDIMAGE:'setSelectedImage'
}
export const uploadPhotoReducer=(state:UploadPhotoReducerType,action:Action)=>{
    const {type}=action

    switch (type) {
        case uploadActions.SETFILE:{
            return {...state, file:state.file=action.payload}
        }
        default:
            return state
    }

}