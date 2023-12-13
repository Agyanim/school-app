"use client"

import { getRequest } from "@/axios-handlers/axiosUserHandler"
import { toast } from "sonner"

export const getUser= async()=>{
    try {
        const userData= await getRequest("user/")
        return userData
    } catch (error:any) {
        toast.error(error.message)
    }
    
}