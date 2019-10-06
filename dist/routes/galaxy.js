"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const handleGalaxy_1 = __importDefault(require("../handlers/handleGalaxy"));
const router = express_1.default.Router();
// INDEX
router.get("/", handleGalaxy_1.default.getAllGalaxy);
// READ
router.get("/:id", handleGalaxy_1.default.getOneGalaxy);
// CREATE
router.post("/", handleGalaxy_1.default.createGalaxy);
// UPDATE
router.put("/:id", handleGalaxy_1.default.updateGalaxy);
// DELETE
router.delete("/", handleGalaxy_1.default.deleteGalaxy);
exports.default = router;
//# sourceMappingURL=galaxy.js.map