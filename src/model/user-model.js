const mongoose = require("mongoose");

const User = mongoose.model("User", {
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  telephone: {
    type: String,
  },
  sex: {
    type: String,
    enum: ["Masculino", "Feminino"],
  },
  birthdate: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  zipCode: {
    type: String,
  },
  street: {
    type: String,
  },
  password: {
    type: String,
  },
});

module.exports = User;
