import mongoose from "mongoose";

export const ConntectToDatabase = () => {
  try {
    const DATABASE_URL = process.env.DATABASE_URL || "";

    mongoose
      .connect(DATABASE_URL)
      .then(() => {
        console.log("Database connected successfully!");
      })
      .catch((err) => {
        console.log("database error : ", err);
      });
  } catch (error) {
    throw error;
  }
};
