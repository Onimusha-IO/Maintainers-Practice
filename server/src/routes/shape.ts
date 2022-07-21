import { Router } from "express";

import auth from "../middlewares/auth";
import * as ShapeController from "../controllers/shape";

const ShapeRouter = Router();

ShapeRouter.get("/list", auth, ShapeController.list);
ShapeRouter.post("/add", auth, ShapeController.add);
ShapeRouter.put("/modify", auth, ShapeController.modify);
ShapeRouter.delete("/erase", auth, ShapeController.erase);

export default ShapeRouter;
