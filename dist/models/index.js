"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.set("debug", true);
mongoose_1.default.Promise = Promise;
mongoose_1.default.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PWD}@ds349065.mlab.com:49065/spacedb` ||
    "localhost:8081/spacedb", { useNewUrlParser: true });
const galaxy_1 = __importDefault(require("./galaxy"));
const planet_1 = __importDefault(require("./planet"));
const star_1 = __importDefault(require("./star"));
exports.default = { planet: planet_1.default, star: star_1.default, galaxy: galaxy_1.default };
//# sourceMappingURL=index.js.map