import "./AddCategory.css";

import { Form } from "react-bootstrap";

import { useState, useContext } from "react";

import { TodoContext} from "..";

import { ClickAwayListener, TextField } from "@mui/material";

const AddCategory = () => {
  const { toDoList, setToDoList } = useContext(TodoContext);

  const [newCategory, setNewCategory] = useState({
    listID: "",
    listName: "",
    listItem: [],
  });
  
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const handleAddCategory = (e) => {
    e.preventDefault();
    setToDoList([
      ...toDoList,
      {
        listID: Math.floor(Math.random() * 10000),
        ...newCategory,
      },
    ]);
    setNewCategory({
      listName: "",
      listItem: [],
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCategory({ ...newCategory, [name]: value });
  };
  return (
      <ClickAwayListener
        mouseEvent="onMouseDown"
        touchEvent="onTouchStart"
        onClickAway={handleClickAway}
      >
        <div sx={{ position: "relative" }}>
          <button
            type="button"
            className="addCategoryBtn"
            onClick={handleClick}
          >
            <h3>Add New Category</h3>
          </button>
          {open ? (
            <div className="addFormBox">
              <Form onSubmit={handleAddCategory}>
                <TextField
                  color="success"
                  focused
                  className="addFormItems"
                  type="text"
                  name={"listName"}
                  value={newCategory.listName}
                  onChange={handleChange}
                />
              </Form>
            </div>
          ) : null}
        </div>
      </ClickAwayListener>
  );
};
export default AddCategory;
