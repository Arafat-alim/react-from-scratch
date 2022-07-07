import React, { useState } from "react";

export default function Ternary() {
  /**
   * Challenge: Replace the if/else below with a ternary
   * to determine the text that should display on the page
   */
  //   const isGoingOut = true;

  // let answer; // Use ternary here
  //   if (isGoingOut === true) {
  //     answer = "Yes";
  //   } else {
  //     answer = "No";
  //   }
  //   answer = isGoingOut ? "Yes" : "No";

  //! creating state
  const [isGoingOut, setIsGoingOut] = useState(false);
  function handleClick() {
    setIsGoingOut((prevValue) => !prevValue);
  }

  return (
    <div className="state">
      <h1 className="state--title">Do I feel like going out tonight?</h1>
      <div className="state--value" onClick={handleClick}>
        <h1>{isGoingOut ? "Yes" : "No"}</h1>
      </div>
    </div>
  );
}
