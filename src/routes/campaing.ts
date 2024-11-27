import { Router } from "express";
import {
  createCampaing,
  getAllCampaings,
} from "../controllers/campaingControllers";
const router = Router();

router.get("/", getAllCampaings);
router.post("/", createCampaing);

export default router;
