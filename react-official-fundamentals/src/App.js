import React from "react";
import Contact from "./components/Contact";
// import Main from "./components/Main";
// import Navbar from "./components/Navbar";
// import PropComponent from "./components/PropComponent";
import whiskar from "./CatImages/mr-whiskerson.png";
import fluffyKitten from "./CatImages/fluffykins.png";
import pumpkin from "./CatImages/pumpkin.png";

function App() {
  return (
    <div className="container">
      <Contact
        name="Mr Whinskan"
        img={whiskar}
        phone="123456789"
        mail="pedro@gmail.com"
      />
      <Contact
        name="Mr Whitey"
        img={pumpkin}
        phone="741258963"
        mail="papaya@gmail.com"
      />
      <Contact
        name="Mc Bhoosan"
        img={fluffyKitten}
        phone="963258741"
        mail="jackson@gmail.com"
      />
    </div>
  );
}

export default App;
