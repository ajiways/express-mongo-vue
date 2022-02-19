import { validationResult } from "express-validator";
import { handleValidationErrors } from "../misc/handle.validation.errors.js";
import CitizensService from "../services/citizens.service.js";
import CitiesService from "../services/cities.service.js";
import DistrictsService from "../services/districts.service.js";
import StreetsService from "../services/streets.service.js";
import { handleError } from "../misc/handle.error.js";

const citizensService = new CitizensService();
const citiesService = new CitiesService();
const districtsService = new DistrictsService();
const streetsService = new StreetsService();

export default class CitizensController {
   async createCitizen(req, res) {
      if (handleValidationErrors(validationResult(req), res)) {
         return;
      }

      const { citizenname, cityname, districtname, streetname, housenumber } = req.body;

      try {
         const city = await citiesService.findByName(cityname);
         const district = await districtsService.findByName(districtname, city);
         const street = await streetsService.findByName(streetname, district);

         const result = await citizensService.create(citizenname, city, district, street, housenumber);

         res.status(201);
         res.json({
            message: "Житель успешно добавлен в систему",
            status: 201,
            citizen: result,
         });
      } catch (error) {
         handleError(error, res);
      }
   }
}
