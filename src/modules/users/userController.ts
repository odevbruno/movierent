import { Request, Response } from "express";
import { HttpStatusCode } from "../../enum/status";
import { UserMethod } from "./userMethod";

export class UserController extends UserMethod {
  async handleInsert(req: Request, res: Response) {
    const payload = req.body;
    const result = await this.insert(payload);
    return res.status(HttpStatusCode.CREATED).json(result);
  }
}
