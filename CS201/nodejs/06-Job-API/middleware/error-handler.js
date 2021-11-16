const { StatusCodes } = require("http-status-codes");

module.exports = (err, req, res, next) => {
  // Default error handler
  let customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || "Something went wrong"
  };

  // Validation error handler
  if (err.name === "ValidationError") {
    customError.msg = Object.value(err.errors)
      .map((item) => item.message)
      .join(", ");
    customError.statusCode = 400;
  }

  // Duplication error handler
  if (err.code && err.code === 11000) {
    customError.msg = `Field ${Object.keys(err.keyValue)} ${Object.value(
      err.keyValue
    )} already exists`;
  }

  // Type cast error handler
  if (err.name === "CastError") {
    customError.msg = `No items with id ${err.value}`;
  }

  return res.status(customError.statusCode).json({ msg: customError, msg });
};
