import { verifyToken } from "../../services/jwt/jwt.services";
import { BadRequestErr } from "../../lib/errors/badRequestErr";
import { ERROR_MESSAGES } from "../../utils/constants";
import { CustomRequest } from "../../types/customRequest.type";
import { NextFunction, Response } from "express";
import { InternalServerErr } from "../../lib/errors/serverErr";
import mongoose from "mongoose";
import AdminModel from "../models/admin.model";

const { MISSING_AUTHORIZATION_TOKEN, INVALID_ACCESS_TOKEN } = ERROR_MESSAGES;

export const AdminAuth = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const accessToken = req.headers.authorization?.split(" ")[1];

    if (accessToken) {
      const decode: any = await verifyToken(accessToken);

      const id = decode?._id; // Extract the _id
      if (!id) {
        throw new BadRequestErr(INVALID_ACCESS_TOKEN);
      }

      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new BadRequestErr(INVALID_ACCESS_TOKEN);
      }

      const admin = await AdminModel.findOne({ _id: id });

      if (!admin) {
        throw new BadRequestErr(INVALID_ACCESS_TOKEN);
      }

      if (admin) {
        req.admin = admin;
        next();
      }
    } else {
      throw new BadRequestErr(MISSING_AUTHORIZATION_TOKEN);
    }
  } catch (error) {
    console.error("Error in AdminAuth middleware", error);
    throw new InternalServerErr();
  }
};
