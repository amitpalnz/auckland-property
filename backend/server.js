const express = require('express')
const app = express()
const mongoose = require('mongoose')
const rentalRouter = require('./routes/rental');
const houseListingRoute = require('./routes/Listing');
const houseFetchRoute = require('./routes/HouseFetch');
const houseList = require('./routes/HouseList');
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()
const port = process.env.PORT || 5000; 
const uri = process.env.DATABASE_ACCESS;
//mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true});

mongoose.connect('mongodb://admin:admin@localhost:27017/property_management?authSource=admin')

const db = mongoose.connection;
db.on('err',console.error.bind(console, 'connection error:'));

db.once('open', function(){
  console.log('Database Connection Successfull');
})


app.use(express.json());
app.use(cors());
app.use(houseListingRoute);
app.use(houseFetchRoute);
app.use(rentalRouter);
app.use(houseList);


app.listen(port,()=> {
  console.log('Server is up and running on port:', port);
});
