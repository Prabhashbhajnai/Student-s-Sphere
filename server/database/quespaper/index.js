import mongoose from "mongoose";

const QuesPaperSchema = new mongoose.Schema(
    {
        examType: { type: String, required: true },
        date: { type: String, required: true },
        location: { type: String, required: true }
    }
);

export const QuesPaperModel = mongoose.model("QuesPaper", QuesPaperSchema);