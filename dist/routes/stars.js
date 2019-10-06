"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const handleStars_1 = __importDefault(require("../handlers/handleStars"));
const router = express_1.default.Router();
// INDEX
router.get("/", handleStars_1.default.getAllStars);
// READ
router.get("/:id", handleStars_1.default.getOneStar);
// CREATE
router.post("/", handleStars_1.default.createStar);
// UPDATE
router.put("/:id", handleStars_1.default.updateStar);
// DELETE
router.delete("/:id", handleStars_1.default.deleteStar);
exports.default = router;
//# sourceMappingURL=stars.js.map