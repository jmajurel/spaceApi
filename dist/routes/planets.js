"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const handlePlanets_1 = __importDefault(require("../handlers/handlePlanets"));
const router = express_1.default.Router();
// CRUD
// INDEX
router.get("/", handlePlanets_1.default.getAllPlanets);
// READ
router.get("/:id", handlePlanets_1.default.getOnePlanet);
// CREATE
router.post("/", handlePlanets_1.default.createPlanet);
// UPDATE
router.put("/:id", handlePlanets_1.default.updatePlanet);
// DELETE
router.delete("/:id", handlePlanets_1.default.deletePlanet);
exports.default = router;
//# sourceMappingURL=planets.js.map