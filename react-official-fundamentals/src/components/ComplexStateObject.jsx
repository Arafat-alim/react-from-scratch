import React from "react";
import user from "../images/user.png";
import starEmpty from "../images/star-empty.png";
// import starFilled from "../images/star-filled.png";

export default function ComplexStateObject() {
  return (
    <main>
      <article className="card">
        <img src={user} alt="images" className="card--logo" />
        <div className="card--info">
          <img src={starEmpty} alt="" className="card--favourite" />
          <h2 className="card--name">Joe</h2>
          <p className="card--contact">+1 (719) 555-1212</p>
          <p className="card--contact">itsmyrealname@example.com</p>
        </div>
      </article>
    </main>
  );
}

//  <main>
//    <article className="card">
//      <img src="" alt="" className="card--logo" />
//      <div className="card--info">
//        <img src="" alt=""  />

//      </div>
//    </article>
//  </main>;
