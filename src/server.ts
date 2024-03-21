import express from 'express';
import userRouter from './routes/user.routes';
import movieRouter from './routes/movie.routes';
import genreRouter from './routes/genre.routes';

const app = express();

// middlewares
app.use(express.json());

// routes
app.use(userRouter);
app.use(movieRouter);
app.use(genreRouter);

export default app;
