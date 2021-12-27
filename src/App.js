import "./App.css";

import { Data, ToDoList } from "./Components";
import { useState } from "react";

const App = () => {
  const [toDoList, setToDoList] = useState(Data);
  return (
    <div className="App">
      <ToDoList toDoList={toDoList} setToDoList={setToDoList} />
    </div>
  );
};

export default App;
