import conn from "./pgConnection"

export const selectFunction=async(query:string)=>{
    const result=await conn.query(query)
    return result.rows
}

export const selectByIdFucntion=async(query:string,id:number)=>{
    const result= await conn.query(query,[id])
    return result.rows
}

export const selectUserByNameFucntion=async(query:any,userName:string)=>{
    const result=await conn.query(query,[userName])
    return result.rows
}