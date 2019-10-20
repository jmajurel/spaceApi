import db from "../models";
import { Request, Response, NextFunction } from "express";

async function getAllStars(req: Request, res: Response, next: NextFunction) {
  try {
    let [lowerLimit, upperLimit] = [0, 60];
    const { range } = req.params;
    if (range) {
      [lowerLimit, upperLimit] = range
        .split("-")
        .map((nb: string) => Number(nb));
    }

    const nbOdStartsInDb = await db.star.count(true);

    const stars = await db.star
      .find()
      .skip(lowerLimit)
      .limit(upperLimit);

    const pageCount = Math.round(nbOdStartsInDb / upperLimit);

    return res.status(200).json({
      pageCount,
      currentPage: Math.round(lowerLimit / upperLimit),
      stars
    });
  } catch (err) {
    return next(err);
  }
}

async function getOneStar(req: Request, res: Response, next: NextFunction) {
  try {
    const star = await db.star.findById(req.params.id);
    return res.status(200).json(star);
  } catch (err) {
    return next(err);
  }
}

async function createStar(req: Request, res: Response, next: NextFunction) {
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

    const foundStar = await db.star.findOne({ name });

    if (foundStar) {
      return next({
        error: {
          status: 400,
          message: "This star already exists in the database"
        }
      });
    }
    const newStar = await db.star.create({
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
async function updateStar(req: Request, res: Response, next: NextFunction) {
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
    const updatedStar = await db.star.findByIdAndUpdate(req.params.id, {
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

async function deleteStar(req: Request, res: Response, next: NextFunction) {
  try {
    const deleted = await db.star.findByIdAndRemove(req.params.id);
    return res.status(200).json(deleted);
  } catch (err) {
    return next(err);
  }
}

export default {
  getAllStars,
  getOneStar,
  createStar,
  updateStar,
  deleteStar
};
