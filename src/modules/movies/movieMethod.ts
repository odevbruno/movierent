import { Movie } from "@prisma/client";
import { CreateMovieInterface } from "../../dtos/CreateMovieDTO";
import { ResponseInterface } from "../../dtos/ResponseDTO";
import { Messages } from "../../enum/messages";
import { HttpStatusCode } from "../../enum/status";
import { AppError } from "../../errors/AppError";
import ClientPrisma from "../../prismaClient/client";

export class MovieMethod {
  async insert(payload: CreateMovieInterface): Promise<Movie> {
    const name = payload.name;

    const movieExists = await ClientPrisma.movie.findUnique({
      where: {
        name,
      },
    });

    if (movieExists)
      throw new AppError(Messages.MovieAlreadyExists, HttpStatusCode.CONFLICT);

    const resultMovie = await ClientPrisma.movie.create({
      data: payload,
    });
    return resultMovie;
  }
}
