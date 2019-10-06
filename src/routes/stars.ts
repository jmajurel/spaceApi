import express from "express";
import handlers from "../handlers/handleStars";

const router = express.Router();

// INDEX
router.get("/", handlers.getAllStars);

// READ
router.get("/:id", handlers.getOneStar);

// CREATE
router.post("/", handlers.createStar);

// UPDATE
router.put("/:id", handlers.updateStar);

// DELETE
router.delete("/:id", handlers.deleteStar);

export default router;
