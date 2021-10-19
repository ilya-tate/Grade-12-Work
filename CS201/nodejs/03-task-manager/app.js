require("dotenv").config();
const express = require("express");
const connect = require("./db/connect");

app = express();
port = 3000;

const tasks = require("./routes/tasks");

// Connect to database
const startServer = async () => {
  try {
    await connect(process.env.MONGO_URL);
    app.listen(port, `listening @ ${port}...`);
  } catch (err) {
    console.error(err);
  }
};
startServer;

app
  // Declaring the html / css directory
  .use(express.static("./public"))
  // Middleware
  .use([express.urlencoded({ extended: false }), express.json()])
  // Routes
  .use("/api/v1/tasks", tasks);
