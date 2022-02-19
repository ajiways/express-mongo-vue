import pkg from "mongoose";
const { Schema, model, Types } = pkg;
import District from "./district.schema.js";

const City = new Schema({
   name: { type: String, unique: true, required: true },
   data: { type: Number, required: true },
   districts: [{ district: { type: Types.ObjectId, ref: "Disctrict" } }],
});

export default model("City", City);
