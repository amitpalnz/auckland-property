import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
import KingBedIcon from "@mui/icons-material/KingBed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import GarageIcon from "@mui/icons-material/Garage";
import PetsIcon from "@mui/icons-material/Pets";
import ParkIcon from "@mui/icons-material/Park";
import SchoolIcon from "@mui/icons-material/School";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import SportsGymnasticsSharpIcon from "@mui/icons-material/SportsGymnasticsSharp";

import { useHistory } from "react-router-dom";
import "../StyleSheet/Searchbar.css";
import SearchbarResults from "./SearchbarResults";

const Searchbar = () => {
  const url = "http://localhost:4000/api/upload";
  const [data, setData] = useState([]);
  const [suburbData, setSuburbData] = useState([]);
  const [bedroomData, setBedroomData] = useState([]);
  const [bathroomData, setBathroomData] = useState([]);

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
    <div className="main_container">
      <div className="container_search">
        <div className="spinner">
          <div>
            <h3>Suburb</h3>
            <select
              id="suburbs"
              onChange={(e) => {
                const selectedSuburb = e.target.value;
                setSuburbData(selectedSuburb);
              }}
            >
              <option>Any</option>
              <option>Avondale</option>
              <option>Birkdale</option>
              <option>Blockhouse Bay</option>
              <option>Botony</option>
              <option>City Center(Auckland City)</option>
              <option>East Tamaki</option>
              <option>Ellerslie</option>
              <option>Epsom</option>
              <option>Favona</option>
              <option>Glen Eden</option>
              <option>Glenfield</option>
              <option>Grafton</option>
              <option>Gulf Harbour</option>
              <option>Henderson Valley</option>
              <option>Hobsonville</option>
              <option>Kingsland</option>
              <option>Mangare</option>
              <option>Mainly</option>
              <option>Manurewa</option>
              <option>Massey</option>
              <option>The Gardens</option>
            </select>
          </div>

          <div>
            <h3>Price per Week</h3>
            <select>
              <option>Min</option>
              <option>$100</option>
              <option>$200</option>
              <option>$300</option>
              <option>$400</option>
              <option>$500</option>
              <option>$600</option>
              <option>$700</option>
              <option>$800</option>
              <option>$900</option>
              <option>$1000</option>
              <option>$1100</option>
              <option>$1200</option>
              <option>$1300</option>
              <option>$1400</option>
              <option>$1500</option>
              <option>$1600</option>
              <option>$1700</option>
              <option>$1800</option>
              <option>$1900</option>
              <option>$2000</option>
            </select>
            <select>
              <option>Max</option>
              <option>$100</option>
              <option>$200</option>
              <option>$300</option>
              <option>$400</option>
              <option>$500</option>
              <option>$600</option>
              <option>$700</option>
              <option>$800</option>
              <option>$900</option>
              <option>$1000</option>
              <option>$1100</option>
              <option>$1200</option>
              <option>$1300</option>
              <option>$1400</option>
              <option>$1500</option>
              <option>$1600</option>
              <option>$1700</option>
              <option>$1800</option>
              <option>$1900</option>
              <option>$2000</option>
            </select>
          </div>

          <div>
            <h3>Bedrooms</h3>
            <select
              id="bedrooms"
              onChange={(e) => {
                const selectedBedroom = e.target.value;
                setBedroomData(selectedBedroom);
              }}
            >
              <option>Any</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
            </select>
          </div>

          <div>
            <h3>Bathrooms</h3>
            <select
              id="bathrooms"
              onChange={(e) => {
                const selectedBathroom = e.target.value;
                setBathroomData(selectedBathroom);
              }}
            >
              <option>Any</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
            </select>
          </div>
        </div>

        <div className="checkoption">
          <div>
            <label for="pet_ok">Pet Ok </label>
            <input type="checkbox" name="Pet ok" id="pet_ok" />
          </div>
          <div>
            <label for="available_now">Available Now </label>
            <input
              type="checkbox"
              name="Available Now"
              id="availabe_now"
            ></input>
          </div>
        </div>

        <div className="ammenities">
          <div>
            <h4>Nearby:</h4>
          </div>
          <div>
            <label for="park">Park </label>
            <input type="checkbox" name="Park" id="park"></input>
          </div>
          <div>
            <label for="supermarket">SuperMarket </label>
            <input type="checkbox" name="SuperMarket" id="supermarket"></input>
          </div>
          <div>
            <label for="school">School </label>
            <input type="checkbox" name="School" id="school"></input>
          </div>
          <div>
            <label for="gym">Gym </label>
            <input type="checkbox" name="Gym" id="gym"></input>
          </div>
          <div>
            <label for="leisure">Leisure </label>
            <input type="checkbox" name="Leisure" id="leisure"></input>
          </div>
        </div>
        <div className="container_button">
          <button className="search" onClick={SearchbarResults}>
            Search <SearchIcon />
          </button>
        </div>
      </div>

      <div className="listedHouses1">
        {data
          .filter((singleData) => {
            if (suburbData == "") {
              return singleData;
            } else if (
              (singleData.suburb.toLowerCase() == suburbData.toLowerCase() ||
                suburbData == "Any" ||
                suburbData == "") &&
              (singleData.bedroomNumber == bedroomData ||
                bedroomData == "" ||
                bedroomData == "Any") &&
              (singleData.bathroomNumber == bathroomData ||
                bathroomData == "" ||
                bathroomData == "Any")
            ) {
              return singleData;
            }
          })
          .map((singleData, key) => {
            const base64String = new Buffer(
              singleData.houseImage.data.data
            ).toString("base64");

            let petStatus = false;
            if (singleData.petOk === true) {
              petStatus = <PetsIcon />;
            }
            let supermarketStatus = false;
            if (singleData.supermarket === true) {
              supermarketStatus = <LocalGroceryStoreIcon />;
            }

            let schoolStatus = false;
            if (singleData.school === true) {
              schoolStatus = <SchoolIcon />;
            }

            let parkStatus = false;
            if (singleData.park === true) {
              parkStatus = <ParkIcon />;
            }

            let gymStatus = false;
            if (singleData.park === true) {
              gymStatus = <SportsGymnasticsSharpIcon />;
            }

            let availableStatus = false;
            if (singleData.available === true) {
              availableStatus = "NOW";
            }
            return (
              <div className="rental_search">
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
                    <br />
                    {singleData.suburb} - {singleData.bedroomNumber} Bedroom
                    home
                  </div>
                  <div className="desc_line3">
                    <br />$ {singleData.price}/week, Available:{" "}
                    {availableStatus}
                  </div>
                  <div>
                    <br />
                    <span>
                      {singleData.bedroomNumber} <KingBedIcon />
                    </span>
                    <span>
                      {singleData.bathroomNumber} <BathtubIcon />
                    </span>
                    <span>
                      {singleData.garages} <GarageIcon />
                    </span>
                    <span>{petStatus}</span>
                    <span>{parkStatus}</span>
                    <span>{supermarketStatus}</span>
                    <span>{schoolStatus}</span>
                    <span>{gymStatus}</span>
                  </div>
                  <div>
                    <br />
                    <p>{singleData.descriptions}</p>
                  </div>
                  <div>
                    <a href="/"> More Info</a>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Searchbar;

/*
if ((suburbData == "") || (suburbData =="Any") || (bedroomData=="Any")) {
              return singleData;
            } else if (
              singleData.suburb.toLowerCase().includes(suburbData.toLowerCase())
            ) {
              return singleData;
            }
            
            if (singleData.bedroomNumber == bedroomData) {
              return singleData;
            } else
 */
