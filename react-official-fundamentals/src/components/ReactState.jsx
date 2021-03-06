import React, { useState } from "react";

export default function ReactState() {
  const [data, setData] = useState("Yes");
  function handleClick() {
    setData("No");
  }
  return (
    <div className="state">
      <h1 className="state--title">Is state important to know?</h1>
      <div className="state--value" onClick={handleClick}>
        <h1>{data}</h1>
      </div>
    </div>
  );
}
