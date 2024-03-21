import { model, Schema, Document } from 'mongoose';
import { IGenre } from './genre';

export interface IMovie extends Document {
  id: string;
  name: string;
  poster_img: string;
  score: number;
  genre: IGenre[];
}
