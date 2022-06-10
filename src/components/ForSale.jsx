import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from './Header/Navbar';
import Footer from './Footer';
import "../StyleSheet/ForSale.css";
//import { useDispatch, useSelector } from "react-redux";
//import { houseforSaleFetch } from "../Store/Action/HouseFetch";
//import "../StyleSheet/HouseListed.css";
//import { Link } from "react-router-dom";

const ForSale = () => {
  const url = "http://localhost:4000/api/sale";
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
      
      {houses.map((houseSale)=>{
        return(<div>
              <br/>
              <h3>NAME: {houseSale.name}</h3>
              <h3>ID: {houseSale.idNumber}</h3>
              <h3>PHONE: {houseSale.phoneNumber}</h3>
              <h3>EMAIL: {houseSale.email}</h3>
              <h3>GARAGES: {houseSale.garages}</h3>
              <h3>SALE/RENT: {houseSale.sale_or_rent}</h3>
              <h3>SUBURB: {houseSale.suburb}</h3>
              <h3>ADDRESS: {houseSale.address}</h3>
              <h3>PRICE: $ {houseSale.price} /Week </h3>
              <h3>BEDROOMS: {houseSale.bedroomNumber}</h3>
              <h3>BATHROOMS: {houseSale.bathroomNumber}</h3> 
              <h3>IMAGE: {houseSale.houseImage}</h3>
              <br/><br/>          
        </div>)
      })}
    </div>
    <br/><br/><br/><br/><br/><br/><br/><br/>
      <Footer />
  </div>
    
  );
};

export default ForSale;
/*
<div className="Houses_container">
      {houses && (
        <div className="HousesList_container">
          {houses.map((houses) => {
            return (
              <div className="Single_houses">
                <img src={houses.houseImage} alt="House Picture" />
                <h4>{houses.price}</h4>
                <h4>{houses.bedroomNumber}</h4>
                <h4>{houses.suburb}</h4>
              </div>
            );
          })}
        </div>
      )}
    </div>
*/

/*
const houseforSale = useSelector(
    state => state.houseforSale
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(houseforSaleFetch());
  }, []);
  */
