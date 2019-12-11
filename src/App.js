import React, { Component } from "react";
import Counter from "./components/counter";
import GitUser from "./components/gituser";

const App = () => {
  return (
    <div className="container">
      <Counter />
      <GitUser />
    </div>
  );
};

export default App;
