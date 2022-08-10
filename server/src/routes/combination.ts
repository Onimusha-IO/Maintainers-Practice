import { Router } from "express";

import auth from "../middlewares/auth";
import * as CombinationController from "../controllers/combination";

const CombinationRouter = Router();

CombinationRouter.get("/list", auth, CombinationController.listCombination);

export default CombinationRouter;
