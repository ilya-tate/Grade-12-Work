const express = require("express");

const router = express.Router();

app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) return res.status(201).send(`Welcome ${name}`);
  res.status(400).json({ success: false, msg: "Please enter a name" });
});

module.exports = router;
