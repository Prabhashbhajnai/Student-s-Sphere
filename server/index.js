// importing env variables
require("dotenv").config();

// Libraries
import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";

// import configs
import googleAuthConfig from "./config/google.config";

// microservice routes
import Auth from "./API/Auth";
import Books from "./API/Books";
import Teachers from "./API/Teachers";
import Forum from "./API/Forum";
import Review from "./API/Review";

// Database Connection
import ConnectDB from "./database/connection";

const studenthub = express();

// application middlewares
studenthub.use(express.json());
studenthub.use(express.urlencoded({ extended: false }));
studenthub.use(helmet());
studenthub.use(cors());
// studenthub.use(express.session());
// studenthub.use(passport.initialize());
// studenthub.use(passport.session());

// passport config
googleAuthConfig(passport);

// Application Routes
studenthub.use("/auth", Auth);
studenthub.use("/books", Books);
studenthub.use("/teachers", Teachers);
studenthub.use("/forum", Forum);
studenthub.use("/reviews", Review);

studenthub.get("/", (req, res) => res.json({ message: "Setup Success!" }));

studenthub.listen(4000, () =>
    ConnectDB()
        .then(() => console.log("Server is Running!!"))
        .catch(() => console.log("Server is running, but connection failed!!"))
);