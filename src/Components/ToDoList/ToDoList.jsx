import { FormGroup, Checkbox, Grid } from "@mui/material";
import { Row, Col } from "react-bootstrap";

const ToDoList = ({ toDoList, setToDoList }) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      spacing={4}
    >
      {toDoList.map((list) => (
        <Grid item xs={12} sm={6} md={4} key={list.listID}>
          <h3>{list.listName}</h3>
          <FormGroup>
            {list.listItem.map((item) => (
              <div key={list.listID * 10 + item.itemID}>
                <Checkbox color="success" />
                <label>{item.itemTitle}</label>
              </div>
            ))}
          </FormGroup>
        </Grid>
      ))}
    </Grid>
  );
};
export default ToDoList;
