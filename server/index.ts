import express, { Express } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import dailyReports from "./src/routes/dailyReports";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

mongoose
  // @ts-ignore
  .connect(process.env.MONGO_URI)
  .catch((err) => console.log("Failed to connect to MongoDB", err));

app.use(cors());
app.use(express.json());

app.use("/api/daily-reports", dailyReports);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
