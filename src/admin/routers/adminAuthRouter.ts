import express from "express";
import { AdminAuthController } from "../controllers/auth/adminAuth.controller";
import { responseHandler } from "../../middlewares/responseHandler";
import { CustomRequest } from "../../types/customRequest.type";
import {
  adminLoginValidator,
  addAdminValidator,
} from "../validators/adminAuth.validator";

const Controller = AdminAuthController();

const router = express.Router();

router.post(
  "/login",
  responseHandler({
    validator: adminLoginValidator,
    controller: Controller.loginAdmin,
    props: (req: CustomRequest) => [req?.body],
  })
);

router.post(
  "/add",
  responseHandler({
    validator: addAdminValidator,
    controller: Controller.addAdmin,
    props: (req: CustomRequest) => [req.body],
  })
);

export default router;
