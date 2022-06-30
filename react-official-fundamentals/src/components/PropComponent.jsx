import React from "react";

export default function PropComponent() {
  // Dynamic Rendering
  const firstName = "Arafat";
  const lastName = "Alim";
  return (
    <div>
      <h1>
        Hello! {firstName} {lastName}
      </h1>
    </div>
  );
}
