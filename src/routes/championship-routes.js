const express = require("express");
const championshipRouter = express.Router();

const controller = require("../controller/championship-controller");

championshipRouter.post("/", controller.post);
championshipRouter.get("/", controller.get);
module.exports = championshipRouter;
