import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import {} from 'dotenv/config';
import apiV1Router from './routes/apiV1Router';

const app = express();

const port = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/v1/', apiV1Router);
app.get('/api/', (req, res) => res.status(200).json({
  success: true,
  message: 'Welcome to the Chat API',
}));

app.all('*', (req, res) => res.status(404)
  .json({
    success: false,
    message: 'Route not supported on server',
  }));

app.listen(port, (err) => {
  if (err) {
    console.log('An error occured');
  }
  console.log(`Successfully started the server on port ${port}!!!`);
});

export default app;
