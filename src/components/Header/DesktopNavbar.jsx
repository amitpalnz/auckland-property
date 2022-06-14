import React from "react";
import Logo from "../../Images/PropertyLogo.svg";
import { Link } from "react-router-dom";
import "../../StyleSheet/DesktopNavbar.css";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PersonIcon from '@mui/icons-material/Person';
const DesktopNavbar = () => {
  return (
    <div className="align_container1">
      <div className="DesktopNav_container">
        <div className="DesktopNav_leftContainer">
          <img src={Logo} alt="Companylogo" className="logo" />
        </div>

        <div className="DesktopNav_centerContainer">
          <div className="nav_position">
          <Link className="links" to="/">
            <h4 className="link">Rent</h4>
          </Link>
          <Link className="links" to="/property/commercial">
            <h4 className="link">Commercial</h4>
          </Link>
          <Link className="links" to="/property/property-management">
            <h4 className="link">Property management</h4>
          </Link>
          <Link className="links" to="/property/body-corporate">
            <h4 className="link">Body Corporate</h4>
          </Link>
          <Link className="links" to="/property/faq">
            <h4 className="link">FAQ's</h4>
          </Link>
          </div>
          <div className="nav_position1">
          <Link className="links" to="/property/contact">
            <h4 className="link1"> <LocalPhoneIcon/> Contact</h4>
          </Link>
          <Link className="links" to="/quicksort/rental">
            <h4 className="link1"> <PersonIcon/> Login </h4>
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
};

export default DesktopNavbar;

// <Link to="/property/listing">
//</Link>
