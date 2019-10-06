import mongoose from "mongoose";

mongoose.set("debug", true);
mongoose.Promise = Promise;

mongoose.connect(
  `mongodb://${process.env.DB_USER}:${process.env.DB_PWD}@ds349065.mlab.com:49065/spacedb` ||
    "localhost:8081/spacedb",
  { useNewUrlParser: true }
);

import galaxy from "./galaxy";
import planet from "./planet";
import star from "./star";

export default { planet, star, galaxy };
