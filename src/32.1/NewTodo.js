import React, { useState } from "react";

const NewTodo = (props) => {
  const [todo, setTodo] = useState("");
  const handleChage = (event) => {
    setTodo(event.target.value);
    //console.log(setTodo);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.onTodo(todo);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo"> NewTodo </label>
      <input
        type="text"
        id="todo"
        name="todo"
        value={todo}
        onChange={handleChage}
      />
      <button> Add Todo </button>
    </form>
  );
};

export default NewTodo;
