import { Response, Request } from 'express';
import User from '../models/user';

export async function getAllUsers(req: Request, res: Response) {
  const allUsers = await User.find().exec();
  return res.status(200).json(allUsers);
}

export async function createUser(req: Request, res: Response) {
  if (!req.body.name) {
    return res.status(400).json({
      msg: 'Please write your name',
    });
  }
  if (!req.body.email) {
    return res.status(400).json({
      msg: 'Please write your email',
    });
  }
  if (!req.body.password) {
    return res.status(400).json({
      msg: 'Please write your password',
    });
  }
  const newUser = new User(req.body);
  await newUser.save();
  return res.status(201).json(newUser);
}

export async function updateUser(req: Request, res: Response) {
  const { id } = req.params;
  const user = await User.findById(id).exec();
  if (!user) {
    return res.status(400).json({
      msg: "This user doesn't exist",
    });
  }
  if (!req.body) {
    return res.status(400).json({
      msg: 'Please send something to modify',
    });
  }
  if (req.body.id) {
    return res.status(400).json({
      msg: "You can't modify your id.",
    });
  }
  if (req.body.name) {
    user.name = req.body.name;
    await user.save();
  }
  if (req.body.email) {
    user.email = req.body.email;
    await user.save();
  }
  if (req.body.password) {
    user.password = req.body.password;
    await user.save();
  }
  if (req.body.movies) {
    user.movies = req.body.movies;
    await user.save();
  }
  return res.status(201).json(user);
}

export async function deleteUser(req: Request, res: Response) {
  const { id } = req.params;
  const user = await User.findById(id).exec();
  if (!user) {
    return res.status(400).json({
      msg: "This user doesn't exist",
    });
  }
  await user.deleteOne();
  return res.send(`User with id ${id} has been deleted`);
}
