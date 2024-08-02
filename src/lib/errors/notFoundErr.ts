import { CustomError } from "./customErr";
import { ERROR_CODES } from "../../utils/constants";

export class NotFountErr extends CustomError {
  statusCode = ERROR_CODES.NOT_FOUND;

  constructor(message: string = "Route not found") {
    super(message);

    Object.setPrototypeOf(this, NotFountErr.prototype);
  }

  serializeError() {
    return [{ message: "Not found!" }];
  }
}
