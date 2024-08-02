import { CustomError } from "./customErr";
import { ERROR_CODES } from "../../utils/constants";

export class UnauthrizedErr extends CustomError {
  statusCode: number;

  constructor(message: string) {
    super(message);

    this.statusCode = ERROR_CODES.UNAUTHORIZED;

    Object.setPrototypeOf(this, UnauthrizedErr.prototype);
  }

  serializeError() {
    return [{ message: this.message }];
  }
}
