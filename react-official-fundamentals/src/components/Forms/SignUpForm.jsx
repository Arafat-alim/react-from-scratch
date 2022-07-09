import React, { useState } from "react";
import "./style.css";

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
    <div className="form--container">
      <form onSubmit={handleSubmit} className="form">
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          className="form--input"
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          className="form--input"
        />

        <input
          type="password"
          name="cpassword"
          placeholder="Confirm Password"
          value={formData.cpassword}
          onChange={handleChange}
          className="form--input"
        />

        <input
          type="checkbox"
          id="isChecked"
          checked={formData.isChecked}
          name="isChecked"
          onChange={handleChange}
          className="form--marketing"
        />
        <label htmlFor="isChecked">I want to join the newsletter</label>

        <button className="form--submit">Sign Up!</button>
      </form>
    </div>
  );
}
