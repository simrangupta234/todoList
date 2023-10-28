import React from "react";

const TodoList = (props) => {
  return (
    <>
      <div className="inputItems">
        <input className="checkbox" type="checkbox" />
        <div className="inputItemsContainer">
          <li className="inputItem">{props.text}</li>
          <i
            className="deleteIcon fa-solid fa-trash"
            onClick={() => {
              props.onSelect(props.id);
            }}
          ></i>
        </div>
      </div>
    </>
  );
};
export default TodoList;
