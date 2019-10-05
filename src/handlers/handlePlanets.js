const db = require("../models");

async function getAllPlanets(req, res, next) {
  try {
    const planets = await db.Planet.find();
    return res.status(200).json(planets);
  } catch (err) {
    return next(err);
  }
}

async function getOnePlanet(req, res, next) {
  try {
    const planet = await db.Planet.findById(req.params.id);
    return res.status(200).json(planet);
  } catch (err) {
    return next(err);
  }
}

async function createPlanet(req, res, next) {
  try {
    const { name, type, picture, temperature, surfaceArea } = req.body;
    const foundPlanet = await db.Planet.findOne({ name });

    if (foundPlanet) {
      return next({
        status: 400,
        message: "Planet already exists in the database",
      });
    } else {
      const newPlanet = await db.Planet.create({
        name,
        type,
        picture,
        temperature,
        surfaceArea,
      });
      await newPlanet.save();

      return res.status(201).json(newPlanet);
    }
  } catch (err) {
    return next(err);
  }
}
async function updatePlanet(req, res, next) {
  try {
    const { name, type, picture, temperature, surfaceArea } = req.body;
    const updatedPlanet = await db.Planet.findByIdAndUpdate(req.params.id, {
      name,
      type,
      picture,
      temperature,
      surfaceArea,
    });
    return res.status(201).json(updatedPlanet);
  } catch (err) {
    return next(err);
  }
}

async function deletePlanet(req, res, next) {
  try {
    const deletedPlanet = await db.Planet.findByIdAndRemove(req.params.id);
    return res.status(200).json(deletedPlanet);
  } catch (err) {
    return next(err);
  }
}
module.exports = {
  getAllPlanets,
  getOnePlanet,
  createPlanet,
  updatePlanet,
  deletePlanet,
};
