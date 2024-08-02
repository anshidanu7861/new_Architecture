import express from "express";
import adminAuthRouters from "./adminAuthRouter";
import adminGlobalRouters from "./adminGlobalRouter";
import { AdminAuth } from "../middlwares/admin.auth.middleware";

const router = express.Router();

router.use("/auth", adminAuthRouters);

// Check middleware is admin exist or not
router.use(AdminAuth);
router.use("/global", adminGlobalRouters);

export default router;
