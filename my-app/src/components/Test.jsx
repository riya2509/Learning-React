import React, { useState } from "react";

function Test() {
  const [task, setTask] = useState(``);
  const handlesetTask = (e) => {
    setTask(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div>
      <input
        className="write"
        type="text"
        value={task}
        onChange={handlesetTask}
      />
      <h2>{task.toUpperCase()}</h2>
    </div>
  );
}

export default Test;

// TODO: take name ,title and age in input
// make a button print message if..else eligible to vote
// clear button to clear
