import React, { useEffect, useState } from "react";

export default function UseEffectClearing() {
  const [count, setCount] = useState(0);

  // creating a hook named useEffect for side effect
  useEffect(
    function () {
      console.log("Ran Effect");
    },
    [5]
  );

  //handling change of state
  function handleChange() {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleChange}>+</button>
    </div>
  );
}
