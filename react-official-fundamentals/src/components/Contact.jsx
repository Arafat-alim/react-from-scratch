import React from "react";

import phoneIcon from "../CatImages/phone-icon.png";
import mailIcon from "../CatImages/mail-icon.png";

export default function Contact(props) {
  console.log(props);
  return (
    <div className="contacts">
      <div className="contact-card">
        <img src={props.img} alt="whiskar" />
        <h3>{props.name}</h3>
        <div className="info-group">
          <img src={phoneIcon} alt="phone" />
          <p>{props.phone}</p>
        </div>
        <div className="info-group">
          <img src={mailIcon} alt="mail" />
          <p>{props.mail}</p>
        </div>
      </div>
    </div>
  );
}
