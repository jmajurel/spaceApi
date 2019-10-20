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
function getAllStars(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let [lowerLimit, upperLimit] = [0, 60];
            const { range } = req.query;
            if (range) {
                [lowerLimit, upperLimit] = range
                    .split("-")
                    .map((nb) => Number(nb));
            }
            const nbOdStartsInDb = yield models_1.default.star.count(true);
            const stars = yield models_1.default.star
                .find()
                .skip(lowerLimit)
                .limit(upperLimit);
            const nbOfItems = upperLimit - lowerLimit;
            const pageCount = Math.round(nbOdStartsInDb / nbOfItems);
            const currentPage = Math.round(upperLimit / nbOfItems) - 1;
            return res.status(200).json({
                pageCount,
                currentPage,
                stars
            });
        }
        catch (err) {
            return next(err);
        }
    });
}
function getOneStar(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const star = yield models_1.default.star.findById(req.params.id);
            return res.status(200).json(star);
        }
        catch (err) {
            return next(err);
        }
    });
}
function createStar(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { name, type, mass, distance, diameter, temperature, color } = req.body;
            const foundStar = yield models_1.default.star.findOne({ name });
            if (foundStar) {
                return next({
                    error: {
                        status: 400,
                        message: "This star already exists in the database"
                    }
                });
            }
            const newStar = yield models_1.default.star.create({
                name,
                type,
                mass,
                distance,
                diameter,
                temperature,
                color
            });
            yield newStar.save();
            return res.status(201).json(newStar);
        }
        catch (err) {
            return next(err);
        }
    });
}
function updateStar(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { name, type, mass, distance, diameter, temperature, color } = req.body;
            const updatedStar = yield models_1.default.star.findByIdAndUpdate(req.params.id, {
                name,
                type,
                mass,
                distance,
                diameter,
                temperature,
                color
            });
            return res.status(201).json(updatedStar);
        }
        catch (err) {
            return next(err);
        }
    });
}
function deleteStar(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const deleted = yield models_1.default.star.findByIdAndRemove(req.params.id);
            return res.status(200).json(deleted);
        }
        catch (err) {
            return next(err);
        }
    });
}
exports.default = {
    getAllStars,
    getOneStar,
    createStar,
    updateStar,
    deleteStar
};
//# sourceMappingURL=handleStars.js.map