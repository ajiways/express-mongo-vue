import { Router } from "express";
import { createCitizenValidations } from "../validators/citizens.validator.js";
import CitizensController from "../controllers/citizens.controller.js";

const citizensController = new CitizensController();

export const CitizensRouter = Router();

CitizensRouter.post("/create", createCitizenValidations, citizensController.createCitizen);
