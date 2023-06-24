import express from "express";
import { DailyReport } from "../shared/types";
import { getDailyReportModel } from "../models/dailyReport";

const router = express.Router();

// Get all
router.get("/", async (req, res) => {});

// Get all for user
router.get("/user/:userId", async (req, res) => {});

// Get by Id
router.get("/:id", async (req, res) => {});

// Create
router.post("/", async (req, res) => {
  const report = new (getDailyReportModel())({ ...req.body });
  try {
    const newReport = await report.save();
    res.status(201).json(newReport);
  } catch (err) {
    res.status(400).json({ message: "Fail" });
  }
});

// Delete
router.delete("/:id", async (req, res) => {});

// Update
router.put("/:id", async (req, res) => {});

export default router;
