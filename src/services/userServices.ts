import { selectByIdFunction, selectFunction, selectByNameFunction, deleteByIdFunction, updateFunction, insertFunction } from "@/db/sqlFunctions"

// creating a user
export const createUser=async(values:(any)[])=>{
    const sql = `
    INSERT INTO
    userTable (
        userName,
        password) 
    VALUES($1,$2) 
    RETURNING userId,userName`;
    const user= await insertFunction(sql,values)
    return user
}
// feching all users service/controller
export const getUsers=async()=>{
    const sql="SELECT userId,userName FROM userTable"
    return await selectFunction(sql) 
}
// fetching user using user  id
export const getUserById=async(userId:number)=>{
    const sql=`SELECT userId,userName FROM userTable WHERE userid=$1`
    return await selectByIdFunction(sql,userId)

}
// fetching user using username
export const getUserByName=async (userName:string)=>{
    const sql=`SELECT userId,userName FROM userTable WHERE userName=$1`
    return await selectByNameFunction(sql,userName)
}

export const deleteUserById=async(userId:number)=>{
    const sql=`DELETE FROM userTable WHERE userId=$1 RETURNING userId,UserName`
    return await deleteByIdFunction(sql,userId)
}
export const updateUserById = async (userName: string,userId:number) => {
	const sql = `
    UPDATE userTable
    SET userName=$1
    WHERE userId=$2
    Returning userName
    `;
    const values=[userName,userId]
    return await updateFunction(sql,values)
};
