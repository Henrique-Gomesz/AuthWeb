const express = require("express");
const userRouter = express.Router();

const controller = require("../controller/user-controller");


userRouter.post("/", controller.post);

module.exports = userRouter;
