import crypto from "crypto";

export const generatePassword = () => {
  try {
    return crypto.randomBytes(6).toString("hex");
  } catch (error) {
    throw error;
  }
};
