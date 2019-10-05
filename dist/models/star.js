const mongoose = require("mongoose");
const starSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    mass: Number,
    distance: Number,
    diameter: Number,
    temperature: Number,
    color: String,
});
module.exports = mongoose.model("Star", starSchema);
//# sourceMappingURL=star.js.map