import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./Tasks.module.css";

const Tasks = (props) => {
  //const [todoList, setTodoList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setTitle] = useState("");
  const [newId, setId] = useState("");

  const taskDoneHandler = (event) => {
    // console.log(event.target.id);
    props.taskFinished(event.target.id);
  };

  const taskEditHandler = (event) => {
    setId(event.target.id);
    setIsEditing(true);
    // console.log(newId);
    props.taskList.map((item) => {
      if (event.target.id === item.id) {
        setTitle(item.title);
      }
    });
  };

  const taskUpdateHandler = (event) => {
    props.updatedTask(event.target.id, updatedTitle);
    setIsEditing(false);
  };

  const updatedTaskHandler = (event) => {
    //console.log(event.target.id);
    setTitle(event.target.value);
    console.log(event.target.value);
  };
  //console.log(updatedTitle);
  return (
    <Card className={classes.users}>
      <ul>
        {props.taskList.length > 0 ? (
          props.taskList.map((task) => (
            <li key={task.id}>
              {/* <TaskDate date={task.date} /> */}
              <div
                className={classes.taskTitle}
                // onClick={strikeHandler}
              >
                {isEditing && newId === task.id ? (
                  <input
                    onChange={updatedTaskHandler}
                    //placeholder={task.title}
                    id={task.id}
                    className={classes.updatedTitle}
                    value={updatedTitle}
                  />
                ) : (
                  task.title
                )}
              </div>

              <button
                className={classes.button}
                onClick={taskDoneHandler}
                id={task.id}
              >
                Done
              </button>
              {isEditing && newId === task.id ? (
                <button
                  className={classes.button}
                  onClick={taskUpdateHandler}
                  id={task.id}
                >
                  Update Task
                </button>
              ) : (
                <button
                  className={classes.button}
                  onClick={taskEditHandler}
                  id={task.id}
                >
                  Edit Task
                </button>
              )}
            </li>
          ))
        ) : (
          <h2 className={classes.noTasks}>No Tasks to show </h2>
        )}
      </ul>
    </Card>
  );
};

export default Tasks;
