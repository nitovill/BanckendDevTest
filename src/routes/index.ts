import { Router, Request, Response } from "express";

const router = Router();

router.use((req: Request, res: Response): void => {
  res.status(404).json({
    error: true,
    message: "Endpoint not found",
  });
});

export default router;
