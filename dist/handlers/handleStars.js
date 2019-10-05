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
function getAllStars(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let [lowerLimit, upperLimit] = [0, 25];
            const { range } = req.params;
            if (range) {
                [lowerLimit, upperLimit] = range.split("-").map(res => Number(res));
            }
            const nbOdStartsInDb = yield db.Star.count();
            const stars = yield db.Star.find()
                .skip(lowerLimit)
                .limit(upperLimit);
            const pageCount = Math.round(nbOdStartsInDb / upperLimit);
            return res.status(200).json({
                pageCount,
                currentPage: Math.round(lowerLimit / upperLimit),
                stars,
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
            const star = yield db.Star.findById(req.params.id);
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
            const { name, type, mass, distance, diameter, temperature, color, } = req.body;
            const foundStar = yield db.Star.findOne({ name });
            if (foundStar) {
                return next({
                    error: {
                        status: 400,
                        message: "This star already exists in the database",
                    },
                });
            }
            const newStar = yield db.Star.create({
                name,
                type,
                mass,
                distance,
                diameter,
                temperature,
                color,
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
            const { name, type, mass, distance, diameter, temperature, color, } = req.body;
            const updatedStar = yield db.Star.findByIdAndUpdate(req.params.id, {
                name,
                type,
                mass,
                distance,
                diameter,
                temperature,
                color,
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
            const deleted = yield db.Star.findByIdAndRemove(req.params.id);
            return res.status(200).json(deleted);
        }
        catch (err) {
            return next(err);
        }
    });
}
module.exports = {
    getAllStars,
    getOneStar,
    createStar,
    updateStar,
    deleteStar,
};
//# sourceMappingURL=handleStars.js.map