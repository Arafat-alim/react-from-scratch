//! global method which comes from react dom
console.log("oops");

const MainContent = () => {
  return (
    <div>
      <h1>I'm Learning React</h1>
    </div>
  );
};

/*
ReactDOM.render(
  <div>
    <MainContent />
    <h2>Hello! React</h2>
  </div>,

  document.getElementById("root")
);

*/

/*
//! JSX
const page = (
  <div>
    <h1>Hello Boss</h1>
    <p>How are you Arafat!</p>
  </div>
);
console.log(page); //! Object { "$$typeof": Symbol("react.element"), type: "div", key: null, ref: null, props: {…}, _owner: null, _store: {…}, … }

//! Creating a navbar using jSX
const navBar = (
  <nav>
    <h1>My Website</h1>
    <ul>
      <li>Pricing</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
);

ReactDOM.render(navBar, document.getElementById("root"));

*/
/*
let elem = document.createElement("h1");
elem.textContent = "this is a imperative way";
elem.className = "header";
document.getElementById("root").append(elem);
*/

//! append() jsx into root
let rootBody = document.getElementById("root");
//! creating a JSX code
const page = (
  <div>
    <h1>I am Learning React JS from Scratch</h1>
    <ul>
      <li>React Courses</li>
      <li>React Framework</li>
    </ul>
  </div>
);

//apending
// rootBody.append(page); // [object object]
ReactDOM.render(page, rootBody);
// rootBody.append(JSON.stringify(page)); // [object object]
