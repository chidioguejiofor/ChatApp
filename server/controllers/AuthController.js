import userModel from '../database/models/user';

export default class AuthController {
  static signup(req, resp) {
    userModel.add(req.body, (err, user) => {
      if (err) {
        AuthController.handleError(err, resp);
      } else {
        resp.status(201).json({
          success: true,
          message: 'A new user was added successfully!!!',
          data: { user },
          token: '',
        });
      }
    });
  }

  static handleError(err, resp) {
    if (err.code === 11000) {
      resp.status(400).json({
        message: 'The username or email you specified already exists',
        success: false,
      });
    } else {
      resp.status(400).json({
        message: 'An unknown error occured!!!',
        success: false,
      });
    }
  }
}
