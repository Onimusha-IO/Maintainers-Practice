import { Router } from "express";

import auth from "../middlewares/auth";
import * as CreamController from "../controllers/cream";

const CreamRouter = Router();

CreamRouter.get("/list", auth, CreamController.list);
CreamRouter.post("/add", auth, CreamController.add);
CreamRouter.put("/modify", auth, CreamController.modify);
CreamRouter.delete("/erase", auth, CreamController.erase);

export default CreamRouter;
