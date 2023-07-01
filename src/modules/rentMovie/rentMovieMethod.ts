import { MovieRent } from "@prisma/client";
import { CreateRentMovieInterface } from "../../dtos/CreateRentMovieDTO";
import { Messages } from "../../enum/messages";
import { HttpStatusCode } from "../../enum/status";
import { AppError } from "../../errors/AppError";
import ClientPrisma from "../../prismaClient/client";
import { ClientJWT } from "../tokens/generateTokenJWT";

export class RentMovieMethod extends ClientJWT {
  async insert(payload: CreateRentMovieInterface): Promise<MovieRent> {
    const { movieId, userId } = payload;

    const movieIsExists = await ClientPrisma.movie.findUnique({
      where: { id: movieId },
    });

    if (!movieIsExists) {
      throw new AppError(Messages.MovieNoExists, HttpStatusCode.NOT_FOUND);
    }

    const { userId: idDecoded } = this.decode(userId);

    const userIsExists = await ClientPrisma.user.findUnique({
      where: { id: idDecoded },
    });

    if (!userIsExists) {
      throw new AppError(Messages.UserNoExists, HttpStatusCode.NOT_FOUND);
    }

    const formatedPayload = { ...payload, userId: idDecoded };

    const thisUserHasRentedThisMovie = await ClientPrisma.movieRent.findFirst({
      where: formatedPayload,
    });

    if (thisUserHasRentedThisMovie) {
      throw new AppError(
        Messages.UserRentedActualMovie,
        HttpStatusCode.CONFLICT
      );
    }

    const movieRented = await ClientPrisma.movieRent.create({
      data: formatedPayload,
    });

    return movieRented;
  }
}
