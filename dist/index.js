"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
dotenv_1.default.config({ path: __dirname + "/.env" });
const planets_1 = __importDefault(require("./routes/planets"));
const stars_1 = __importDefault(require("./routes/stars"));
const galaxy_1 = __importDefault(require("./routes/galaxy"));
const handleErrors_1 = require("./handlers/handleErrors");
const app = express_1.default();
const PORT = process.env.PORT || 8080;
// middlewares
app.use(cors_1.default());
app.use(body_parser_1.default.json());
// routes
// app.use("/", planetRouter);
app.use("/planets", planets_1.default);
app.use("/stars", stars_1.default);
app.use("/galaxies", galaxy_1.default);
// error handler
app.use("/", (req, res, next) => {
    const err = new Error("NOT FOUND");
    err.status = 404;
    next(err);
});
app.use(handleErrors_1.handleError);
app.listen(PORT, () => {
    console.log(`SpaceApi is listening on PORT ${PORT}`);
});
//# sourceMappingURL=index.js.map