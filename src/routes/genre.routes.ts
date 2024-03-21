import { Router } from 'express';

const genreRouter = Router();

// Get all genres
genreRouter.get('/genres');

// Create new genre
genreRouter.post('/genres');

// Update genre
genreRouter.patch('/genres/:id');

// Delete genre
genreRouter.delete('/genres/:id');

export default genreRouter;
