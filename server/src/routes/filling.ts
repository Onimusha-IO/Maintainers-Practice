import { Router } from "express";

import auth from "../middlewares/auth";
import * as FillingController from "../controllers/filling";

const FillingRouter = Router();

FillingRouter.get("/list", auth, FillingController.listFilling);
FillingRouter.post("/create", auth, FillingController.createFilling);
FillingRouter.put("/update", auth, FillingController.updateFilling);
FillingRouter.delete("/delete", auth, FillingController.deleteFilling);

export default FillingRouter;
