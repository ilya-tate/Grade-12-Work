const jwt = require("jsonwebtoken");
require("dotenv").config();

const { Unauth } = require("../errors");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new Unauth("No token provided");
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
    const { id, username } = decoded;
    req.user = { id, username };
    next();
  } catch (err) {
    throw new Unauth("Not authorized to access route");
  }
};

module.exports = authMiddleware;
