import "./ToDoList.css";

import { FormGroup, Checkbox, Grid } from "@mui/material";

import RadioButtonCheckedRoundedIcon from "@mui/icons-material/RadioButtonCheckedRounded";
import RadioButtonUncheckedRoundedIcon from "@mui/icons-material/RadioButtonUncheckedRounded";

const ToDoList = ({ toDoList, setToDoList }) => {
  return (
    <Grid container spacing={5} className="page">
      {toDoList.map((list) => (
        <Grid item xs={12} sm={6} md={4} key={list.listID} spacing={1}>
          <div className="listCard">
            <div className="listHeader">
              <h3>{list.listName}</h3>
            </div>
            <FormGroup className="listItems">
              {list.listItem.map((item) => (
                <div key={list.listID * 10 + item.itemID}>
                  <Checkbox
                    icon={<RadioButtonUncheckedRoundedIcon />}
                    checkedIcon={
                      <RadioButtonCheckedRoundedIcon color="success" />
                    }
                  />
                  <label>
                   {item.itemTitle}
                  </label>
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
