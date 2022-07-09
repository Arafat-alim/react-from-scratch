import React, { useState } from "react";

export default function FormTwo() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
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
        value={formData.firstName}
      />
      <input
        type="text"
        placeholder="First Name"
        onChange={handleChange}
        name="lastName"
        value={formData.lastName}
      />
      <input
        type="email"
        placeholder="Email ID"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <textarea
        value={formData.comments}
        name="comments"
        onChange={handleChange}
      />
    </form>
  );
}
