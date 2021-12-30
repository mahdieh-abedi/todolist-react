import "./AddNewItem.css"

import {TextField} from "@mui/material";


import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { ToDoList } from "..";
import { useState } from "react";

const AddNewItem=({toDoList,setToDoList})=>{
    const[newToDo,setNewToDo]= useState({
        itemID: "",
        status: false,
        itemTitle: "",
      })

    return(
        <div className="AddToDoItem">
        <AddCircleOutlineIcon color="success" fontSize="large"/>
        <TextField id="standard-basic" label="Add New Item" variant="standard"   onChange={handleAddItem}  value={ToDoList.listItem}/>
        </div> 
    ) 
}
export default AddNewItem