const jwt = require("jsonwebtoken");

require("dotenv").config();
const { Unauth } = require("../errors");

module.exports = async (req, res, next) => {
  // Check header
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new Unauth("Not authorized to access this");
  }
  const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { userID: payload.userID, name: payload.name };
    next();
  } catch (err) {
    throw new Unauth("Authorization invalid");
  }
};
