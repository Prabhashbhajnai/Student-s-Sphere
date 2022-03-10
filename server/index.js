// importing env variables
require("dotenv").config();

// Libraries
import express from "express";
import cors from "cors";
import helmet from "helmet";

// microservice routes
import Auth from "./API/Auth";

// Database Connection
import ConnectDB from "./database/connection";

const studenthub = express();

// application middlewares
studenthub.use(express.json());
studenthub.use(express.urlencoded({ extended: false }));
studenthub.use(helmet());
studenthub.use(cors());

// Application Routes
studenthub.use("/auth", Auth);

studenthub.get("/", (req, res) => res.json({ message: "Setup Success!" }));

studenthub.listen(4000, () =>
    ConnectDB()
        .then(() => console.log("Server is Running!!"))
        .catch(() => console.log("Server is running, but connection failed!!"))
);