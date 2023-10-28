import { useState } from "react";
import "./App.css";
import TodoList from "./TodoList";

const App = () => {
  const [input, setinput] = useState("");
  const [items, setitems] = useState([]);

  const eventItem = (event) => {
    setinput(event.target.value);
  };

  const additems = () => {
    if (input.trim() !== "") {
      setitems((olditems) => {
        return [...olditems, input];
      });
      setinput("");
    } else {
      setinput("");
    }
  };



  const deleteItems = (id) => {
    console.log("deleted");

    setitems((olditems) => {
      return olditems.filter((arrElement, index) => {
        return index !== id;
      });
    });
  };

  const allTasks = () =>{
    setitems((olditems) => {
      return [...olditems, input];
    });
  }
  return (
    <div className="main">
      <div className="center">
        <h1>Todo List App</h1>
        <select className="dropdown">
          <option value="option1" onSelect={allTasks}>All Tasks</option>
          <option value="option2" >Completed Tasks</option>
          <option value="option3">Uncomplete Tasks</option>
        </select>
        <br />
        <div><input
          className="input"
          type="text"
          placeholder="add a task"
          value={input}
          onChange={eventItem}
        />
        <button className="addbutton" onClick={additems}>
          Add
        </button></div>
        
        <ol>
          {items.map((itemVal, index) => {
            return (
              <TodoList
                key={index}
                id={index}
                text={itemVal}
                onSelect={deleteItems}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default App;
