import { Router } from 'express';
import AuthController from '../../controllers/AuthController';
import SignupValidator from '../../validators/SignupValidator';

const authRouter = Router();

authRouter.post('/signup', SignupValidator.validate, AuthController.signup);

export default authRouter;
