import Header from "./Header";
import MainComponent from "./MainComponent";
import Footer from "./Footer";
import React from "react";
import ReactDOM from "react-dom";

//! creating a custom react component

//! Page compoenent (Parent component)
function App() {
  return (
    <div>
      <Header />
      <MainComponent />
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
