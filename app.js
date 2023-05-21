const dotenv = require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Working" });
});

//Register User
app.post("/auth/register", async (req, res) => {
  const {
    name,
    email,
    telephone,
    sex,
    birthDate,
    city,
    state,
    zipCode,
    street,
    password,
  } = req.body();
  

  
  

});

//Credentials

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

mongoose
  .connect(
    `mongodb+srv://${dbUser}:${dbPassword}@gomesdatabase.odhkxy9.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(3000);
    console.log("Conectou ao banco");
  })
  .catch((err) => console.log(err));
