import { Router } from "express";
import userController from "../controllers/user.controller.js";
import controllerWrapper from "../helpers/controller.wrapper.js";

const router = Router();

router.get('/users', userController.getAllUsers);

export default router;
