import { Router } from 'express';
import {
  createUser,
  deleteUser,
  getAllUsers,
  updateUser,
} from '../controllers/user.controllers';

const userRouter = Router();

// Get all users
userRouter.get('/users', getAllUsers);

// Create a new user
userRouter.post('/users', createUser);

// Update user
userRouter.patch('/users/:id', updateUser);

// Delete user
userRouter.delete('/users/:id', deleteUser);

export default userRouter;
