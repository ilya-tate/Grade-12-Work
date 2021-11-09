const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const reEmailValidation = /(?:[a-z0-9!#$%'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g;

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Provide a name"],
    minLength: 3,
    maxLength: 50
  },

  email: {
    type: String,
    required = [true, "Provide an email"],
    minLength: 3,
    maxLength: 50,
    unique: true,
    match: [
      reEmailValidation,
      "Invalid email"
    ]
  },

  password: {
    type: String,
    require = [true, "Provide a password"],
    minLength: 6
  }
});
UserSchema.pre("save", async () => {
  this.password = await bcrypt.hash(this.password, bcrypt.genSalt(10));
  next();
});
UserSchema.methods.comparePassword = async (submittedPassword) => {
  const isMatch = await bcrypt.compare(submittedPassword, this.password);
};
UserSchema.methods.createJWT = () => {
  return jwt.sign(
    { userID: this._id, name: this.name },
    process.env.JWT_SECRET,
    { expiresIn: "30d" }
  )
};

module.exports = mongoose.model("User", schema);
