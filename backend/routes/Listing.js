const express = require("express");
const router = express.Router();

const multer = require('multer');
const storage = multer.diskStorage({
  destination:function(req,file,cb){
    cb(null, './uploads/');
  },
  filename: function(req,file,cb){
    cb(null, new Date().toISOString()+file.originalname);
  }
});
const upload = multer({storage:storage});
const Listing = require("../models/Listing.model");

router.post("/api/listing", upload.single('houseImage'),(request, response, next) => {
  console.log(request.file);
  const HouseListing = new Listing({
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
module.exports = router;


/*
router.post('/api/listing', async(request, response) => {
  const list =request.body;
  const newListing = new Listing(list);
  await newListing.save();
  response.json(list);
});

module.exports = router;
*/
/*
router.post("/api/listing", async (request, response) => {
  const form = new Formidable.IncomingForm();
  form.parse(request, (error, fields, files) => {
    const {
      name,
      idNumber,
      phoneNumber,
      email,
      garages,
      sale_or_rent,
      suburb,
      address,
      price,
      bedroomNumber,
      bathroomNumber,
      petOk,
      available,
      park,
      supermarket,
      school,
      gym,
      leisurecenter
    } = fields;

    const { houseImage } = files;

    
        const newHouseListing = new Listing({
          owner: {
            name,
            idNumber,
            phoneNumber,
            email,
          },
          house_location: {
            suburb,
            address,
          },
          house_properties: {
            sale_or_rent,
            price,
            bedroomNumber,
            garages,
            available,
            bathroomNumber,
            petOk,
            park,
            supermarket,
            school,
            gym,
            leisurecenter,
            houseImage: image_url,
          },
        });
        const savedListing = await newHouseListing.save();
        return response.status(200).json(savedListing);
      }
    );
  
});

module.exports = router;
*/



// houseImage: request.body.houseImage,
/*
  router.post("/api/listing", async (request, response) => {
    const form = new Formidable.IncomingForm();
    form.parse(request, (error, fields, files) => {
      const {
        name,
        idNumber,
        phoneNumber,
        email,
        garages,
        sale_or_rent,
        suburb,
        address,
        price,
        bedroomNumber,
        bathroomNumber,
        petOk,
        available,
        park,
        supermarket,
        school,
        gym,
        leisurecenter
      } = fields;
  
      const { houseImage } = files;

      const savedListing = await newHouseListing.save();
        return response.status(200).json(savedListing);
      }
    );
  });
*/


  


