"use client"

import { getRequest } from "@/axios-handlers/axiosUserHandler"
import { toast } from "sonner"

export const getUser= async()=>{
    try {
        const data= await getRequest("user/")
        toast.success("Success")
        return data
    } catch (error:any) {
        toast.error(error.message)
    }
    
}