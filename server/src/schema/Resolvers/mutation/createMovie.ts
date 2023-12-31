import { checkToken } from "../../../../auth/Token";
import MovieModel from "../../../../models/MovieModel";
type AddMovieResult = {
  result: boolean;
  msg?: string;
};
export default async (
  _,
  { movieInput: { name, ImageUrl, yearPremiered, genres } },
  { req }
): Promise<AddMovieResult> => {
  //   checkToken(req.headers.token);
  return await new MovieModel({ name, ImageUrl, yearPremiered, genres })
    .save()
    .then(() => ({ result: true }))
    .catch((error) => ({ msg: error.message, result: false }));
};
