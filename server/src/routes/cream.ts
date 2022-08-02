import { Router } from "express";

import auth from "../middlewares/auth";
import * as CreamController from "../controllers/cream";

const CreamRouter = Router();

CreamRouter.get("/list", auth, CreamController.listCream);
CreamRouter.post("/create", auth, CreamController.createCream);
CreamRouter.put("/update", auth, CreamController.updateCream);
CreamRouter.delete("/delete", auth, CreamController.deleteCream);

export default CreamRouter;
