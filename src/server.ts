import dotenv from 'dotenv';
dotenv.config({path: __dirname + '/../.env'});

import express from 'express';
import routes from './routes';

const app = express();

console.log(`ambiente ${process.env.NODE_ENV}`);

app.use(routes);

console.log(`a porta e ${process.env.PORT}`);

const port = process.env.PORT || `3000`

app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`maxx server listening on ${port}. project id is ${process.env.PROJECT_ID}`);
});