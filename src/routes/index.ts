import { Router, Request, Response } from "express";
import campaingRoutes from "./campaing";

const router = Router();

router.use("/campaing", campaingRoutes);

router.use((req: Request, res: Response): void => {
  res.status(404).json({
    error: true,
    message: "Endpoint not found",
  });
});

export default router;
