const Todo = (props) => {
  return (
    <div>
      <h2> {props.tittle} </h2>
    </div>
  );
};
export default Todo;

// import React, { usesate } from "react";

// import Todo from "./31/Todo";
// import New_Todo from "./31/New_Todo";

// function App() {
//   //const [onClick, setState] = usesate("");

//   const haddleNew_Todo = (NewTodo) => {
//     console.log(NewTodo);
//     //  setState(NewTodo);
//   };
//   const data = "learn react.js";
//   return (
//     <div>
//       <New_Todo onClick={haddleNew_Todo} />

//       <Todo tittle={data} />
//       <h1>Welcome</h1>
//     </div>
//   );
// }

// export default App;
