import React from "react";

function Todos(props) {
  return (
    <div>
      {props.itemList.map((itemObj) => {
        return <div>
          <p>{itemObj.item}</p>
          <button>x</button>
        </div>;
      })}
    </div>
  )
}

export default Todos;
