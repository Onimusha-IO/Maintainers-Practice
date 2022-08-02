import { Router } from "express";

import auth from "../middlewares/auth";
import * as SizeController from "../controllers/size";

const SizeRouter = Router();

SizeRouter.get("/list", auth, SizeController.listSize);
SizeRouter.post("/create", auth, SizeController.createSize);
SizeRouter.put("/update", auth, SizeController.updateSize);
SizeRouter.delete("/delete", auth, SizeController.deleteSize);

export default SizeRouter;
