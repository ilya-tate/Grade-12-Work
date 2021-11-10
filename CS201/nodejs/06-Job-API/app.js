const express = require("express");
require("express-async-errors");

require("dotenv").config();
const connectDb = require("./db/connect");
const { auth } = require("./middleware");
const { auth: routeAuth, jobs: routeJobs } = require("./routes");
const { errorHandler, notFound } = require("./middleware");

const app = express();
const port = process.env.PORT || 3000;

app
  .use([express.urlencoded({ extended: false }), express.json()])
  // Routes
  .use("/api/v1/auth", routeAuth)
  .use("/api/v1/jobs", auth, routeJobs)
  // Middleware
  .use(errorHandler)
  .use(notFound);

const startApp = async () => {
  try {
    await connectDb(process.env.MONGO_URL);
    app.listen(port, () => console.log(`Listening on port ${port}`));
  } catch (err) {
    console.error(err);
  }
};
startApp();
