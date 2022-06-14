import React from "react";
import Navbar from "./Header/Navbar";
import Searchbar from "./Searchbar";
import Footer from "./Footer";
import "../StyleSheet/Home.css";
import Map from "../Images/map.png";
import Home1 from "../Images/home1.jpg";
import Home2 from "../Images/home2.jpg";
import Home3 from "../Images/home3.jpg";
import Home4 from "../Images/home4.jpg";
const Home = () => {
  return (
    <div className="align_container">
      <Navbar />
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Searchbar />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <div className="img_container">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div>
          <img src={Home1} alt="home1 Image" className="hpage" />
        </div>
        <div>
          <img src={Home2} alt="home2 Image" className="hpage" />
        </div>
        <div>
          <img src={Home3} alt="home4 Image" className="hpage" />
        </div>
        <div>
          <img src={Home4} alt="home4 Image" className="hpage" />
        </div>
      </div>
      <div>
        <img src={Map} alt="Map Image" className="map" />
      </div>
      
      <Footer />
    </div>
  );
};

export default Home;
