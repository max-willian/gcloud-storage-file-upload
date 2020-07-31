import dotenv from 'dotenv';

if(!process.env.PORT){
  dotenv.config({path: __dirname + '/../.env'});
}
 

import express from 'express';
import routes from './routes';

const app = express();

app.use(routes);

export default app;