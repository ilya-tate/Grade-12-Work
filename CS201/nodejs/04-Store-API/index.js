const express = require("express");
require("express-async-errors");

require("dotenv").config();
const connectDatabase = require("./db/connect");
const errorHandler = require("./middleware/error-handler");
const notFound = require("./middleware/not-found");
const router = require("./routes/products");

const app = express();
const port = process.env.PORT || 3000;

app
  .use([express.urlencoded({ extended: false }), express.json()])
  .get("/", (req, res) => res.send("Store API"))
  .use("/api/v1/products", router)
  .use(errorHandler)
  .use(notFound);

const startApp = async () => {
  try {
    await connectDatabase(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Listening @ ${port}`);
    });
  } catch (err) {
    console.error(err);
  }
};
startApp();
