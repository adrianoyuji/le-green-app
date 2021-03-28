import { Router } from "express";
import usersController from "../controllers/users.controller";

const testingRouter = Router();

testingRouter.route("/register").post(usersController.create);

export default testingRouter;
