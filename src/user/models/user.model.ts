import { Schema, model, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  isDeleted: boolean;
  isActive: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  _id?: Schema.Types.ObjectId;
}

const widgetUserSchema: Schema<IUser> = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isDeleted: {
      type: Boolean,
      required: true,
      default: false,
    },
    isActive: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

widgetUserSchema.methods.toJSON = function () {
  const user = this;
  const userObj = user.toObject();

  delete userObj.password;

  return userObj;
};

const WidgetUserModel = model("widgetusers", widgetUserSchema);
export default WidgetUserModel;
