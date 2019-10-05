import express from "express";
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config({ path: __dirname + "/.env" });

const planetRouter = require("./routes/planets");
const starRouter = require("./routes/stars");
const galaxyRouter = require("./routes/galaxy");

const { handleError } = require("./handlers/handleErrors");

const app = express();
const PORT = process.env.PORT || 8080;

// middlewares
app.use(cors());
app.use(bodyParser.json());

// routes
// app.use("/", planetRouter);
app.use("/planets", planetRouter);
app.use("/stars", starRouter);
app.use("/galaxies", galaxyRouter);

// error handler
app.use("/", function(req, res, next) {
  const err: any = new Error("NOT FOUND");
  err.status = 404;
  next(err);
});

app.use(handleError);

app.listen(PORT, () => {
  console.log(`SpaceApi is listening on PORT ${PORT}`);
});