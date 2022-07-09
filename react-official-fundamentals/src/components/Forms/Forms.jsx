import React, { useState } from "react";

export default function Forms() {
  //! creatin state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  console.log(firstName);
  console.log(lastName);

  function handleChange(event) {
    setFirstName(event.target.value);
  }
  //! handling latt name
  function handleLast(event) {
    setLastName(event.target.value);
  }

  return (
    <form>
      <input type="text" placeholder="First Name" onChange={handleChange} />
      <input type="text" placeholder="Last Name" onChange={handleLast} />
    </form>
  );
}
