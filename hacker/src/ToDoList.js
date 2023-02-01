import React from "react";

const todoList = [
  {id: 1, title : "Review Road to React"},
  {id: 2, title: "Take notes"},
  {id: 3, title: "Submit Work"},
]

function TodoList(){
  return(
    <ul>
      {todoList.map(function (todoItem) {
        return <li key={todoItem.id}>{todoItem.title}</li>;
      })}
    </ul>
  )
}

export default TodoList;