import React, { useRef } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./Addtask.module.css";

const AddTask = (props) => {
  const inputTaskRef = useRef();
  // const inputDateRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      inputTaskRef.current.value.trim().length > 0
      // inputDateRef.current.value.trim().length > 0
    ) {
      const inputtask = inputTaskRef.current.value;
      //const inputdate = inputDateRef.current.value;

      const newtask = {
        title: inputtask,
      };

      //console.log(`${task} before ${date}`);
      props.newTask(newtask);
      inputTaskRef.current.value = "";
      // inputDateRef.current.value = "";
    }
  };

  return (
    <React.Fragment>
      <div className={classes.taskTitle}>
        <p>Todo List </p>
      </div>
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="task">Title</label>
            <input id="task" type="text" ref={inputTaskRef} />
          </div>
          {/* <div>
            <label htmlFor="date">Date</label>
            <input id="date" type="date" ref={inputDateRef} />
          </div> */}
          <Button />
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddTask;
