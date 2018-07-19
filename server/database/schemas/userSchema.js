export default {
  username: {
    type: String,
    required: true,
    min: 4,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 6,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: value => /.{1,}@.{1,}\.{1}com/i.test(value),
      message: 'email must have the format <username>@<domain-name>.com',
    },
  },
};
