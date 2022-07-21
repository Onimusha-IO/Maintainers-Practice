import { Router } from "express";

import auth from "../middlewares/auth";
import * as FlavorController from "../controllers/flavor";

const FlavorRouter = Router();

FlavorRouter.get("/list", auth, FlavorController.list);
FlavorRouter.post("/add", auth, FlavorController.add);
FlavorRouter.put("/modify", auth, FlavorController.modify);
FlavorRouter.delete("/erase", auth, FlavorController.erase);

export default FlavorRouter;
