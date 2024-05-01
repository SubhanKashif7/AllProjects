import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import todoRouter from "../routes/todo.routes.js";
const app = express();
app.use(express.static("public"));
app.use(express.json({limit : "13.8kb"}));
app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({extended : true , limit : "13.8kb"}));
export default app;

app.use("/api/v1/todos",todoRouter);