import conn from "@/db/pgConnection"
import { selectByIdFucntion, selectFunction } from "@/db/sqlFunctions"

// feching all users service/controller
export const getUsers=async()=>{
    const sql="SELECT userName FROM userTable"
    return await selectFunction(sql) 
}
// fetching user using user  id
export const getUserById=async(userId:number)=>{
    const sql=`SELECT userId,userName FROM userTable WHERE userid=$1`
    const result= await selectByIdFucntion(sql,userId)
    return result

}
// fetching user using username
export const getUserByName=async (userName:string)=>{
    const sql=`SELECT * FROM userTable WHERE userName=$1`
    const result=await conn.query(sql,[userName])
    return result.rows
}