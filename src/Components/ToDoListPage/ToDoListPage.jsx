import "./ToDoListPage.css";

import { ToDoList, AddCategory } from "..";

import { useState } from "react";

const ToDoListPage = ({
  toDoList,
  setToDoList,
}) => {

  const [newCategory, setNewCategory] = useState({
    listID: "",
    listName: "",
    listItem: [],
  });
  
  return (
    <div className="page">
      <div className="pageContainer">
        <AddCategory
          toDoList={toDoList}
          setToDoList={setToDoList}
          newCategory={newCategory}
          setNewCategory={setNewCategory}
        />
        <ToDoList
          toDoList={toDoList}
          setToDoList={setToDoList}
          setNewCategory={setNewCategory}
        />
      </div>
    </div>
  );
};

export default ToDoListPage;
