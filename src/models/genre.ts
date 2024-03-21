import { model, Schema, Document } from 'mongoose';

export interface IGenre extends Document {
  id: string;
  name: string;
}

const genreSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

const genreModel = model('genres', genreSchema);

export default genreModel;
