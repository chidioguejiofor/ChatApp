import { Router } from 'express';

const apiV1Router = Router();


apiV1Router.get('/', (req, resp) => {
  resp.status(200).json({
    message: 'Welcome to the Chat API version 1',
    success: true,
  });
});
export default apiV1Router;
