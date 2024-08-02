import { findUserWithId } from "../../helpers/user.helper";
import { ERROR_MESSAGES } from "../../../utils/constants";
import { BadRequestErr } from "../../../lib/errors/badRequestErr";
import { userGlobalControllerType } from "./type";

const { INVALID_ID, USER_NOT_FOUND } = ERROR_MESSAGES;

export const UserGlobalController = () =>
  ({
    getUserSingle: async (user) => {
      try {
        if (user) {
          const id = user._id;
          if (!id) {
            throw new BadRequestErr(INVALID_ID);
          }

          if (id) {
            const userId = id.toString();
            const findUser = await findUserWithId(userId);
            return findUser;
          }
        } else {
          throw new BadRequestErr(USER_NOT_FOUND);
        }
      } catch (error) {
        throw error;
      }
    },
  } as userGlobalControllerType);
