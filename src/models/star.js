const mongoose = require("mongoose");

const starSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  distance: Number, //light year from earth
  magnitude: Number //luminosity absolute
});

module.exports = mongoose.model("Star", starSchema);
