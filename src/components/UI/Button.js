import React from "react";
import classes from "./Button.module.css";
const Button = () => {
  return (
    <button type="submit" className={`${classes.button}`}>
      Add Task
    </button>
  );
};

export default Button;
