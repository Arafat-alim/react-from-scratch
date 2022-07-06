import React, { useState } from "react";

export default function Interact() {
  const [Things, setThings] = useState(["Things 1", "Things 2"]);
  //   const array = ["Things 1", "Things 2"];

  //   ! old way
  /*
  function addItem() {
    console.log(array);
    const addElement = `Things ${array.length + 1}`;
    const newArr = array.push(addElement);
    console.log(newArr);
  }
  const para = array.map((item, index) => {
    return <p key={index}>{item}</p>;
  });
  */

  //! new Way - This way we can update the data in real time
  function addItem() {
    const newThings = `Things ${Things.length + 1}`;
    //! updating the UI
    setThings((prevState) => [...prevState, newThings]);
  }

  //! Representation using map function
  const rep = Things.map((item, index) => <p key={index}>{item}</p>);

  return (
    <div>
      <button className="add--button" onClick={addItem}>
        Add Item
      </button>
      {rep}
    </div>
  );
}
