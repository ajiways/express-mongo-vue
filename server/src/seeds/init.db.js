import CitiesService from "../services/cities.service.js";
import DistrictsService from "../services/districts.service.js";
import StreetsService from "../services/streets.service.js";
import CitizensService from "../services/citizens.service.js";

const citiesService = new CitiesService();
const districtsService = new DistrictsService();
const streetsService = new StreetsService();
const citizensService = new CitizensService();

const cities = [
   { name: "Кировск", data: 27391 },
   { name: "Брянск", data: 399579 },
   { name: "Москва", data: 12655050 },
   { name: "Самара", data: 1144759 },
   { name: "Тверь", data: 424969 },
   { name: "Екатеринбург", data: 1495066 },
   { name: "Новосибирск", data: 1620162 },
   { name: "Воронеж", data: 1050602 },
];

const districts = [
   { name: "Ленениский", city_name: "Кировск" },
   { name: "Центральный", city_name: "Кировск" },
   { name: "Ленениский", city_name: "Брянск" },
   { name: "Центральный", city_name: "Брянск" },
   { name: "Кировский", city_name: "Москва" },
   { name: "Центральный", city_name: "Москва" },
   { name: "Ленениский", city_name: "Москва" },
   { name: "Центральный", city_name: "Самара" },
   { name: "Ленениский", city_name: "Самара" },
   { name: "Кировский", city_name: "Тверь" },
   { name: "Ленениский", city_name: "Тверь" },
   { name: "Центральный", city_name: "Екатеринбург" },
   { name: "Ленениский", city_name: "Екатеринбург" },
   { name: "Ленениский", city_name: "Новосибирск" },
   { name: "Кировский", city_name: "Новосибирск" },
   { name: "Центральный", city_name: "Воронеж" },
   { name: "Ленениский", city_name: "Воронеж" },
];

const streets = [
   {
      street_name: "Пушкина",
      district_name: "Ленениский",
      city_name: "Кировск",
   },
   {
      street_name: "Колотушкина",
      district_name: "Ленениский",
      city_name: "Кировск",
   },
   {
      street_name: "Центральная",
      district_name: "Центральный",
      city_name: "Кировск",
   },
   { street_name: "Левая", district_name: "Центральный", city_name: "Кировск" },
   { street_name: "Правая", district_name: "Ленениский", city_name: "Брянск" },
   {
      street_name: "Передняя",
      district_name: "Ленениский",
      city_name: "Брянск",
   },
   { street_name: "Задняя", district_name: "Центральный", city_name: "Брянск" },
   {
      street_name: "Промышленная",
      district_name: "Центральный",
      city_name: "Брянск",
   },
   { street_name: "Мира", district_name: "Ленениский", city_name: "Москва" },
   { street_name: "Герцена", district_name: "Ленениский", city_name: "Москва" },
   { street_name: "Титова", district_name: "Центральный", city_name: "Москва" },
   {
      street_name: "Верхняя",
      district_name: "Центральный",
      city_name: "Москва",
   },
   { street_name: "Нижняя", district_name: "Кировский", city_name: "Москва" },
   { street_name: "Красивая", district_name: "Кировский", city_name: "Москва" },
   {
      street_name: "Названная",
      district_name: "Центральный",
      city_name: "Самара",
   },
   {
      street_name: "Комсомольская",
      district_name: "Центральный",
      city_name: "Самара",
   },
   { street_name: "Чемская", district_name: "Ленениский", city_name: "Самара" },
   { street_name: "Сталина", district_name: "Ленениский", city_name: "Самара" },
   { street_name: "Ленина", district_name: "Ленениский", city_name: "Тверь" },
   { street_name: "Петрова", district_name: "Ленениский", city_name: "Тверь" },
   {
      street_name: "Станиславского",
      district_name: "Кировский",
      city_name: "Тверь",
   },
   {
      street_name: "Покрышкина",
      district_name: "Кировский",
      city_name: "Тверь",
   },
   {
      street_name: "Дымкина",
      district_name: "Центральный",
      city_name: "Екатеринбург",
   },
   {
      street_name: "Цветная",
      district_name: "Ленениский",
      city_name: "Екатеринбург",
   },
   {
      street_name: "Ошанина",
      district_name: "Ленениский",
      city_name: "Екатеринбург",
   },
   {
      street_name: "Лепестковая",
      district_name: "Центральный",
      city_name: "Екатеринбург",
   },
   {
      street_name: "Цветочная",
      district_name: "Ленениский",
      city_name: "Новосибирск",
   },
   {
      street_name: "Мирная",
      district_name: "Ленениский",
      city_name: "Новосибирск",
   },
   {
      street_name: "Тихая",
      district_name: "Кировский",
      city_name: "Новосибирск",
   },
   {
      street_name: "Странная",
      district_name: "Кировский",
      city_name: "Новосибирск",
   },
   {
      street_name: "Перевернутая",
      district_name: "Центральный",
      city_name: "Воронеж",
   },
   {
      street_name: "Вольная",
      district_name: "Ленениский",
      city_name: "Воронеж",
   },
   { street_name: "Черная", district_name: "Ленениский", city_name: "Воронеж" },
   { street_name: "Белая", district_name: "Центральный", city_name: "Воронеж" },
];

const citizens = [
   {
      name: "Петя",
      city_name: "Кировск",
      district_name: "Ленениский",
      street_name: "Пушкина",
      house_number: "156",
   },
   {
      name: "Маша",
      city_name: "Кировск",
      district_name: "Ленениский",
      street_name: "Пушкина",
      house_number: "14",
   },
   {
      name: "Саша",
      city_name: "Кировск",
      district_name: "Ленениский",
      street_name: "Колотушкина",
      house_number: "653а",
   },
   {
      name: "Гриша",
      city_name: "Кировск",
      district_name: "Ленениский",
      street_name: "Колотушкина",
      house_number: "12/2",
   },
   {
      name: "Витя",
      city_name: "Брянск",
      district_name: "Ленениский",
      street_name: "Передняя",
      house_number: "124",
   },
   {
      name: "Дима",
      city_name: "Брянск",
      district_name: "Ленениский",
      street_name: "Передняя",
      house_number: "543a",
   },
   {
      name: "Наташа",
      city_name: "Брянск",
      district_name: "Ленениский",
      street_name: "Правая",
      house_number: "46b",
   },
   {
      name: "Сева",
      city_name: "Брянск",
      district_name: "Ленениский",
      street_name: "Правая",
      house_number: "53/1",
   },
   {
      name: "Дима",
      city_name: "Москва",
      district_name: "Ленениский",
      street_name: "Мира",
      house_number: "24",
   },
   {
      name: "Петя",
      city_name: "Москва",
      district_name: "Ленениский",
      street_name: "Мира",
      house_number: "64",
   },
   {
      name: "Дима",
      city_name: "Москва",
      district_name: "Ленениский",
      street_name: "Герцена",
      house_number: "263",
   },
   {
      name: "Никита",
      city_name: "Москва",
      district_name: "Ленениский",
      street_name: "Герцена",
      house_number: "64",
   },
   {
      name: "Маша",
      city_name: "Москва",
      district_name: "Центральный",
      street_name: "Титова",
      house_number: "34",
   },
   {
      name: "Вероника",
      city_name: "Москва",
      district_name: "Центральный",
      street_name: "Титова",
      house_number: "8576",
   },
   {
      name: "Сережа",
      city_name: "Самара",
      district_name: "Центральный",
      street_name: "Названная",
      house_number: "57",
   },
   {
      name: "Николай",
      city_name: "Самара",
      district_name: "Центральный",
      street_name: "Названная",
      house_number: "123",
   },
   {
      name: "Паша",
      city_name: "Самара",
      district_name: "Центральный",
      street_name: "Комсомольская",
      house_number: "321",
   },
   {
      name: "Саша",
      city_name: "Самара",
      district_name: "Центральный",
      street_name: "Комсомольская",
      house_number: "76",
   },
   {
      name: "Витя",
      city_name: "Тверь",
      district_name: "Ленениский",
      street_name: "Ленина",
      house_number: "47",
   },
   {
      name: "Виталя",
      city_name: "Тверь",
      district_name: "Ленениский",
      street_name: "Ленина",
      house_number: "85",
   },
   {
      name: "Семен",
      city_name: "Тверь",
      district_name: "Ленениский",
      street_name: "Петрова",
      house_number: "15",
   },
   {
      name: "Тимофей",
      city_name: "Тверь",
      district_name: "Ленениский",
      street_name: "Петрова",
      house_number: "67",
   },
   {
      name: "Артур",
      city_name: "Екатеринбург",
      district_name: "Центральный",
      street_name: "Дымкина",
      house_number: "886",
   },
   {
      name: "Кристина",
      city_name: "Екатеринбург",
      district_name: "Центральный",
      street_name: "Дымкина",
      house_number: "34",
   },
   {
      name: "Гриша",
      city_name: "Екатеринбург",
      district_name: "Ленениский",
      street_name: "Цветная",
      house_number: "75",
   },
   {
      name: "Николай",
      city_name: "Екатеринбург",
      district_name: "Ленениский",
      street_name: "Цветная",
      house_number: "9a",
   },
   {
      name: "Сева",
      city_name: "Новосибирск",
      district_name: "Ленениский",
      street_name: "Цветочная",
      house_number: "64",
   },
   {
      name: "Гриша",
      city_name: "Новосибирск",
      district_name: "Ленениский",
      street_name: "Цветочная",
      house_number: "37",
   },
   {
      name: "Миша",
      city_name: "Новосибирск",
      district_name: "Ленениский",
      street_name: "Мирная",
      house_number: "84",
   },
   {
      name: "Сережа",
      city_name: "Новосибирск",
      district_name: "Ленениский",
      street_name: "Мирная",
      house_number: "57",
   },
   {
      name: "Паша",
      city_name: "Воронеж",
      district_name: "Центральный",
      street_name: "Перевернутая",
      house_number: "96",
   },
   {
      name: "Наташа",
      city_name: "Воронеж",
      district_name: "Центральный",
      street_name: "Перевернутая",
      house_number: "25",
   },
   {
      name: "Света",
      city_name: "Воронеж",
      district_name: "Центральный",
      street_name: "Белая",
      house_number: "46",
   },
   {
      name: "Юля",
      city_name: "Воронеж",
      district_name: "Центральный",
      street_name: "Белая",
      house_number: "75",
   },
   {
      name: "Люба",
      city_name: "Воронеж",
      district_name: "Ленениский",
      street_name: "Черная",
      house_number: "97",
   },
   {
      name: "Гриша",
      city_name: "Воронеж",
      district_name: "Ленениский",
      street_name: "Черная",
      house_number: "14",
   },
   {
      name: "Паша",
      city_name: "Воронеж",
      district_name: "Ленениский",
      street_name: "Вольная",
      house_number: "1",
   },
   {
      name: "Саша",
      city_name: "Воронеж",
      district_name: "Ленениский",
      street_name: "Вольная",
      house_number: "2",
   },
   {
      name: "Наташа",
      city_name: "Новосибирск",
      district_name: "Кировский",
      street_name: "Тихая",
      house_number: "3",
   },
   {
      name: "Света",
      city_name: "Новосибирск",
      district_name: "Кировский",
      street_name: "Тихая",
      house_number: "4",
   },
   {
      name: "Ирина",
      city_name: "Новосибирск",
      district_name: "Кировский",
      street_name: "Странная",
      house_number: "5",
   },
   {
      name: "Настя",
      city_name: "Новосибирск",
      district_name: "Кировский",
      street_name: "Странная",
      house_number: "6",
   },
   {
      name: "Дима",
      city_name: "Екатеринбург",
      district_name: "Центральный",
      street_name: "Лепестковая",
      house_number: "7",
   },
   {
      name: "Никита",
      city_name: "Екатеринбург",
      district_name: "Центральный",
      street_name: "Лепестковая",
      house_number: "8",
   },
   {
      name: "Сева",
      city_name: "Екатеринбург",
      district_name: "Ленениский",
      street_name: "Ошанина",
      house_number: "9",
   },
   {
      name: "Сергей",
      city_name: "Екатеринбург",
      district_name: "Ленениский",
      street_name: "Ошанина",
      house_number: "12",
   },
   {
      name: "Дмитрий",
      city_name: "Тверь",
      district_name: "Кировский",
      street_name: "Станиславского",
      house_number: "13",
   },
   {
      name: "Николай",
      city_name: "Тверь",
      district_name: "Кировский",
      street_name: "Станиславского",
      house_number: "14",
   },
   {
      name: "Александр",
      city_name: "Тверь",
      district_name: "Кировский",
      street_name: "Покрышкина",
      house_number: "15",
   },
   {
      name: "Семен",
      city_name: "Тверь",
      district_name: "Кировский",
      street_name: "Покрышкина",
      house_number: "16",
   },
   {
      name: "Андрей",
      city_name: "Самара",
      district_name: "Ленениский",
      street_name: "Чемская",
      house_number: "17",
   },
   {
      name: "Вася",
      city_name: "Самара",
      district_name: "Ленениский",
      street_name: "Чемская",
      house_number: "18",
   },
   {
      name: "Валя",
      city_name: "Самара",
      district_name: "Ленениский",
      street_name: "Сталина",
      house_number: "198",
   },
   {
      name: "Гриша",
      city_name: "Самара",
      district_name: "Ленениский",
      street_name: "Сталина",
      house_number: "213",
   },
   {
      name: "Паша",
      city_name: "Москва",
      district_name: "Центральный",
      street_name: "Верхняя",
      house_number: "52",
   },
   {
      name: "Валера",
      city_name: "Москва",
      district_name: "Центральный",
      street_name: "Верхняя",
      house_number: "26",
   },
   {
      name: "Руслан",
      city_name: "Москва",
      district_name: "Кировский",
      street_name: "Нижняя",
      house_number: "64",
   },
   {
      name: "Саша",
      city_name: "Москва",
      district_name: "Кировский",
      street_name: "Нижняя",
      house_number: "44",
   },
   {
      name: "Никита",
      city_name: "Москва",
      district_name: "Кировский",
      street_name: "Красивая",
      house_number: "745",
   },
   {
      name: "Павел",
      city_name: "Москва",
      district_name: "Кировский",
      street_name: "Красивая",
      house_number: "75",
   },
   {
      name: "Гриша",
      city_name: "Брянск",
      district_name: "Центральный",
      street_name: "Задняя",
      house_number: "435",
   },
   {
      name: "Маша",
      city_name: "Брянск",
      district_name: "Центральный",
      street_name: "Задняя",
      house_number: "53",
   },
   {
      name: "Наташа",
      city_name: "Брянск",
      district_name: "Центральный",
      street_name: "Промышленная",
      house_number: "16",
   },
   {
      name: "Саша",
      city_name: "Брянск",
      district_name: "Центральный",
      street_name: "Промышленная",
      house_number: "74",
   },
   {
      name: "Гриша",
      city_name: "Кировск",
      district_name: "Центральный",
      street_name: "Центральная",
      house_number: "658",
   },
   {
      name: "Сережа",
      city_name: "Кировск",
      district_name: "Центральный",
      street_name: "Центральная",
      house_number: "56",
   },
   {
      name: "Сева",
      city_name: "Кировск",
      district_name: "Центральный",
      street_name: "Левая",
      house_number: "97",
   },
   {
      name: "Андрей",
      city_name: "Кировск",
      district_name: "Центральный",
      street_name: "Левая",
      house_number: "23",
   },
];

export async function initDatabase() {
   const check = await citiesService.getAll();

   if (check.length) {
      console.log("Database already initialized");
      return;
   }

   try {
      await Promise.all(
         cities.map(
            async (city) => await citiesService.create(city.name, city.data)
         )
      );

      await Promise.all(
         districts.map(
            async (district) =>
               await citiesService.addDistrict(
                  district.name,
                  district.city_name
               )
         )
      );

      await Promise.all(
         streets.map(async (street) => {
            const city = await citiesService.findByName(street.city_name);

            await districtsService.addStreet(
               street.street_name,
               street.district_name,
               city
            );
         })
      );

      await Promise.all(
         citizens.map(async (citizen) => {
            const city = await citiesService.findByName(citizen.city_name);

            const district = await districtsService.findByName(
               citizen.district_name,
               city
            );

            const street = await streetsService.findByName(
               citizen.street_name,
               district
            );

            await citizensService.create(
               citizen.name,
               city,
               district,
               street,
               citizen.house_number
            );
         })
      );

      console.log("Database initialized successfully");
   } catch (error) {
      console.log(error);
   }
}
