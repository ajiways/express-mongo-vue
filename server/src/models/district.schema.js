import pkg from "mongoose";
const { Schema, model, Types } = pkg;
import Street from "./street.schema.js";

const District = new Schema({
   city_id: { type: Types.ObjectId, ref: "City", required: true },
   name: { type: String, required: true },
   streets: [{ street: { type: Types.ObjectId, ref: "Street" } }],
});

export default model("District", District);
