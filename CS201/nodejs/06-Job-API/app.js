// Packages
const cors = require("cors");
require("dotenv").config();
const express = require("express");
require("express-async-errors");
const rateLimiter = require("express-rate-limit");
const helmet = require("helmet");
const swaggerUi = require("swagger-ui-express");
const xssCleaner = require("xss-cleaner");
const yaml = require("yamljs");

// Imports
const connectDb = require("./db/connect");
const { auth } = require("./middleware");
const { auth: routeAuth, jobs: routeJobs } = require("./routes");
const { errorHandler, notFound } = require("./middleware");

const app = express();
const port = process.env.PORT || 3000;
const swaggerDocs = yaml.load("./swagger.yaml");

app
  // Rate limiter limits the number of possible API calls
  .set("trust proxy", 1)
  .use(
    rateLimiter({
      windowMs: 60000 * 15,
      max: 100
    })
  )
  .use([express.urlencoded({ extended: false }), express.json()])
  // General security blanket
  .use(helmet())
  // Prevents cors error
  .use(cors())
  // User sanitation, prevents SOME user based hacking
  .use(xss())
  // Swagger UI
  .get("/", (req, res) => {
    res.send("<h1> Jobs API</h1>" + '<a href="/api-docs">Documentation</a>');
  })
  .use("/api/docs", swaggerUi.server, swaggerUi.setup(swaggerDocs))
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
