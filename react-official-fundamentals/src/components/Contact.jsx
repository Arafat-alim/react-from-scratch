import React from "react";

import phoneIcon from "../CatImages/phone-icon.png";
import mailIcon from "../CatImages/mail-icon.png";

export default function Contact(props) {
  console.log(props);
  return (
    <div className="contacts">
      <div className="contact-card">
        <img src="" alt="whiskar" />
        <h3>Mr. Whiskerson</h3>
        <div className="info-group">
          <img src={phoneIcon} alt="phone" />
          <p>(212) 555-1234</p>
        </div>
        <div className="info-group">
          <img src={mailIcon} alt="mail" />
          <p>mr.whiskaz@catnap.meow</p>
        </div>
      </div>
    </div>
  );
}
