import "./App.css";

import React from "react";
import { Content, Header } from "./components";

const App = (props) => {
  return (
    <div className="wrapper">
      <Header />
      <Content />
    </div>
  );
};

export default App;
