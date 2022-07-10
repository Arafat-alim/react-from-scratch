import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function WindowTracker() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    //! side effect
    function addWatch() {
      console.log("Setting up");
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", addWatch);

    //cleaniong up the function
    return function () {
      console.log("Cleaning Up!");
      window.removeEventListener("resize", addWatch);
    };
  }, []);

  return (
    <div>
      <h1>Window Width: {windowWidth}</h1>
    </div>
  );
}
