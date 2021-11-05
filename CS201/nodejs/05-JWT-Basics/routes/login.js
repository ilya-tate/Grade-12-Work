const express = require("express");

const { dashboard, login } = require("../controllers/login");
const authMiddleware = require("../middleware/auth");

const Router = express.Router();

Router.route("/dashboard").get(authMiddleware, dashboard);
Router.route("/login").post(login);

module.exports = Router;
