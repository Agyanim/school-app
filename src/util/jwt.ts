import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const secret = process.env.JWT_SECRET;
export const myTest = () => {
  const payload = {
    email: "user@example.com",
  };
  const secret = process.env.JWT_SECRET;

if (!secret) {
  console.error("JWT_SECRET is not defined in the environment.");
  process.exit(1); // Exit the process or handle the error appropriately
}
const token = jwt.sign(payload, secret);
console.log(token);
  
};
