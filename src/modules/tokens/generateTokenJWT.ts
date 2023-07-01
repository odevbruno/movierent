import JWT from "jsonwebtoken";
import { Messages } from "../../enum/messages";
import { HttpStatusCode } from "../../enum/status";
import { AppError } from "../../errors/AppError";
require("dotenv").config();

export class ClientJWT {
  generate(id: string): string {
    if (!process.env.SECRET_KEY) {
      throw new AppError(Messages.KeyIsMissing, HttpStatusCode.UNAUTHORIZED);
    }
    return JWT.sign({ userId: id }, process.env.SECRET_KEY, {
      expiresIn: process.env.EXPIRATION_JWT,
    });
  }

  decode(id: string): any {
    return JWT.decode(id ?? "") as string;
  }
}
