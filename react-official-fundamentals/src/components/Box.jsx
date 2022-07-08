import React, { useState } from "react";

export default function Box(props) {
  const [on, setOn] = useState(props.on);

  function toggleBtn() {
    setOn((prevState) => !prevState);
  }
  const styles = {
    backgroundColor: on ? "#222222" : "transparent",
  };
  return (
    <div style={styles} className="box--element" onClick={toggleBtn}>
      Box
    </div>
  );
}
