// Libraries
import express from "express";

// Database model
import { QuesPaperModel } from "../../database/quespaper";

const Router = express.Router();

/* 
    Route:          /:_id
    Description:    Get question paper based on teacher id
    Params:         id
    Access:         Public
    Method :        GET
*/
Router.get("/:quesid", async (req, res) => {
    try {
        const reply = await ForumReplyModel.find({ question: req.params.teacher });

        return res.json({ reply });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/* 
    Route:          /new
    Description:    add new teacher
    Params:         none
    Access:         Private
    Method :        POST
*/
Router.post("/new", async (req, res) => {
    try {
        const newQuespaper = await QuesPaperModel.create(req.body.quespaperData);
        return res.json({ quespaper: newQuespaper });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;