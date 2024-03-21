import { Response, Request } from 'express';
import Movie from '../models/movie';

export async function getAllMovies(req: Request, res: Response) {
  const allMovies = await Movie.find().exec();
  return res.status(200).json(allMovies);
}

export async function createMovie(req: Request, res: Response) {
  if (!req.body.name) {
    return res.status(400).json({
      msg: 'Please send movie name',
    });
  }
  if (!req.body.genre) {
    return res.status(400).json({
      msg: 'Please send some movie genres',
    });
  }
  const newMovie = new Movie(req.body);
  await newMovie.save();
  return res.status(200).json(newMovie);
}

export async function updateMovie(req: Request, res: Response) {
  const { id } = req.params;
  //   const movie = await Movie.findOne({ _id: id }).exec();
  const movie = await Movie.findById(id).exec();
  if (!movie) {
    return res.status(400).json({
      msg: "This movie doesn't exist",
    });
  }
  if (!req.body) {
    return res.status(400).json({
      msg: 'Please send something to modify',
    });
  }
  if (req.body.name) {
    movie.name = req.body.name;
    await movie.save();
  }
  if (req.body.poster_img) {
    movie.poster_img = req.body.poster_img;
    await movie.save();
  }
  if (req.body.score) {
    movie.score = req.body.score;
    await movie.save();
  }
  if (req.body.genre) {
    movie.genre = req.body.genre;
    await movie.save();
  }
  return res.status(200).json(movie);
}

export async function deleteMovie(req: Request, res: Response) {
  const { id } = req.params;
  const movie = await Movie.findById(id).exec();
  if (!movie) {
    return res.status(400).json({
      msg: "This movie doesn't exist",
    });
  }
  await movie.deleteOne();
  return res.status(200).json({
    msg: `Movie with id ${id} has been deleted`,
  });
}
