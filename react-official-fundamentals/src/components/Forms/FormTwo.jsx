import React, { useState } from "react";

export default function FormTwo() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });

  console.log(formData);

  //! creating
  function handleChange(event) {
    console.log(event.target.name);
    setFormData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
  }
  return (
    <form>
      <input
        type="text"
        placeholder="First Name"
        onChange={handleChange}
        name="firstName"
      />
      <input
        type="text"
        placeholder="First Name"
        onChange={handleChange}
        name="lastName"
      />
    </form>
  );
}
