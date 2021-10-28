const express = require("express");
const connectDatabase = require("./db/connect");
const router = require("./routes/products");
require("dotenv").config();

const app = express();
const port = 3000;

app
  .use([express.urlencoded({ extended: false }), express.json()])
  .get("/", (req, res) => res.send("Store API"))
  .use("/api/v1/products", router);

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
