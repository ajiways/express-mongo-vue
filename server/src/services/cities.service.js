import { ApiException } from "../exceptions/api.exception.js";
import City from "../models/city.schema.js";
import { capitalizeFirstLetter } from "../misc/capitalize.first.letter.js";
import DistrictsService from "./districts.service.js";

const districtsService = new DistrictsService();

export default class CitiesService {
   async create(name, data) {
      const cityName = capitalizeFirstLetter(name);

      const candidate = await City.findOne({ name: cityName });

      if (candidate) {
         throw new ApiException(`Город с названием ${cityName} уже существует`);
      }

      const city = new City({
         name: cityName,
         data,
         districts: [],
      });

      return await city.save();
   }

   async getAll() {
      return await City.find();
   }

   async findByName(name) {
      const cityName = capitalizeFirstLetter(name);

      const result = await City.findOne({ name: cityName });

      if (!result) {
         throw new ApiException(`Город ${cityName} не найден`);
      }

      return result;
   }

   async getById(id) {
      const result = await City.findOne({ id });

      if (!result) {
         throw new ApiException(`Город с айди ${id} не найден`);
      }

      return result;
   }

   async addDistrict(districtName, cityName) {
      const city = await this.findByName(cityName);

      return await districtsService.add(districtName, city);
   }
}
