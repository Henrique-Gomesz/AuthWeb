const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const app = express();
const userRouter = require("./src/routes/user-routes");
const loginRouter = require("./src/routes/login-routes");
const applicationMiddleware = require("./src/utils/middleware");
// Allow express read json
app.use(express.json());

// Application routes
app.get("/", (req, res) => {
  res.status(200).json({ msg: "teste" });
});
app.use("/user", userRouter);
app.use("/login", applicationMiddleware.checkToken, loginRouter);

//Credentials
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;
const port = process.env.API_PORT | 3000;
mongoose
  .connect(
    `mongodb+srv://${dbUser}:${dbPassword}@gomesdatabase.odhkxy9.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(port);
    console.log("Conectou ao banco");
  })
  .catch((err) => console.log(err));
