import React from "react";

import phoneIcon from "../CatImages/phone-icon.png";
import mailIcon from "../CatImages/mail-icon.png";

// export default function Contact(props) {
// ! destructuring the props
export default function Contact({ img, name, phone, mail }) {
  return (
    <div className="contacts">
      <div className="contact-card">
        <img src={img} alt="whiskar" />
        <h3>{name}</h3>
        <div className="info-group">
          <img src={phoneIcon} alt="phone" />
          <p>{phone}</p>
        </div>
        <div className="info-group">
          <img src={mailIcon} alt="mail" />
          <p>{mail}</p>
        </div>
      </div>
    </div>
  );
}
