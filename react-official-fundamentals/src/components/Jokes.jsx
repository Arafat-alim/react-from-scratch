import React from "react";

export default function Jokes(props) {
  const [ishown, setIsShown] = React.useState(false);
  function toggle() {
    setIsShown((prevState) => !prevState);
  }
  return (
    <div>
      {/* <h3>{props.setup}</h3> */}
      {/* conditional rendering  */}
      {props.setup && <h3>Setup: {props.setup}</h3>}
      {/* <p>{props.punchLine}</p> */}
      {ishown && <p>{props.punchLine}</p>}
      <button onClick={toggle}>Show PunchLine</button>
      <hr />
    </div>
  );
}
