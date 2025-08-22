import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { addTodo, getTodos } from "../services/TodoService";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await getTodos();
        setTodos(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTodos();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    try {
      const res = await addTodo({
        title: newTodo,
      });
      setTodos([res.data, ...todos]);
      setNewTodo("");
    } catch (error) {
      console.log(error);
      alert("Faild to add!");
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
