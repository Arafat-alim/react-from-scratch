import React, { useState } from "react";
import boxesApi from "../BoxesAPI";
import Box from "./Box";

export default function BoxParent(props) {
  const [box, setBox] = useState(boxesApi);
  //! mapping for rendering

  // Dyanmic Style
  //   const styles = {
  //     backgroundColor: props.darkMode ? "#ccc" : "#000",
  //   };

  //   const boxes = box.map((item) => (
  //     <div style={styles} className="box--element" key={item.id}>
  //       Box {item.id}
  //     </div>
  //   ));

  //! Function toggle
  function toggleBtn(id) {
    setBox((prevSquares) => {
      const newSquares = [];
      for (let i = 0; i < prevSquares.length; i++) {
        const currentSquare = prevSquares[i];
        if (currentSquare.id === id) {
          const updatedSquare = {
            ...currentSquare,
            on: !currentSquare.on,
          };
          newSquares.push(updatedSquare);
        } else {
          newSquares.push(currentSquare);
        }
      }
      return newSquares;
    });
  }

  const boxElemeent = box.map((item) => (
    <Box on={item.on} key={item.id} toggleBtn={toggleBtn} id={item.id} />
  ));
  return (
    <div className="box">
      <h1>Boxes will go here</h1>
      {boxElemeent}
    </div>
  );
}
