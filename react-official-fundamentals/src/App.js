import React from "react";
import MessageArr from "./components/MessageArr";

import ParentJokes from "./components/ParentJokes";

function App() {
  //! creating a state for count
  // const [count, setCount] = useState(0);

  //creating an handler
  // function addCount() {
  //   setCount((prevCount) => prevCount + 1);
  // }
  // function subCount() {
  //   setCount((prevCount) => prevCount - 1);
  // }
  return (
    <div className="container">
      {/* <button onClick={addCount}>+</button>
      <Count count={count} />
      <button onClick={subCount}>-</button> */}
      <MessageArr />
    </div>
  );
}

export default App;
