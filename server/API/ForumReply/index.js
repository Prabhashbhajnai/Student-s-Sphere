// Libraries
import express from "express";

// Database Model
import { ForumReplyModel } from "../../Database/forumReply";

const Router = express.Router();

/* 
    Route:          /:_id
    Description:    Get reply based on question id
    Params:         id
    Access:         Public
    Method :        GET
*/
Router.get("/:quesid", async (req, res) => {
    try {
        const reply = await ForumReplyModel.find({ question: req.params.quesid });

        return res.json({ reply });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;