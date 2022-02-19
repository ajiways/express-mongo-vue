import { check } from "express-validator";

export const addStreetToDistrictValidations = [
   check("streetname", "Название улицы должно быть не менее 2 и не более 16 символов").isLength({
      min: 2,
      max: 16,
   }),
   check("cityname", "Название города должно быть не менее 2 и не более 16 символов").isLength({
      min: 2,
      max: 16,
   }),
   check("districtname", "Название района должно быть не менее 2 и не более 16 символов").isLength({
      min: 2,
      max: 16,
   }),
];
