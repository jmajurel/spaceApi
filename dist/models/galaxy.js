"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const galaxySchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    constellation: { type: String, required: true }
    //  planets: [{ type: mongoose.Schema.Types.ObjectId, ref: "Planet" }],
    //  stars: [{ type: mongoose.Schema.Types.ObjectId, ref: "Star" }]
});
exports.default = mongoose_1.default.model("Galaxy", galaxySchema);
//# sourceMappingURL=galaxy.js.map