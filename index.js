//! global method which comes from react dom
console.log("oops");

const MainContent = () => {
  return (
    <div>
      <h1>I'm Learning React</h1>
    </div>
  );
};

/
ReactDOM.render(
  <div>
    <MainContent />
    <h2>Hello! React</h2>
  </div>,

  document.getElementById("root")
);

/*
let elem = document.createElement("h1");
elem.textContent = "this is a imperative way";
elem.className = "header";
document.getElementById("root").append(elem);
*/
