import { useState } from "react";
import "./App.css";
import TodoList from "./TodoList";

const App = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const eventItem = (event) => {
    setInput(event.target.value);
  };

  const addItems = () => {
    if (input.trim() !== "") {
      setItems((oldItems) => [...oldItems, input]);
      setCompletedTasks((oldCompletedTasks) => [...oldCompletedTasks, false]); // Initially, the task is not completed.
      setInput("");
    } else {
      setInput("");
    }
  };

  const deleteItems = (id) => {
    setItems((oldItems) => oldItems.filter((arrElement, index) => index !== id));
    setCompletedTasks((oldCompletedTasks) =>
      oldCompletedTasks.filter((arrElement, index) => index !== id)
    );
  };

  const toggleCompletion = (id) => {
    setCompletedTasks((oldCompletedTasks) => {
      return oldCompletedTasks.map((status, index) =>
        index === id ? !status : status
      );
    });
  };

  return (
    <div className="main">
      <div className="center">
        <h1>Todo List App</h1>
        <select
          className="dropdown"
          onChange={(event) => setFilter(event.target.value)}
        >
          <option value="all">All Tasks</option>
          <option value="completed">Completed Tasks</option>
          <option value="uncompleted">Uncompleted Tasks</option>
        </select>
        <br />
        <div>
          <input
            className="input"
            type="text"
            placeholder="add a task"
            value={input}
            onChange={eventItem}
          />
          <button className="addbutton" onClick={addItems}>
            Add
          </button>
        </div>
        <ol>
          {items
            .filter((_, index) => {
              if (filter === "all") {
                return true;
              } else if (filter === "completed") {
                return completedTasks[index] === true;
              } else if (filter === "uncompleted") {
                return completedTasks[index] === false;
              }
            })
            .map((itemVal, index) => (
              <TodoList
                key={index}
                id={index}
                text={itemVal}
                onSelect={deleteItems}
                onToggle={toggleCompletion}
                isCompleted={completedTasks[index]}
              />
            ))}
        </ol>
      </div>
    </div>
  );
};

export default App;
