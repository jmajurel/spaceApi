const mongoose = require("mongoose");

const planetSchema = mongoose.Schema({
  name: {
    //name of the planet
    type: String,
    required: true
  },
  type: {
    //solid, gas
    type: String,
    required: true
  },
  picture: {
    //url
    type: String,
    required: true
  },
  temperature: Number, //surface temperature avg Kelvin
  surfaceArea: Number //surface, nb of earth
});

module.exports = mongoose.model("Planet", planetSchema);
