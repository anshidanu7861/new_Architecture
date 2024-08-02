import { BadRequestErr } from "../../../lib/errors/badRequestErr";
import { createAccessToken } from "../../../services/jwt/jwt.services";
import {
  comparePassword,
  hashPassword,
} from "../../../services/password.services";
import { ERROR_MESSAGES } from "../../../utils/constants";
import { createUser, findUserWithEmail } from "../../helpers/user.helper";
import { UserAuthControllerType } from "./types";

const { USER_NOT_FOUND, INVALID_PASSWORD, DUPLICATE_USER } = ERROR_MESSAGES;

export const UserAuthController = () =>
  ({
    userRegister: async (body) => {
      try {
        const existUser = await findUserWithEmail(body.email);

        if (existUser) {
          throw new BadRequestErr(DUPLICATE_USER);
        }

        const hashedPassword = await hashPassword(body.password);

        body.password = hashedPassword;

        const user = await createUser(body);

        return { user };
      } catch (error) {
        throw error;
      }
    },

    userLogin: async (body) => {
      try {
        const user = await findUserWithEmail(body.email);

        if (user) {
          const comparedPassword = await comparePassword(
            body.password,
            user.password
          );
          if (comparedPassword) {
            const id = user._id.toString();
            const token = await createAccessToken(id);

            return {
              user,
              token,
            };
          }
        } else {
          throw new BadRequestErr(USER_NOT_FOUND);
        }
      } catch (error) {
        throw error;
      }
    },

    userGoogleLogin: async (body) => {
      try {
        const user = await findUserWithEmail(body.email);

        if (!user) {
          throw new BadRequestErr(USER_NOT_FOUND);
        }

        const id = user._id.toString();
        const token = await createAccessToken(id);

        return {
          user,
          token,
        };
      } catch (error) {
        throw error;
      }
    },
  } as UserAuthControllerType);
