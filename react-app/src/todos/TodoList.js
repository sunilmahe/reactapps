import React from "react";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import "./TodoList.css";

const TodoList = ({ todos = [{text : 'Added the First'}] }) => (
  <div className="list-wrapper">
    <NewTodoForm></NewTodoForm>
    {todos.map((todo) => (
      <TodoListItem todo={todo} />
    ))}
  </div>
);

export default TodoList;
