import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import {
   DB_HOST,
   DB_PASSWORD,
   DB_PORT,
   PORT,
   DB_USER,
} from "./misc/constants.js";
import { initDatabase } from "./seeds/init.db.js";
import { CitiesRouter } from "./routers/cities.router.js";
import { DistrictRouter } from "./routers/districts.router.js";
import { CitizensRouter } from "./routers/citizens.router.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/city", CitiesRouter);
app.use("/district", DistrictRouter);
app.use("/citizen", CitizensRouter);

async function bootstrap() {
   try {
      await mongoose.connect(
         `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`
      );
      await initDatabase();

      app.listen(PORT, () => {
         console.log(`App is running on ${PORT}`);
      });
   } catch (error) {
      console.error(error);
   }
}

bootstrap();
