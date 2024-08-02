import jwt from "jsonwebtoken";

export const createAccessToken = async (_id: string) => {
  try {
    return jwt.sign({ _id }, process.env.JWT_SECRET as string, {
      expiresIn: "3d",
    });
  } catch (error) {
    throw error;
  }
};

export const verifyToken = async (token: string) => {
  try {
    return await jwt.verify(token, process.env.JWT_SECRET as string);
  } catch (error) {
    throw error;
  }
};
