import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  const handleDelete = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem key={index} todo={todo} handleDelete={handleDelete} index={index} />
        ))}
      </ul>
    </div>
  );
}

function TodoItem({ todo, handleDelete, index }) {
  return (
    <li>
      {todo} <button onClick={() => handleDelete(index)}>Delete</button>
    </li>
  );
}

export default TodoList;