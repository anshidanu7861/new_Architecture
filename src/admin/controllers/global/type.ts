import { IAdmin } from "../../models/admin.model";

export interface AdminGlobalControllerType {
  getAdminSingle: (admin: IAdmin) => Promise<Partial<IAdmin>>;
}
