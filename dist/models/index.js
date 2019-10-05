const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PWD}@ds349065.mlab.com:49065/spacedb` || "localhost:8081/spacedb", { useNewUrlParser: true });
module.exports.Planet = require("./planet");
module.exports.Star = require("./star");
module.exports.Galaxy = require("./galaxy");
//# sourceMappingURL=index.js.map