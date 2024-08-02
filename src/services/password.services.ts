import bycript from "bcrypt";

export const hashPassword = async (password: string) => {
  try {
    return await bycript.hash(password, 8);
  } catch (error) {
    throw error;
  }
};

export const comparePassword = async (
  newPassword: string,
  existingPassword: string
) => {
  try {
    return await bycript.compare(newPassword, existingPassword);
  } catch (error) {
    throw error;
  }
};
