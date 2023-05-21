const express = require("express");
const loginRouter = express.Router();

const controller = require("../controller/login-controller");

loginRouter.post("/", controller.post);

module.exports = loginRouter;
