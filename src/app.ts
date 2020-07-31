import dotenv from 'dotenv';

if(!process.env.PORT){
  dotenv.config({path: __dirname + '/../.env'});
}
 

import express from 'express';
import { router } from './routes';

const app = express();

app.use(router);

export { app };