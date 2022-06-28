//! global method which comes from react dom
console.log("oops");

const MainContent = () => {
  return (
    <div>
      <h1>New Matters Alot!</h1>
    </div>
  );
};
ReactDOM.render(
  <div>
    <MainContent />
    <h2>Hello! React</h2>
  </div>,

  document.getElementById("root")
);
