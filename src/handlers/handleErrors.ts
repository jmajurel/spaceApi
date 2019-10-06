import { Request, Response } from "express";
import ICustomError from "../interfaces/Error";

function handleError(err: ICustomError, req: Request, res: Response) {
  return res.status(err.status || 500).json({
    error: {
      message: err.message || "Something went wrong"
    }
  });
}
export { handleError };
