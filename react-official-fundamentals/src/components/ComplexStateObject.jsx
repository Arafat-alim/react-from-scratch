import React, { useState } from "react";
import user from "../images/user.png";
import starEmpty from "../images/star-empty.png";
import starFilled from "../images/star-filled.png";

export default function ComplexStateObject() {
  //! creating state
  const [contact, setContact] = useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false,
  });

  function toggleFavorite() {
    setContact((prevState) => {
      return {
        ...prevState,
        isFavorite: !prevState.isFavorite,
      };
    });
  }
  return (
    <main>
      <article className="card">
        <img src={user} alt="images" className="card--logo" />
        <div className="card--info">
          <img
            src={contact.isFavorite ? starFilled : starEmpty}
            alt="fav-logo"
            className="card--favourite"
            onClick={toggleFavorite}
          />
          <h2 className="card--name">
            {contact.firstName} {contact.lastName}
          </h2>
          <p className="card--contact">{contact.phone}</p>
          <p className="card--contact">{contact.email}</p>
        </div>
      </article>
    </main>
  );
}
