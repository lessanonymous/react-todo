import React from "react";
import "./TodoItem.css";

const TodoItem = (props) => {
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={props.todo.done}
        onChange={() => props.handleChange(props.todo.id)}
      ></input>
      <p className={props.todo.done ? "done" : undefined}>
        {props.todo.description}
      </p>
    </li>
  );
};

export default TodoItem;
