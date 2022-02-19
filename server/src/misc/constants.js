import { ConfigService } from "../services/config.service.js";

export const PORT = ConfigService.getAppPort();
export const DB_PORT = ConfigService.getMongoPort();
export const DB_HOST = ConfigService.getMongoHost();
export const DB_USER = ConfigService.getMongoUser();
export const DB_PASSWORD = ConfigService.getMongoPassword();
