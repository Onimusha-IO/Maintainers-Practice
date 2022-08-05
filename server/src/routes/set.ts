import { Router } from "express";

import auth from "../middlewares/auth";
import * as SetController from "../controllers/set";

const SetRouter = Router();

SetRouter.get("/list", auth, SetController.listOptionSet);

export default SetRouter;
