import React from "react";
import whiskar from "../images/CatImages/mr-whiskerson.png";
import phoneIcon from "../images/CatImages/phone-icon.png";
import mailIcon from "../images/CatImages/mail-icon.png";

export default function Contact() {
  return (
    <div className="contacts">
      <div className="contact-card">
        <img src={whiskar} alt="whiskar" />
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
