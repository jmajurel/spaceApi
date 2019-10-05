const express = require("express");
const { getAllStars, getOneStar, createStar, updateStar, deleteStar, } = require("../handlers/handleStars");
const router = express.Router();
//INDEX
router.get("/", getAllStars);
//READ
router.get("/:id", getOneStar);
//CREATE
router.post("/", createStar);
//UPDATE
router.put("/:id", updateStar);
//DELETE
router.delete("/:id", deleteStar);
module.exports = router;
//# sourceMappingURL=stars.js.map