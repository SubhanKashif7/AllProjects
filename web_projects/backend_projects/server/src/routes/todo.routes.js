import { Router } from "express";
import multer from "multer";
import addTodo from "../controllers/addTodo.controller.js";
import getTodo from "../controllers/getTodo.controller.js";
import clearDatabase from "../controllers/clearDatabase.controller.js";
import updateTodo from "../controllers/updateTodo.controller.js";
import getTodos from "../controllers/getTodos.js";
const todoRouter = Router();
const upload = multer({dest : "./server/public"})
todoRouter.route("/addTodo").post(upload.none(),addTodo);
todoRouter.route("/getTodo").get(upload.none(),getTodo);
todoRouter.route("/clearDb").delete(upload.none(),clearDatabase);
todoRouter.route("/updateTodo").put(upload.none(),updateTodo);
todoRouter.route("/deleteTodo").delete(upload.none(),updateTodo);
todoRouter.route("/getTodos").get(upload.none(),getTodos);
export default todoRouter;