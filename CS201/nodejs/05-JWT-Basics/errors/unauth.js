const { StatusCodes } = require("http-status-codes");

const CustomAPIError = require("./custom-error");

module.exports = class Unauth extends CustomAPIError {
  constructor(message) {
    super(message);
    this.StatusCode = StatusCodes.UNAUTHORIZED;
  }
};
