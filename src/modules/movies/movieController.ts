import { Request, Response } from "express";
import { HttpStatusCode } from "../../enum/status";
import { MovieMethod } from "./movieMethod";

export class MovieController extends MovieMethod {
  async handleInsert(req: Request, res: Response) {
    const payload = req.body;
    const result = await this.insert(payload);
    return res.status(HttpStatusCode.CREATED).json(result);
  }
}
