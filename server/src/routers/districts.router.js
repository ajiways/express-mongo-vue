import { Router } from "express";
import DistrictsController from "../controllers/districts.controller.js";
import { addStreetToDistrictValidations } from "../validators/districts.validator.js";

const districtsController = new DistrictsController();

export const DistrictRouter = Router();

DistrictRouter.post("/street/add", addStreetToDistrictValidations, districtsController.addStreetToDistrict);
