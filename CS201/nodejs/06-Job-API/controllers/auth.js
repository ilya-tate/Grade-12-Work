const bcrypt = require("bcrypt");

const { User } = require("../models");

const register = async (req, res) => {
  const [name, password, email] = req.body;
  console.log(password);
  const salt = await bcrypt.genSalt(10);
  const hashpass = await bcrypt.hash(password, salt);
  console.log(hashpass);

  const newUser = await User.create({ ...req.body, password: hashpass });
  res.json({ newUser });
};
