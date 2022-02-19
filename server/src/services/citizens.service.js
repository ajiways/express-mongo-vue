import Citizen from "../models/citizen.schema.js";

export default class CitizensService {
   async create(name, city, district, street, houseNumber) {
      const citizen = new Citizen({
         name,
         city_name: city.name,
         district_name: district.name,
         street_name: street.name,
         house_number: houseNumber,
      });

      return await citizen.save();
   }

   async findAllInStreets(streets) {
      const onlyStreetsArr = [];
      streets.forEach((street) => onlyStreetsArr.push(...street.streets));

      const result = await Promise.all(
         onlyStreetsArr.map(async (street) => {
            const result = await Citizen.find({ street_name: street.name });
            if (!result.length) {
               return [
                  { street: street.name, message: "Нет жителей", citizens: [] },
               ];
            } else {
               return [
                  {
                     street: street.name,
                     message: "Жители есть",
                     citizens: [...result],
                  },
               ];
            }
         })
      );

      return result;
   }
}
