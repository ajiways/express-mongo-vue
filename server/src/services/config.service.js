import { config } from "dotenv";
config();

export class ConfigService {
   static getAppPort() {
      const port = process.env.PORT;

      if (!port) {
         throw new Error("Нельзя запустить сервер без порта");
      }

      return port;
   }

   static getMongoHost() {
      const host = process.env.MONGO_HOST;

      if (!host) {
         throw new Error("Нельзя запустить сервер без адреса хоста базы данных");
      }

      return host;
   }

   static getMongoPort() {
      const port = process.env.MONGO_PORT;

      if (!port) {
         throw new Error("Нельзя запустить сервер без порта для базы данных");
      }

      return port;
   }

   static getMongoUser() {
      const user = process.env.MONGO_USER;

      if (!user) {
         throw new Error("Невозможно аутентифицироваться в базе данных без данных о пользователе (логин)");
      }

      return user;
   }

   static getMongoPassword() {
      const password = process.env.MONGO_PASSWORD;

      if (!password) {
         throw new Error("Невозможно аутентифицироваться в базе данных без данных о пользователе (пароль)");
      }

      return password;
   }
}
