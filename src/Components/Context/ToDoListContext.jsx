import React, { useState, createContext,useEffect } from "react";
import {Data} from "..";

export const TodoContext = createContext({toDoList:[] , setToDoList:(input)=>{}});

const TodoContextProvider = ({ children }) => {
  const [toDoList, setToDoList] = useState(
    JSON.parse(localStorage.getItem("Data")) ||Data
  );
  useEffect(() => {
    document.title = "Weekly Planner";
    localStorage.setItem("Data", JSON.stringify(toDoList));
  }, [toDoList]);

  return (
    <TodoContext.Provider value={{toDoList,setToDoList}}>{children}</TodoContext.Provider>
  );
};
export default TodoContextProvider;
