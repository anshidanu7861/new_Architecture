import { Request, Response, NextFunction } from "express";
import { CustomError } from "./customErr";
import { ERROR_CODES } from "../../utils/constants";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeError() });
  }

  console.error(err);
  res.status(ERROR_CODES.BAD_REQUEST).send({
    errors: [{ message: "Something went wrong" }],
  });
};
