import {
  findAdminEmail,
  addAdminHelper,
  loginAdminHelper,
} from "../../helpers/admin.helper";
import { BadRequestErr } from "../../../lib/errors/badRequestErr";
import { AdminAuthControllerType } from "./type";
import {
  comparePassword,
  hashPassword,
} from "../../../services/password.services";
import { ERROR_MESSAGES } from "../../../utils/constants";
import { generatePassword } from "../../../services/string";
import { sendAdminPasswordMail } from "../../../services/email/admin.pass.email";
import { createAccessToken } from "../../../services/jwt/jwt.services";

const { USER_NOT_FOUND, INVALID_PASSWORD, DUPLICATE_USER } = ERROR_MESSAGES;

export const AdminAuthController = () =>
  ({
    loginAdmin: async (body) => {
      try {
        const admin = await loginAdminHelper(body.email);
        if (admin) {
          const comparedPass = await comparePassword(
            body.password,
            admin?.password
          );

          if (!comparedPass) {
            throw new BadRequestErr(INVALID_PASSWORD);
          }

          const id = admin._id.toString();
          const token = await createAccessToken(id);

          return { admin, token };
        } else {
          throw new BadRequestErr(USER_NOT_FOUND);
        }
      } catch (error) {
        throw error;
      }
    },

    addAdmin: async (body) => {
      try {
        const existAdmin = await findAdminEmail(body.email);

        if (existAdmin) {
          throw new BadRequestErr(DUPLICATE_USER);
        }
        const password = generatePassword();
        const hashedPassword = await hashPassword(password);

        const createAdmin = await addAdminHelper(
          body.email,
          body.name,
          hashedPassword,
          body.role
        );
        sendAdminPasswordMail(createAdmin.name, createAdmin.email, password);

        return { createAdmin };
      } catch (error) {
        throw error;
      }
    },
  } as AdminAuthControllerType);
