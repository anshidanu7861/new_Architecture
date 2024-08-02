import express from "express";
import adminAllRouters from "../admin/routers";
import userAllRouters from "../user/routers";

const router = express.Router();

router.use("/users", userAllRouters);
router.use("/admin", adminAllRouters);

export default router;
