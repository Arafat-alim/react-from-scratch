import React, { useState } from "react";

export default function FormTwo() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: true,
    employment: "",
    favColor: "",
  });

  //   console.log(formData);

  //! creating
  //   function handleChange(event) {
  //     console.log(event.target.name);
  //     setFormData((prevData) => {
  //       return {
  //         ...prevData,
  //         [event.target.name]: event.target.value,
  //       };
  //     });
  //   }

  //! Advanced Handling
  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    //submitAPI(formData);
    console.log(formData);
    setFormData("");
  }
  return (
    <form onSubmit={handleSubmit}>
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
      <input
        type="checkbox"
        id="isFriendly"
        name="isFriendly"
        checked={formData.isFriendly}
        onChange={handleChange}
      />
      <label htmlFor="isFriendly">Are you Friendly?</label>

      {/* adding radio button */}
      <fieldset>
        <legend>Current employment status</legend>
        <input
          type="radio"
          id="unemployment"
          name="employment"
          value="unemployed"
          onChange={handleChange}
          checked={formData.employment === "unemployed"}
        />
        <label htmlFor="unemployment">Unemployed</label>
        <br />
        <input
          type="radio"
          id="part-time"
          name="employment"
          value="part-time"
          checked={formData.employment === "part-time"}
          onChange={handleChange}
        />
        <label htmlFor="part-time">Part Time</label>
        <br />
        <input
          type="radio"
          id="full-time"
          name="employment"
          value="full-time"
          checked={formData.employment === "full-time"}
          onChange={handleChange}
        />
        <label htmlFor="full-time">Full Time</label>
        <br />
      </fieldset>

      {/* select box */}
      <label htmlFor="favColor">What is your Favourite Color</label>
      <br />
      <select
        name="favColor"
        id="favColor"
        value={formData.favColor}
        onChange={handleChange}
      >
        <option value="">-- Choose --</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
        <option value="black">Black</option>
        <option value="purple">Purple</option>
      </select>
      <br />
      <br />
      <button>Submit</button>
    </form>
  );
}
