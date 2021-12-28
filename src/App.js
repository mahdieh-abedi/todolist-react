import "./App.css";

import React, { useState, useEffect } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Data, Menu, ToDoListPage, AboutUsPage, HomePage } from "./Components";

const App = () => {
  const [toDoList, setToDoList] = useState (Data, [], () => {
    const LocalData = localStorage.getItem("Data");
    return LocalData ? JSON.parse(LocalData) : Data;
  });

  useEffect(() => {
    document.title = "Weekly Planner";
    localStorage.setItem("Data", JSON.stringify(toDoList));
  }, [toDoList]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu/>}>
          <Route index element={<HomePage/>} />
          <Route
            path="ToDoListPage"
            element={
              <ToDoListPage toDoList={toDoList} setToDoList={setToDoList}/>
            }
          />
          <Route path="AboutUsPage" element={<AboutUsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
