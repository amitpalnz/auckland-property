import React from 'react'
import Logo from "../../Images/PropertyLogo.svg";
import { Link } from "react-router-dom";
import "../../StyleSheet/MobileNavbar.css";

const MobileNavbar = () => {
  return (
    <div className="MobileNav_container">
      <Link to="/" className="Logo_container">
        <img src={Logo} alt="Company-Logo" />
      </Link>
    </div>
  )
}

export default MobileNavbar