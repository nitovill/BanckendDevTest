import { Request, Response, NextFunction } from "express";
import { getAll, insert } from "../services/campaingServices";

export const getAllCampaings = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const campaings = await getAll();
    res.status(200).json({ success: true, data: campaings });
  } catch (err) {
    next(err);
  }
};

export const createCampaing = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newCampaing = await insert(req.body);
    res.status(200).json(newCampaing);
  } catch (err) {
    next(err);
  }
};
