import React from "react";

const TodoList = (props) => {
  return (
    <div className="inputItems">
      <input
        className="checkbox"
        type="checkbox"
        checked={props.isCompleted}
        onChange={() => props.onToggle(props.id)}
      />
      <div className="inputItemsContainer">
        <li
          className="inputItem"
          style={{ textDecoration: props.isCompleted ? "line-through" : "none" }}
        >
          {props.text}
        </li>
        <i
          className="deleteIcon fa-solid fa-trash"
          onClick={() => {
            props.onSelect(props.id);
          }}
        ></i>
      </div>
    </div>
  );
};

export default TodoList;
