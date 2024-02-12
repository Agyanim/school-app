import {z} from "zod"
export const signUpSchema= z.object({
    email:z.string().email(),
    password:z.string().min(8).max(20),
    confirmPassword:z?.string().min(8).max(20)

})
export type signUpSchemaType=z.infer<typeof signUpSchema>

export const signInSchema=z.object({
    email:z.string().email(),
    password:z.string().min(8).max(20),
}
)
export type signInSchemaType=z.infer<typeof signInSchema>
