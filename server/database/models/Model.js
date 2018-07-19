import mongoose from 'mongoose';

mongoose.connect(process.env.DATABASE_URL);

export default class Model {
  constructor(modelName, schema) {
    this.model = mongoose.model(modelName, schema);
  }

  get(callback, limit) {
    this.model.find(callback, limit);
  }

  getById(id, callback) {
    this.model.findById(id, callback);
  }

  add(model, callback) {
    this.model.create(model, callback);
  }

  delete(query, callback) {
    this.model.remove(query, callback);
  }
}
