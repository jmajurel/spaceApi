import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express, { Request, Response, NextFunction } from "express";
import ICustomError from "./interfaces/Error";

dotenv.config({ path: __dirname + "/.env" });

import planetRouter from "./routes/planets";
import starRouter from "./routes/stars";
import galaxyRouter from "./routes/galaxy";
import { handleError } from "./handlers/handleErrors";

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
app.use("/", (req: Request, res: Response, next: NextFunction) => {
  const err: ICustomError = new Error("NOT FOUND");
  err.status = 404;
  next(err);
});

app.use(handleError);

app.listen(PORT, () => {
  console.log(`SpaceApi is listening on PORT ${PORT}`);
});
