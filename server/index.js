import express from "express";
import cors from "cors";
import helmet from "helmet";

const studenthub = express();

// application middlewares
studenthub.use(express.json());
studenthub.use(express.urlencoded({extended: false}));
studenthub.use(helmet());
studenthub.use(cors());

studenthub.get("/", (req, res) => res.json({message: "Setup Success!"}));

studenthub.listen(4000, () => console.log("Server is Running"));