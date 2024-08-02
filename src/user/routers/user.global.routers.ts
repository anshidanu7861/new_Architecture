import express from "express";
import { responseHandler } from "../../middlewares/responseHandler";
import { UserGlobalController } from "../controllers/global/userGlobal.controller";
import { CustomRequest } from "../../types/customRequest.type";

const Controller = UserGlobalController();
const router = express.Router();

router.get(
  "/single",
  responseHandler({
    controller: Controller.getUserSingle,
    props: (req: CustomRequest) => [req?.user],
  })
);

export default router;
