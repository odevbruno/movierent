import { Request, Response } from "express";
import { HttpStatusCode } from "../../enum/status";
import { RentMovieMethod } from "./rentMovieMethod";

export class RentMovieController extends RentMovieMethod {
  async handleInsert(req: Request, res: Response) {
    const payload = req.body;
    const resultId = await this.insert(payload);
    return res.status(HttpStatusCode.CREATED).json(resultId);
  }
}
