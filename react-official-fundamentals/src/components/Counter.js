import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(1);
  function handlePlus() {
    setCount((prevCount) => prevCount + 1);
  }
  function handleMinus() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <div className="counter">
      <h1>Counter</h1>
      <h1 className="counter--value">{count}</h1>
      <button className="counter--button" onClick={handlePlus}>
        +
      </button>
      <button className="counter--button" onClick={handleMinus}>
        -
      </button>
    </div>
  );
}
