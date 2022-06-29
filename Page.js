//! creating a custom react component

//! Header component (Child component)
function Header() {
  return (
    <header>
      <nav>
        <img src="./react-logo.png" alt="react-logo" width="45px" />
      </nav>
    </header>
  );
}

//! Main component (Child component)
function MainComponent() {
  return (
    <>
      <h1>I love React </h1>
      <ol>
        <li>I want to Learn React, becuase i love JS</li>
        <li>React makes me feel more comfortable to code</li>
        <li>WE devloper have a huge community on React</li>
        <li>React gives our code more reusuablity, extensibility</li>
      </ol>
    </>
  );
}
//! Footer component (Child component)
function Footer() {
  return (
    <footer>
      <p>© 2022 Alim development. All rights reserved.</p>
    </footer>
  );
}

//! Page compoenent (Parent component)
function Page() {
  return (
    <div>
      <Header />
      <MainComponent />
      <Footer />
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
