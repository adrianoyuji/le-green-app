import { Router } from "express";
import authController from "../controllers/auth.controller";

const testingRouter = Router();

testingRouter.route("/signin").post(authController.signIn);

export default testingRouter;
