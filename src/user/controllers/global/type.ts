import { IUser } from "../../models/user.model";

export interface userGlobalControllerType {
  getUserSingle: (user: IUser) => Promise<Partial<IUser>>;
}
