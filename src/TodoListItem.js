import React from "react";
import style from "./TodoListItem.module.css";

let TodoListItem = function ({ id, title, onRemoveTodo, }) {
  return (
  <li className ={style.ListItem}>
    <body className={style.body}></body>
      <nav className={style.nav}></nav>
      <span>{title} </span>
      <button className = {style.button} 
      onClick={() => onRemoveTodo(id)} type="button">
        Remove
      </button>
    </li>
  );
};

export default TodoListItem;