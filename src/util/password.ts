import bcryptjs from "bcryptjs";

export const hashPassword = (password: string) => {
  const salt = bcryptjs.genSaltSync(10);
  return bcryptjs.hashSync(password, salt);
};

export const validatePassword = (password: string, hashPassword: string) => {
  return bcryptjs.compareSync(password, hashPassword);
};
