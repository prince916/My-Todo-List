import "./App.css";
import { useState } from "react";
import Todos from "./components/Todos";

function App() {
  const [currentItem, setCurrentItem] = useState(null);
  const [itemList, setItemList] = useState([]);

  const onChangehandler = (e) => {
    setCurrentItem(e.target.value);
  };

  const AddElement = () => {
    setItemList([...itemList, { item: currentItem, key: Date.now() }]);
    setCurrentItem("");
  };

  return (
    <>
      <div className="Container">
        <div className="wrapper">
          <h1>Today's Todo List</h1>
          <div className="box">
            <input
              type="text"
              value={currentItem}
              onChange={onChangehandler}
              placeholder="Type here...."
            ></input>
            <button onClick={AddElement}>+</button>
          </div>
          <Todos itemlist={itemList} />
        </div>
      </div>
    </>
  );
}

export default App;
