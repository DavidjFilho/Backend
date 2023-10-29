import express, { Application } from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import { routes } from "./routes";
import { errorMiddleware } from "./middlewares/ErrorMiddlewares";
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
        mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DB_DATABASE}`, {});
    }
    private routes(): void {
        this.app.use(routes);
    }
    private middlewaresPosRoute(): void {
        this.app.use(errorMiddleware);
    }
}

export default new App().app;
