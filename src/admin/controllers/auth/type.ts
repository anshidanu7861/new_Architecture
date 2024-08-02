import { IAdmin } from "../../models/admin.model";
import { IAdminLogin, IAddAdmin } from "../../types/admin.type";

export interface AdminAuthControllerType {
  loginAdmin: (body: IAdminLogin) => Promise<Partial<IAdmin>>;
  addAdmin: (body: IAddAdmin) => Promise<Partial<IAddAdmin>>;
}
