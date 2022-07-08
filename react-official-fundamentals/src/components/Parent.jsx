import React, { useState } from "react";
import ChildOne from "./ChildOne";
import ChildTwo from "./ChildTwo";

export default function Parent() {
  const [user, setUser] = useState("Joe");
  return (
    <div>
      <h1>Parent Component</h1>
      <ChildOne name={user} />
      <ChildTwo name={user} />
    </div>
  );
}
