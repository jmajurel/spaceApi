"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const planetSchema = new mongoose_1.default.Schema({
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
    temperature: Number,
    surfaceArea: Number // surface, nb of earth
});
exports.default = mongoose_1.default.model("Planet", planetSchema);
//# sourceMappingURL=planet.js.map