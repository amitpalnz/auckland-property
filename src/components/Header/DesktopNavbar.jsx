import React from "react";
import Logo from "../../Images/PropertyLogo.svg";
import { Link } from "react-router-dom";
import "../../StyleSheet/DesktopNavbar.css";
const DesktopNavbar = () => {
  return (
    <div className="align_container1">
      <div className="DesktopNav_container">
        <div className="DesktopNav_leftContainer">
          <img src={Logo} alt="Companylogo" className="logo" />
        </div>

        <div className="DesktopNav_centerContainer">
          <Link className="links" to="/">
            <h4 className="link">Home</h4>
          </Link>
          <Link className="links" to="/property/rent">
            <h4 className="link">Rent</h4>
          </Link>
          <Link className="links" to="/property/sale">
            <h4 className="link">Buy</h4>
          </Link>
          <Link className="links" to="/property/listing">
            <h4 className="link">List a property</h4>
          </Link>
          <Link className="links" to="/property/faq">
            <h4 className="link">FAQ's</h4>
          </Link>
          <Link className="links" to="/property/contact">
            <h4 className="link"> Contact</h4>
          </Link>
          <Link className="links" to="/quicksort/rental">
            <h4 className="link"> Quicksort </h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DesktopNavbar;

// <Link to="/property/listing">
//</Link>
