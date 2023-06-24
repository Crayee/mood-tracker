import mongoose, { Model } from "mongoose";
import { DailyReport } from "../shared/types";
import { getUserModel } from "./user";

const { SchemaTypes } = mongoose;
const { String, Number, Boolean, Date, ObjectId } = SchemaTypes;

const SCHEMA = new mongoose.Schema({
  ownerId: { type: ObjectId, ref: getUserModel },
  date: Date,

  parameters: {
    sleep: {
      duration: Number,
      hadDreams: Boolean,
    },
    hydration: {
      waterAmount: Number,
      sodaAmount: Number,
      hadAlcohol: Boolean,
    },
    work: {
      duration: Number,
      intensity: String,
    },
    sex: {
      hadSex: Boolean,
      didMasturbate: Boolean,
    },
    food: {
      calories: Number,
      tags: [String],
    },
    sport: {
      duration: Number,
      intensity: String,
      tags: [String],
    },
  },

  rating: {
    mood: Number,
    success: Number,
    focus: Number,
    satisfaction: Number,
    health: Number,
    energy: Number,
    rating: Number,
  },
});

SCHEMA.virtual("owner", {
  ref: getUserModel,
  localField: "ownerId",
  foreignField: "_id",
  justOne: true,
});

export type DailyReportEntity = Omit<DailyReport, "_id"> & { _id: any };
export type DailyReportDocument = mongoose.Document & DailyReportEntity;

export const getDailyReportModel = (): Model<DailyReportDocument> =>
  mongoose.model<DailyReportDocument>("DailyReport", SCHEMA, "daily_report");
