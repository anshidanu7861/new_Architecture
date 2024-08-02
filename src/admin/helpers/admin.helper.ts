import AdminModel, { IAdmin } from "../models/admin.model";

const findAdminEmail = async (email: string) => {
  try {
    return await AdminModel.findOne({ email: email });
  } catch (error) {
    throw error;
  }
};

const loginAdminHelper = async (email: string) => {
  try {
    const admin = await AdminModel.findOne({ email: email });
    const lastLogin = new Date();

    if (admin) {
      admin.lastLogin_date = lastLogin;
      await admin?.save();
    }

    return admin;
  } catch (error) {}
};

const addAdminHelper = async (
  email: string,
  name: string,
  password: string,
  role: string
): Promise<IAdmin> => {
  try {
    const lastLogin = new Date();
    const createAdmin = await AdminModel.create({
      email,
      name,
      password,
      role,
      lastLogin_date: lastLogin,
    });

    return createAdmin;
  } catch (error) {
    throw error;
  }
};

const findAdminWithId = async (id: string) => {
  try {
    return await AdminModel.findById(id);
  } catch (error) {
    throw error;
  }
};

export { findAdminEmail, addAdminHelper, loginAdminHelper, findAdminWithId };
