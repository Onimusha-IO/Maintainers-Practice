import { Router } from "express";

import auth from "../middlewares/auth";
import * as OptionController from "../controllers/option";

const OptionRouter = Router();

OptionRouter.get("/list", auth, OptionController.listOption);

export default OptionRouter;
