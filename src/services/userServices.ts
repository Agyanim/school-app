import {
  selectByIdFunction,
  selectFunction,
  selectByNameFunction,
  deleteByIdFunction,
  updateFunction,
} from "@/db/sqlFunctions";
// import { PrismaClient } from "@prisma/client";
import prisma from "@/db/prismaClient";
// creating a user

const prismaClient = prisma;

export const createUser = async (values: any) => {
    return await prismaClient.user.create({
        data:values
    },
    )
};
export const createUserProfile = async (userId: number) => {
    return await prismaClient.profile.create({
        data:{
          userId:userId
        }
    })
};
// feching all users service/controller
export const getUsers = async () => {
  return await prismaClient.user.findMany();
  
};
// fetching user using user  id
export const getUserById = async (userId: number) => {
  return await prismaClient.user.findUnique({
    where: {
      id: userId,
    },
  });
};
// fetching user using username
export const getUserByName = async (userName: string) => {
  const sql = `SELECT userId,userName FROM userTable WHERE userName=$1`;
  return await selectByNameFunction(sql, userName);
};
export const getUserByEmail = async (email: string) => {
   const user= await prismaClient.user.findUnique({
    where: {
      email: email,
    },
    
  });
  return user
};

export const deleteUserById = async (userId: number) => {
  const sql = `DELETE FROM userTable WHERE userId=$1 RETURNING userId,UserName`;
  return await deleteByIdFunction(sql, userId);
};
export const updateUserById = async (userName: string, userId: number) => {
  const sql = `
    UPDATE userTable
    SET userName=$1
    WHERE userId=$2
    Returning userName
    `;
  const values = [userName, userId];
  return await updateFunction(sql, values);
};
