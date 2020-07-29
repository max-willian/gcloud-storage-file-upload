import app from "./app";

const port = process.env.PORT || `3000`

app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server listening on ${port}.`);
});