import { Router } from "express";

import auth from "../middlewares/auth";
import * as ExtraController from "../controllers/extra";

const ExtraRouter = Router();

ExtraRouter.get("/list", auth, ExtraController.listExtra);
ExtraRouter.post("/create", auth, ExtraController.createExtra);
ExtraRouter.put("/update", auth, ExtraController.updateExtra);
ExtraRouter.delete("/delete", auth, ExtraController.deleteExtra);

export default ExtraRouter;
