import "./ToDoList.css";

import { FormGroup, Checkbox, Grid } from "@mui/material";

import RadioButtonCheckedRoundedIcon from "@mui/icons-material/RadioButtonCheckedRounded";
import RadioButtonUncheckedRoundedIcon from "@mui/icons-material/RadioButtonUncheckedRounded";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";

const ToDoList = ({ toDoList, setToDoList }) => {
  const handleDeleteCategory=(id)=>{
    setToDoList(toDoList.filter(item=>item.listID!==id))

  }

  return (
    <Grid container spacing={5} className="page">
      {toDoList.map((list) => (
        <Grid item xs={12} sm={6} md={4} key={list.listID} spacing={1}>
          <div className="listCard">
            <div className="header">
              <h3 className="headerTitle">{list.listName}</h3>
              <span>
                <DeleteOutlineRoundedIcon onClick={()=>handleDeleteCategory(list.listID)}/>
              </span>
            </div>
            <FormGroup>
              {list.listItem.map((item) => (
                <div className="listItems">
                  <div key={list.listID * 10 + item.itemID}>
                    <Checkbox
                      icon={
                        <RadioButtonUncheckedRoundedIcon fontSize="large" />
                      }
                      checkedIcon={
                        <RadioButtonCheckedRoundedIcon
                          color="success"
                          fontSize="large"
                        />
                      }
                    />
                    <label>{item.itemTitle}</label>
                  </div>
                  <span>
                    <HighlightOffRoundedIcon color="action" fontSize="large" />
                  </span>
                </div>
              ))}
            </FormGroup>
          </div>
        </Grid>
      ))}
    </Grid>
  );
};
export default ToDoList;
