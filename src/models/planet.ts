import mongoose from "mongoose";

const planetSchema = new mongoose.Schema({
  name: {
    // name of the planet
    type: String,
    required: true
  },
  type: {
    // solid, gas
    type: String,
    required: true
  },
  picture: {
    // url
    type: String,
    required: true
  },
  temperature: Number, // surface temperature avg Kelvin
  surfaceArea: Number // surface, nb of earth
});
export default mongoose.model("Planet", planetSchema);
