const express = require("express");
require("express-async-errors");

require("dotenv").config();
const connectDb = require("./db/connect");
const { auth: routeAuth, jobs: routeJobs } = require("./routes");
const { errorHandler, notFound } = require("./middleware");

const app = express();
const port = process.env.PORT || 3000;

// Routes
app.use("/api/v1/auth", routeAuth).use("/api/v1/jobs", routeJobs);
// Middleware
app.use(errorHandler).use(notFound);

const startApp = async () => {
  try {
    await connectDb(process.env.MONGO_URL);
    app.listen(port, () => console.log(`Listening on port ${port}`));
  } catch (err) {
    console.error(err);
  }
};
startApp();
