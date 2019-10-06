"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function handleError(err, req, res) {
    return res.status(err.status || 500).json({
        error: {
            message: err.message || "Something went wrong"
        }
    });
}
exports.handleError = handleError;
//# sourceMappingURL=handleErrors.js.map