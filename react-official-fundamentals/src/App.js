import React from "react";
import Contact from "./components/Contact";
// import Main from "./components/Main";
// import Navbar from "./components/Navbar";
// import PropComponent from "./components/PropComponent";
import whiskar from "./CatImages/mr-whiskerson.png";
import fluffyKitten from "./CatImages/fluffykins.png";
import pumpkin from "./CatImages/pumpkin.png";
import Jokes from "./components/Jokes";

function App() {
  return (
    <div className="container">
      {/* <Contact
        name="Mr Whinskan"
        img={whiskar}
        phone="123456789"
        mail="pedro@gmail.com"
      />
    */}
      <Jokes
        setup=" Why don't pirates travel on mountain roads?"
        punchLine="Scurvy."
      />
      <Jokes
        setup="How did the hacker escape the police?"
        punchLine=" He just ransomware!"
      />
      <Jokes
        setup="I got my daughter a fridge for her birthday"
        punchLine="I can't wait to see her face light up when she opens it."
      />
    </div>
  );
}

export default App;
