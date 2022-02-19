import { validationResult } from "express-validator";
import { handleError } from "../misc/handle.error.js";
import { handleValidationErrors } from "../misc/handle.validation.errors.js";
import CitiesService from "../services/cities.service.js";
import DistrictsService from "../services/districts.service.js";

const districtsService = new DistrictsService();
const citiesService = new CitiesService();

export default class DistrictsController {
   async addStreetToDistrict(req, res) {
      if (handleValidationErrors(validationResult(req), res)) {
         return;
      }

      const { streetname, districtname, cityname } = req.body;

      const city = await citiesService.findByName(cityname);

      try {
         const result = await districtsService.addStreet(streetname, districtname, city);
         res.status(200);
         res.json({
            message: "Улица успешно добавлена",
            street: result,
         });
      } catch (error) {
         handleError(error, res);
      }
   }
}
