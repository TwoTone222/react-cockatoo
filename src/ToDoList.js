import React from "react";
import TodoListItem from "./TodoListItem";

let TodoList = function ({ todoList, onRemoveTodo }) {
  // console.log(todoList);
  // console.log(onRemoveTodo);
  return (
    <div>
      <ul>
        {todoList.map((item) => (
          <TodoListItem key={item.id} id= {item.id} item={item} onRemoveTodo={onRemoveTodo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;