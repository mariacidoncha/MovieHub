import { model, Schema, Document } from 'mongoose';

export interface IGenre extends Document {
  id: string;
  name: string;
}
