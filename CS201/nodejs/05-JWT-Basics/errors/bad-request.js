const { StatusCodes } = require("http-status-codes");

const CustomAPIError = require("./custom-error.js");

module.exports = class BadRequest extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
};
