import mongoose from "mongoose";

const galaxySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  constellation: { type: String, required: true }
  //  planets: [{ type: mongoose.Schema.Types.ObjectId, ref: "Planet" }],
  //  stars: [{ type: mongoose.Schema.Types.ObjectId, ref: "Star" }]
});

export default mongoose.model("Galaxy", galaxySchema);
