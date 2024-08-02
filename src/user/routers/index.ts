import express from "express";
import userAuthRouter from "./userAuthRouters";
import userGlobalRouter from "./user.global.routers";
import { UserAuth } from "../middlewares/user.auth.middleware";

const router = express.Router();

router.use("/auth", userAuthRouter);

// check user is exist or not middleware
router.use(UserAuth);
router.use("/global", userGlobalRouter);

export default router;
