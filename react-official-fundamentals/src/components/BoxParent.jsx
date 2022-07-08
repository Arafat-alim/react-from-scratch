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

  //! Function toggle imperative way
  //   function toggleBtn(id) {
  //     setBox((prevSquares) => {
  //       const newSquares = [];
  //       for (let i = 0; i < prevSquares.length; i++) {
  //         const currentSquare = prevSquares[i];
  //         if (currentSquare.id === id) {
  //           const updatedSquare = {
  //             ...currentSquare,
  //             on: !currentSquare.on,
  //           };
  //           newSquares.push(updatedSquare);
  //         } else {
  //           newSquares.push(currentSquare);
  //         }
  //       }
  //       return newSquares;
  //     });
  //   }

  //! Declarative way
  //   function toggleBtn(id) {
  //     setBox((prevState) => {
  //       return prevState.map((item) =>
  //         item.id === id ? { ...item, on: !item.on } : item
  //       );
  //     });
  //   }

  //! practice declartive
  //   function toggleBtn(id) {
  //     setBox((prevState) =>
  //       prevState.map((item) =>
  //         item.id === id ? { ...item, on: !item.on } : item
  //       )
  //     );
  //   }
  //! Practise another way
  function toggleBtn(id) {
    setBox((prevState) => {
      return prevState.map((item) => {
        return item.id === id ? { ...item, on: !item.on } : item;
      });
    });
  }

  const boxElemeent = box.map((item) => (
    <Box
      on={item.on}
      key={item.id}
      toggleBtn={() => toggleBtn(item.id)}
      //   id={item.id}
    />
  ));
  return (
    <div className="box">
      <h1>Boxes will go here</h1>
      {boxElemeent}
    </div>
  );
}
