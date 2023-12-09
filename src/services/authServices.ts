// create user
import conn from "@/db/pgConnection";
// creating new user service

// export const createUser = async ({ userName, password }: AuthType) => {
// 	const sql = `
//     INSERT INTO
//     userTable (userName,password) 
//     VALUES(($1),($2)) 
//     RETURNING userId,userName`;
// 	const values = [userName, password];
// 	const user = await conn.query(sql, values);
// 	return user.rows;
// };

