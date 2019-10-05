const express = require("express");
const { getAllPlanets, getOnePlanet, createPlanet, updatePlanet, deletePlanet, } = require("../handlers/handlePlanets");
const router = express.Router();
//CRUD
//INDEX
router.get("/", getAllPlanets);
//READ
router.get("/:id", getOnePlanet);
//CREATE
router.post("/", createPlanet);
//UPDATE
router.put("/:id", updatePlanet);
//DELETE
router.delete("/:id", deletePlanet);
module.exports = router;
//# sourceMappingURL=planets.js.map