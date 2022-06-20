const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const multer = require("multer");
const Houselist = require("../models/Listing.model");
const fs=require('fs');

const storage = multer.diskStorage({
  destination: (req,file,cb)=>{
    cb(null,'uploads')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/api/upload", upload.single('houseImage'),(req, res) => {
  const house = new Houselist({
    name: req.body.name,
    _id: req.body._id,
    phoneNumber: req.body.phoneNumber,
    city: req.body.city,
    suburb: req.body.suburb,
    address: req.body.address,
    descriptions:req.body.descriptions,
    garages: req.body.garages,
    price: req.body.price,
    bedroomNumber: req.body.bedroomNumber,
    bathroomNumber: req.body.bathroomNumber,
    petOk: req.body.petOk,
    available : req.body.available,
    price: req.body.price,
    park: req.body.park,
    supermarket: req.body.supermarket,
    school: req.body.school,
    gym: req.body.gym,
    leisurecenter: req.body.leisurecenter,
    houseImage: {
      data: fs.readFileSync('uploads/' + req.file.filename),
      contentType: "image/jpg",
    },
  });
  house
        .save()
        .then((res) => {console.log("successfully uploaded")})
        .catch((err) => {console.log(err,'error has occured')});
        res.send('image is saved')
});

router.get('/api/upload', async(req,res)=>{
  const allData= await Houselist.find()
  res.json(allData)
})
/*
const upload = multer({ storage: storage }).single("houseImage");

router.post("/api/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      console.log(err);
    } else {
      const house = new Houselist({
        name: req.body.name,
        _id: req.body._id,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        suburb: req.body.suburb,
        address: req.body.address,
        garages: req.body.garages,
        price: req.body.price,
        bedroomNumber: req.body.bedroomNumber,
        bathroomNumber: req.body.bathroomNumber,
        petOk: req.body.petOk,
        available : req.body.available,
        price: req.body.price,
        park: req.body.park,
        supermarket: req.body.supermarket,
        school: req.body.school,
        gym: req.body.gym,
        leisurecenter: req.body.leisurecenter,
        houseImage: {
          data: req.file.filename,
          contentType: "image/jpg",
        },
      });

      house
        .save()
        .then(() => res.send("successfully uploaded"))
        .catch((err) => console.log(err));
    }
  });
});
*/
module.exports = router;
/*
router.post("/api/houselist", upload.single('houseImage'),(request, response, next) => {
  console.log(request.file);
  const HouseListing = new Houselist({
    name: request.body.name,
    idNumber: request.body.idNumber,
    phoneNumber:request.body.phoneNumber,
    email: request.body.email,
    garages: request.body.garages,
    sale_or_rent: request.body.sale_or_rent,
    suburb: request.body.suburb,
    address: request.body.address,
    price: request.body.price,
    bedroomNumber: request.body.bedroomNumber,
    bathroomNumber: request.body.bathroomNumber,
    petOk: request.body.petOk,
    available: request.body.available,
    park: request.body.park,
    supermarket: request.body.supermarket,
    school: request.body.school,
    gym: request.body.gym,
    leisurecenter: request.body.leisurecenter
    
  });

HouseListing
    .save()
    .then((data) => {
      response.json(data);
    })
    .catch((error) => {
      response.json(error);
    });
});
*/

