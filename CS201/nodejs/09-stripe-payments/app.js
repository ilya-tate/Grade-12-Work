require("dotenv").config();
require("express-async-errors");
const express = require("express");

const notFoundError = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
const stripeController = require("./controllers/stripe");

const app = express();
const port = process.env.PORT || 3000;

app
  .use(express.json())
  .use(express.static("./public"))
  .get("/", (req, res) => {
    res.send("Stripe Payments");
  })
  .post("/stripe", stripeController)
  .use(notFoundError)
  .use(errorHandlerMiddleware);

const start = async () => {
  try {
    app.listen(port, console.log(`Listening @ ${port}...`));
  } catch (err) {
    console.error(err);
  }
};

start();
