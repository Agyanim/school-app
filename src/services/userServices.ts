import conn from "@/db/pgConnection"

export const getUsers=async()=>{
    const sql="SELECT * FROM userTable"
    const data=await conn.query(sql)
    return data.rows
}

export const getUserById=async(userId:number)=>{
    const sql=`SELECT * FROM userTable WHERE userId=${userId}`
    return await conn.query(sql)

}