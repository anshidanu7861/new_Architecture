import { BadRequestErr } from "../../lib/errors/badRequestErr";
import {
  addAdminSchema,
  adminLoginSchema,
} from "../lib/validations/adminValidation";
import { IAddAdmin, IAdminLogin } from "../types/admin.type";

export const adminLoginValidator = (body: IAdminLogin) => {
  const { error, value } = adminLoginSchema.validate(body);
  if (error) {
    throw new BadRequestErr(error.message);
  } else {
    return Promise.resolve();
  }
};

export const addAdminValidator = (body: IAddAdmin) => {
  const { error, value } = addAdminSchema.validate(body);

  if (error) {
    throw new BadRequestErr(error.message);
  } else {
    return Promise.resolve();
  }
};
