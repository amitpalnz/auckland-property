const mongoose = require("mongoose");
const Schema =mongoose.Schema;
const rentalTemplate = new Schema({
  suburb: { type: String },
  priceperweek: { type: Number },
  bedrooms: { type: Number },
  bathrooms: { type: Number },
  date: { type: Date, default: Date.now },
});
const Rental = mongoose.model("Rental", rentalTemplate);
module.exports = Rental;
