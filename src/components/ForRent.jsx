import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Header/Navbar";
import Searchbar from "./Searchbar";
import Footer from "./Footer";
import "../StyleSheet/ForRent.css";
import KingBedIcon from "@mui/icons-material/KingBed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import GarageIcon from "@mui/icons-material/Garage";
import PetsIcon from '@mui/icons-material/Pets';
import ParkIcon from '@mui/icons-material/Park';
import SchoolIcon from '@mui/icons-material/School';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import SportsGymnasticsSharpIcon from '@mui/icons-material/SportsGymnasticsSharp';

const ForRent = () => {
  const url = "http://localhost:4000/api/upload";
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  return (
    <div className="Container">
      <Navbar />
      <div className="rent_search">
      <Searchbar />
      </div>
      <div className="listedHouses1">
        {data.map((singleData) => {
          const base64String = new Buffer(
            singleData.houseImage.data.data
          ).toString("base64");
          
          let petStatus=false;
          if(singleData.petOk ===true){
            petStatus = <PetsIcon/>
          } 

          let supermarketStatus=false;
          if(singleData.supermarket ===true){
            supermarketStatus = <LocalGroceryStoreIcon/>
          } 

          let schoolStatus=false;
          if(singleData.school ===true){
            schoolStatus = <SchoolIcon/>
          }

          let parkStatus=false;
          if(singleData.park ===true){
            parkStatus = <ParkIcon/>
          }

          let gymStatus=false;
          if(singleData.park ===true){
            gymStatus = <SportsGymnasticsSharpIcon/>
          }

          let availableStatus=false;
          if(singleData.available ===true){
            availableStatus = "NOW"
          }

          return (
           <div className="rental_search">
              <br />
              <div>
                <img
                  className="image_display"
                  src={`data:image/jpg;base64,${base64String}`}
                  alt="homeImage"
                />
              </div>
              <div className="home_desc">
                <div className="home_title">
                {singleData.address}, {singleData.suburb}, {singleData.city}
                </div>
                <div className="desc_line2">
                  <br/>
                {singleData.suburb} - {singleData.bedroomNumber} Bedroom home
                </div>
                <div className="desc_line3">
                <br/>
                $ {singleData.price}/week, Available: {availableStatus}
                </div>
                <div>
                <br/>
                  <span>
                {singleData.bedroomNumber} <KingBedIcon /> 
                </span>
                <span>
                {singleData.bathroomNumber} <BathtubIcon />
                </span>
                <span>
                {singleData.garages} <GarageIcon />
                </span>
                <span>
                {petStatus}
                </span>
                <span>
                {parkStatus}
                </span>
                <span>
                {supermarketStatus}
                </span>
                <span>
                {schoolStatus}
                </span>
                <span>
                {gymStatus}
                </span>       
                </div>
                <div>
                <br/>
                <p>{singleData.descriptions}</p>
                </div>                
                <div>
                <a href="/"> More Info</a>
                </div>
                
              </div>
              <br />
              <br />
            </div>
          );
        })}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default ForRent;
