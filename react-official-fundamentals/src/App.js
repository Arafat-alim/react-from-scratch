import React from "react";
import { useState } from "react";
import ComplexStateObject from "./components/ComplexStateObject";
// import ComplexStateObject from "./components/ComplexStateObject";
// import Count from "./components/Count";

function App() {
  //! creating a state for count
  // const [count, setCount] = useState(0);

  //creating an handler
  // function addCount() {
  //   setCount((prevCount) => prevCount + 1);
  // }
  // function subCount() {
  //   setCount((prevCount) => prevCount - 1);
  // }
  return (
    <div className="container">
      {/* <button onClick={addCount}>+</button>
      <Count count={count} />
      <button onClick={subCount}>-</button> */}
      <ComplexStateObject />
    </div>
  );
}

export default App;
