import { Router } from "express";

import auth from "../middlewares/auth";
import * as MantainerController from "../controllers/mantainer";

const MantainerRouter = Router();

MantainerRouter.get("/list", auth, MantainerController.list);
MantainerRouter.post("/add", auth, MantainerController.add);
MantainerRouter.put("/modify", auth, MantainerController.modify);
MantainerRouter.delete("/erase", auth, MantainerController.erase);

export default MantainerRouter;
