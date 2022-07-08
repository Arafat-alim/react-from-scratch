import React, { useState } from "react";
import boxesApi from "../BoxesAPI";
import Box from "./Box";

export default function BoxParent(props) {
  const [box, setBox] = useState(boxesApi);
  //! mapping for rendering

  // Dyanmic Style
  const styles = {
    backgroundColor: props.darkMode ? "#ccc" : "#000",
  };

  const boxes = box.map((item) => (
    <div style={styles} className="box--element" key={item.id}>
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
