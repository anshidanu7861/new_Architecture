import { IUserRegister } from "../types/user.types";
import WidgetUserModel from "../models/user.model";

const findUserWithEmail = async (email: string) => {
  try {
    return await WidgetUserModel.findOne({ email: email });
  } catch (error) {
    throw error;
  }
};

const createUser = async (data: IUserRegister) => {
  try {
    return await WidgetUserModel.create(data);
  } catch (error) {
    throw error;
  }
};

const findUserWithId = async (id: string) => {
  try {
    return await WidgetUserModel.findById(id);
  } catch (error) {
    throw error;
  }
};

export { findUserWithEmail, createUser, findUserWithId };
