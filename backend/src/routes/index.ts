import { Router } from "express";
import testingRouter from "./testing.router";

const routes = Router();

routes.use("/", testingRouter);

export default routes;
