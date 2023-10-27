import { Request, Response, Router } from "express";

const router = Router();

router.post("/create", (req: Request, res: Response): Response => {
  return res.status(201).json({ message: "Hello world!" });
});

router.get("/", (req: Request, res: Response): Response => {
    return res.json({ message: "Hello world!" });
});

router.get("/:id", (req: Request, res: Response): Response => {
    return res.json({ message: "Hello world!" });
});

router.patch("/:id", (req: Request, res: Response): Response => {
    return res.json({ message: "Hello world!" });
});

router.post("/", (req: Request, res: Response): Response => {
    return res.json({ message: "Hello world!" });
});

export { router as userRoutes };
