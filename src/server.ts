import express from 'express';
import userRouter from './routes/user.routes';

const app = express();

// middlewares
app.use(express.json());

// routes
app.use(userRouter);

export default app;
