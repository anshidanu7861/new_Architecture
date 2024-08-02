import { BadRequestErr } from "../../lib/errors/badRequestErr";
import {
  userLoginSchema,
  userRegisterSchema,
  userGoogleLoginSchema,
} from "../lib/validation/uservalidation";
import {
  IUserRegister,
  IUserLogin,
  IUserGoogleLogin,
} from "../types/user.types";

export const userRegisterValidator = (body: IUserRegister) => {
  const { error, value } = userRegisterSchema.validate(body);

  if (error) {
    throw new BadRequestErr(error.message);
  } else {
    return Promise.resolve();
  }
};

export const userLoginValidator = (body: IUserLogin) => {
  const { error, value } = userLoginSchema.validate(body);

  if (error) {
    throw new BadRequestErr(error.message);
  } else {
    return Promise.resolve();
  }
};

export const userGoogleLoginValidator = (body: IUserGoogleLogin) => {
  const { error, value } = userGoogleLoginSchema.validate(body);

  if (error) {
    throw new BadRequestErr(error.message);
  } else {
    return Promise.resolve();
  }
};
