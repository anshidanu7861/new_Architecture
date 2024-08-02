import express from "express";
import { responseHandler } from "../../middlewares/responseHandler";
import { AdminGlobalController } from "../controllers/global/adminGlobal.controller";
import { CustomRequest } from "../../types/customRequest.type";
const Controller = AdminGlobalController();

const router = express.Router();

router.get(
  "/single",
  responseHandler({
    controller: Controller.getAdminSingle,
    props: (req: CustomRequest) => [req?.admin],
  })
);

export default router;
