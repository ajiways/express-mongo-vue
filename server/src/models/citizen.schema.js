import pkg from "mongoose";
const { Schema, model } = pkg;

const Citizen = new Schema({
   name: { type: String, required: true },
   city_name: { type: String, required: true },
   district_name: { type: String, required: true },
   street_name: { type: String, required: true },
   house_number: { type: String, required: true },
   // тип String тут затем, что бы можно было делать 10/2 или 19a
});

export default model("Citizen", Citizen);
