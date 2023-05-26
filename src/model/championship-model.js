const mongoose = require("mongoose");

const Championship = mongoose.model("Championship", {
  name: {
    type: String,
  },
  game: {
    type: String,
  },
  startDate: {
    type: String,
  },
  endDate: {
    type: String,
  },
  playersQuantity: {
    type: Number,
  },
  zipCode: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  street: {
    type: String,
  },
});

module.exports = Championship;
