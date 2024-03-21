import { Router } from 'express';
import {
  createMovie,
  deleteMovie,
  getAllMovies,
  updateMovie,
} from '../controllers/movie.controllers';

const movieRouter = Router();

// Get all movies
movieRouter.get('/movies', getAllMovies);

// Create new movie
movieRouter.post('/movies', createMovie);

// Update movie
movieRouter.patch('/movies/:id', updateMovie);

// Delete movie
movieRouter.delete('/movies/:id', deleteMovie);

export default movieRouter;
