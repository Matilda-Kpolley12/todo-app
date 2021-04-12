import { useState, useEffect } from "react";
import "./Todo.css";

const fetchQuery = async ({ uri, method = "GET", body = null }) => {
  const response = await fetch(uri, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: body !== null ? JSON.stringify(body) : null,
  });
  const data = await response.json();
  return data;
};

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchQuery({ uri: "http://localhost:4000/todos" });
      setTodos(data.todos);
    };
    fetchData();
  }, [todos]);

  const submitHandler = async (e) => {
    e.preventDefault();

    const newTodo = {
      text: todo,
      completed: false,
    };

    const data = await fetchQuery({
      uri: "http://localhost:4000/todos",
      method: "POST",
      body: newTodo,
    });

    setTodos([...todos, data.todo.text]);
    // setTodo("");
  };

  const toggleCompleted = async (id) => {
    await fetchQuery(
      { uri: `http://localhost:4000/todos/${id}/toggle`, method: "PATCH" }
      // {
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // }
    );
    // const newTodos = todos.map((todo) => {
    //   if (todo._id === data._id) {
    //     return data;
    //   }
    //   return todo;
    // });
    // setTodos(newTodos);
  };

  const deleteTodo = async (id) => {
    await fetchQuery({ uri: `http://localhost:4000/todos/${id}`, method: "DELETE" });
  };

  const editTodo = async (id) => {
    const newTodos = todos.filter(todo => {
      return todo._id !== id;
    });
    setTodos(newTodos)
    // await fetchQuery({
    //   uri: `http://localhost:4000/todos/${id}`,
    //   method: "UPDATE",
      
    // });
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button>Add Todo</button>
      </form>

      <ul className="container">
        {todos.map((todo) => (
          <li key={todo._id} className="card">
            {todo.text}
            {/* {todo.text} */}
            <button onClick={() => toggleCompleted(todo._id)}>
              {todo.completed ? "Completed" : "Incomplete"}
            </button>
            <button onClick={() => editTodo(todo._id)}>Edit</button>
            <button onClick={() => deleteTodo(todo._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
