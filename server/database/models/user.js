import hasha from 'hasha';
import Model from './Model';
import userSchema from '../schemas/userSchema';


class User extends Model {
  constructor() {
    super('user', userSchema);
  }

  add(model, callback) {
    const hashedUser = model;
    hashedUser.password = hasha(`${model.password}`);
    super.add(hashedUser, callback);
  }
}

export default new User();
