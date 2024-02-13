import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import {cookies} from 'next/headers'

dotenv.config();

const accessTokenSecret = process.env.JWT_SECRET || "hjuwiADSEWFGG";
const refreshTokenSecret = process.env.JWT_REFRESH_SECRET || "SGIEhfu7867f";
export const registerAccessToken =  (email: string) => {
	const payload = {
		email: email,
	};
  try {
	  const token=jwt.sign(payload, accessTokenSecret, { expiresIn: "1min" })
    cookies().set({
      name:'token',
      value:token,
      httpOnly:true
    })
    return token
  } catch (error:any) {
    console.log(error.message);
     
  }
};
export const registerRefreshToken =  (email: string) => {
	const payload = {
		email: email,
	};
  try {
	  const token=jwt.sign(payload, refreshTokenSecret, { expiresIn: "7days" })
    return token
  } catch (error:any) {
    console.log(error.message);
  }
};


export const verifyAccessToken =  (accessToken: string) => {
  try {
	  const payload=jwt.verify(accessToken, accessTokenSecret)
    return payload
  } catch (error:any) {
    console.log(error.message);
  }
};
export const verifyRefreshToken =  (accessToken: string) => {
  try {
	  const payload=jwt.verify(accessToken, accessTokenSecret)
    return payload
  } catch (error:any) {
    console.log(error.message);
  }
};

