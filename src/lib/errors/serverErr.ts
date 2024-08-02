import { CustomError } from "./customErr";
import { ERROR_CODES } from "../../utils/constants";

export class InternalServerErr extends CustomError {
  statusCode = ERROR_CODES.INTERNAL_SERVER;

  constructor(message: string = "internal server error") {
    super(message);

    Object.setPrototypeOf(this, InternalServerErr.prototype);
  }

  serializeError() {
    return [{ message: this.message }];
  }
}
