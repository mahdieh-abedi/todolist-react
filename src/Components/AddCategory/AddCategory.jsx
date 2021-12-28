import "./AddCategory.css"

import { useState } from "react";

import { ClickAwayListener,TextField} from "@mui/material";

const AddCategory=()=>{
    const [open, setOpen] = useState(false);

    const handleClick = () => {
      setOpen((prev) => !prev);
    };
  
    const handleClickAway = () => {
      setOpen(false);
    }; 
    return(
        <ClickAwayListener
        mouseEvent="onMouseDown"
        touchEvent="onTouchStart"
        onClickAway={handleClickAway}
      >
        <div sx={{ position: "relative" }}>
          <button type="button" className="addCategoryBtn"onClick={handleClick}>
          <h3>Add New Category</h3>
          </button>
          {open ? (
            <div className="addFormBox">
              <TextField color="success" focused className="addFormItems"/>
              
            </div>
          ) : null}
        </div>
      </ClickAwayListener>  
    ) 
}
export default AddCategory