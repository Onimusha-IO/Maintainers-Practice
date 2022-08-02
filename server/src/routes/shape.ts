import { Router } from "express";

import auth from "../middlewares/auth";
import * as ShapeController from "../controllers/shape";

const ShapeRouter = Router();

ShapeRouter.get("/list", auth, ShapeController.listShape);
ShapeRouter.post("/create", auth, ShapeController.createShape);
ShapeRouter.put("/update", auth, ShapeController.updataShape);
ShapeRouter.delete("/delete", auth, ShapeController.deleteShape);

export default ShapeRouter;
