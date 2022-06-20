const mongoose = require("mongoose");
const HouseSchema = mongoose.Schema;
const HouseTemplate = new HouseSchema({
  name: { type: String},
  _id: { type: Number},
  phoneNumber: { type: Number},
  city: { type: String},
  suburb: { type: String},
  address: { type: String},
  garages: { type: Number},
  descriptions: { type: String},
  price: { type: Number},
  bedroomNumber: { type: Number },
  bathroomNumber: { type: Number},
  petOk: { type: Boolean},
  available: { type: Boolean},
  park: { type: Boolean },
  supermarket: { type: Boolean },
  school: { type: Boolean },
  gym: { type: Boolean },
  leisurecenter: { type: Boolean },
  houseImage: { data:Buffer, contentType: String },  
});

const House = mongoose.model("House", HouseTemplate);
module.exports = House;



