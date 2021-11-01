const express = require("express");
require("express-async-errors");
require("dotenv").config();

const Router = require("./routes/login");
const errorHandler = require("./middleware/error-handler");
const notFound = require("./middleware/not-found");
const establishDatabaseConnection = require("./database/connect");

const app = express();
const port = process.env.PORT || 3000;

app
  .use([express.urlencoded({ extended: false }), express.json()])
  .get("/", (req, res) => res.send("05-JWT-Basics"))
  .use("/api/v1/", Router)
  // Middleware
  .use(errorHandler)
  .use(notFound);

const startApp = async () => {
  try {
    await establishDatabaseConnection(process.env.MONGO_URL);
    app.listen(port, () => console.log(`Listening on port ${port}...`));
  } catch (err) {
    console.error(err);
  }
};
startApp();
