const express = require("express");
const { getAllGalaxy, getOneGalaxy, createGalaxy, updateGalaxy, deleteGalaxy, } = require("../handlers/handleGalaxy");
const router = express.Router();
//INDEX
router.get("/", getAllGalaxy);
//READ
router.get("/:id", getOneGalaxy);
//CREATE
router.post("/", createGalaxy);
//UPDATE
router.put("/:id", updateGalaxy);
//DELETE
router.delete("/", deleteGalaxy);
module.exports = router;
//# sourceMappingURL=galaxy.js.map