import { ApiException } from "../exceptions/api.exception.js";
import { capitalizeFirstLetter } from "../misc/capitalize.first.letter.js";
import Street from "../models/street.schema.js";

export default class StreetsService {
   async findByName(name, district, noCheck = null) {
      const streetName = capitalizeFirstLetter(name);

      const result = await Street.findOne({
         name: streetName,
         district_id: district._id,
      });

      if (noCheck) {
         return result;
      }

      if (!result) {
         throw new ApiException(
            `Улица ${streetName} не существует в районе ${district.name}`
         );
      }

      return result;
   }

   async add(name, district) {
      const candidate = await this.findByName(name, district, true);

      if (candidate) {
         throw new ApiException(
            `Улица ${candidate.name} в районе ${district.name} уже существует`
         );
      }

      const street = new Street({
         name,
         district_id: district._id,
      });

      return await street.save();
   }

   async findAllInDistricts(districts) {
      const result = await Promise.all(
         districts.map(async (district) => {
            const result = await Street.find({ district_id: district._id });
            if (!result.length) {
               return {
                  district: district.name,
                  message: "Нет улиц",
                  streets: [],
               };
            } else {
               return {
                  district: district.name,
                  message: "Улицы есть",
                  streets: [...result],
               };
            }
         })
      );

      return result;
   }
}
