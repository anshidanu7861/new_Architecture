import { verifyToken } from "../../services/jwt/jwt.services";
import { BadRequestErr } from "../../lib/errors/badRequestErr";
import mongoose from "mongoose";
import WidgetUserModel from "../models/user.model";
import { InternalServerErr } from "../../lib/errors/serverErr";
import { CustomRequest } from "../../types/customRequest.type";
import { NextFunction, Response } from "express";
import { ERROR_MESSAGES } from "../../utils/constants";

const { MISSING_AUTHORIZATION_TOKEN, INVALID_ACCESS_TOKEN } = ERROR_MESSAGES;

export const UserAuth = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const accessToken = req.headers.authorization?.split(" ")[1];

    if (accessToken) {
      const decode: any = await verifyToken(accessToken);

      const id = decode?._id;

      if (!id) {
        throw new BadRequestErr(INVALID_ACCESS_TOKEN);
      }

      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new BadRequestErr(INVALID_ACCESS_TOKEN);
      }

      const user = await WidgetUserModel.findById(id);

      if (user) {
        req.user = user;
        next();
      }
    } else {
      throw new BadRequestErr(MISSING_AUTHORIZATION_TOKEN);
    }
  } catch (error) {
    console.error("Error in userAuth middleware", error);
    throw new InternalServerErr();
  }
};
