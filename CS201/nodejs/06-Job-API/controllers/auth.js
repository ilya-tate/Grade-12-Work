const bcrypt = require("bcrypt");

const { User } = require("../models");
const { BadRequest, Unauth } = require("../errors");

const register = async (req, res) => {
  const [name, password, email] = req.body;
  console.log(password);
  const salt = await bcrypt.genSalt(10);
  const hashPass = await bcrypt.hash(password, salt);
  console.log(hashPass);

  const newUser = await User.create({ ...req.body, password: hashPass });
  const token = newUser.createJWT();
  res.json({ user: { name: newUser.name }, token });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequest("Provide an email and password");
  }

  const userLogin = await User.findOne({ email });
  const isPasswordCorrect = await userLogin.comparePassword(password);
  if (!user || !isPasswordCorrect) {
    throw new Unauth("Invalid credentials");
  }

  const token = userLogin.createJWT({ user: { name: newUser.name }, token });
};

module.exports = { register, login };
