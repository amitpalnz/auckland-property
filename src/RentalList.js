import React from 'react'
import {useState, useEffect} from 'react';
import  Axios  from "axios";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer";
const RentalList = () => {
  const[renterListing, setRenterList]=useState([]);

  useEffect(()=>{
    Axios.get("http://localhost:4000/api/")
         .then((response)=>{
           setRenterList(response.data)
          })
          .catch((error) => {
            console.log(error);
          });
  },[]);

  return (
    <div className="App">
    <Navbar />
    <div className="usersDisplay">
      
      {renterListing.map((renter)=>{
        return(<div>
              <h3>ID:{renter._id}</h3>
              <h3>Suburb:{renter.suburb}</h3>
              <h3>PricePerWeek:{renter.priceperweek}</h3>
              <h3>Bedrooms:{renter.bedrooms}</h3>
              <h3>Bathrooms:{renter.bathrooms}</h3>  
              <br/><br/>          
        </div>)
      })}
    </div>
    <Footer/>
  </div>
  )
}

export default RentalList