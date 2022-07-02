import React from "react";

export default function Jokes(props) {
  return (
    <div>
      {/* <h3>{props.setup}</h3> */}
      {/* conditional rendering  */}
      {props.setup && <h3>Setup: {props.setup}</h3>}
      <p>{props.punchLine}</p>
      <hr />
    </div>
  );
}
