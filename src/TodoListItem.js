import React from "react";
import style from "./TodoListItem.module.css";

let TodoListItem = function ({ id, item, onRemoveTodo, }) {
  return (
  <li className ={style.ListItem}>
      <span>{item.fields.Title}{" "}</span>
      <button className = {style.button} 
      onClick={() => onRemoveTodo(id)} type="button">
        Remove
      </button>{" "}
    </li>
  );
};

export default TodoListItem;