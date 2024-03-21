import { model, Schema, Document } from 'mongoose';
import { IGenre } from './genre';

export interface IMovie extends Document {
  id: string;
  name: string;
  poster_img: string;
  score: number;
  genre: IGenre[];
}

const movieSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  poster_img: {
    type: String,
    default:
      'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie-1-1.jpg',
  },
  score: {
    type: Number,
    default: 0,
  },
  genre: {
    type: [],
    required: true,
  },
});

const movieModel = model<IMovie>('movies', movieSchema);

export default movieModel;
