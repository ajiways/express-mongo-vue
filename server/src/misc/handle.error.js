import { ApiException } from "../exceptions/api.exception.js";

export function handleError(error, res) {
   if (error instanceof ApiException) {
      res.status(400);
      res.json({
         status: 400,
         message: error.message,
      });
   } else {
      console.log(error);
      res.status(500);
      res.json({
         status: 500,
         message: "Ошибка сервера",
      });
   }
}
