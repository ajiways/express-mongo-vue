import { validationResult } from "express-validator";
import { handleError } from "../misc/handle.error.js";
import { handleValidationErrors } from "../misc/handle.validation.errors.js";
import CitiesService from "../services/cities.service.js";
import DistrictsService from "../services/districts.service.js";
import StreetsService from "../services/streets.service.js";
import CitizensService from "../services/citizens.service.js";

const citiesService = new CitiesService();
const districtsService = new DistrictsService();
const streetsService = new StreetsService();
const citizensService = new CitizensService();

export default class CitiesController {
   async createCity(req, res) {
      if (handleValidationErrors(validationResult(req), res)) {
         return;
      }

      const { cityname, citydata } = req.body;

      try {
         const result = await citiesService.create(cityname, citydata);
         res.status(201);
         res.json({
            message: "Город успешно добавлен",
            city: result,
         });
      } catch (error) {
         handleError(error, res);
      }
   }

   async getAllCities(req, res) {
      try {
         const result = await citiesService.getAll();
         res.status(200);
         res.json({
            message: "Успешно",
            cities: result,
         });
      } catch (error) {
         handleError(error, res);
      }
   }

   async getCityByName(req, res) {
      if (handleValidationErrors(validationResult(req), res)) {
         return;
      }

      const { cityname } = req.body;

      try {
         const result = await citiesService.findByName(cityname);
         res.status(200);
         res.json({
            message: "Успешно",
            city: result,
         });
      } catch (error) {
         handleError(error, res);
      }
   }

   async addDistrictToCity(req, res) {
      if (handleValidationErrors(validationResult(req), res)) {
         return;
      }

      const { districtname, cityname } = req.body;

      try {
         const result = await citiesService.addDistrict(districtname, cityname);
         res.status(200);
         res.json({
            message: "Район успешно добавлен",
            district: result,
         });
      } catch (error) {
         handleError(error, res);
      }
   }

   async getAllCityInfo(req, res) {
      if (handleValidationErrors(validationResult(req), res)) {
         return;
      }

      const { cityname } = req.body;

      try {
         const city = await citiesService.findByName(cityname);
         const districts = await districtsService.findAllInCity(city);
         const streets = await streetsService.findAllInDistricts(districts);
         const citizens = await citizensService.findAllInStreets(streets);

         res.status(200);
         res.json({
            message: "Успешно",
            city,
            districts,
            streets,
            citizens,
         });
      } catch (error) {
         handleError(error, res);
      }
   }
}
