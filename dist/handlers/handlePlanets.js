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
function getAllPlanets(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const planets = yield models_1.default.planet.find();
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
            const planet = yield models_1.default.planet.findById(req.params.id);
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
            const foundPlanet = yield models_1.default.planet.findOne({ name });
            if (foundPlanet) {
                return next({
                    status: 400,
                    message: "Planet already exists in the database"
                });
            }
            else {
                const newPlanet = yield models_1.default.planet.create({
                    name,
                    type,
                    picture,
                    temperature,
                    surfaceArea
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
            const updatedPlanet = yield models_1.default.planet.findByIdAndUpdate(req.params.id, {
                name,
                type,
                picture,
                temperature,
                surfaceArea
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
            const deletedPlanet = yield models_1.default.planet.findByIdAndRemove(req.params.id);
            return res.status(200).json(deletedPlanet);
        }
        catch (err) {
            return next(err);
        }
    });
}
exports.default = {
    getAllPlanets,
    getOnePlanet,
    createPlanet,
    updatePlanet,
    deletePlanet
};
//# sourceMappingURL=handlePlanets.js.map