import { SetStateAction } from "react"

interface UserType{
    user: string
    password: string
}

interface CreateAccountType{
    email:string
    password: string
    confirmPassword: string
}

interface UploadPhotoReducerType{
    file:File|null,
    profileImage:String,
    selectedImage:String
    setFile:SetStateAction


}