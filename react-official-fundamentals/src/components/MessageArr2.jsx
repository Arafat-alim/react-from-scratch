import React from "react";

export default function MessageArr2() {
  const [messages, setMessages] = React.useState([]);
  /**
   * Challenge:
   * - If there are no unread messages, display "You're all caught up!"
   * - If there are > 0 unread messages, display "You have <n> unread
   *   message(s)"
   *      - If there's exactly 1 unread message, it should read "message"
   *        (singular)
   */
  return (
    <div>
      {messages.length === 0 ? (
        <h1>You're all caught up!</h1>
      ) : (
        <h1>
          You have {messages.length} unread *message
          {messages.length > 1 ? "s" : ""}
        </h1>
      )}
    </div>
  );
}
