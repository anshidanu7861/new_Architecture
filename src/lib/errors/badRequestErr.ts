import { ERROR_CODES } from "../../utils/constants";
import { CustomError } from "./customErr";

export class BadRequestErr extends CustomError {
  statusCode = ERROR_CODES.BAD_REQUEST;

  constructor(public message: string) {
    super(message);

    Object.setPrototypeOf(this, BadRequestErr.prototype);
  }

  serializeError() {
    return [{ message: this.message }];
  }
}
