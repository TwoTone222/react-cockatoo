import React from "react";
import TodoList from "./ToDoList";
import style from "./TodoListItem.module.css";


let TodoListItem = function ({ id, item, onRemoveTodo }) {
  if (!item || !item.fields) {
    // Handle the case when 'item' or 'item.fields' is undefined
    return null; // Or display an appropriate message or loading indicator
  }

  return (
    <li className={style.ListItem}>
      <span>{item.fields.Title}{" "}</span>
      <button
        className={style.button}
        onClick={() => onRemoveTodo(id)}
        type="button"
      >
        Remove
      </button>{" "}
    </li>
  );
};

export default TodoListItem;
