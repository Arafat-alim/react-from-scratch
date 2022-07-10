import React, { useState } from "react";

import WindowTracker from "./WindowTracker";
// import CallApi from "./CallApi";

export default function ParentApi() {
  const [show, setShow] = useState(true);

  function hadnleClick() {
    setShow((prevValue) => !prevValue);
  }
  return (
    <button>
      <button onClick={hadnleClick}>Toggle WindowTracker</button>
      {show && <WindowTracker />}
    </button>
  );
}
