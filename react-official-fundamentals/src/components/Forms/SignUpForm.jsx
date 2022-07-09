import React, { useState } from "react";

export default function SignUpForm() {
  //! creating a state
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    cpassword: "",
    isChecked: false,
  });
  //handling form
  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={formData.email}
        onChange={handleChange}
      />
      <br />
      <input
        type="password"
        name="password"
        placeholder="Enter Password"
        value={formData.password}
        onChange={handleChange}
      />
      <br />
      <br />
      <input
        type="password"
        name="cpassword"
        placeholder="Confirm Password"
        value={formData.cpassword}
        onChange={handleChange}
      />
      <br />
      <br />
      <input
        type="checkbox"
        id="isChecked"
        checked={formData.isChecked}
        name="isChecked"
        onChange={handleChange}
      />
      <label htmlFor="isChecked">I want to join the newsletter</label>
      <br />
      <br />
      <button>Submit</button>
    </form>
  );
}
