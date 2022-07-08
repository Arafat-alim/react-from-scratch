import React, { useState } from "react";

export default function MessageArr() {
  const [message, setMessage] = useState([]);
  return (
    <div>
      {/* conditional rendering */}
      {message.length && <h1>You have {message.length} unread Message</h1>}
      {/* <h1>You have {message.length} unread Message</h1> */}
    </div>
  );
}
