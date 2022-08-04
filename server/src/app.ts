import express from "express";
import cors from "cors";

import * as routes from "./routes";

class App {
  public server;

  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
    this.server.use(express.urlencoded({ extended: false }));
  }

  routes() {
    this.server.use("/api/user", routes.UserRouter);
    this.server.use("/api/dough", routes.DoughRouter);
    this.server.use("/api/cream", routes.CreamRouter);
    this.server.use("/api/shape", routes.ShapeRouter);
    this.server.use("/api/extra", routes.ExtraRouter);
    this.server.use("/api/filling", routes.FillingRouter);
    this.server.use("/api/flavor", routes.FlavorRouter);
    this.server.use("/api/size", routes.SizeRouter);
    this.server.use("/api/option", routes.OptionRouter);
  }
}

export default new App().server;
