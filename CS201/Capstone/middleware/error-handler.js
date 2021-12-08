const { StatusCodes } = require('http-status-codes');

const errorHandlerMiddleware = async (err, req, res, next) => {
  let customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || 'Something went wrong, try again later.',
  };

  // This handles any validation errors, typically requires and emails
  if (err.name === 'ValidationError') {
    customError.msg = Object.values(err.errors)
      .map((item) => item.message)
      .join(', ');

    customError.statusCode = 400;
  }

  // This handles duplication errors
  if (err.code && err.code === 11000) {
    customError.msg = `entered user ${Object.keys(
      err.keyValue
    )} already exists: ${Object.values(
      err.keyValue
    )}, please enter a new ${Object.keys(err.keyValue)}`;
    customError.statusCode = 400;
  }

  // This is for any value that does not fit the type cast
  if (err.name === 'CastError') {
    customError.msg = `No item found with ID: ${err.value}`;
    customError.statusCode = 400;
  }

  return res.status(customError.statusCode).json({ msg: customError.msg });
};

//todo: THIS IS GOOD
module.exports = errorHandlerMiddleware;
