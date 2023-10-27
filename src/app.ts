import express, { Application } from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import { routes } from "./routes";
require("dotenv").config();

const app: Application = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes);

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.jcgpdjt.mongodb.net/${process.env.DB_DATABASE}`,
  {}
);

export default app;
