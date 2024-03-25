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
    profileImage:string,
    selectedImage:string
    setFile:(file)=>void
    setProfileImage:(file)=>void
    setSelectedImage:(file)=>void
    userId:string
    setUserId:(userid)=>void
    currentUserId:string
    setCurrentUserId:(currentUserId)=>void
    setUserProfile:(userProfile)=>void
    userProfile:{
        userId:string
        userName?:string
        firstName?:string
        lastName?:string
        email:string
        phone?:string
        imageUrl:string
    }
}
interface UserProfiletype{
    userId:string
    userName?:string|undefined
    firstName?:string|undefined
    lastName?:string|undefined
    email:string
    phone?:string|undefined
    imageUrl?:string|undefined
  
  }
  