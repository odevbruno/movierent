const express = require("express");
const userRoute = express();

import { Request, Response } from "express";
import { UserController } from "../modules/users/userController";
import { MovieController } from "../modules/movies/movieController";
import validateRequestUser from "../validations/createUser.validation";
import validateRequestMovie from "../validations/createMovie.validation";
import { RentMovieController } from "../modules/rentMovie/rentMovieController";

const userController = new UserController();
const movieController = new MovieController();
const rentMovieController = new RentMovieController();

userRoute.post(
  "/register",
  validateRequestUser,
  (req: Request, res: Response) => userController.handleInsert(req, res)
);

userRoute.post(
  "/register/movie",
  validateRequestMovie,
  (req: Request, res: Response) => movieController.handleInsert(req, res)
);

userRoute.post("/register/rent", (req: Request, res: Response) =>
  rentMovieController.handleInsert(req, res)
);

export default userRoute;
