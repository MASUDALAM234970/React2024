import React from "react";

const Child = (props) => {
  const data = "I am Child Component159753";

  props.onChildData(data);
  return (
    <div>
      {/* <p>I am Child Component</p> */}
      <p>{props.data}</p>
    </div>
  );
};

export default Child;

// import React, { useState } from "react";
// import Child from "./32/SATET_LIFTING/Child";

// export default function App() {
//   const [childData, setChildData] = useState("");

//   const data = "I am parent Component";
//   const hadleChildDate = (childData) => {
//     console.log("App :" + childData);
//     setChildData(childData);
//   };
//   return (
//     <div>
//       <Child data={data} onChildData={hadleChildDate} />
//       <p> {childData} </p>
//     </div>
//   );
// }
