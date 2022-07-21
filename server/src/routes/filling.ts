import { Router } from "express";

import auth from "../middlewares/auth";
import * as FillingController from "../controllers/filling";

const FillingRouter = Router();

FillingRouter.get("/list", auth, FillingController.list);
FillingRouter.post("/add", auth, FillingController.add);
FillingRouter.put("/modify", auth, FillingController.modify);
FillingRouter.delete("/erase", auth, FillingController.erase);

export default FillingRouter;
