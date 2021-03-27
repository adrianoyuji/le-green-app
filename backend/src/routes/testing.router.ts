import { Router } from "express";
import testingController from "../controllers/testing.controller";

const testingRouter = Router();

testingRouter.route("/").get(testingController.list);

export default testingRouter;
