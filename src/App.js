import React, { useState } from "react";
import AddTask from "./components/NewTask/AddTask";
import Tasks from "./components/TaskList/Tasks";
import "./App.css";
function App() {
  const [taskList, setNewTask] = useState([]);

  const newTaskHandler = (newtask) => {
    //console.log(newtask);

    setNewTask((prevList) => {
      return [{ ...newtask, id: Math.random().toString() }, ...prevList];
    });
    localStorage.setItem("title", newtask.title);
    localStorage.setItem("date", newtask.date);
  };

  const taskFinishedHandler = (taskId) => {
    // console.log(taskId);
    const demoList = taskList.filter((item) => {
      if (item.id !== taskId) {
        return item;
      }
    });
    setNewTask(demoList);
  };

  const updatedTaskHandler = (taskId, updatedTitle) => {
    // console.log(updatedTitle);
    setNewTask(
      taskList.map((item) => {
        if (item.id === taskId) {
          return { ...item, title: updatedTitle };
        } else {
          return { ...item };
        }
      })
    );
  };

  // console.log(taskList);
  return (
    <div className="wrapper">
      <AddTask newTask={newTaskHandler} />
      <Tasks
        taskList={taskList}
        // taskDone={taskDoneHandler}
        taskFinished={taskFinishedHandler}
        // taskEdit={taskEditHandler}
        updatedTask={updatedTaskHandler}
      />
    </div>
  );
}

export default App;
