import { Document } from "mongoose";
import { Request } from "express";
import { IAdmin } from "../admin/models/admin.model";

export interface CustomRequest extends Request {
  file?: Express.Multer.File;
  admin?: IAdmin | null;
  user?: Document | null;
}
