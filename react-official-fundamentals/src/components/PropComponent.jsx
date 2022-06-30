import React from "react";

export default function PropComponent() {
  // Dynamic Rendering
  //   const firstName = "Arafat";
  //   const lastName = "Alim";

  //! CHallenge timeOfDAY
  let timeOfDay;
  let message;
  timeOfDay = new Date().getHours();

  if (timeOfDay < 12) {
    message = "Morning";
  } else if (timeOfDay > 12 && timeOfDay <= 17) {
    message = "Evening";
  } else {
    message = "Night";
  }

  let date = new Date();
  return (
    <div>
      <h1>It is about {date.getHours()}</h1>
      <p>Good {message}</p>
    </div>
  );
}
