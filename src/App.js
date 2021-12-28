import "./App.css";

import { Data, ToDoList, AddCategory } from "./Components";
import { useState } from "react";

const App = () => {
  const [toDoList, setToDoList] = useState(Data);

  return (
    <div className="App">
      <div className="pageContainer">
      <AddCategory />
      <ToDoList toDoList={toDoList} setToDoList={setToDoList} />
      </div>
    </div>
  );
};

export default App;
