import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema(
    {
        user: { type: mongoose.Types.ObjectId, ref: "Users" },
        reviewText: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

export const ReviewModel = mongoose.model("Reviews", ReviewSchema);