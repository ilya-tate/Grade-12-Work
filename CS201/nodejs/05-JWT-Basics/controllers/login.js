const { BadRequest } = require("../errors");
require("dotenv").config();

// Login function, returns json with success
const login = (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  res.send("Temp login/register/signup route");

  // mongoose validation
  // JOI
  // Controller checking

  if (!username || !password) {
    throw new BadRequest("Please provide email and password");
  }

  // Example, will come from MongoDB in the future
  const id = new Date().getDate();
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d"
  });

  res.status(200).json({ status: 200, msg: "Success", results: [] });
};

// Dashboard function, returns json with success
const dashboard = (req, res) => {
  res.json({
    status: 200,
    msg: req.user.username,
    results: [],
    secret: req.headers.authorization
  });
};

module.exports = { login, dashboard };
