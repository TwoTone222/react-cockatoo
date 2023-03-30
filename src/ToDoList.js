import React from "react";
import TodoListItem from "./TodoListItem";

let TodoList = function ({ todoList, onRemoveTodo }) {
  return (
    <ul>
      {todoList.map(function (todo) {
        return (
          <TodoListItem
            onRemoveTodo={onRemoveTodo}
            key={todo.id}
            id={todo.id}
            //Update the todo item title to reference the new object format (hint: todo.fields.Title)
            title={todo.fields.title}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;