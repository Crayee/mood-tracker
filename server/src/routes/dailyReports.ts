import express from "express";
import { getDailyReportModel } from "../models/dailyReport";

const router = express.Router();

// Get all for user
router.get("/user/:userId", async (req, res) => {
  try {
    const report = await getDailyReportModel()
      .find({ ownerId: req.params.userId })
      .sort({ date: "desc" })
      .exec();
    res.status(200).json(report);
  } catch (err) {
    res.status(400).json({ message: "Fail" });
  }
});

// Get by Id
router.get("/:id", async (req, res) => {
  try {
    const report = await getDailyReportModel().findById(req.params.id).exec();
    res.status(200).json(report);
  } catch (err) {
    res.status(400).json({ message: "Fail" });
  }
});

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
router.delete("/:id", async (req, res) => {
  try {
    const report = await getDailyReportModel().findByIdAndDelete(req.params.id);
    res.status(200).json(report);
  } catch (err) {
    res.status(400).json({ message: "Fail" });
  }
});

// Update
router.put("/:id", async (req, res) => {
  try {
    const report = await getDailyReportModel().findByIdAndUpdate(
      req.params.id,
      { ...req.body }
    );
    res.status(200).json(report);
  } catch (err) {
    res.status(400).json({ message: "Fail" });
  }
});

export default router;
