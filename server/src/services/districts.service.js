import { ApiException } from "../exceptions/api.exception.js";
import { capitalizeFirstLetter } from "../misc/capitalize.first.letter.js";
import District from "../models/district.schema.js";
import StreetsService from "./streets.service.js";

const streetsService = new StreetsService();

export default class DistrictsService {
   async findByName(name, city, noCheck) {
      const districtName = capitalizeFirstLetter(name);

      const result = await District.findOne({
         name: districtName,
         city_id: city._id,
      });

      if (noCheck) {
         return result;
      }

      if (!result) {
         throw new ApiException(
            `Район ${districtName} не найден в городе ${city.name}`
         );
      }

      return result;
   }

   async add(name, city) {
      const districtName = capitalizeFirstLetter(name);

      const candidate = await this.findByName(districtName, city, true);

      if (candidate) {
         throw new ApiException(
            `Район ${districtName} уже существует в городе ${city.name}`
         );
      }

      const district = new District({
         name,
         city_id: city._id,
      });

      return await district.save();
   }

   async addStreet(streetName, districtName, city) {
      const district = await this.findByName(districtName, city);

      return await streetsService.add(streetName, district);
   }

   async findAllInCity(city) {
      return await District.find({ city_id: city._id });
   }
}
