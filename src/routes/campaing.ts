import { Router } from "express";
import {
  createCampaing,
  getAllCampaings,
} from "../controllers/campaingControllers";
import {
  campaignValidator,
  handleValidationErrors,
} from "../middlewares/campaingValidator";

const router = Router();

router.get("/", getAllCampaings);

router.post(
  "/",
  [...campaignValidator, handleValidationErrors],
  createCampaing
);

export default router;
