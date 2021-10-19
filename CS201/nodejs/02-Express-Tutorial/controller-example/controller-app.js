const express = require("express");
const auth = require("./routes/auth");

const app = express();
const port = 3000;

app
  .use(express.static("../public"))
  .use([express.urlencoded({ extended: false }), express.json()])
  .use("/login", auth)
  .listen(port, () => console.log(`Listening on port ${port}`));
