const mongoose = require("mongoose");

const galaxySchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  constellation: { type: String, required: true }
//  planets: [{ type: mongoose.Schema.Types.ObjectId, ref: "Planet" }],
//  stars: [{ type: mongoose.Schema.Types.ObjectId, ref: "Star" }]
});

module.exports = mongoose.model("Galaxy", galaxySchema);
