const mongoose = require("mongoose");

module.exports = () => {
  return mongoose
    .connect(url)
    .then(() => console.log("Connected to database..."))
    .catch((err) => console.error(err));
};
