import mongoose from 'mongoose';

export default class DatabaseManager {
  static connect() {
    if (process.env.NODE_ENV === 'production') {
      mongoose.connect(process.env.DATABASE_URL);
    } else {
      mongoose.connect('mongodb://localhost/chatApp');
    }
  }
}
