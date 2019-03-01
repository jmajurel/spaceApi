const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config({ path: __dirname + "/.env" });

const planetRouter = require("./routes/planets");
const starRouter = require("./routes/stars");
const galaxyRouter = require("./routes/galaxy");

const { handleError } = require("./handlers/handleErrors");

const app = express();
const PORT = process.env.PORT || 8080;

//middlewares
app.use(bodyParser.json());

//routes
//app.use("/", planetRouter);
app.use("/planets", planetRouter);
app.use("/stars", starRouter);
app.use("/galaxy", galaxyRouter);

//error handler
app.use("/", function(req, res, next) {
  const err = new Error("NOT FOUND");
  err.status = 404;
  next(err);
});

app.use(handleError);

app.listen(PORT, () => {
  console.log(`SpaceApi is listening on PORT ${PORT}`);
});
