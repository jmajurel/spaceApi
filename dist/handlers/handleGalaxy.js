"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = __importDefault(require("../models"));
function getAllGalaxy(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const galaxy = yield models_1.default.galaxy.find();
            //      .populate("planets")
            //      .populate("stars");
            return res.status(200).json(galaxy);
        }
        catch (err) {
            return next(err);
        }
    });
}
function getOneGalaxy(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const galaxy = yield models_1.default.galaxy.findById(req.params.id);
            //      .populate("planets")
            //      .populate("stars");
            return res.status(200).json(galaxy);
        }
        catch (err) {
            return next(err);
        }
    });
}
function createGalaxy(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // const { name, planets, stars } = req.body;
            const { name, description, constellation } = req.body;
            const foundGalaxy = yield models_1.default.galaxy.findOne({ name });
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
            const newGalaxy = yield models_1.default.galaxy.create({
                name,
                description,
                constellation
            });
            yield newGalaxy.save();
            return res.status(200).json(newGalaxy);
        }
        catch (err) {
            return next(err);
        }
    });
}
function updateGalaxy(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
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
            const updatedGalaxy = yield models_1.default.galaxy.findByIdAndUpdate(req.params.id, {
                name,
                description,
                constellation
            });
            return res.status(201).json(updatedGalaxy);
        }
        catch (err) {
            return next(err);
        }
    });
}
function deleteGalaxy(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const deleted = yield models_1.default.galaxy.findByIdAndRemove(req.params.id);
            return res.status(200).json(deleted);
        }
        catch (err) {
            return next(err);
        }
    });
}
exports.default = {
    getAllGalaxy,
    getOneGalaxy,
    createGalaxy,
    updateGalaxy,
    deleteGalaxy
};
//# sourceMappingURL=handleGalaxy.js.map