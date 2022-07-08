import React from "react";

export default function Box(props) {
  const styles = {
    backgroundColor: props.on === true ? "red" : "blue",
  };
  return (
    <div style={styles} className="box--element">
      Box
    </div>
  );
}
