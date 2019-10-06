import mongoose from "mongoose";

const starSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  mass: Number,
  distance: Number, // light year from earth
  diameter: Number,
  temperature: Number,
  color: String
});

export default mongoose.model("Star", starSchema);
