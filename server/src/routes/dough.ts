import { Router } from "express";

import auth from "../middlewares/auth";
import * as DoughController from "../controllers/dough";

const DoughRouter = Router();

DoughRouter.get("/list", auth, DoughController.listDough);
DoughRouter.post("/create", auth, DoughController.createDough);
DoughRouter.put("/update", auth, DoughController.updateDough);
DoughRouter.delete("/delete", auth, DoughController.deleteDough);

export default DoughRouter;
