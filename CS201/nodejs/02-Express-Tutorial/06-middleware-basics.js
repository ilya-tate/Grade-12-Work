const express = require("express");
const logger = require("./middleware/logger");

const app = express();
const port = 3000;

app
  .use(logger)
  .get("/", (req, res) => {
    res.send("Home Page");
  })
  .get("/about", (req, res) => {
    res.send("About Page");
  })
  .listen(port, () => console.log(`Listening on port ${port}`));
