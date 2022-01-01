import React, { useState, createContext,useEffect } from "react";
import {Data} from "..";

export const ToDoListContext = createContext({toDoList:[] , setToDoList:(input)=>{}});

const ToDoListContextProvider = ({ children }) => {
  const [toDoList, setToDoList] = useState(
    JSON.parse(localStorage.getItem("Data")) ||Data
  );
  useEffect(() => {
    document.title = "Weekly Planner";
    localStorage.setItem("Data", JSON.stringify(toDoList));
  }, [toDoList]);

  return (
    <ToDoListContext.Provider value={{toDoList,setToDoList}}>{children}</ToDoListContext.Provider>
  );
};
export default ToDoListContextProvider;
