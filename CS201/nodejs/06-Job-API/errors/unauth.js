const { StatusCodes } = require("http-status-codes");

const apiError = require("./api-error");

module.exports = class UnauthError extends ApiError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
};
