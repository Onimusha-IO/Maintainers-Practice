import { Router } from "express";

import auth from "../middlewares/auth";
import * as FlavorController from "../controllers/flavor";

const FlavorRouter = Router();

FlavorRouter.get("/list", auth, FlavorController.listFlavor);
FlavorRouter.post("/create", auth, FlavorController.createFlavor);
FlavorRouter.put("/update", auth, FlavorController.updateFlavor);
FlavorRouter.delete("/delete", auth, FlavorController.deleteFlavor);

export default FlavorRouter;
