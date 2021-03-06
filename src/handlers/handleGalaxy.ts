import db from "../models";
import { Request, Response, NextFunction } from "express";

async function getAllGalaxy(req: Request, res: Response, next: NextFunction) {
  try {
    const galaxy = await db.galaxy.find();
    //      .populate("planets")
    //      .populate("stars");
    return res.status(200).json(galaxy);
  } catch (err) {
    return next(err);
  }
}
async function getOneGalaxy(req: Request, res: Response, next: NextFunction) {
  try {
    const galaxy = await db.galaxy.findById(req.params.id);
    //      .populate("planets")
    //      .populate("stars");
    return res.status(200).json(galaxy);
  } catch (err) {
    return next(err);
  }
}

async function createGalaxy(req: Request, res: Response, next: NextFunction) {
  try {
    // const { name, planets, stars } = req.body;
    const { name, description, constellation } = req.body;

    const foundGalaxy = await db.galaxy.findOne({ name });
    if (foundGalaxy) {
      return next({
        error: {
          status: 400,
          message: "This Galaxy entry already in the database"
        }
      });
    }
    /*    let foundPlanet, foundStar;
    let planetsRef = [];
    for (let i = 0; i < planets.length; i++) {
      foundPlanet = await db.Planet.find({ name: planets[i] });
      if (foundPlanet) planetsRef.push(foundPlanet._id);
    }

    let starsRef = [];
    for (let i = 0; i < stars.length; i++) {
      foundStar = await db.Star.find({ name: stars[i] });
      if (foundStar) starsRef.push(foundStar._id);
    }*/

    // const newGalaxy = await db.Galaxy.create({ name, planetsRef, starsRef });
    const newGalaxy = await db.galaxy.create({
      name,
      description,
      constellation
    });
    await newGalaxy.save();
    return res.status(200).json(newGalaxy);
  } catch (err) {
    return next(err);
  }
}

async function updateGalaxy(req: Request, res: Response, next: NextFunction) {
  try {
    // const { name, planets, stars } = req.body;

    /*    let foundPlanet, foundStar;
    let planetsRef = [];
    for (let i = 0; i < planets.length; i++) {
      foundPlanet = await db.Planet.find({ name: planets[i] });
      if (foundPlanet) planetsRef.push(foundPlanet._id);
    }

    let starsRef = [];
    for (let i = 0; i < stars.length; i++) {
      foundStar = await db.Star.find({ name: stars[i] });
      if (foundStar) starsRef.push(foundStar._id);
    }*/
    const { name, description, constellation } = req.body;
    const updatedGalaxy = await db.galaxy.findByIdAndUpdate(req.params.id, {
      name,
      description,
      constellation
    });
    return res.status(201).json(updatedGalaxy);
  } catch (err) {
    return next(err);
  }
}

async function deleteGalaxy(req: Request, res: Response, next: NextFunction) {
  try {
    const deleted = await db.galaxy.findByIdAndRemove(req.params.id);
    return res.status(200).json(deleted);
  } catch (err) {
    return next(err);
  }
}
export default {
  getAllGalaxy,
  getOneGalaxy,
  createGalaxy,
  updateGalaxy,
  deleteGalaxy
};
