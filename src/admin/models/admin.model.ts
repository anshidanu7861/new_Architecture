import { Schema, model, Document } from "mongoose";

export interface IAdmin extends Document {
  name: string;
  email: string;
  password: string;
  role?: string;
  isDeleted?: boolean;
  isActive?: boolean;
  lastLogin_date: Date;
  createdAt?: Date;
  updatedAt?: Date;
  _id?: Schema.Types.ObjectId;
}

const AdminSchema: Schema<IAdmin> = new Schema(
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
    role: {
      type: String,
      required: true,
      enum: ["admin", "super-admin"],
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
    lastLogin_date: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

AdminSchema.methods.toJSON = function () {
  const admin = this;
  const adminObj = admin.toObject();
  delete adminObj.password;
  return adminObj;
};

const AdminModel = model("admins", AdminSchema);
export default AdminModel;
