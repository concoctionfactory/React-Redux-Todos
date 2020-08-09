import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function Todos() {
  const todos = useSelector((store) => store.todos);
  const dispatch = useDispatch();
  const addTodo = (todo) => dispatch({ type: "ADD", payload: todo });
  const removeTodo = (id) => dispatch({ type: "REMOVE", payload: { id: id } });

  const [inputTodo, setInputTodo] = useState("");
  const handleAdd = (e) => {
    e.preventDefault();
    console.log("add", inputTodo);
    addTodo(inputTodo);
    setInputTodo("");
  };

  const handleRemove = (id) => {
    removeTodo(id);
    console.log("remove");
  };
  const handleChange = (e) => {
    setInputTodo(e.target.value);
  };
  return (
    <div>
      <form>
        <input
          type="text"
          name=""
          id="todo-input"
          onChange={handleChange}
          value={inputTodo}
        />
        <button onClick={handleAdd}>add</button>
      </form>

      {todos.map((t) => (
        <div key={t.id}>
          <p>{t.todo}</p>
          <button onClick={() => handleRemove(t.id)}>remove</button>
        </div>
      ))}
    </div>
  );
}

export default Todos;
