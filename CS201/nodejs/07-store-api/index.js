require("dotenv").config();
const express = require("express");
const connect = require("./db/connect");

app = express();
port = 3000;

app.get("/");

const startServer = async () => {
  try {
    await connect(process.env.MONGO_URL);
    app.listen(port, () => console.log(`Listening @ ${port}...`));
  } catch (err) {
    console.error(err);
  }
};
startServer();
