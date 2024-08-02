import { IUser } from "../../models/user.model";
import {
  IUserLogin,
  IUserRegister,
  IUserGoogleLogin,
} from "../../types/user.types";

export interface UserAuthControllerType {
  userRegister: (body: IUserRegister) => Promise<Partial<IUser>>;
  userLogin: (body: IUserLogin) => Promise<Partial<IUser>>;
  userGoogleLogin: (body: IUserGoogleLogin) => Promise<Partial<IUser>>;
}
