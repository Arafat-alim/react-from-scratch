import React from "react";

export default function EventComponent() {
  function handleClick() {
    alert("You Clicked Me!");
  }

  function mouseEnter() {
    console.log("Mouse Enter");
  }

  function mouseMove() {
    console.log("mouseOver");
  }
  return (
    <div className="container">
      <img
        src="https://picsum.photos/640/360"
        alt="image"
        onMouseEnter={mouseEnter}
        onMouseMove={mouseMove}
      />
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
