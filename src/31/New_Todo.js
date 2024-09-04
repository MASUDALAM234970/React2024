import React from "react";

const New_Todo = (props) => {
  props.onClick({ title: "I am new ToDO" });
  return <div>New_Todo</div>;
};

export default New_Todo;
