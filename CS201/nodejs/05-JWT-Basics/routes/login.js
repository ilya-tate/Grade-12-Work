const express = require("express");

const { Router } = express;
const { dashboard, login } = require("../controllers/login");

Router.route("/dashboard").get(dashboard);
Router.route("/login").post(login);

module.exports = Router;
