require("dotenv").config();
require("express-async-errors");
const express = require("express");
const fileUpload = require("express-fileupload");

const connectDB = require("./db/connect");
const productRouter = require("./routes/products-router");
const notFoundError = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

const app = express();

app
  .use(express.json())
  .use(fileUpload({ useTempFiles: true }))
  .use(express.static("./public"))
  .get("/", (req, res) => {
    res.send("File Upload Start");
  })
  .use("/api/v1/products", productRouter)
  .use(notFoundError)
  .use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(3000, console.log("Listening @ 3000..."));
  } catch (err) {
    console.error(err);
  }
};

start();
