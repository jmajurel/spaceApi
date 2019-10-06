import express from "express";
import handlers from "../handlers/handlePlanets";

const router = express.Router();
// CRUD
// INDEX
router.get("/", handlers.getAllPlanets);

// READ
router.get("/:id", handlers.getOnePlanet);

// CREATE
router.post("/", handlers.createPlanet);

// UPDATE
router.put("/:id", handlers.updatePlanet);

// DELETE
router.delete("/:id", handlers.deletePlanet);

export default router;
