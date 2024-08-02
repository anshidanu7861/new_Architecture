import { findAdminWithId } from "../../helpers/admin.helper";
import { AdminGlobalControllerType } from "./type";
import { BadRequestErr } from "../../../lib/errors/badRequestErr";
import { ERROR_MESSAGES } from "../../../utils/constants";

const { INVALID_ID, USER_NOT_FOUND } = ERROR_MESSAGES;

export const AdminGlobalController = () =>
  ({
    getAdminSingle: async (admin) => {
      try {
        if (admin) {
          const id = admin?._id;
          if (!id) {
            throw new BadRequestErr(INVALID_ID);
          }

          if (id) {
            const adminId = id.toString();
            const findAdmin = await findAdminWithId(adminId);
            return findAdmin;
          }
        } else {
          throw new BadRequestErr(USER_NOT_FOUND);
        }
      } catch (error) {
        throw error;
      }
    },
  } as AdminGlobalControllerType);
