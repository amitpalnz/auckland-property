const router = require("express").Router();
const House = require("../models/Listing.model");

router.get("/api/sale", async (request, response) => {
  await House.find({ "sale_or_rent": "sale" })
    .exec()
    .then((data) => {
      response.status(200).json(data);
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/api/rent", async (request, response) => {
  await House.find({ "sale_or_rent": "rent" })
    .exec()
    .then((data) => {
      response.status(200).json(data);
    })
    .catch((error) => {
      console.log(error);
    });
});


module.exports = router;