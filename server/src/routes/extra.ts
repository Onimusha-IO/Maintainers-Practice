import { Router } from "express";

import auth from "../middlewares/auth";
import * as ExtraController from "../controllers/extra";

const ExtraRouter = Router();

ExtraRouter.get("/list", auth, ExtraController.list);
ExtraRouter.post("/add", auth, ExtraController.add);
ExtraRouter.put("/modify", auth, ExtraController.modify);
ExtraRouter.delete("/erase", auth, ExtraController.erase);

export default ExtraRouter;
