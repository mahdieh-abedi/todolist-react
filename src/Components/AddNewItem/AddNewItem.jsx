import "./AddNewItem.css";

import { useState,useContext} from "react";

import {TodoContext} from "..";

import { Form } from "react-bootstrap";

import { TextField } from "@mui/material";

const AddNewItem = ({list }) => {
  const{toDoList,setToDoList}=useContext(TodoContext)

  const [newItem, setNewItem] = useState({
    status: false,
    itemTitle: "",
  });
  const handleAddItem = () => {
    setToDoList(
      toDoList.map((item) =>
        item.listID === list.listID
          ? {
              ...item,
              listItem: [
                ...item.listItem,
                {itemID: Math.floor(Math.random() * 10000),...newItem},
              ],
            }
          : item
      )
    );
    setNewItem({
      status: false,
      itemTitle: "",
    });
  };
  const handleChangeItem = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  return (
    <div className="AddToDoItem">
      <Form onSubmit={handleAddItem}>
        <TextField
          id="standard-basic"
          label="Add New Item"
          variant="standard"
          name={"itemTitle"}
          value={newItem.itemTitle}
          onChange={handleChangeItem}
        />
      </Form>
    </div>
  );
};
export default AddNewItem;
