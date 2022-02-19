import pkg from "mongoose";
const { Schema, model, Types } = pkg;

const Street = new Schema({
   district_id: { type: Types.ObjectId, ref: "District", required: true },
   name: { type: String, required: true },
});

export default model("Street", Street);
