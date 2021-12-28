import "./App.css";

import { Data, ToDoList, AddCategory,Menu } from "./Components";
import { useState } from "react";

const App = () => {
  const [toDoList, setToDoList] = useState(Data);

  return (
    <div className="App">
      <Menu/>
      <div className="pageContainer">
      <AddCategory />
      <ToDoList toDoList={toDoList} setToDoList={setToDoList} />
      </div>
    </div>
  );
};

export default App;
