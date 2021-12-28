import "./ToDoListPage.css";

import {ToDoList, AddCategory , Menu } from "..";

const ToDoListPage = (props) => {
  return (
    <div className="page">
      <div className="pageContainer">
      <AddCategory />
      <ToDoList {...props} />
      </div>
    </div>
  
  );
};

export default ToDoListPage;