import express from 'express';
import routes from './routes';

const app = express();

app.use(routes);

const port = process.env.PORT || `3000`

app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`maxx server listening on ${port}`);
});