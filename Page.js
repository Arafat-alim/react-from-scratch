//! creating a custom react component

function Page() {
  return (
    <div>
      <h1>BluMerge Corp</h1>
      <ul>
        <li>I want to Learn React, becuase i love JS</li>
        <li>React makes me feel more comfortable to code</li>
        <li>WE devloper have a huge community on React</li>
        <li>React gives our code more reusuablity, extensibility</li>
      </ul>
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
