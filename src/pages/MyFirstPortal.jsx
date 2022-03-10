import React from "react";
import ReactDOM from "react-dom";

const MyFirstPortal = () => {
  return ReactDOM.createPortal(
    <div>
      <h1>My first Portal</h1>
    </div>,
    document.getElementById("root1")
  );
};

export default MyFirstPortal;
