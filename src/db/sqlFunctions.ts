import conn from "./pgConnection"

export const selectFunction=async(query:string)=>{
    const result=await conn.query(query)
    return result.rows
}

export const selectByIdFunction=async(query:string,id:number)=>{
    const result= await conn.query(query,[id])
    return result.rows[0]
}

export const selectByNameFunction=async(query:any,userName:string)=>{
    const result=await conn.query(query,[userName])
    return result.rows[0]
}

export const deleteByIdFunction=async(query:string,id:number)=>{
    const result =await conn.query(query,[id])
    return result.rows[0]
}
export const updateFunction=async(query:string,values:(any)[])=>{
    const result =await conn.query(query,values)
    return result.rows[0]
}

export const insertFunction=async(query:string,values:(any)[])=>{
const result=await conn.query(query,values)
return result.rows[0]
}