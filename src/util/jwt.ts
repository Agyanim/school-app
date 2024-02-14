import jwt from "jsonwebtoken";
import { jwtVerify,SignJWT } from "jose";
import dotenv from "dotenv";
import { cookies } from "next/headers";

// dotenv.config();
const accessTokenSecret = process.env.JWT_SECRET || "hjuwiADSEWFGG";
const refreshTokenSecret = process.env.JWT_REFRESH_SECRET || "SGIEhfu7867f";

export const registerAccessToken = (email: string) => {
  const payload = {
    email: email,
  };
  try {
    const token = jwt.sign(payload, accessTokenSecret, { expiresIn: "1day" });
    cookies().set({
      name: "token",
      value: token,
      httpOnly: true,
    });
    return token;
  } catch (error: any) {
    console.log(error.message);
  }
};
export const registerRefreshToken = (email: string) => {
  const payload = {
    email: email,
  };
  try {
    const token = jwt.sign(payload, refreshTokenSecret, { expiresIn: "7days" });
    return token;
  } catch (error: any) {
    console.log(error.message);
  }
};
export const getJwtSecret=()=>{
  const accessTokenSecret = process.env.JWT_SECRET || "hjuwiADSEWFGG";
  return accessTokenSecret
}
export const verifyAccessToken = async (accessToken: string) => {
  try {
    await jwtVerify(accessToken, new TextEncoder().encode(getJwtSecret()));
  } catch (error: any) {
    throw new Error("error occured")
  }
};
export const verifyRefreshToken = (accessToken: string) => {
  try {
    const payload = jwt.verify(accessToken, refreshTokenSecret);
    return payload;
  } catch (error: any) {
    console.log(error.message);
  }
};
