import { useEffect, useState } from "react";
import axios from "axios";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  const token = localStorage.getItem("token");

  const fetchTodos = async () => {
    const res = await axios.get("http://localhost:5000/api/todos", {
      headers: { Authorization: `Bearer ${token}` }
    });
    setTodos(res.data);
  };

  const addTodo = async () => {
    if (!title) return;
    await axios.post(
      "http://localhost:5000/api/todos",
      { title },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    fetchTodos();
    setTitle("");
  };

  const toggle = async (id, completed) => {
    await axios.put(
      `http://localhost:5000/api/todos/${id}`,
      { completed: !completed },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    fetchTodos();
  };

  const remove = async (id) => {
    await axios.delete(`http://localhost:5000/api/todos/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    fetchTodos();
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="container">
      <h2>Todo Manager</h2>

      <input
        placeholder="Enter todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>

      <div>
        {todos.map((t) => (
          <div key={t._id} className="todo-item">
            <span
              className={`todo-title ${t.completed ? "completed" : ""}`}
              onClick={() => toggle(t._id, t.completed)}
            >
              {t.title}
            </span>
            <button onClick={() => remove(t._id)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
