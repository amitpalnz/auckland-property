import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import { useHistory } from "react-router-dom";
import "../StyleSheet/Searchbar.css";
import SearchbarResults from "./SearchbarResults";

const Searchbar = () => {

  return (
    <div>
      
      <div className="Searchbar_container2">
        <div className="container">
          <div className="option_select1">
            <h3>Suburb</h3>
            <select>
              <option>Any</option>
              <option>Avondale</option>
              <option>Birkdale</option>
              <option>Blockhouse Bay</option>
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
            </select>
          </div>

          <div className="option_select1">
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
          <div className="option_select1">
            <h3>Bedrooms</h3>
            <select>
              <option>Any</option>
              <option>1+</option>
              <option>2+</option>
              <option>3+</option>
              <option>4+</option>
              <option>5+</option>
              <option>6+</option>
            </select>
          </div>

          <div className="option_select1">
            <h3>Bathrooms</h3>
            <select>
              <option>Any</option>
              <option>1+</option>
              <option>2+</option>
              <option>3+</option>
              <option>4+</option>
              <option>5+</option>
              <option>6+</option>
            </select>
          </div>
        </div>

        <div className="container1">
          <div className="option_select1">
            <label for="pet_ok">Pet Ok </label>
            <input type="checkbox" name="Pet ok" id="pet_ok"></input>
          </div>
          <div className="option_select1">
            <label for="available_now">Available Now </label>
            <input
              type="checkbox"
              name="Available Now"
              id="availabe_now"
            ></input>
          </div>
        </div>

        <div>
          <div className="container1">
            <div className="option_select1">
              <h4>Nearby:</h4>
            </div>
            <div className="option_select1">
              <label for="park">Park </label>
              <input type="checkbox" name="Park" id="park"></input>
            </div>
            <div className="option_select1">
              <label for="supermarket">SuperMarket </label>
              <input
                type="checkbox"
                name="SuperMarket"
                id="supermarket"
              ></input>
            </div>
            <div className="option_select1">
              <label for="school">School </label>
              <input type="checkbox" name="School" id="school"></input>
            </div>
            <div className="option_select1">
              <label for="gym">Gym </label>
              <input type="checkbox" name="Gym" id="gym"></input>
            </div>
            <div className="option_select1">
              <label for="leisure">Leisure </label>
              <input type="checkbox" name="Leisure" id="leisure"></input>
            </div>
          </div>
          <div className="button_container">
            <button onClick={SearchbarResults}>
              <SearchIcon  />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
