// creating student

import { deleteByIdFunction, insertFunction, selectByIdFunction, selectFunction } from "@/db/sqlFunctions";

export const createStudent = async (values: any[]) => {
	const sql = `
    INSERT INTO 
    studentTable(
        firstName,
        middleName,
        lastName,
        gender,
        dateOfBirth,
        placeOfBirth,
        hometown,
        address1,
        primaryLanguage,
        secondaryLanguage,
        className,
        enrollmentDate
    )
    VALUES(
        $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12
    )
    RETURNING *
    `;
	const result = await insertFunction(sql, values);
	return result;
};

export const getAllStudent=async()=>{
    const sql=`SELECT * FROM studentTable`
    return await selectFunction(sql)
}
export const getStudentById=async(studentId:number)=>{
    const sql=`SELECT * FROM studentTable WHERE studentId=$1`
    return selectByIdFunction(sql,studentId)
}
export const deleteStudentById=async(studentId:number)=>{
    const sql=`DELETE FROM studentTable WHERE studentId=$1 RETURNING *`
    return await deleteByIdFunction(sql,studentId)
}
