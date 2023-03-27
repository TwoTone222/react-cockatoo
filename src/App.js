import React from "react";
import TodoList from "./ToDoList";
import AddTodoForm from "./AddTodoForm";

const API_ENDPOINT = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default/`;

function App() {

  const [todoList, setTodoList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  //Below the todoList state, define a useEffect React hook with an empty dependency list
  React.useEffect(() => {
    fetch(`${API_ENDPOINT}`, {
      method:"GET", 
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`, },
    })
    .then((response) => response.json())
    .then((result) => {
      setTodoList(result.records);
      setIsLoading(false);
    });
  }, []);
    //Inside the data object, add a property todoList and set it's value to the initial/default list state (copy from useState hook)
 //Update the default state for todoList to be an empty Array


  React.useEffect(() => {
    if(!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, 
     [todoList, isLoading]);

  // This code creates a new array called newTodoList by filtering the existing
  // todoList array to remove the item with the given id. Then, it calls the
  // setTodoList state setter and passes the new newTodoList array as its argument
  // to update the state with the modified todoList.
  let removeTodo = function (id) {
    const newTodoList = todoList.filter((todo) => todo.id !== id); 
    //The filter method creates a new array with all the elements that 
    //pass the conditions specified by a given function and returns the new array.
    setTodoList(newTodoList);
  };

let addTodo = function (newTodo) {
  setTodoList([...todoList, newTodo]);
};
return (
  <>
    <h1>Todo List</h1>
    <AddTodoForm onAddTodo={addTodo} />
    {isLoading ? (
      <p>Loading...</p>
    ) : (<TodoList onRemoveTodo={removeTodo} todoList={todoList} />
    )}
    
  </>
);
};
console.log(process.env.REACT_APP_AIRTABLE_API_KEY);

export default App;