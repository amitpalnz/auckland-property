import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from './Header/Navbar';
import Footer from './Footer';
import "../StyleSheet/ForRent.css";
const ForRent = () => {
  const url = "http://localhost:4000/api/rent";
  const [houses, setHouses] = useState([]);
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setHouses(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },[]);
  return (
    <div className="Container">
    <Navbar />
    <div className="listedHouses">
      
      {houses.map((houseRent)=>{
        return(<div>
              <br/>
              <h3>NAME: {houseRent.name}</h3>
              <h3>ID: {houseRent.idNumber}</h3>
              <h3>PHONE: {houseRent.phoneNumber}</h3>
              <h3>EMAIL: {houseRent.email}</h3>
              <h3>GARAGES: {houseRent.garages}</h3>
              <h3>SALE/RENT: {houseRent.sale_or_rent}</h3>
              <h3>SUBURB: {houseRent.suburb}</h3>
              <h3>ADDRESS: {houseRent.address}</h3>
              <h3>PRICE: $ {houseRent.price} /Week </h3>
              <h3>BEDROOMS: {houseRent.bedroomNumber}</h3>
              <h3>BATHROOMS: {houseRent.bathroomNumber}</h3> 
              <h3>IMAGE: {houseRent.houseImage}</h3>
              <br/><br/>          
        </div>)
      })}
    </div>
    <br/><br/><br/><br/><br/><br/><br/><br/>
      <Footer />
  </div>
  )
}

export default ForRent