import React from "react";
import Todo from "./Todo";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App" style={{backgroundImage: "linear-gradient(to right, #4880EC, #019CAD)", height:"100vh"}}>
      <Todo />
    </div>
  );
}

export default App;
