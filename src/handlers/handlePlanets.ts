import db from "../models";
import { Request, Response, NextFunction } from "express";

async function getAllPlanets(req: Request, res: Response, next: NextFunction) {
  try {
    const planets = await db.planet.find();
    return res.status(200).json(planets);
  } catch (err) {
    return next(err);
  }
}

async function getOnePlanet(req: Request, res: Response, next: NextFunction) {
  try {
    const planet = await db.planet.findById(req.params.id);
    return res.status(200).json(planet);
  } catch (err) {
    return next(err);
  }
}

async function createPlanet(req: Request, res: Response, next: NextFunction) {
  try {
    const { name, type, picture, temperature, surfaceArea } = req.body;
    const foundPlanet = await db.planet.findOne({ name });

    if (foundPlanet) {
      return next({
        status: 400,
        message: "Planet already exists in the database"
      });
    } else {
      const newPlanet = await db.planet.create({
        name,
        type,
        picture,
        temperature,
        surfaceArea
      });
      await newPlanet.save();

      return res.status(201).json(newPlanet);
    }
  } catch (err) {
    return next(err);
  }
}
async function updatePlanet(req: Request, res: Response, next: NextFunction) {
  try {
    const { name, type, picture, temperature, surfaceArea } = req.body;
    const updatedPlanet = await db.planet.findByIdAndUpdate(req.params.id, {
      name,
      type,
      picture,
      temperature,
      surfaceArea
    });
    return res.status(201).json(updatedPlanet);
  } catch (err) {
    return next(err);
  }
}

async function deletePlanet(req: Request, res: Response, next: NextFunction) {
  try {
    const deletedPlanet = await db.planet.findByIdAndRemove(req.params.id);
    return res.status(200).json(deletedPlanet);
  } catch (err) {
    return next(err);
  }
}
export default {
  getAllPlanets,
  getOnePlanet,
  createPlanet,
  updatePlanet,
  deletePlanet
};
