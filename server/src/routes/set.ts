import { Router } from "express";

import auth from "../middlewares/auth";
import * as SetController from "../controllers/set";

const SetRouter = Router();

SetRouter.get("/optionList", auth, SetController.listOptionSet);
SetRouter.get("/list", auth, SetController.listSet);
SetRouter.get("/create", auth, SetController.createSet);

export default SetRouter;
