import mongoose from 'mongoose';
import uuid from 'node-uuid';

const Schema = mongoose.Schema;
const authorSchema = new Schema({
  id: {
    type: String,
    default: uuid.v1,
  },
  name: String,
  age: Number,
  books: [String],
});
