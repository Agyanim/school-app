import jwt from "jsonwebtoken";
import { jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";

const accessTokenSecretKey = process.env.JWT_SECRET || "";
const refreshTokenSecretKey = process.env.JWT_REFRESH_SECRET || "";

interface userJwtPayload {
	jti: string;
	iat: number;
}
export const registerAccessToken = (email: string) => {
	const payload = {
		email: email,
	};
	try {
		const token = jwt.sign(payload, accessTokenSecretKey, { expiresIn: "1day" });
		cookies().set({
			name: "token",
			value: token,
			httpOnly: true,
		});
		return token;
	} catch (error: any) {
		throw new Error(error.message)
	}
};
export const registerRefreshToken = (email: string) => {
	const payload = {
		email: email,
	};
	try {
		const token = jwt.sign(payload, refreshTokenSecretKey, {
			expiresIn: "7days",
		});
		return token;
	} catch (error: any) {
		throw new Error(error.message);
	}
};
export const getJwtSecret = () => {
	const accessTokenSecret = accessTokenSecretKey;
	if (!accessTokenSecret || accessTokenSecret != "") {
		return accessTokenSecret;
	}
};
export const verifyAccessToken = async (accessToken: string) => {
	try {
		const verifiedToken = await jwtVerify(
			accessToken,
			new TextEncoder().encode(getJwtSecret())
		);
		return verifiedToken.payload as userJwtPayload;
	} catch (error: any) {
		throw new Error("error occured");
	}
};

export const verifyRefreshToken = (accessToken: string) => {
	try {
		const payload = jwt.verify(accessToken, refreshTokenSecretKey);
		return payload;
	} catch (error: any) {
		throw new Error(error.message);
	}
};
