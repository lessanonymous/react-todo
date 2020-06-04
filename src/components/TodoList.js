import React from "react";
import "./TodoList.css";
import TodoItem from "./TodoItem";
import todosData from "../todosData";

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(id) {
    this.setState((prevState) => {
      const updatedTodos = prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      });
      return {
        todos: updatedTodos,
      };
    });
  }
  render() {
    const todoComponents = this.state.todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} handleChange={this.handleChange} />
    ));
    return <ul className="todo-list">{todoComponents}</ul>;
  }
}

export default TodoList;
