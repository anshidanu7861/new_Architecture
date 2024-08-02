import joi from "joi";

export const userRegisterSchema = joi.object({
  name: joi.string().required(),
  email: joi.string().required(),
  password: joi.string().required(),
});

export const userLoginSchema = joi.object({
  email: joi.string().required(),
  password: joi.string().required(),
});

export const userGoogleLoginSchema = joi.object({
  name: joi.string().required(),
  email: joi.string().required(),
});
