import React, { useState } from "react";
import "../StyleSheet/Listingform.css";
import axios from "axios";
import Navbar from './Header/Navbar';
import Footer from './Footer';

const Listingform = () => {
  const [name, setName] = useState("");
  const [idNumber, setIDnumber] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [email, setEmail] = useState("");
  const [garages, setGarages] = useState(0);
  const [sale_or_rent, setSaleOrRent] = useState("");
  const [suburb, setSuburb] = useState("");
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState(0);
  const [bedroomNumber, setBedRoomNumber] = useState(0);
  const [bathroomNumber, setBathRoomNumber] = useState(0);
  const [petOk, setPetOk] = useState(false);
  const [available, setAvailable] = useState(false);
  const [park, setPark] = useState(false);
  const [supermarket, setSupermarket] = useState(false);
  const [school, setSchool] = useState(false);
  const [gym, setGym] = useState(false);
  const [leisurecenter, setLeisurecenter] = useState(false);
  const [houseImage, setHouseImage] = useState("");

  const listProperty = (e) => {
    e.preventDefault();
    const url = "http://localhost:4000/api/listing";
    const data = new FormData();
    data.append("name", name);
    data.append("idNumber", parseInt(idNumber));
    data.append("phoneNumber", parseInt(phoneNumber));
    data.append("email", email);
    data.append("garages", parseInt(garages));
    data.append("sale_or_rent", sale_or_rent);
    data.append("suburb", suburb);
    data.append("address", address);
    data.append("price", parseInt(price));
    data.append("bedroomNumber", parseInt(bedroomNumber));
    data.append("bathroomNumber", parseInt(bathroomNumber));
    data.append("petOk", petOk);
    data.append("available", available);
    data.append("park", park);
    data.append("supermarket", supermarket);
    data.append("school", school);
    data.append("gym", gym);
    data.append("leisurecenter", leisurecenter);
    data.append("houseImage", houseImage);
    axios
      .post(url, data)
      .then((response) => {
        console.log(response);
      })

      .catch((error) => {
        console.log(error);
      });
      
  };
  return (
    
      <div className="Listing_container">
        <Navbar />
        <form className="Listing_form">
          <h1>LIST YOUR PROPERTY</h1>
          <div>
            <label>Name </label>
            <input
              type="text"
              placeholder="Enter you legal name"
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <br />
          </div>
          <div>
            <label>Identity Number </label>
            <input
              type="text"
              placeholder="Enter you ID Number"
              onChange={(e) => setIDnumber(e.target.value)}
            />
            <br />
            <br />
          </div>
          <div>
            <label>Phone Number </label>
            <input
              type="text"
              placeholder="Enter in your phone number"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <br />
            <br />
          </div>
          <div>
            <label>Email Address </label>
            <input
              type="email"
              placeholder="Enter in your email address"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <br />
          </div>
          <div>
            <label>Number of garages </label>
            <select onChange={(e) => setGarages(e.target.value)}>
              <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>

            <label>Sale Or Rent </label>
            <select onChange={(e) => setSaleOrRent(e.target.value)}>
              <option>...</option>
              <option>sale</option>
              <option>rent</option>
            </select>
            <br />
            <br />
          </div>
          <label>Suburb </label>
          <input
            type="text"
            placeholder="Enter the Suburb"
            onChange={(e) => setSuburb(e.target.value)}
          />
          <label>Address </label>
          <input
            type="text"
            placeholder="Enter the address"
            onChange={(e) => setAddress(e.target.value)}
          />
          
          
          <div>
            <label>House Price $: </label>
            <input
              type="number"
              placeholder="Enter Price"
              onChange={(e) => setPrice(e.target.value)}
            />
            <br />
            <br />
          </div>
          <div>
            <label>Number of Bed Rooms </label>
            <select onChange={(e) => setBedRoomNumber(e.target.value)}>
              <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>

            <label>Number of Bath Rooms </label>
            <select onChange={(e) => setBathRoomNumber(e.target.value)}>
              <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
            <br />
            <br />
          </div>
          <div>
            <label>Pet Ok </label>
            <select onChange={(e) => setPetOk(e.target.value)}>
              <option>...</option>
              <option value={true}>YES</option>
              <option value={false}>NO</option>
            </select>

            <label>Available </label>
            <select onChange={(e) => setAvailable(e.target.value)}>
              <option>...</option>
              <option value={true}>YES</option>
              <option value={false}>NO</option>
            </select>
            <br />
            <br />
          </div>
          <div>
            <label>Park </label>
            <select onChange={(e) => setPark(e.target.value)}>
              <option>...</option>
              <option value={true}>YES</option>
              <option value={false}>NO</option>
            </select>

            <label>Supermarket </label>
            <select onChange={(e) => setSupermarket(e.target.value)}>
              <option>...</option>
              <option value={true}>YES</option>
              <option value={false}>NO</option>
            </select>

            <label>School </label>
            <select onChange={(e) => setSchool(e.target.value)}>
              <option>...</option>
              <option value={true}>YES</option>
              <option value={false}>NO</option>
            </select>

            <label>Gym </label>
            <select onChange={(e) => setGym(e.target.value)}>
              <option>...</option>
              <option value={true}>YES</option>
              <option value={false}>NO</option>
            </select>

            <label>Leisure Center </label>
            <select onChange={(e) => setLeisurecenter(e.target.value)}>
              <option>...</option>
              <option value={true}>YES</option>
              <option value={false}>NO</option>
            </select>
            <br />
            <br />
          </div>
          <div>
            <label>House Image </label>
            <input
              type="file"
              onChange={(e) => setHouseImage(e.target.files[0])}
            />
            <br />
            <br />
          </div>
          <div>
            <button className="btn_listing" type="submit" onClick={listProperty}>
              LIST YOUR PROPERTY
            </button>
            <br/><br/>
            <a href='/'> Go to Home page</a>
          </div>
        </form>
        <br/><br/>
        <div>
          <p>{FormData}</p>
        </div>
      <Footer />
    </div>
  );
};

export default Listingform;
