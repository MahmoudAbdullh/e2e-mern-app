import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import Db_connection from "./Model/connection";
import usersRoutes from "./routes/users";
/**+
 *
 */

Db_connection();
var app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/users", usersRoutes);

module.exports = app;
