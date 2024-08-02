import app from "./app";
import { ConntectToDatabase } from "./db/connection";

const PORT = process.env.SERVER_PORT || 8000;

const start = async () => {
  try {
    ConntectToDatabase();
  } catch (error) {
    console.log("Server errors : ", error);
  }

  app.listen(PORT, () => {
    console.log(`Server started on Port ${PORT}`);
  });
};

start();
