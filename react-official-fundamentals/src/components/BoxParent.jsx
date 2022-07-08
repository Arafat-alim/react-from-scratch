import React, { useState } from "react";
import boxesApi from "../BoxesAPI";
import Box from "./Box";

export default function BoxParent() {
  const [box, setBox] = useState(boxesApi);
  //! mapping for rendering

  const boxes = box.map((item) => (
    <div className="box--element" key={item.id}>
      Box {item.id}
    </div>
  ));
  return (
    <div className="box">
      <h1>Boxes will go here</h1>
      {boxes}
    </div>
  );
}
