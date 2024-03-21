import { model, Schema, Document } from 'mongoose';
import { IMovie } from './movie';
import bcrypt from 'bcrypt';

export interface IUser extends Document {
  id: string;
  name: string;
  email: string;
  password: string;
  movies: IMovie[];
}

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  movies: {
    type: [],
    default: [],
  },
});

userSchema.pre<IUser>('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(this.password, salt);
  this.password = hash;
  next();
});

userSchema.methods.comparePassword = async function (password: string) {
  return await bcrypt.compare(password, this.password);
};

const userModel = model<IUser>('users', userSchema);

export default userModel;
