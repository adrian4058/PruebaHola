import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.json({ message: "Buenas! esta es mi prueba técnica: Adrian Perez" });
});

export default router;
