import express, { response } from "express";
import { responseHandler } from "../../middlewares/responseHandler";
import { CustomRequest } from "../../types/customRequest.type";
import { UserAuthController } from "../controllers/auth/user.controller";
import {
  userRegisterValidator,
  userLoginValidator,
  userGoogleLoginValidator,
} from "../validator/admin.auth.validator";

const router = express.Router();

const Controller = UserAuthController();

router.post(
  "/register",
  responseHandler({
    validator: userRegisterValidator,
    controller: Controller.userRegister,
    props: (req: CustomRequest) => [req.body],
  })
);
router.post(
  "/login",
  responseHandler({
    validator: userLoginValidator,
    controller: Controller.userLogin,
    props: (req: CustomRequest) => [req.body],
  })
);

router.post(
  "/google/login",
  responseHandler({
    validator: userGoogleLoginValidator,
    controller: Controller.userGoogleLogin,
    props: (req: CustomRequest) => [req.body],
  })
);

export default router;
