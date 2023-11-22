import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Adopt from "./AdoptForm";
import Release from "./ReleaseForm";
import Register from "./Register";
import CatalogCat from "./CatalogCat";
import CatalogDog from "./CatalogDog";
import CatalogRodent from "./CatalogRodent";
import HeaderTwo from "./HeaderTwo";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Header/><Home /><Footer /></>} />
        <Route path="/Home" element={<><Header/><Home /><Footer /></>} />
        <Route path="/Home2" element={<><HeaderTwo/><Home /><Footer /></>} />
        <Route path="/Login" element={<><Header/><Login /><Footer /></>} />
        <Route path="/Adopt" element={<><HeaderTwo/><Adopt /><Footer /></>} />
        <Route path="/Release" element={<><HeaderTwo/><Release /><Footer /></>} />
        <Route path="/Register" element={<><Header/><Register /><Footer /></>} />
        <Route path="/CatalogCat" element={<><HeaderTwo/><CatalogCat /><Footer /></>}/>
        <Route path="/CatalogDog" element={<><HeaderTwo/><CatalogDog /><Footer /></>}/>
        <Route path="/CatalogRodent" element={<><HeaderTwo/><CatalogRodent /><Footer /></>}/>
        
      </Routes>
    </BrowserRouter>     
    </div>
  );
}

export default App;
