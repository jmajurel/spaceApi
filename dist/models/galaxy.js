const mongoose = require("mongoose");
const galaxySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: String,
    constellation: { type: String, required: true },
});
module.exports = mongoose.model("Galaxy", galaxySchema);
//# sourceMappingURL=galaxy.js.map