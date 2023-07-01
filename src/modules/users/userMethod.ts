import ClientPrisma from "../../prismaClient/client";
import { CreateUserInterface } from "../../dtos/CreateUserDTO";
import { ResponseInterface } from "../../dtos/ResponseDTO";
import { AppError } from "../../errors/AppError";
import { HttpStatusCode } from "../../enum/status";
import { Messages } from "../../enum/messages";
import { ClientJWT } from "../tokens/generateTokenJWT";
const bcrypt = require("bcrypt");

export class UserMethod extends ClientJWT {
  async insert(payload: CreateUserInterface): Promise<ResponseInterface> {
    const phone = payload.phone;
    const pass = payload.password;

    const isPhoneExists = await ClientPrisma.user.findUnique({
      where: {
        phone,
      },
    });

    if (isPhoneExists) {
      throw new AppError(Messages.PhoneAlreadyExists, HttpStatusCode.CONFLICT);
    }
    const hashPassword = await bcrypt.hash(pass, 10);
    const resultUser = await ClientPrisma.user.create({
      data: { ...payload, password: hashPassword },
    });

    const token = this.generate(resultUser.id);
    return {
      tokenID: token,
    };
  }
}
