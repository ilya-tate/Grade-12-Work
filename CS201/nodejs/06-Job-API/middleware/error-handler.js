const { ApiError } = require("./error-handler");

const errorHandler = (err, req, res, next) => {
  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res.status(404).send("Something went wrong");
};

module.exports = errorHandler;
