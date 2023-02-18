import React from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);

  };
  
 
  return (
    <div>
        <h1>Todo List</h1>
         <AddTodoForm onAddTodo={addTodo} />
        <TodoList todoList={todoList} />
    </div>
  );
}


export default App;