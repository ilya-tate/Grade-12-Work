const mongoose = require("mongoose");

const establishDatabaseConnection = (url) => {
  return mongoose
    .connect(url)
    .then(() => console.log("Connected to database..."))
    .catch((err) => console.error(err));
};

module.exports = establishDatabaseConnection;
