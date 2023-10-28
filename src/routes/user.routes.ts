import { Router } from "express";
import UserController from "../controllers/UserController";

const router = Router();

router.post("/create", UserController.create);
router.get("/", UserController.getUsers);
router.get("/:id", UserController.getUser);
router.patch("/:id", UserController.update);
router.post("/delete", UserController.delete);

export { router as userRoutes };
