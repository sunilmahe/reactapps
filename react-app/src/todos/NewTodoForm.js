import React, { useState } from "react";
import './NewTodoForm.css';

const NewTodoForm = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="new-todo-form">
      <input
        type="text"
        placeholder="Type your new Todo here."
        className="new-todo-text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      ></input>
      <button className="new-todo-btn">Create Todo</button>
    </div>
  );
};

export default NewTodoForm;
