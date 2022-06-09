const express = require("express");
const router = express.Router();
const Rental = require("../models/rental.model");
//const quicksort = require('../../Quicksort');

router.route("/api").get((req, res) => {
  Rental.find()
    .sort({ priceperweek: 1 })
    .then((rentals) => res.json(rentals))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/api/add", async (request, response) => {
  const rentuser = request.body;
  const newUser = new Rental(rentuser);
  await newUser.save();
  response.json(rentuser);
});

/*
router.post('/api/add',(request, response) => {
  const rentalUser = new Rental({
    suburb: request.body.suburb,
    priceperweek: request.body.priceperweek,
    bedrooms: request.body.bedrooms,
    bathrooms: request.body.bathrooms,
  });


  rentalUser
    .save()
    .then((data) => {
      response.json(data);
    })
    .catch((error) => {
      response.json(error);
    });
  });
*/
module.exports = router;
