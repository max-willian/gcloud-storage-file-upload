import dotenv from 'dotenv';

if(!process.env.PORT){
  dotenv.config({path: __dirname + '/../.env'});
}
  
import app from "./app";

console.log(`porta setada ${process.env.PORT}`);

const port = process.env.PORT || `3000`

app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server listening on ${port}.`);
});