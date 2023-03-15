import React from "react";
import TodoList from "./ToDoList";
import AddTodoForm from "./AddTodoForm";

function App() {

  const [todoList, setTodoList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  //Below the todoList state, define a useEffect React hook with an empty dependency list
  React.useEffect(() => {
    // Inside the side-effect handler function, define a new Promise and pass
    // in a callback function with parameters resolve and reject
    new Promise((resolve, reject) => 
    //To mimic a loading delay, inside the callback function declare a timeout 
    //(hint: setTimeout method) with the following arguments:
 //callback: function with no parameters
 //delay time: 2000 milliseconds (2 seconds)
    setTimeout(
      () => resolve({data: {
        todoList: JSON.parse(localStorage.getItem("savedTodoList")) || [],
      }, 
      //Inside the timeout callback function, call the parameter resolve which is a callback function for when the 
      //Promise is successful and pass it an Object with property data as a nested empty Object
    }), 2000
    )
    ).then((result) => {
      setTodoList(result.data.todoList);
      setIsLoading(false);
    });
    //Inside the data object, add a property todoList and set it's value to the initial/default list state (copy from useState hook)
 //Update the default state for todoList to be an empty Array
  }, []);


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