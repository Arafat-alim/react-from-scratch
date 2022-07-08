import React, { useState } from "react";

export default function Box(props) {
  //! derived state
  //   const [on, setOn] = useState(props.on);

  //   function toggleBtn() {
  //     setOn((prevState) => !prevState);
  //   }
  const styles = {
    backgroundColor: props.on ? "#222222" : "transparent",
  };
  return (
    <div
      style={styles}
      className="box--element"
      //   onClick={() => props.toggleBtn(props.id)}
      onClick={props.toggleBtn}
    >
      Box
    </div>
  );
}
