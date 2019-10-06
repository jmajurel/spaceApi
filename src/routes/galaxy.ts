import express from "express";
import handlers from "../handlers/handleGalaxy";

const router = express.Router();

// INDEX
router.get("/", handlers.getAllGalaxy);

// READ
router.get("/:id", handlers.getOneGalaxy);

// CREATE
router.post("/", handlers.createGalaxy);

// UPDATE
router.put("/:id", handlers.updateGalaxy);

// DELETE
router.delete("/", handlers.deleteGalaxy);

export default router;
