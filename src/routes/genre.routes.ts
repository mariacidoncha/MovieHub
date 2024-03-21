import { Router } from 'express';
import {
  createGenre,
  deleteGenre,
  getAllGenres,
  updateGenre,
} from '../controllers/genre.controllers';

const genreRouter = Router();

// Get all genres
genreRouter.get('/genres', getAllGenres);

// Create new genre
genreRouter.post('/genres', createGenre);

// Update genre
genreRouter.patch('/genres/:id', updateGenre);

// Delete genre
genreRouter.delete('/genres/:id', deleteGenre);

export default genreRouter;
