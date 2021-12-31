import "./App.css";

import React, { useState, useEffect } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Data, Menu, ToDoListPage, HomePage } from "./Components";

const App = () => {
  const [toDoList, setToDoList] = useState(
    JSON.parse(localStorage.getItem("Data")) || Data
  );

  const [newCategory, setNewCategory] = useState({
    listID: "",
    listName: "",
    listItem: [],
  });

  useEffect(() => {
    document.title = "Weekly Planner";
    localStorage.setItem("Data", JSON.stringify(toDoList));
  }, [toDoList]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />}>
          <Route index element={<HomePage />} />
          <Route
            path="ToDoListPage"
            element={
              <ToDoListPage
                toDoList={toDoList}
                setToDoList={setToDoList}
                newCategory={newCategory}
                setNewCategory={setNewCategory}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
