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
    setFile:(file)=>void
    setProfileImage:(file)=>void
    setSelectedImage:(file)=>void
    count:number
    setCount:()=>void


}