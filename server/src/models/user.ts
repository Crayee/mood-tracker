import mongoose, { Model } from "mongoose";
import { User } from "../shared/types";

const { SchemaTypes } = mongoose;
const { String } = SchemaTypes;

const SCHEMA = new mongoose.Schema({
  username: String,
});

export type UserEntity = Omit<User, "_id"> & { _id: any };
export type UserDocument = mongoose.Document & UserEntity;

export const getUserModel = (): Model<UserDocument> =>
  mongoose.model<UserDocument>("User", SCHEMA, "user");
