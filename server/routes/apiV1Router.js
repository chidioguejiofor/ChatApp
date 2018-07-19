import { Router } from 'express';
import mongoose from 'mongoose';
import authRouter from './auth/authRouter';

mongoose.connect(process.env.DATABASE_URL);

const apiV1Router = Router();

apiV1Router.use('/auth', authRouter);

apiV1Router.get('/', (req, resp) => {
  resp.status(200).json({
    message: 'Welcome to the Chat API version 1',
    success: true,
  });
});
export default apiV1Router;
