
import Validator from 'validatorjs';


const signupRules = {
  username: 'required|min:5',
  password: 'required|min:8',
  email: 'required|email',
};

const errorMessage = {
  required: 'must be specified',
  min: 'must be at least :value',
};

export default class SignupValidator {
  static validate(req, resp, next) {
    const validation = new Validator(req.body, signupRules, errorMessage);
    if (validation.check()) {
      next();
    } else {
      const { errors: { errors } } = validation;
      const error = {
        username: errors.username ? errors.username.join(',') : undefined,
        password: errors.password ? errors.password.join(',') : undefined,
        email: errors.email ? errors.email.join(',') : undefined,
      };
      resp.status(400).json({
        error: {
          message: error,
        },

        status: 'error',
      });
    }
  }

  static getMessage(error) {
    return {
      username: error.username[0],
      email: error.email[0],
      password: error.passwrod[0],
    };
  }
}
