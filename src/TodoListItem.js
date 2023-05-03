import React from "react";
import style from "./TodoListItem.module.css";

let TodoListItem = function ({ item, onRemoveTodo, }) {
  return (
  <li className ={style.ListItem}>
      {item.fields.Title}{" "}
      <button className = {style.button} 
      onClick={() => onRemoveTodo(item)} type="button">
        Remove
      </button>{" "}
    </li>
  );
};

export default TodoListItem;