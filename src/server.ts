import express from 'express';
import routes from './routes';

const app = express();

app.use(routes);

const port = 3000;

app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server  listening on ${port}`);
});