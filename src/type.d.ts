import { z } from "zod"

interface UserType{
    user: string
    password: string
}

interface CreateAccountType{
    email:string
    password: string
    confirmPassword: string
}

type signUpSchemaType=z.infer<typeof signupSchema>