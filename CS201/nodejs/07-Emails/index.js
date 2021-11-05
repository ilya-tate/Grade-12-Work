const express = require("express");
require("dotenv").config();

const errorHandler = require("./middleware/errorHandler");
const notFound = require("./middleware/not-found");

const app = express();
const port = process.env.PORT || 3000;

app.send("<h1></h1>");

try {
  app.listen(port, () => `Listening on port ${port}`);
} catch (err) {
  console.error(err);
}
