const mongoose = require("mongoose");
const HouseSchema = mongoose.Schema;
const HouseTemplate = new HouseSchema({
  name: { type: String},
  idNumber: { type: Number},
  phoneNumber: { type: Number},
  email: { type: String},
  suburb: { type: String},
  address: { type: String},
  garages: { type: Number},
  sale_or_rent: { type: String},
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
  houseImage: { type: String },  
});

const House = mongoose.model("House", HouseTemplate);
module.exports = House;

/*
    name: { type: String, required: true },
    idNumber: { type: Number, required: true },
    phoneNumber: { type: Number, required: true },
    email: { type: String, required: true },
    suburb: { type: String, required: true },
    address: { type: String, required: true },
    garages: { type: Number, required: true },
    sale_or_rent: { type: String, required: true },
    price: { type: Number, required: true },
    bedroomNumber: { type: Number, required: true },
    bathroomNumber: { type: Number, required: true },
    petOk: { type: Boolean, required: true },
    available: { type: Boolean, required: true },
    park: { type: Boolean, required: true },
    supermarket: { type: Boolean, required: true },
    school: { type: Boolean, required: true },
    gym: { type: Boolean, required: true },
    leisurecenter: { type: Boolean, required: true },
    houseImage: { type: String, required: true },
  */


