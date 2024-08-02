import joi from "joi";

export const addAdminSchema = joi.object({
  name: joi.string().required(),
  email: joi.string().required(),
  role: joi.string().required(),
});

export const adminLoginSchema = joi.object({
  email: joi.string().required(),
  password: joi.string().required(),
});
