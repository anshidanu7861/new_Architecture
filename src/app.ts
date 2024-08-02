import express from "express";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { NotFountErr } from "./lib/errors/notFoundErr";
import { errorHandler } from "./lib/errors/errorHandler";
import AllRouters from "./routers";

dotenv.config();

const app = express();

// middlwares
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/public", express.static("public"));
app.use(morgan("dev"));

// all routers
app.use("/api/v1", AllRouters);

app.all("*", async () => {
  throw new NotFountErr();
});

app.use(errorHandler);

export default app;
