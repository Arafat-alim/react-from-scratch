import React from "react";
import { useState, useEffect } from "react";

export default function CallApi() {
  //! saving api calls into the state
  const [starWarsData, setStarWarsData] = useState({});
  const [num, setNum] = useState(1);
  console.log("Component Rendering");

  //! Handle next character
  function nextChar() {
    setNum((prevNum) => {
      return prevNum + 1;
    });
  }

  //! API's calling
  // side Effect
  useEffect(
    function () {
      console.log("Ran Effect");
      fetch(`https://swapi.dev/api/people/${num}`)
        .then((res) => res.json())
        .then((data) => setStarWarsData(data));
    },
    [num]
  );
  return (
    <div>
      <h1>APi rendering</h1>
      <h1>The count is {num}</h1>
      <button onClick={nextChar}>Next Character</button>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  );
}
