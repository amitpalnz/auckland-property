import React, { useState } from "react";
import "../StyleSheet/Listingform.css";
import axios from "axios";
import Navbar from "./Header/Navbar";
import Footer from "./Footer";

const Listingform = () => {
  const [name, setName] = useState("");
  const [_id, setIDnumber] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [city, setcity] = useState("");
  const [garages, setGarages] = useState(0);
  const [descriptions, setdescriptions] = useState("");
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
    const url = "http://localhost:4000/api/upload";
    const data = new FormData();
    data.append("name", name);
    data.append("_id", parseInt(_id));
    data.append("phoneNumber", parseInt(phoneNumber));
    data.append("city", city);
    data.append("garages", parseInt(garages));
    data.append("descriptions", descriptions);
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
    <div>
      <Navbar />
      <div className="Listing_container">
        <form className="Listing_form">
          <h1>LIST YOUR PROPERTY</h1>
          <div>
            <label className="alignment"> Name : </label>
            <input
              className="alignment1"
              type="text"
              placeholder="Enter you legal name"
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <br />
          </div>
          <div>
            <label className="alignment">Identity Number : </label>
            <input
              className="alignment1"
              type="text"
              placeholder="Enter you ID Number"
              onChange={(e) => setIDnumber(e.target.value)}
            />
            <br />
            <br />
          </div>
          <div>
            <label className="alignment">Phone Number : </label>
            <input
              type="text"
              placeholder="Enter your phone number"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <br />
            <br />
          </div>
          <div>
            <label className="alignment">City : </label>
            <input
              type="text"
              placeholder="Enter the city"
              onChange={(e) => setcity(e.target.value)}
            />
            <br />
            <br />
          </div>
          <div>
            <label className="alignment">Number of garages : </label>
            <select onChange={(e) => setGarages(e.target.value)}>
              <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>

            <label className="alignment">Desciption : </label>
            <input
              className="aligndesc"
              type="text"
              placeholder="Enter the description"
              onChange={(e) => setdescriptions(e.target.value)}
            />
            <br />
            <br />
          </div>
          <div>
            <label className="alignment">Suburb : </label>
            <input
              type="text"
              placeholder="Enter the Suburb"
              onChange={(e) => setSuburb(e.target.value)}
            />
            <br/><br/>
          </div>
          <div>
            <label className="alignment">Address : </label>
            <input
              type="text"
              placeholder="Enter the address"
              onChange={(e) => setAddress(e.target.value)}
            />
            <br/><br/>
          </div>

          <div>
            <label className="alignment">House Price $: </label>
            <input
              type="number"
              placeholder="Enter Price"
              onChange={(e) => setPrice(e.target.value)}
            />
            <br />
            <br />
          </div>
          <div>
            <label className="alignment">Number of Bed Rooms : </label>
            <select onChange={(e) => setBedRoomNumber(e.target.value)}>
              <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>

            <label className="alignment">Number of Bath Rooms : </label>
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
            <label className="alignment">Pet Ok : </label>
            <select onChange={(e) => setPetOk(e.target.value)}>
              <option>...</option>
              <option value={true}>YES</option>
              <option value={false}>NO</option>
            </select>

            <label className="alignment">Available : </label>
            <select onChange={(e) => setAvailable(e.target.value)}>
              <option>...</option>
              <option value={true}>YES</option>
              <option value={false}>NO</option>
            </select>
            <br />
            <br />
          </div>
          <div>
            <label className="alignment">Park : </label>
            <select onChange={(e) => setPark(e.target.value)}>
              <option>...</option>
              <option value={true}>YES</option>
              <option value={false}>NO</option>
            </select>

            <label className="alignment">Supermarket : </label>
            <select onChange={(e) => setSupermarket(e.target.value)}>
              <option>...</option>
              <option value={true}>YES</option>
              <option value={false}>NO</option>
            </select>

            <label className="alignment">School : </label>
            <select onChange={(e) => setSchool(e.target.value)}>
              <option>...</option>
              <option value={true}>YES</option>
              <option value={false}>NO</option>
            </select>

            <label className="alignment">Gym : </label>
            <select onChange={(e) => setGym(e.target.value)}>
              <option>...</option>
              <option value={true}>YES</option>
              <option value={false}>NO</option>
            </select>

            <label className="alignment">Leisure Center : </label>
            <select onChange={(e) => setLeisurecenter(e.target.value)}>
              <option>...</option>
              <option value={true}>YES</option>
              <option value={false}>NO</option>
            </select>
            <br />
            <br />
          </div>
          <div>
            <label className="alignment">House Image : </label>
            <input
              type="file"
              onChange={(e) => setHouseImage(e.target.files[0])}
            />
            <br />
            <br />
          </div>
          <div>
            <button
              className="btn_listing"
              type="submit"
              onClick={listProperty}
            >
              LIST YOUR PROPERTY
            </button>
            <br />
            <br />
            <a href="/"> Go to Home page</a>
          </div>
        </form>
        <br />
        <br />
      </div>
      <Footer />
    </div>
  );
};

export default Listingform;
