import { SetStateAction } from "react"

interface UserType{
    user: string
    password: string
    refreshToken:string
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
        userId:number
        userName?:string
        firstName?:string
        lastName?:string
        email:string
        phone?:string
        imageUrl:string
    }
}
interface UserProfiletype{
    userId?:number
    userName?:string|undefined|null
    firstName?:string|undefined|null
    lastName?:string|undefined|null
    email?:string
    phone?:string|undefined|null
    imageUrl?:string|undefined|null
  
  }
  