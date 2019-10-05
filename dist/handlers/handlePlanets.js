var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const db = require("../models");
function getAllPlanets(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const planets = yield db.Planet.find();
            return res.status(200).json(planets);
        }
        catch (err) {
            return next(err);
        }
    });
}
function getOnePlanet(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const planet = yield db.Planet.findById(req.params.id);
            return res.status(200).json(planet);
        }
        catch (err) {
            return next(err);
        }
    });
}
function createPlanet(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { name, type, picture, temperature, surfaceArea } = req.body;
            const foundPlanet = yield db.Planet.findOne({ name });
            if (foundPlanet) {
                return next({
                    status: 400,
                    message: "Planet already exists in the database",
                });
            }
            else {
                const newPlanet = yield db.Planet.create({
                    name,
                    type,
                    picture,
                    temperature,
                    surfaceArea,
                });
                yield newPlanet.save();
                return res.status(201).json(newPlanet);
            }
        }
        catch (err) {
            return next(err);
        }
    });
}
function updatePlanet(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { name, type, picture, temperature, surfaceArea } = req.body;
            const updatedPlanet = yield db.Planet.findByIdAndUpdate(req.params.id, {
                name,
                type,
                picture,
                temperature,
                surfaceArea,
            });
            return res.status(201).json(updatedPlanet);
        }
        catch (err) {
            return next(err);
        }
    });
}
function deletePlanet(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const deletedPlanet = yield db.Planet.findByIdAndRemove(req.params.id);
            return res.status(200).json(deletedPlanet);
        }
        catch (err) {
            return next(err);
        }
    });
}
module.exports = {
    getAllPlanets,
    getOnePlanet,
    createPlanet,
    updatePlanet,
    deletePlanet,
};
//# sourceMappingURL=handlePlanets.js.map