//! creating a custom react component

function Page() {
  return (
    <div>
      <header>
        <nav>
          <img src="./react-logo.png" alt="react-logo" width="45px" />
          <h1>I love React </h1>
          <ol>
            <li>I want to Learn React, becuase i love JS</li>
            <li>React makes me feel more comfortable to code</li>
            <li>WE devloper have a huge community on React</li>
            <li>React gives our code more reusuablity, extensibility</li>
          </ol>
        </nav>
      </header>
      <footer>
        <p>© 2022 Alim development. All rights reserved.</p>
      </footer>
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
