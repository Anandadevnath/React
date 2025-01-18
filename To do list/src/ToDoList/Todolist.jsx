import React, { useState } from "react";
import "./ToDoList.css";

function ToDoList() {

  const [task, setTask] = useState([]);
  const [newtask, setNewTask] = useState("");

  function inputchange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newtask.trim() !== "") {
      setTask(t => [...t, newtask]);
      setNewTask("");
    }
    else {
      alert("Please enter a task")
    }
  }

  function deleteTask(index) {
    const updatedtask = task.filter((task, i) => index !== i);
    setTask(updatedtask);
  }

  function movetaskup(index) {
    if (index > 0) {
      const updatedtask = [...task];
      [updatedtask[index], updatedtask[index - 1]] = [updatedtask[index - 1], updatedtask[index]];
      setTask(updatedtask);
    }
  }

  function movetaskdown(index) {
    if (index < task.length - 1) {
      const updatedtask = [...task];
      [updatedtask[index], updatedtask[index + 1]] = [updatedtask[index + 1], updatedtask[index]];
      setTask(updatedtask);
    }
  }

  return (
    <div className="todolist-container">

      <h1>To-Do-List</h1>

      <input
        type="text"
        placeholder="Add Task"
        value={newtask}
        onChange={inputchange}
      />
      <button className="Button" onClick={addTask}>Add</button>

      <ol>
        {task.map((task, index) =>
          <li key={index}>
            <span className="text">{task}</span>
            <button className="Delete-button" onClick={() => deleteTask(index)}>🚫</button>
            <button className="Up-button" onClick={() => movetaskup(index)}>⬆️</button>
            <button className="Down-button" onClick={() => movetaskdown(index)}>⬇️</button>
          </li>
        )}
      </ol>

    </div>
  );
}

export default ToDoList;