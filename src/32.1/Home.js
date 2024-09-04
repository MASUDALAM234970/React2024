import React, { useState } from "react";
import Todos from "./Todos";
import NewTodo from "./NewTodo";

const dummyTodos = ["todo1", "todo2"];
function Home() {
  const [todos, setTodo] = useState(dummyTodos);

  const handleNewTodo = (NewTodo) => {
    console.log(NewTodo);
    setTodo([...todos, NewTodo]);
  };
  return (
    <div>
      <NewTodo onTodo={handleNewTodo} />
      <Todos todos={todos} />;
    </div>
  );
}
export default Home;
