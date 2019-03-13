const db = require("../models");

async function getAllStars(req, res, next) {
  try {
    const stars = await db.Star.find();
    return res.status(200).json(stars);
  } catch (err) {
    return next(err);
  }
}

async function getOneStar(req, res, next) {
  try {
    const star = await db.Star.findById(req.params.id);
    return res.status(200).json(star);
  } catch (err) {
    return next(err);
  }
}

async function createStar(req, res, next) {
  try {
    const {
      name,
      type,
      mass,
      distance,
      diameter,
      temperature,
      color
    } = req.body;

    const foundStar = await db.Star.findOne({ name });

    if (foundStar) {
      return next({
        error: {
          status: 400,
          message: "This star already exists in the database"
        }
      });
    }
    const newStar = await db.Star.create({
      name,
      type,
      mass,
      distance,
      diameter,
      temperature,
      color
    });
    await newStar.save();
    return res.status(201).json(newStar);
  } catch (err) {
    return next(err);
  }
}
async function updateStar(req, res, next) {
  try {
    const {
      name,
      type,
      mass,
      distance,
      diameter,
      temperature,
      color
    } = req.body;
    const updatedStar = await db.Star.findByIdAndUpdate(req.params.id, {
      name,
      type,
      mass,
      distance,
      diameter,
      temperature,
      color
    });
    return res.status(201).json(updatedStar);
  } catch (err) {
    return next(err);
  }
}

async function deleteStar(req, res, next) {
  try {
    const deleted = await db.Star.findByIdAndRemove(req.params.id);
    return res.status(200).json(deleted);
  } catch (err) {
    return next(err);
  }
}

module.exports = {
  getAllStars,
  getOneStar,
  createStar,
  updateStar,
  deleteStar
};
