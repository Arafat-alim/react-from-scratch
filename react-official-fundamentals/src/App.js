import React from "react";
import MessageArr2 from "./components/MessageArr2";

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
      <MessageArr2 />
    </div>
  );
}

export default App;
