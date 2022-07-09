import React from "react";
import { useState, useEffect } from "react";

export default function CallApi() {
  //! saving api calls into the state
  const [starWarsData, setStarWarsData] = useState({});
  //! API's calling
  //   fetch("https://swapi.dev/api/people/1")
  //     .then((res) => res.json())
  //     .then((data) => setStarWarsData(data));
  console.log("Component Rendering");

  // side Effect
  useEffect(function () {
    // fetch("https://swapi.dev/api/people/1")
    //   .then((res) => res.json())
    //   .then((data) => setStarWarsData(data));
  });
  return (
    <div>
      <h1>APi rendering</h1>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  );
}
