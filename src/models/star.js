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
  mass: Number,
  distance: Number, //light year from earth
  diameter: Number,
  temperature: Number,
  color: String
});

module.exports = mongoose.model("Star", starSchema);
