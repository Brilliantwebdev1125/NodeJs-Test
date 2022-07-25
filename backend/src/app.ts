import express from 'express';
import setupRouter from './api';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// define a route handler for the default home page
app.get('/', (req: any, res) => {
  res.send('Hello world!');
});

setupRouter(app);

export default app;