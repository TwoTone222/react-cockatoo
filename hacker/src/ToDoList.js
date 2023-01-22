import React from "react";
import TodoListItem from "./TodoListItem";

const todoList = [
  {id: 1, title : "Review Road to React"},
  {id: 2, title: "Take notes"},
  {id: 3, title: "Submit Work"},
]

export default function todoList(){
  return(
    <ul>
      {todoList.map(todo => <TodoListItem key ={todo.id} todo={todo}/>)}
    </ul>
  )
}