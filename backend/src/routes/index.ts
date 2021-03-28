import { Router } from "express";
import authRouter from "./auth.router";
import usersRouter from "./user.router";

const routes = Router();

routes.use("/auth", authRouter);
routes.use("/users", usersRouter);

export default routes;
