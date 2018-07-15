import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import apiV1Router from './server/routes/apiV1Router';

const app = express();

const port = process.env.PORT || 5050;

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api/v1/', apiV1Router);
app.get('/api/', (req, res) => res.status(200).json({
  success: true,
  message: 'Welcome to the Chat API',
}));

app.all('*', (req, res) => res.status(404)
  .json({
    status: 'error',
    message: 'Route not supported on server',
  }));

app.listen(port);

export default app;
