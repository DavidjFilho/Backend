import express, { Application } from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import { routes } from "./routes";
require("dotenv").config();

class App {
  public app: Application;

  public constructor() {
    this.start();
    this.database();
    this.middlewaresPreRoute();
    this.routes();
    this.middlewaresPosRoute();
  }

  private start(): void {
    this.app = express();
  }

  private middlewaresPreRoute(): void {
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }
  private database(): void {
    mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.jcgpdjt.mongodb.net/${process.env.DB_DATABASE}`,
      {}
    );
  }
  private routes(): void {
    this.app.use(routes);
  }
  private middlewaresPosRoute(): void {}
}

export default new App().app;
