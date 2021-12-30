import "./ToDoListPage.css";

import {ToDoList, AddCategory } from "..";

const ToDoListPage = ({toDoList,setToDoList}) => {
  return (
    <div className="page">
      <div className="pageContainer">
      <AddCategory toDoList={toDoList} setToDoList={setToDoList}/>
      <ToDoList toDoList={toDoList} setToDoList={setToDoList} />
      </div>
    </div>
  
  );
};

export default ToDoListPage;