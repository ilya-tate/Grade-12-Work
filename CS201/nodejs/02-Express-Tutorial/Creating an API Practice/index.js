const express = require("express");
const { menu } = require("./data");

const app = express();
const port = 3000;

app
  .get("/", (req, res) => {
    req.json(menu);
  })
  .listen(port, () => console.log(`Listening on port ${port}`));
