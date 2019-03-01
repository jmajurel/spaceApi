const db = require("../models");

async function getAllGalaxy(req, res, next) {
  try {
    const galaxy = await db.Galaxy.find()
      .populate("planets")
      .populate("stars");
    return res.status(200).json(galaxy);
  } catch (err) {
    return next(err);
  }
}
async function getOneGalaxy(req, res, next) {
  try {
    const galaxy = await db.Galaxy.findById(req.params.id)
      .populate("planets")
      .populate("stars");
    return res.status(200).json(galaxy);
  } catch (err) {
    return next(err);
  }
}

async function createGalaxy(req, res, next) {
  try {
    const { name, planets, stars } = req.body;
    const foundGalaxy = await db.Galaxy.find({ name });
    if (foundGalaxy) {
      return next({
        error: {
          status: 400,
          message: "This Galaxy entry already in the database"
        }
      });
    }
    let foundPlanet, foundStar;
    let planetsRef = [];
    for (let i = 0; i < planets.length; i++) {
      foundPlanet = await db.Planet.find({ name: planets[i] });
      if (foundPlanet) planetsRef.push(foundPlanet._id);
    }

    let starsRef = [];
    for (let i = 0; i < stars.length; i++) {
      foundStar = await db.Star.find({ name: stars[i] });
      if (foundStar) starsRef.push(foundStar._id);
    }

    const newGalaxy = await db.Galaxy.create({ name, planetsRef, starsRef });
    await newGalaxy.save();
    return res.status(200).json(newGalaxy);
  } catch (err) {
    return next(err);
  }
}

async function updateGalaxy(req, res, next) {
  try {
    const { name, planets, stars } = req.body;

    let foundPlanet, foundStar;
    let planetsRef = [];
    for (let i = 0; i < planets.length; i++) {
      foundPlanet = await db.Planet.find({ name: planets[i] });
      if (foundPlanet) planetsRef.push(foundPlanet._id);
    }

    let starsRef = [];
    for (let i = 0; i < stars.length; i++) {
      foundStar = await db.Star.find({ name: stars[i] });
      if (foundStar) starsRef.push(foundStar._id);
    }

    const updatedGalaxy = await db.Galaxy.findByIdAndUpdate(req.params.id, {
      name,
      planetsRef,
      starsRef
    });
    return res.status(201).json(updatedGalaxy);
  } catch (err) {
    return next(err);
  }
}

async function deleteGalaxy(req, res, next) {
  try {
    const deleted = await db.Galaxy.findByIdAndRemove(req.params.id);
    return res.status(200).json(deleted);
  } catch (err) {
    return next(err);
  }
}

module.exports = {
  getAllGalaxy,
  getOneGalaxy,
  createGalaxy,
  updateGalaxy,
  deleteGalaxy
};
