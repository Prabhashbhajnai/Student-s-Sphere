import mongoose from "mongoose";

const ForumSchema = new mongoose.Schema(
    {
        user: { type: mongoose.Types.ObjectId, ref: "Users" },
        questionText: { type: String, required: true },
        reply: [{ type: mongoose.Types.ObjectId, ref: "ForumReply" }]
    },
    {
        timestamps: true,
    }
);

export const ForumModel = mongoose.model("Forum", ForumSchema);