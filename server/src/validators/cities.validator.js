import { check } from "express-validator";

export const createCityValidations = [
   check("cityname", "Название города должно быть не менее 2 и не более 16 символов")
      .isLength({ min: 2, max: 16 })
      .trim(),
   check("citydata", "Информация о населении должна быть числом со значением не менее 100").isFloat({
      min: 100,
   }),
];

export const getCityByNameValidations = [
   check("cityname", "Название города должно быть не менее 2 и не более 16 символов").isLength({
      min: 2,
      max: 16,
   }),
];

export const addDistrictToCityValidations = [
   check("cityname", "Название города должно быть не менее 2 и не более 16 символов").isLength({
      min: 2,
      max: 16,
   }),
   check("districtname", "Название района должно быть не менее 2 и не более 16 символов").isLength({
      min: 2,
      max: 16,
   }),
];
