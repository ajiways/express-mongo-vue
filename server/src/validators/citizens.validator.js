import { check } from "express-validator";

export const createCitizenValidations = [
   check("citizenname", "Имя пользователя должно быть не менее 2 и не более 16 символов").isLength({
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
   check("streetname", "Название улицы должно быть не менее 2 и не более 16 символов").isLength({
      min: 2,
      max: 16,
   }),
   check("housenumber", "Не должно состоять меньше чем из 1 символа или более чем из 16 символов").isLength({
      min: 1,
      max: 16,
   }),
];
