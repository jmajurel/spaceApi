const mongoose = require("mongoose");
const planetSchema = mongoose.Schema({
    name: {
        //name of the planet
        type: String,
        required: true,
    },
    type: {
        //solid, gas
        type: String,
        required: true,
    },
    picture: {
        //url
        type: String,
        required: true,
    },
    temperature: Number,
    surfaceArea: Number,
});
module.exports = mongoose.model("Planet", planetSchema);
//# sourceMappingURL=planet.js.map