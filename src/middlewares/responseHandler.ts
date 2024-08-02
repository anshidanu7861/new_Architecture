import { NextFunction, Request, Response } from "express";
import {
  ERROR_MESSAGES,
  ERROR_CODES,
  RESPONSE_TYPES,
} from "../utils/constants";
import { CustomRequest } from "../types/customRequest.type";

const { INTERNAL_SERVER } = ERROR_MESSAGES;

interface ResponseHandlerParams<T = any> {
  validator?: (...args: any[]) => Promise<T>;
  controller: (...args: any[]) => Promise<T>;
  responseType?: string;
  props?: (
    req: Request | CustomRequest,
    res: Response,
    next: NextFunction
  ) => any[];
}

export const responseHandler =
  ({
    validator,
    controller,
    responseType = "json",
    props,
  }: ResponseHandlerParams): ((
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<void>) =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      // Validate
      if (validator) {
        await validator(...(props ? props(req, res, next) : []));
      }

      // Execute the controller
      const data = await controller(...(props ? props(req, res, next) : []));

      if (data instanceof Error) throw data;

      // Handle the response based on responseType
      switch (responseType) {
        case RESPONSE_TYPES.JSON:
          res.status(200).json({ success: true, data });
          break;

        case RESPONSE_TYPES.REDIRECT:
          res.status(200).redirect(data.url);
          break;

        default:
          break;
      }
    } catch (e: any) {
      // Handle errors
      console.error(e);
      res.status(e.statusCode || ERROR_CODES.INTERNAL_SERVER).send({
        success: false,
        errors: [{ message: e.message || INTERNAL_SERVER }],
      });
    }
  };
