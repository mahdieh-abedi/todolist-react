import "./ToDoListPage.css";

import { ToDoList, AddCategory,TodoContextProvider } from "..";

const ToDoListPage = () => {
  return (
    <TodoContextProvider>
    <div className="page">
      <div className="pageContainer">
        <AddCategory/>
        <ToDoList/>
      </div>
    </div>
    </TodoContextProvider>
  );
};

export default ToDoListPage;
