"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const starSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    mass: Number,
    distance: Number,
    diameter: Number,
    temperature: Number,
    color: String
});
exports.default = mongoose_1.default.model("Star", starSchema);
//# sourceMappingURL=star.js.map