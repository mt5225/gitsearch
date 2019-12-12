import React, { Component } from "react";
import Counter from "./components/counter";
import GitUser from "./components/gituser";
import Dogshow from "./components/dogshow";
import HugeList from "./components/hugelist";

const App = () => {
  return (
    <div className="container">
      <HugeList />
    </div>
  );
};

export default App;
