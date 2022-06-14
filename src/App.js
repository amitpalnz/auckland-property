import React from "react";
import Listingform from "./components/Listingform";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import ForSale from './components/ForSale';
import ForRent from "./components/ForRent";
import RentalList from "./RentalList";
import Inprogress from "./components/Inprogress";

const App = () => {
  return (
    <div>
      <Router>
              
        <Routes>
          <Route path="/" exact element ={<Home/>}/>
          <Route path="/property/sale"  element ={<ForSale/>}/>
          <Route path="/property/rent"  element ={<ForRent/>}/>
          <Route path="/property/listing" element={<Listingform/>} />
          <Route path="/quicksort/rental" element={<RentalList/>} />
          <Route path="/property/contact" element={<Inprogress/>} />
          <Route path="/property/" element={<Inprogress/>} />
                                  
        </Routes>
      </Router>
    </div>
  );
};

export default App;

