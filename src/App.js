import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="Container">
        <div className="wrapper">
          <h1>Today's Todo List</h1>
          <div className="box">
            <input placeholder="Type here...."></input>
            <button>+</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
