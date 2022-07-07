import React, { useState } from "react";

export default function ComplexStateArray() {
  const [state, setState] = useState(["Thing 1", "Thing 2"]);
  //   const thingsArray = ["Thing 1", "Thing 2"];

  function addItem() {
    setState((prevState) => [...prevState, `Thing ${state.length + 1}`]);
  }

  const thingsElements = state.map((thing) => <p key={thing}>{thing}</p>);

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      {thingsElements}
    </div>
  );
}
