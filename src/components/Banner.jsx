import React from "react";
import banner from "../Images/bannerHome.jpg";
import "../StyleSheet/Banner.css";
const Banner = () => {
  return (
    <div className="Banner_container">
      <img src={banner} alt="Banner" />
    </div>
  );
};

export default Banner;