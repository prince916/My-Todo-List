
import "./App.css";
import { useState } from "react";

function App() {

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const AddElement = (event) => {
    setInput(event.target.value);
  };

  return (
    <>
      <div className="Container">
        <div className="wrapper">
          <h1>Today's Todo List</h1>
          <div className="box">
            <input type="text" placeholder="Type here...."></input>
            <button onClick={AddElement}>+</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
