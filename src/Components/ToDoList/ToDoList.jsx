import "./ToDoList.css";

import React, { useContext } from "react";

import {ToDoItems,AddNewItem,ToDoListContext,ToDoContextProvider} from "..";

import { FormGroup, Grid } from "@mui/material";

import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";

const ToDoList = () => {
  const{toDoList,setToDoList}=useContext(ToDoListContext)

  const handleDeleteCategory = (id) => {
    setToDoList(toDoList.filter(item=>item.listID!==id))
  };

  return (
    <ToDoContextProvider>
    <Grid container spacing={5} className="page">
      {toDoList.map((list) => (
        <Grid item xs={12} sm={6} md={4} key={list.listID} spacing={1}>
          <div className="listCard">
            <div className="header">
              <h3 className="headerTitle">{list.listName}</h3>
              <span>
                <DeleteOutlineRoundedIcon
                  onClick={() => handleDeleteCategory(list.listID)}
                />
              </span>
            </div>
            <FormGroup className="ItemContainer">
              <ToDoItems list={list}/>
            </FormGroup>
            <AddNewItem list={list}/>
          </div>
        </Grid>
      ))}
    </Grid>
    </ToDoContextProvider>
  );
};
export default ToDoList;
