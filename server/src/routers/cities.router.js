import { Router } from "express";
import CitiesController from "../controllers/cities.controller.js";
import {
   addDistrictToCityValidations,
   createCityValidations,
   getCityByNameValidations,
} from "../validators/cities.validator.js";

const citiesController = new CitiesController();

export const CitiesRouter = Router();

CitiesRouter.post(
   "/create",
   createCityValidations,
   citiesController.createCity
);
CitiesRouter.get("/all", citiesController.getAllCities);
CitiesRouter.post(
   "/name",
   getCityByNameValidations,
   citiesController.getCityByName
);
CitiesRouter.post(
   "/district/add",
   addDistrictToCityValidations,
   citiesController.addDistrictToCity
);
CitiesRouter.post(
   "/all/info",
   getCityByNameValidations,
   citiesController.getAllCityInfo
);
