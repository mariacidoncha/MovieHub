import { Request, Response } from 'express';
import Genres from '../models/genre';

export async function getAllGenres(req: Request, res: Response) {
  const allGenres = await Genres.find().exec();
  return res.status(200).json(allGenres);
}

export async function createGenre(req: Request, res: Response) {
  if (!req.body.name) {
    return res.status(400).json({
      msg: 'Please write genre name.',
    });
  }
  const newGenre = new Genres(req.body);
  await newGenre.save();
  return res.status(201).json(newGenre);
}

export async function updateGenre(req: Request, res: Response) {
  const { id } = req.params;
  const genre = await Genres.findById(id).exec();
  if (!genre) {
    return res.status(400).json({
      msg: "This user doesn't exist",
    });
  }
  if (req.body.name) {
    genre.name = req.body.name;
    await genre.save();
  }
  return res.status(200).json(genre);
}

export async function deleteGenre(req: Request, res: Response) {
  const { id } = req.params;
  const genre = await Genres.findById(id).exec();
  if (!genre) {
    return res.status(400).json({
      msg: "This user doesn't exist",
    });
  }
  await genre.deleteOne();
  return res.status(200).json({
    msg: `Genre with id ${id} has been deleted`,
  });
}
