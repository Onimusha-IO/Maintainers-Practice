import { Router } from "express";

import auth from "../middlewares/auth";
import * as SizeController from "../controllers/size";

const SizeRouter = Router();

SizeRouter.get("/list", auth, SizeController.list);
SizeRouter.post("/add", auth, SizeController.add);
SizeRouter.put("/modify", auth, SizeController.modify);
SizeRouter.delete("/erase", auth, SizeController.erase);

export default SizeRouter;
