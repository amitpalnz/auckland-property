import React from "react";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import "../../StyleSheet/Navbar.css";
import { BrowserView, MobileView } from 'react-device-detect';


const Navbar = () => {
  return (
    <div>
      <BrowserView>
        <DesktopNavbar />
        
      </BrowserView>

      <MobileView>
        <MobileNavbar />
      </MobileView>
    </div>
  );
};

export default Navbar;
