// create user
import conn from "@/db/pgConnection"

export const createUser= async({userName,password}:AuthType)=>{
    const sql= "INSERT INTO userTable(userName,password) VALUES(($1),($2))"
    const select="SELECT * FROM userTable"
    const values=[userName,password]
     await conn.query(sql,values)
    return await conn.query(select)
}

