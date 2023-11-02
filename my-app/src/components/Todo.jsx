import React, { useState } from "react";
import "./Todo.css";
function Todo() {
  const [text, setText] = useState(``);
  const [tasks, setTasks] = useState([]);

  const handleSetText = (e) => {
    setText(e.target.value);
  };
  console.log(text);

  const handleCreateTask = () => {
    const obj = { name: text, status: "progress" };
    const value = [...tasks];
    value.unshift(obj);
    setTasks(value);
    setText("");
  };

  return (
    <div className="outerDiv">
      <input
        type="text"
        className="inputBox"
        value={text}
        onChange={handleSetText}
      />
      <button
        className="inputBox"
        style={{ cursor: "pointer" }}
        onClick={handleCreateTask}
      >
        +
      </button>
      {tasks.map((value) => {
        return <div className="task">{value.name}</div>;
      })}
    </div>
  );
}

export default Todo;

//TODO: 1. create array of tasks/objects
//2. two parameters- taskName, flag(completed, in progress)
