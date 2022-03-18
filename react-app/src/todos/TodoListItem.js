import React from "react";
import "./TodoListItem.css";

const TodoListItem = ({ todo }) => (
  <div class="todo-item-container">
    <h3>{todo.text}</h3>
    <div className="button-container">
      <button className="completed-btn">Mark as completed</button>
      <button className="remove-btn">Remove</button>
    </div>
  </div>
);

export default TodoListItem;
